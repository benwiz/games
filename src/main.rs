extern crate ws;

use std::str;
use std::thread;
use std::sync::Arc;
use uuid::Uuid;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use sled::{Config, Event, IVec, Db};

struct Server {
    ws: ws::Sender,
    db: Arc<Db>,
}

#[derive(Serialize, Deserialize)]
struct Message {
    route: String,
    body: Value,
}

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

impl ws::Handler for Server {
    fn on_open(&mut self, _shake: ws::Handshake) -> ws::Result<()> {
        // TODO turn each of these sections into its own fn

        // Send all users
        let users: Vec<User> = all_users(self.db.clone());
        let users_body = serde_json::to_value(&users).unwrap();
        let users_msg = Message {
            route: "/users".to_owned(),
            body: users_body
        };
        let users_r = serde_json::to_string(&users_msg).unwrap();
        self.ws.send(users_r);

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
            body: chats_body,
        };
        let chats_r = serde_json::to_string(&chats_msg).unwrap();
        self.ws.send(chats_r);

        // Initialize users subscriber
        let db_users = self.db.clone();
        let ws_users = self.ws.clone();
        thread::spawn(move || {
            let mut events = db_users.watch_prefix("user/");
            for event in events {
                let e = match event {
                    Event::Insert(_k, v) => {
                        let user: User = bincode::deserialize(&v).unwrap();
                        let user_event = UserEvent {
                            event: "create".to_owned(),
                            user: user,
                        };
                        serde_json::to_value(&user_event).unwrap()
                    },
                    Event::Remove(k) => {
                        // TODO test this it is entirely untested
                        let key = str::from_utf8(&k).unwrap().to_string();
                        let user_event = UserEvent {
                            event: "delete".to_owned(),
                            user: User {name: key}
                        };
                        serde_json::to_value(&user_event).unwrap()
                    }
                };

                let msg = Message {
                    route: "/users".to_owned(),
                    body: e,
                };
                let r = serde_json::to_string(&msg).unwrap();
                ws_users.send(r);
            }
        });

        Ok(())
    }

    fn on_message(&mut self, msg: ws::Message) -> ws::Result<()> {
        println!("Message: {}", msg);
        let m: Message = serde_json::from_str(&msg.to_string()).unwrap();
        println!("{} {}", m.route, m.body);

        let r = match m.route.as_str() {
            "/echo" => {
                println!("echo");
                "echo"
            },
            "/users" => {
                let user: User = serde_json::from_value(m.body).unwrap();
                let k = format!("user/{}", user.name);
                let v = bincode::serialize(&user).unwrap();
                self.db.insert(&k, v);

                "ok"
            },
            _ => {
                println!("Unknown route");
                "unknown"
            }
        };
        self.ws.send(r)
    }
}

fn main() {
    let db = Arc::new(sled::open("game_db").expect("Sled must start ok."));
    ws::listen("127.0.0.1:3012", |out| {
        Server {
            ws: out,
            db: db.clone(),
        }
    }).unwrap()
}
