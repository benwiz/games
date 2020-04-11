extern crate mio_extras;
extern crate time;
extern crate ws;

use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use sled::{Db, Event, IVec};
use std::str;
use std::sync::Arc;
use std::thread;
use uuid::Uuid;
// use mio_extras::timer::Timeout;
// use ws::util::Token;

// TODO
// - identify winner
// - finish sending error messages to client
// - NOTE: there will definitely be some bugs related to users leaving rooms. Maybe they shouldn't be removed? Or the game should auto reset?
// - OPTIMIZATION: Because all clients are getting updates on all rooms and all games EITHER separate out game resource so client can subscribe to game of interest OR do filtering at the client level to not update if the changes are in the game sub-struct. Idk if this is easily doable.
// - OPTIMIZATION: Using the recovery feature it is possible to hijack someone's "account". In order to prevent this I would need to provide a secret ID on open.

// const PING: Token = Token(1);
// const EXPIRE: Token = Token(2);
// const PING_TIMEOUT: u64 = 5_000;
// const EXPIRE_TIMEOUT: u64 = 30_000;

struct Server {
    id: Uuid,
    out: ws::Sender,
    db: Arc<Db>,
    // ping_timeout: Option<Timeout>,
    // expire_timeout: Option<Timeout>,
}

#[derive(Serialize, Deserialize, Clone)]
struct Message {
    route: String,
    event: String,
    body: Value,
}

#[derive(Serialize, Deserialize)] // This is unnecessary, I could use the json! macro in its place.
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
    user: String,
    message: String,
}

#[derive(Serialize, Deserialize)]
struct Chats {
    chats: Vec<String>,
}

#[derive(Serialize, Deserialize)]
struct Room {
    name: String,
    users: Vec<String>,
    game: Game,
}

#[derive(Serialize, Deserialize)]
struct Game {
    board: Vec<Vec<i32>>,
    winning_path: Vec<Vec<i32>>,
    winner: String,
}

fn all_users(db: Arc<Db>) -> Vec<User> {
    let scan = db.scan_prefix("user/");
    scan.map(|v| {
        let data = v.unwrap();
        let v = IVec::from(data.1);
        let value: User = bincode::deserialize(&v).unwrap();
        value
    })
    .collect()
}

fn all_rooms(db: Arc<Db>) -> Vec<Room> {
    let scan = db.scan_prefix("room/");
    scan.map(|v| -> Room {
        let data = v.unwrap();
        let v = IVec::from(data.1);
        bincode::deserialize(&v).unwrap()
    })
    .collect()
}

fn remove_user_from_rooms(db: Arc<Db>, user_id: String) {
    println!("Remove user from all rooms: {}", user_id);
    let scan = db.scan_prefix("room/");
    for (_i, r) in scan.enumerate() {
        let data = r.unwrap();
        let k = data.0;
        let value = IVec::from(data.1);
        let mut room: Room = bincode::deserialize(&value).unwrap();
        let count_before = room.users.len();
        room.users.retain(|u| u != &user_id);
        let count_after = room.users.len();
        println!("Check this room: {}", room.name);
        if count_before != count_after {
            println!("Remove!");
            // let k = format!("room/{}", room.name);
            let v = bincode::serialize(&room).unwrap();
            match db.insert(&k, v) {
                Ok(_t) => {},
                Err(_e) => {
                    // TODO do something
                    println!("Silently failing to remove user from room.");
                }
            }
        }
   }
}

fn error_message(request: Message, response: String) -> String {
    let r = json!({
        "route": "/error",
        "event": "error",
        "error": response,
        "message": request,
    });
    serde_json::to_string(&r).unwrap()
}

impl ws::Handler for Server {
    fn on_open(&mut self, _shake: ws::Handshake) -> ws::Result<()> {
        // // Ping Pong
        // self.out.timeout(PING_TIMEOUT, PING)?; // ping every 5 seconds
        // self.out.timeout(EXPIRE_TIMEOUT, EXPIRE)?; // close conn if no activity for 30 seconds

        // Send all users
        let users: Vec<User> = all_users(self.db.clone());
        let users_body = serde_json::to_value(&users).unwrap();
        let users_msg = Message {
            route: "/users".to_owned(),
            event: "info".to_owned(),
            body: users_body,
        };
        let users_r = serde_json::to_string(&users_msg).unwrap();
        self.out.send(users_r)?;

        // Send all rooms
        let rooms: Vec<Room> = all_rooms(self.db.clone());
        let rooms_body = serde_json::to_value(&rooms).unwrap();
        let rooms_msg = Message {
            route: "/rooms".to_owned(),
            event: "info".to_owned(),
            body: rooms_body,
        };
        let rooms_r = serde_json::to_string(&rooms_msg).unwrap();
        self.out.send(rooms_r)?;

        // Send all chats
        let chats_encoded: Vec<u8> = self
            .db
            .get("chats")
            .unwrap()
            .unwrap_or(IVec::from(vec![]))
            .to_vec(); // NOTE i needed some default. I can probably do this better.
        let chat_ids: Chats = match chats_encoded.len() {
            0 => Chats { chats: vec![] },
            _ => bincode::deserialize(&chats_encoded[..]).unwrap(),
        };
        let mut chats: Vec<Chat> = vec![];
        for id in chat_ids.chats {
            let chat_encoded: Vec<u8> = self
                .db
                .get(id.as_bytes())
                .unwrap()
                .unwrap_or(IVec::from(vec![]))
                .to_vec();
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
        self.out.send(chats_r)?;

        // Subscribe to user events
        let db_users = self.db.clone();
        let out_users = self.out.clone();
        thread::spawn(move || -> ws::Result<()> {
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
                    }
                    Event::Remove(k) => {
                        let key = str::from_utf8(&k).unwrap().to_string();
                        let split: Vec<&str> = key.split("/").collect();
                        let id = Id {
                            id: split[1].to_owned(),
                        };
                        Message {
                            route: "/users".to_owned(),
                            event: "delete".to_owned(),
                            body: serde_json::to_value(id).unwrap(),
                        }
                    }
                };

                let r = serde_json::to_string(&msg).unwrap();
                out_users.send(r)?
            }
            Ok(())
        });

        // Subscribe to room events
        let db_rooms = self.db.clone();
        let out_rooms = self.out.clone();
        thread::spawn(move || -> ws::Result<()> {
            let events = db_rooms.watch_prefix("room/");
            for event in events {
                let msg = match event {
                    Event::Insert(_k, v) => {
                        let room: Room = bincode::deserialize(&v).unwrap();
                        Message {
                            route: "/rooms".to_owned(),
                            event: "update".to_owned(), // create or join or leave
                            body: serde_json::to_value(room).unwrap(),
                        }
                    }
                    Event::Remove(k) => {
                        let key = str::from_utf8(&k).unwrap().to_string();
                        let split: Vec<&str> = key.split("/").collect();
                        let id = Id {
                            id: split[1].to_owned(),
                        };
                        Message {
                            route: "/rooms".to_owned(),
                            event: "delete".to_owned(),
                            body: serde_json::to_value(id).unwrap(),
                        }
                    }
                };

                let r = serde_json::to_string(&msg).unwrap();
                out_rooms.send(r)?
            }
            Ok(())
        });

        // Subscribe to chat events
        let db_chat = self.db.clone();
        let out_chat = self.out.clone();
        thread::spawn(move || -> ws::Result<()> {
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
                        out_chat.send(r)?
                    }
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
        //         self.out.send(r);
        //         // TODO need to be able to return an error, then return early after the `m` closure
        //     }
        // };
        match m.route.as_str() {
            "/echo" => self.out.send(msg),
            "/error" => {
                let r = error_message(m.clone(), "This is an example error message.".to_owned());
                self.out.send(r)
            },
            "/users" => {
                match &m.body["id"] {
                    _id @ Value::Null {..} => {
                        m.body["id"] = Value::String(self.id.to_hyphenated().to_string());
                    },
                    _ => {},
                };
                match m.event.as_str() {
                    "create" => {
                        let user: User = serde_json::from_value(m.body.clone()).unwrap();
                        let users: Vec<User> = all_users(self.db.clone());
                        let overlap_id_exists: bool = users.iter().any(|u| u.id == user.id);
                        if overlap_id_exists {
                            // Recover and/or update user name (NOTE this is easily hackable, someone can hijack a current users "account")
                            // Update self.id
                            self.id = Uuid::parse_str(&user.id).unwrap(); // TODO probably important to handle malformed uuid
                        }

                        // Upsert user record
                        let k = format!("user/{}", self.id.to_hyphenated());
                        let v = bincode::serialize(&user).unwrap();
                        match self.db.insert(&k, v) {
                            Ok(_t) => {}
                            Err(_e) => {
                                let r = error_message(m.clone(), "Failed to create new user.".to_owned());
                                self.out.send(r)?;
                            }
                        }
                    },
                    "delete" => {
                        let k = format!("user/{}", self.id.to_hyphenated());
                        match self.db.remove(&k) {
                            Ok(_t) => {}
                            Err(_e) => {
                                let r = error_message(m.clone(), format!("Failed to delete {}.", k));
                                self.out.send(r)?;
                            }
                        }
                    },
                    _ => {},
                }

                Ok(())
            }
            "/rooms" => {
                match m.event.as_str() {
                    "create" => {
                        let n = m.body["name"].as_str().unwrap();
                        let k = format!("room/{}", n);
                        match self.db.get(&k).unwrap() {
                            Some(_r) => {
                                let r = error_message(m.clone(), format!("Room {} already exists", n.clone()));
                                self.out.send(r)?;
                                return Ok(())
                            },
                            _ => {
                                let user_k = format!("user/{}", self.id.to_hyphenated());
                                if let Some(user_ivec) = self.db.get(&user_k).unwrap() {
                                    let user_encoded: Vec<u8> = user_ivec.to_vec();
                                    let user: User = bincode::deserialize(&user_encoded).unwrap();
                                    m.body["users"] = json!([user.id]);
                                    m.body["game"] = json!({
                                        "board": [],
                                        "winning_path": [],
                                        "winner": "",
                                    });
                                    let m_clone = m.clone();
                                    let room: Room = serde_json::from_value(m.body).unwrap();
                                    let v = bincode::serialize(&room).unwrap();
                                    match self.db.insert(&k, v) {
                                        Ok(_t) => {},
                                        Err(_e) => {
                                            let r = error_message(m_clone, format!("Failed to create {}", k));
                                            self.out.send(r)?;
                                        }
                                    }
                                } else {
                                    let r = error_message(m.clone(), "User without username cannot create a room".to_owned());
                                    self.out.send(r)?;
                                }
                            }
                        }
                    },
                    "join" => {

                        let k = format!("room/{}", m.body["name"].as_str().unwrap());
                        match self.db.get(&k).unwrap() {
                            Some(r) => {
                                let user_k = format!("user/{}", self.id.to_hyphenated());
                                if let Some(user_ivec) = self.db.get(&user_k).unwrap() {
                                    let user_encoded: Vec<u8> = user_ivec.to_vec();
                                    let user: User = bincode::deserialize(&user_encoded).unwrap();
                                    let mut room: Room = bincode::deserialize(&r.to_vec()).unwrap();
                                    if room.users.len() < 2 {
                                        room.users.push(user.id);
                                        let v = bincode::serialize(&room).unwrap();
                                        match self.db.insert(&k, v) {
                                            Ok(_t) => {},
                                            Err(_e) => {
                                                let r = error_message(m.clone(), format!("Failed to insert room {} into database.", k));
                                                self.out.send(r)?;
                                            }
                                        }
                                    } else {
                                        let r = error_message(m.clone(), format!("Preventing {} from joining full room {}.", user_k, room.name));
                                        self.out.send(r)?;
                                    }
                                } else {
                                    let r = error_message(m.clone(), format!("Preventing user without username from joining {}.", k));
                                    self.out.send(r)?;
                                }
                            },
                            _ => {
                                let r = error_message(m.clone(), format!("Cannot join {} since it does not exist.", k));
                                self.out.send(r)?;
                            }
                        }
                    },
                    "leave" => {
                        let k = format!("room/{}", m.body["name"].as_str().unwrap());
                        match self.db.get(&k).unwrap() {
                            Some(r) => {
                                let mut room: Room = bincode::deserialize(&r.to_vec()).unwrap();
                                room.users.retain(|u| u != &self.id.to_hyphenated().to_string());
                                let v = bincode::serialize(&room).unwrap();
                                match self.db.insert(&k, v) {
                                    Ok(_t) => {},
                                    Err(_e) => {
                                        let r = error_message(m.clone(), format!("Failed to leave {} because db could not be updated.", k));
                                        self.out.send(r)?;
                                    }
                                }
                            },
                            _ => {
                                let r = error_message(m.clone(), format!("Failed to leave {} because it does not exist.", k));
                                self.out.send(r)?;
                            }
                        }
                    },
                    "play" => {
                        let k = format!("room/{}", m.body["name"].as_str().unwrap());
                        match self.db.get(&k).unwrap() {
                            Some(r) => {
                                let mut room: Room = bincode::deserialize(&r.to_vec()).unwrap();
                                let user_index: usize = room.users.iter().position(|u| u == &self.id.to_hyphenated().to_string()).unwrap();
                                let last_user_index: i32 = match room.game.board.last() {
                                    Some(play) => play[0],
                                    None => -1, // no last move, so anyone can go first
                                };
                                if user_index as i32 != last_user_index {
                                    let loc: Vec<i32> = serde_json::from_value(m.body["location"].clone()).unwrap();
                                    let location = vec!(user_index as i32, loc[0], loc[1]);
                                    let overlap = room.game.board.iter().any(|l| vec!(l[1], l[2]) == loc);
                                    if !overlap {
                                        room.game.board.push(location);
                                        let v = bincode::serialize(&room).unwrap();
                                        match self.db.insert(&k, v) {
                                            Ok(_t) => {},
                                            Err(_e) => {
                                                let r = error_message(m.clone(), format!("Failed to update game in room {} because of an error inserting into the db.", room.name));
                                                self.out.send(r)?;
                                            }
                                        }
                                    } else {
                                        let r = error_message(m.clone(), format!("Failed to update game in room {} because location {:?} is already taken.", room.name, location));
                                        self.out.send(r)?;
                                    }
                                } else {
                                    let r = error_message(m.clone(), format!("Failed to update game in {} because it is the other player's turn.", k));
                                    self.out.send(r)?;
                                }
                            },
                            _ => {
                                let r = error_message(m.clone(), format!("Failed to update game in {} because it does not exist.", k));
                                self.out.send(r)?;
                            }
                        }
                    },
                    _ => {},
                }

                Ok(())
            }
            "/chat" => {
                let user_k = format!("user/{}", self.id.to_hyphenated());
                if let Some(user_ivec) = self.db.get(&user_k).unwrap() {
                    let user_encoded: Vec<u8> = user_ivec.to_vec();
                    let user: User = bincode::deserialize(&user_encoded).unwrap();
                    m.body["user"] = serde_json::to_value(user.id).unwrap();
                    let chat: Chat = serde_json::from_value(m.body).unwrap();

                    // Add chat
                    let k = format!("chat/{}", Uuid::new_v4().to_hyphenated());
                    let v = bincode::serialize(&chat).unwrap();
                    match self.db.insert(&k.as_bytes(), v) {
                        Ok(_t) => {}
                        Err(_e) => {
                            // TODO do something
                            println!("Silently failing when tring to insert chat.");
                        }
                    }

                    // Update chats list
                    let chats_k = "chats";
                    let chats_encoded: Vec<u8> = self
                        .db
                        .get(chats_k)
                        .unwrap()
                        .unwrap_or(IVec::from(vec![]))
                        .to_vec(); // NOTE I needed some default. I can probably do this better.
                    let mut chats: Chats = match chats_encoded.len() {
                        0 => Chats { chats: vec![] },
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
                        Ok(_t) => {}
                        Err(_e) => {
                            // TODO do something
                            println!("Silently failing when trying to inserts chats list.");
                        }
                    }

                    // Remove chat records no longer in chat list
                    for chat_id in remove_ids {
                        match self.db.remove(&chat_id) {
                            Ok(_t) => {}
                            Err(_e) => {
                                // TODO do something
                                println!("Silently failing when trying to remove chat.");
                            }
                        }
                    }
                }
                Ok(())
            }
            _ => {
                println!("Unknown route: {}", m.route);
                Ok(())
            }
        }
    }

    fn on_close(&mut self, code: ws::CloseCode, reason: &str) {
        println!("WebSocket closing for ({:?}) {} {}", code, reason, self.id);

        // // Clean up timeouts
        // if let Some(t) = self.ping_timeout.take() {
        //     self.out.cancel(t).unwrap();
        // }
        // if let Some(t) = self.expire_timeout.take() {
        //     self.out.cancel(t).unwrap();
        // }

        // Remove user
        let user = format!("user/{}", self.id);
        println!("Removing {}", user);
        match self.db.remove(user) {
            Ok(_t) => {}
            Err(_e) => {
                // TODO do something
                println!("Silently failing removing user on close.");
            }
        }

        // TODO I want to return ws::Result but getting error when I do.
        // Once i do I should be able to return this line, and the db remove
        // can use a `?`.
        match self.out.close(code) {
            Ok(_t) => {}
            Err(_e) => {
                println!("Silently failing to close connection.");
            }
        }
    }

    // fn on_timeout(&mut self, event: Token) -> ws::Result<()> {
    //     match event {
    //         // PING timeout has occured, send a ping and reschedule
    //         PING => {
    //             self.out.ping(time::precise_time_ns().to_string().into())?;
    //             self.ping_timeout.take();
    //             self.out.timeout(PING_TIMEOUT, PING)
    //         }
    //         // EXPIRE timeout has occured, this means that the connection is inactive, let's close
    //         EXPIRE => self.out.close(ws::CloseCode::Away),
    //         // No other timeouts are possible
    //         _ => Err(ws::Error::new(ws::ErrorKind::Internal, "Invalid timeout token encountered!")),
    //     }
    // }

    // fn on_new_timeout(&mut self, event: Token, timeout: Timeout) -> ws::Result<()> {
    //     // Cancel the old timeout and replace.
    //     if event == EXPIRE {
    //         if let Some(t) = self.expire_timeout.take() {
    //             self.out.cancel(t)?
    //         }
    //         self.expire_timeout = Some(timeout)
    //     } else {
    //         // This ensures there is only one ping timeout at a time
    //         if let Some(t) = self.ping_timeout.take() {
    //             self.out.cancel(t)?
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
    //     self.out.timeout(EXPIRE_TIMEOUT, EXPIRE)?;

    //     // Run default frame validation
    //     DefaultHandler.on_frame(frame)
    // }
}

// struct DefaultHandler;
// impl ws::Handler for DefaultHandler {}

fn main() {
    println!("Launching hex-server.");

    // let db = Arc::new(sled::open("game_db").expect("Sled must start ok."));
    let db = Arc::new(
        sled::Config::new()
            .temporary(true)
            .open()
            .expect("Sled must start ok."),
    );

    // Subscribe to user events
    let db_users = db.clone();
    thread::spawn(move || {
        let events = db_users.watch_prefix("user/");
        for event in events {
            match event {
                Event::Insert(_k, _v) => {}
                Event::Remove(k) => {
                    let key = str::from_utf8(&k).unwrap().to_string();
                    let split: Vec<&str> = key.split("/").collect();
                    remove_user_from_rooms(db_users.clone(), split[1].to_owned());
                }
            };
        }
    });

    // Subscribe to user events
    let db_rooms = db.clone();
    thread::spawn(move || {
        let events = db_rooms.watch_prefix("room/");
        for event in events {
            match event {
                Event::Insert(k, v) => {
                    let room: Room = bincode::deserialize(&v).unwrap();
                    if room.users.len() == 0 {
                        match db_rooms.remove(&k) {
                            Ok(_t) => {}
                            Err(_e) => {
                                // TODO do something
                                println!("Silently failing when trying to remove room.");
                            }
                        }
                    }
                }
                Event::Remove(_k) => {}
            };
        }
    });

    let port = match std::env::var("PORT") {
        Ok(val) => val,
        Err(_) => "3012".to_string(),
    };
    let uri = format!("0.0.0.0:{}", port);
    println!("Starting server at {}", uri);
    ws::listen(uri, |out| {
        Server {
            id: Uuid::new_v4(),
            out: out,
            db: db.clone(),
            // ping_timeout: None,
            // expire_timeout: None,
        }
    }).unwrap();
    println!("End of main fn.");
}
