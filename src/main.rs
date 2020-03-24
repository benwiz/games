extern crate ws;

use serde::{Deserialize, Serialize};
use serde_json::{Value};

struct Server {
    ws: ws::Sender,
}

#[derive(Serialize, Deserialize)]
struct Message {
    route: String,
    body: Value,
}

impl ws::Handler for Server {
    fn on_open(&mut self, _shake: ws::Handshake) -> ws::Result<()> {
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
            _ => {
                println!("Unknown route");
                "unknown"
            }
        };
        self.ws.send(r)
    }
}

fn main() {
    ws::listen("127.0.0.1:3012", |out| {
        Server {
            ws: out
        }
    }).unwrap()
}
