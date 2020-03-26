extern crate mio_extras;
extern crate time;
extern crate ws;

use std::str;
use std::thread;
use std::sync::Arc;
use uuid::Uuid;
use serde::{Deserialize, Serialize};
use serde_json::{Value};
use sled::{Event, IVec, Db};
// use mio_extras::timer::Timeout;
// use ws::util::Token;

// TODO
// Rename server.ws to server.out
// chat struct requires a User
// rooms route


// const PING: Token = Token(1);
// const EXPIRE: Token = Token(2);
// const PING_TIMEOUT: u64 = 5_000;
// const EXPIRE_TIMEOUT: u64 = 30_000;

struct Server {
    id: Uuid,
    ws: ws::Sender,
    db: Arc<Db>,
    // ping_timeout: Option<Timeout>,
    // expire_timeout: Option<Timeout>,
}

#[derive(Serialize, Deserialize)]
struct Message {
    route: String,
    event: String,
    body: Value,
}

#[derive(Serialize, Deserialize)]
struct Id {
    id: String,
}

#[derive(Serialize, Deserialize)]
struct User {
    id: String,
    name: String,
}

#[derive(Serialize, Deserialize)]
struct Chat {
    // TODO bring back user
    message: String,
}

#[derive(Serialize, Deserialize)]
struct Chats {
    chats: Vec<String>,
}

fn all_users(db: Arc<Db>) -> Vec<User> {
    let scan = db.scan_prefix("user/");
    scan.map(
        |v|
        {
            let data = v.unwrap();
            // let k = IVec::from(data.0);
            // let key = &str::from_utf8(&k).unwrap();
            let v = IVec::from(data.1);
            let value: User = bincode::deserialize(&v).unwrap();
            // println!("k: {}, v: {}", key, value.name);
            value
        }
    ).collect()
}

impl ws::Handler for Server {
    fn on_open(&mut self, _shake: ws::Handshake) -> ws::Result<()> {
        // // Ping Pong
        // self.ws.timeout(PING_TIMEOUT, PING)?; // ping every 5 seconds
        // self.ws.timeout(EXPIRE_TIMEOUT, EXPIRE)?; // close conn if no activity for 30 seconds

        // Send all users
        let users: Vec<User> = all_users(self.db.clone());
        let users_body = serde_json::to_value(&users).unwrap();
        let users_msg = Message {
            route: "/users".to_owned(),
            event: "info".to_owned(),
            body: users_body
        };
        let users_r = serde_json::to_string(&users_msg).unwrap();
        self.ws.send(users_r)?;

        // Send all chats
        let chats_encoded: Vec<u8> = self.db.get("chats").unwrap().unwrap_or(IVec::from(vec![])).to_vec(); // NOTE i needed some default. I can probably do this better.
        let chat_ids: Chats = match chats_encoded.len() {
            0 => Chats{chats: vec![]},
            _ => bincode::deserialize(&chats_encoded[..]).unwrap(),
        };
        let mut chats: Vec<Chat> = vec![];
        for id in chat_ids.chats {
            let chat_encoded: Vec<u8> = self.db.get(id.as_bytes()).unwrap().unwrap_or(IVec::from(vec![])).to_vec();
            if chat_encoded.len() > 0 {
                let chat: Chat = bincode::deserialize(&chat_encoded[..]).unwrap();
                chats.push(chat);
            }
        }
        let chats_body = serde_json::to_value(&chats).unwrap();
        let chats_msg = Message {
            route: "/chats".to_owned(),
            event: "info".to_owned(),
            body: chats_body,
        };
        let chats_r = serde_json::to_string(&chats_msg).unwrap();
        self.ws.send(chats_r)?;

        // Initialize users subscriber
        let db_users = self.db.clone();
        let ws_users = self.ws.clone();
        thread::spawn(move ||  -> ws::Result<()> {
            let events = db_users.watch_prefix("user/");
            for event in events {
                let msg = match event {
                    Event::Insert(_k, v) => {
                        let user: User = bincode::deserialize(&v).unwrap();
                        Message {
                            route: "/users".to_owned(),
                            event: "create".to_owned(),
                            body: serde_json::to_value(user).unwrap(),
                        }
                    },
                    Event::Remove(k) => {
                        let key = str::from_utf8(&k).unwrap().to_string();
                        let split: Vec<&str> = key.split("/").collect();
                        let id = Id { id: split[1].to_owned() };
                        Message {
                            route: "/users".to_owned(),
                            event: "delete".to_owned(),
                            body: serde_json::to_value(id).unwrap(),
                        }
                    }
                };

                let r = serde_json::to_string(&msg).unwrap();
                ws_users.send(r)?
            }
            Ok(())
        });

        // Subscribe to chat events
        let db_chat = self.db.clone();
        let ws_chat = self.ws.clone();
        thread::spawn(move ||  -> ws::Result<()> {
            let events = db_chat.watch_prefix("chat/");
            for event in events {
                match event {
                    Event::Insert(_k, v) => {
                        // No need to wrap in event because it is always a create.
                        let chat: Chat = bincode::deserialize(&v).unwrap();
                        let v = serde_json::to_value(&chat).unwrap();
                        let msg = Message {
                            route: "/chat".to_owned(),
                            event: "create".to_owned(),
                            body: v,
                        };
                        let r = serde_json::to_string(&msg).unwrap();
                        ws_chat.send(r)?
                    },
                    Event::Remove(_k) => {} // No delete
                };
            }
            Ok(())
        });

        Ok(())
    }

    fn on_message(&mut self, msg: ws::Message) -> ws::Result<()> {
        println!("Message: {}", msg);
        let mut m: Message = serde_json::from_str(&msg.to_string()).unwrap();
        // TODO finish bad message error handling
        // {
        //     Ok(m) => m,
        //     Err(e) => {
        //         let out_msg = Message {
        //             route: "/error".to_owned(),
        //             event: "error".to_owned(),
        //             body: serde_json::to_value(&msg.to_string()).unwrap(),
        //         };
        //         let r = serde_json::to_string(&out_msg).unwrap();
        //         self.ws.send(r);
        //         // TODO need to be able to return an error, then return early after the `m` closure
        //     }
        // };
        match m.route.as_str() {
            "/echo" => {
                self.ws.send(msg)
            },
            "/users" => {
                m.body["id"] = Value::String(self.id.to_hyphenated().to_string());
                let user: User = serde_json::from_value(m.body).unwrap();
                // user.id = self.id.to_hyphenated().to_string();
                let k = format!("user/{}", self.id.to_hyphenated());
                println!("{}", k);
                let v = bincode::serialize(&user).unwrap();
                match self.db.insert(&k, v) {
                    Ok(_t) => {},
                    Err(_e) => {
                        // TODO do something
                    }
                }

                Ok(())
            },
            "/chat" => {
                let chat: Chat = serde_json::from_value(m.body).unwrap();

                // Add chat
                let k = format!("chat/{}", Uuid::new_v4().to_hyphenated());
                let v = bincode::serialize(&chat).unwrap();
                match self.db.insert(&k.as_bytes(), v) {
                    Ok(_t) => {},
                    Err(_e) => {
                        // TODO do something
                    }
                }

                // Update chats list
                let chats_k = "chats";
                let chats_encoded: Vec<u8> = self.db.get(chats_k).unwrap().unwrap_or(IVec::from(vec![])).to_vec(); // NOTE I needed some default. I can probably do this better.
                let mut chats: Chats = match chats_encoded.len() {
                    0 => Chats{chats: vec![]},
                    _ => bincode::deserialize(&chats_encoded[..]).unwrap(), // TODO I think chats_encoded.as_str() would also work
                };
                chats.chats.insert(0, k.clone());
                let max_len = 100;
                let remove_ids: Vec<String> = match chats.chats.len() {
                    l if l > max_len => chats.chats.drain(max_len..).collect(), // truncate
                    _ => vec![],
                };
                let chats_v: Vec<u8> = bincode::serialize(&chats).unwrap();
                match self.db.insert(&chats_k, chats_v) {
                    Ok(_t) => {},
                    Err(_e) => {
                        // TODO do something
                    }
                }

                // Remove chat records no longer in chat list
                for chat_id in remove_ids {
                    match self.db.remove(&chat_id) {
                        Ok(_t) => {},
                        Err(_e) => {
                            // TODO do something
                        }
                    }
                }

                Ok(())
            },
            _ => {
                println!("Unknown route: {}", m.route);
                Ok(())
            }
        }
    }

    fn on_close(&mut self, code: ws::CloseCode, reason: &str) {
        println!("WebSocket closing for ({:?}) {}", code, reason);

        // // Clean up timeouts
        // if let Some(t) = self.ping_timeout.take() {
        //     self.ws.cancel(t).unwrap();
        // }
        // if let Some(t) = self.expire_timeout.take() {
        //     self.ws.cancel(t).unwrap();
        // }

        let user = format!("user/{}", self.id);
        println!("Removing {}", user);
        match self.db.remove(user) {
            Ok(_t) => {},
            Err(_e) => {
                // TODO do something
            }
        }

        // TODO I want to return ws::Result but getting error when I do.
        // Once i do I should be able to return this line, and the db remove
        // can use a `?`.
        match self.ws.close(code) {
            Ok(_t) => {},
            Err(_e) => {},
        }
    }

    // fn on_timeout(&mut self, event: Token) -> ws::Result<()> {
    //     match event {
    //         // PING timeout has occured, send a ping and reschedule
    //         PING => {
    //             self.ws.ping(time::precise_time_ns().to_string().into())?;
    //             self.ping_timeout.take();
    //             self.ws.timeout(PING_TIMEOUT, PING)
    //         }
    //         // EXPIRE timeout has occured, this means that the connection is inactive, let's close
    //         EXPIRE => self.ws.close(ws::CloseCode::Away),
    //         // No other timeouts are possible
    //         _ => Err(ws::Error::new(ws::ErrorKind::Internal, "Invalid timeout token encountered!")),
    //     }
    // }

    // fn on_new_timeout(&mut self, event: Token, timeout: Timeout) -> ws::Result<()> {
    //     // Cancel the old timeout and replace.
    //     if event == EXPIRE {
    //         if let Some(t) = self.expire_timeout.take() {
    //             self.ws.cancel(t)?
    //         }
    //         self.expire_timeout = Some(timeout)
    //     } else {
    //         // This ensures there is only one ping timeout at a time
    //         if let Some(t) = self.ping_timeout.take() {
    //             self.ws.cancel(t)?
    //         }
    //         self.ping_timeout = Some(timeout)
    //     }

    //     Ok(())
    // }

    // fn on_frame(&mut self, frame: ws::Frame) -> ws::Result<Option<ws::Frame>> {
    //     // If the frame is a pong, print the round-trip time.
    //     // The pong should contain data from out ping, but it isn't guaranteed to.
    //     if frame.opcode() == ws::OpCode::Pong {
    //         if let Ok(pong) = str::from_utf8(frame.payload())?.parse::<u64>() {
    //             let now = time::precise_time_ns();
    //             println!("RTT is {:.3}ms.", (now - pong) as f64 / 1_000_000f64);
    //         } else {
    //             println!("Received bad pong.");
    //         }
    //     }

    //     // Some activity has occured, so reset the expiration
    //     self.ws.timeout(EXPIRE_TIMEOUT, EXPIRE)?;

    //     // Run default frame validation
    //     DefaultHandler.on_frame(frame)
    // }
}

// struct DefaultHandler;
// impl ws::Handler for DefaultHandler {}

fn main() {
    // let db = Arc::new(sled::open("game_db").expect("Sled must start ok."));
    let db = Arc::new(sled::Config::new().temporary(true).open().expect("Sled must start ok."));

    ws::listen("0.0.0.0:3012", |out| {
        Server {
            id: Uuid::new_v4(),
            ws: out,
            db: db.clone(),
            // ping_timeout: None,
            // expire_timeout: None,
        }
    }).unwrap()
}
