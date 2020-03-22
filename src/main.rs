extern crate env_logger;
/// WebSocket server using trait objects to route
/// to an infinitely extensible number of handlers
extern crate ws;
// extern crate serde;
// extern crate serde_json;

use std::thread;
use std::thread::sleep;
use std::time::Duration;
use serde::{Deserialize, Serialize};
use serde_json::Result;

/*

Some notes about the general architecture:
- Websockets with route
- Each connection is for a single route
- Each (routed) connection spawns a thread that listens for changes to the datastore and pushes updates to the client.\

 */

#[derive(Serialize, Deserialize)]
struct User {
    name: String,
}

// A WebSocket handler that routes connections to different boxed handlers by resource
struct Router {
    sender: ws::Sender,
    inner: Box<dyn ws::Handler>,
}

impl ws::Handler for Router {
    /// on_request is called once for each new connection.
    fn on_request(&mut self, req: &ws::Request) -> ws::Result<ws::Response> {
        // Clone the sender so that we can move it into the child handler
        let out = self.sender.clone();
        println!("route: {}", req.resource());

        match req.resource() {
            "/echo" => self.inner = Box::new(Echo { ws: out }),

            // // Data handler (this will be useful for getting up to date list of users and games)
            // "/data/one" => {
            //     self.inner = Box::new(Data {
            //         ws: out,
            //         data: vec!["one", "two", "three", "four", "five"],
            //     })
            // }

            "/users" => {
                let out_clone = out.clone();
                thread::spawn(move || {
                    sleep(Duration::from_millis(2000));
                    println!("Push from closure");
                    out_clone.send("Hi, this is a push message from the /users endpoint.")
                });

                self.inner = Box::new(move |msg: ws::Message| {
                    println!("Got a message on a closure handler: {}", msg);
                    let user: User = serde_json::from_str(&msg.to_string()).unwrap();
                    println!("Name: {}", user.name);
                    out.send(format!("Hello, {}", user.name))
                })
            }

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

    // Listen on an address and call the closure for each connection
    if let Err(error) = ws::listen("0.0.0.0:3012", |out| {
        // Use our router as the handler to route the new connection
        Router {
            sender: out,
            // Default to returning a 404 when the route doesn't match.
            // You could default to any handler here.
            inner: Box::new(NotFound),
        }
    }) {
        // Inform the user of failure
        println!("Failed to create WebSocket due to {:?}", error);
    }
}
