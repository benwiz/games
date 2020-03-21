extern crate websocket;
extern crate serde_json;

use std::thread;
use websocket::sync::Server;
use websocket::OwnedMessage;
use serde_json::{Value};

fn main() {
    let server = Server::bind("127.0.0.1:2794").unwrap();

    for request in server.filter_map(Result::ok) {
        // Spawn a new thread for each connection.
        thread::spawn(|| {
            if !request.protocols().contains(&"rust-websocket".to_string()) {
                request.reject().unwrap();
                return;
            }

            let mut client = request.use_protocol("rust-websocket").accept().unwrap();

            let ip = client.peer_addr().unwrap();

            println!("Connection from {}", ip);

            let message = OwnedMessage::Text("Connected to websocket.".to_string());
            client.send_message(&message).unwrap();

            let (mut receiver, mut sender) = client.split().unwrap();

            for message in receiver.incoming_messages() {
                let message = message.unwrap();
                println!("Received message: {:?}", message);

                match message {
                    OwnedMessage::Close(_) => {
                        let message = OwnedMessage::Close(None);
                        sender.send_message(&message).unwrap();
                        println!("Client {} disconnected", ip);
                        return;
                    }
                    OwnedMessage::Ping(ping) => { // Should I implement Pong? (probabyl unnecessary but thorough)
                        print!("Received ping. ");
                        let message = OwnedMessage::Pong(ping);
                        sender.send_message(&message).unwrap();
                        println!("Sent message: {:?}", message);
                        return;
                    }
                    OwnedMessage::Text(text) => { // OwnedMessage::Text or OwnedMessage::Binary
                        let v: Value = serde_json::from_str(&text).unwrap();
                        println!("v: {}", v);
                        return;
                    }
                    _ => {
                        println!("Other. Either Pong or Binary.");
                    }
                }
            }
        });
    }
}
