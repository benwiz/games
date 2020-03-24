extern crate env_logger;
/// WebSocket server using trait objects to route
/// to an infinitely extensible number of handlers
extern crate ws;
// extern crate serde;
// extern crate serde_json;

use std::str;
use std::thread;
use std::sync::Arc;
use uuid::Uuid;
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
- Endpoint for pinging connection so that front end can display a "connected" symbol

 */

#[derive(Serialize, Deserialize)]
struct User {
    name: String,
}

#[derive(Serialize, Deserialize)]
struct UserEvent {
    event: String,
    user: User,
}

#[derive(Serialize, Deserialize)]
struct Chat {
    user: String,
    message: String,
}


#[derive(Serialize, Deserialize)]
struct Chats {
    chats: Vec<String>,
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
            let value: User = bincode::deserialize(&v).unwrap();
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
                    let mut events = db_clone.watch_prefix("user/");

                    for event in events {
                        let r = match event {
                            Event::Insert(k, v) => {
                                let user: User = serde_json::from_slice(&v).unwrap();
                                let user_event = UserEvent {
                                    event: "create".to_owned(),
                                    user: user,
                                };
                                serde_json::to_string(&user_event).unwrap()
                            },
                            Event::Remove(k) => {
                                // TODO test this it is entirely untested
                                let key = str::from_utf8(&k).unwrap().to_string();
                                println!("delete event: {:?}", k);
                                let user_event = UserEvent {
                                    event: "delete".to_owned(),
                                    user: User {name: key}
                                };
                                serde_json::to_string(&user_event).unwrap()
                            }
                        };

                        out_clone.send(r);
                    }
                });

                self.inner = Box::new(move |msg: ws::Message| {
                    let user: User = serde_json::from_str(&msg.to_string()).unwrap();
                    println!("Name: {}", user.name);

                    let k = format!("user/{}", user.name);
                    let v = bincode::serialize(&user).unwrap();
                    db.insert(&k, v);

                    let r = WsResponse { status: 200, message: "ok".to_owned() };
                    let res = serde_json::to_string(&r).unwrap();
                    out.send(res)
                })
            }

            "/chat" => {
                // let db_clone = db.clone();
                // let out_clone = out.clone();
                // thread::spawn(move || {
                //     let mut events = db_clone.watch_prefix("chat/");

                //     for event in events {
                //         match event {
                //             Event::Insert(k, v) => {
                //                 let chat: Chat = serde_json::from_slice(&v).unwrap();
                //                 let r = serde_json::to_string(&chat).unwrap();
                //                 out_clone.send(r);
                //             },
                //             Event::Remove(k) => {}
                //         };
                //     }
                // });

                self.inner = Box::new(move |msg: ws::Message| {
                    let chat: Chat = serde_json::from_str(&msg.to_string()).unwrap();

                    // Add chat
                    let k = format!("chat/{}", Uuid::new_v4().to_hyphenated());
                    let v = bincode::serialize(&chat).unwrap();
                    println!("{}: {} \"{}\" ", k, chat.user, chat.message);
                    db.insert(&k, v);

                    // Update chats list
                    let chats_k = "chats";
                    let chats_encoded: Vec<u8> = db.get(chats_k).unwrap().unwrap_or(IVec::from(vec![])).to_vec(); // NOTE i needed some default. I can probably do this better.
                    let mut chats: Chats = match chats_encoded.len() {
                        0 => Chats{chats: vec![]},
                        _ => bincode::deserialize(&chats_encoded[..]).unwrap(),
                    };
                    chats.chats.insert(0, k.clone());
                    let max_len = 2;
                    let remove_ids: Vec<String> = match chats.chats.len() {
                        l if l > max_len => chats.chats.drain(max_len..).collect(), // truncate
                        _ => vec![],
                    };
                    let chats_v: Vec<u8> = bincode::serialize(&chats).unwrap();
                    db.insert(&chats_k, chats_v);

                    // TODO test this (I have no confirmed this yet). Can test using subscriber.
                    // Remove chat records no longer in chat list
                    for chat_id in remove_ids {
                        db.remove(&k);
                    }

                    let r = WsResponse { status: 200, message: "ok".to_owned() };
                    let res = serde_json::to_string(&r).unwrap();
                    out.send(res)
                })
            }

            // Use the default child handler, NotFound
            _ => (),
        }

        // Delegate to the child handler
        self.inner.on_request(req)
    }

    //
    // Pass through any other methods that should be delegated to the child.
    //
    fn on_shutdown(&mut self) {
        self.inner.on_shutdown()
    }

    fn on_open(&mut self, shake: ws::Handshake) -> ws::Result<()> {
        match shake.request.resource() {
            "/users" => {
                let users: Vec<User> = all_users(self.db.clone());
                let r = serde_json::to_string(&users).unwrap();
                self.sender.send(r);
            }
            "/chat" => {
                let chats_encoded: Vec<u8> = self.db.get("chats").unwrap().unwrap_or(IVec::from(vec![])).to_vec(); // NOTE i needed some default. I can probably do this better.
                let chats: Chats = match chats_encoded.len() {
                    0 => Chats{chats: vec![]},
                    _ => bincode::deserialize(&chats_encoded[..]).unwrap(),
                };
                let r = serde_json::to_string(&chats).unwrap();
                self.sender.send(r);
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
