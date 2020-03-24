extern crate env_logger;
/// WebSocket server using trait objects to route
/// to an infinitely extensible number of handlers
extern crate ws;
// extern crate serde;
// extern crate serde_json;

use std::str;
use std::thread;
use std::sync::Arc;
use serde::{Deserialize, Serialize};
// use serde_json::Result;
use sled::{Config, Event, IVec, Db};

/*

Some notes about the general architecture:
- Websockets with route
- Each connection is for a single route
- Each (routed) connection spawns a thread that listens for changes to the datastore and pushes updates to the client.\

- Currently I'm sending the entire users list each time there is an update. Instead, I should send the whole list
  when the connection is created then send just the updates later.

 */

/* TO DO

- Clean database on boot
- Eventually, add a last-touched date to each record and purge records that haven't been touched in 24 hours.

*/

#[derive(Serialize, Deserialize)]
struct User {
    name: String,
}

#[derive(Serialize, Deserialize)]
struct Chat {
    user: String,
    message: String,
}


#[derive(Serialize, Deserialize)]
struct Chats {
    chats: Vec<Chat>,
}

#[derive(Serialize, Deserialize)]
struct WsResponse {
    status: i32,
    message: String,
}

fn all_users(db: Arc<Db>) -> Vec<User> {
    let mut scan = db.scan_prefix("user/");
    scan.map(
        |v|
        {
            let data = v.unwrap();
            let k = IVec::from(data.0);
            let key = &str::from_utf8(&k).unwrap();
            let v = IVec::from(data.1);
            let value: User = serde_json::from_slice(&v).unwrap();
            // println!("k: {}, v: {}", key, value.name);
            value
        }
    ).collect()
}

// A WebSocket handler that routes connections to different boxed handlers by resource
struct Router {
    sender: ws::Sender,
    inner: Box<dyn ws::Handler>,
    db: Arc<Db>,
}

impl ws::Handler for Router {
    fn on_request(&mut self, req: &ws::Request) -> ws::Result<ws::Response> {
        println!("route: {}", req.resource());

        // Clone the sender and db so that we can move into the child handler
        let out = self.sender.clone();
        let db = self.db.clone();

        match req.resource() {
            "/echo" => self.inner = Box::new(Echo { ws: out }),

            "/users" => {
                let db_clone = db.clone();
                let out_clone = out.clone();
                thread::spawn(move || {
                    let prefix = "user/";
                    let mut events = db_clone.watch_prefix(prefix);

                    for event in events {
                        let users: Vec<User> = all_users(db_clone.clone());
                        let users_response = serde_json::to_string(&users).unwrap();
                        // println!("users: {}", users_response);
                        out_clone.send(users_response);

                        // TODO send just updates
                        // match event {
                        //     Event::Insert(k, v) => {
                        //         let key = &str::from_utf8(&k).unwrap();
                        //         let user: User = serde_json::from_slice(&v).unwrap();
                        //         println!("insert event: {:?} {:?}", key, user.name);
                        //     },
                        //     Event::Remove(k) => {
                        //         // printf!("delete event: {}", k);
                        //     }
                        // }
                    }
                });

                self.inner = Box::new(move |msg: ws::Message| {
                    let user: User = serde_json::from_str(&msg.to_string()).unwrap();
                    println!("Name: {}", user.name);

                    let k = format!("user/{}", user.name);
                    let v = serde_json::to_vec(&user).unwrap();

                    // TODO instead of using insert, use upsert or compare_and_swap
                    db.insert(&k, v); // TODO I guess handle error by sending message to client if error?

                    let r = WsResponse { status: 200, message: "ok".to_owned() };
                    let res = serde_json::to_string(&r).unwrap();
                    out.send(res)
                })
            }

            "/chat" => {
                // let db_clone = db.clone();
                // let out_clone = out.clone();
                // thread::spawn(move || {
                //     let prefix = "chat";
                //     let mut events = db_clone.watch_prefix(prefix);

                //     for event in events {
                //         let users: Vec<User> = all_users(db_clone.clone());
                //         let users_response = serde_json::to_string(&users).unwrap();
                //         // println!("users: {}", users_response);
                //         out_clone.send(users_response);

                //                     println!("json chats: {:?}", serde_json::to_string(&chats).unwrap());
                // the above line is what i need to craft the message

                //         // TODO talk to brendan and send just updates
                //         // match event {
                //         //     Event::Insert(k, v) => {
                //         //         let key = &str::from_utf8(&k).unwrap();
                //         //         let user: User = serde_json::from_slice(&v).unwrap();
                //         //         println!("insert event: {:?} {:?}", key, user.name);
                //         //     },
                //         //     Event::Remove(k) => {
                //         //         // printf!("delete event: {}", k);
                //         //     }
                //         // }
                //     }
                // });

                self.inner = Box::new(move |msg: ws::Message| {
                    let chat: Chat = serde_json::from_str(&msg.to_string()).unwrap();
                    println!("{}: {}", chat.user, chat.message);

                    let k = "chat";

                    let chats_encoded: Vec<u8> = db.get(k).unwrap().unwrap_or(IVec::from(vec![])).to_vec(); // NOTE i needed some default. I can probably do this better.
                    let mut chats: Chats = match chats_encoded.len() {
                        0 => Chats{chats: vec![]},
                        _ => bincode::deserialize(&chats_encoded[..]).unwrap(),
                    };
                    chats.chats.push(chat);

                    // TODO instead of using insert, use upsert or compare_and_swap
                    let v: Vec<u8> = bincode::serialize(&chats).unwrap();
                    db.insert(&k, v); // TODO I guess handle error by sending message to client if error?

                    let r = WsResponse { status: 200, message: "ok".to_owned() };
                    let res = serde_json::to_string(&r).unwrap();
                    out.send(res)
                })
            }

             // // Data handler (this will be useful for getting up to date list of users and games)
            // "/data/one" => {
            //     self.inner = Box::new(Data {
            //         ws: out,
            //         data: vec!["one", "two", "three", "four", "five"],
            //     })
            // }

            // Use the default child handler, NotFound
            _ => (),
        }

        // Delegate to the child handler
        self.inner.on_request(req)
    }

    // Pass through any other methods that should be delegated to the child.
    //
    // You could probably use a macro for this if you have many different
    // routers or were building some sort of routing framework.

    fn on_shutdown(&mut self) {
        self.inner.on_shutdown()
    }

    fn on_open(&mut self, shake: ws::Handshake) -> ws::Result<()> {
        // TODO need to match and only do appropriate
        match shake.request.resource() {
            "/users" => {
                let users: Vec<User> = all_users(self.db.clone());
                let users_response = serde_json::to_string(&users).unwrap();
                self.sender.send(users_response);
            }
            "/chat" => {
                // let users: Vec<User> = all_users(self.db.clone());
                // let users_response = serde_json::to_string(&users).unwrap();
                // self.sender.send(users_response);
            }
            _ => {}
        }

        self.inner.on_open(shake)
    }

    fn on_message(&mut self, msg: ws::Message) -> ws::Result<()> {
        self.inner.on_message(msg)
    }

    fn on_close(&mut self, code: ws::CloseCode, reason: &str) {
        self.inner.on_close(code, reason)
    }

    fn on_error(&mut self, err: ws::Error) {
        self.inner.on_error(err);
    }
}

// This handler returns a 404 response to all handshake requests
struct NotFound;

impl ws::Handler for NotFound {
    fn on_request(&mut self, req: &ws::Request) -> ws::Result<ws::Response> {
        // This handler responds to all requests with a 404
        let mut res = ws::Response::from_request(req)?;
        res.set_status(404);
        res.set_reason("Not Found");
        Ok(res)
    }
}

// This handler simply echoes all messages back to the client
struct Echo {
    ws: ws::Sender,
}

impl ws::Handler for Echo {
    fn on_message(&mut self, msg: ws::Message) -> ws::Result<()> {
        println!("Echo handler received a message: {}", msg);
        self.ws.send(msg)
    }
}

// This handler sends some data to the client and then terminates the connection on the first
// message received, presumably confirming receipt of the data
struct Data {
    ws: ws::Sender,
    data: Vec<&'static str>,
}

impl ws::Handler for Data {
    fn on_open(&mut self, _: ws::Handshake) -> ws::Result<()> {
        for msg in &self.data {
            self.ws.send(*msg)?
        }
        Ok(())
    }

    fn on_message(&mut self, msg: ws::Message) -> ws::Result<()> {
        println!("Data handler received a message: {}", msg);
        println!("Data handler going down.");
        self.ws.close(ws::CloseCode::Normal)
    }
}

fn main() {
    env_logger::init();

    let db = Arc::new(sled::open("game_db").expect("Sled must start ok."));

    // Listen on an address and call the closure for each connection
    if let Err(error) = ws::listen("0.0.0.0:3012", |out| {
        Router {
            sender: out,
            inner: Box::new(NotFound), // Default to returning a 404 when the route doesn't match. You could default to any handler here.
            db: db.clone(),
        }
    }) {
        // Inform the user of failure
        println!("Failed to create WebSocket due to error: {:?}", error);
    }
}
