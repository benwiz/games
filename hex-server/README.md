# hex-server

## What

Server for playing the game Hex.

## Why

Practice Rust and create a unique game. And because John Nash.

## How

Using Rust's `ws` websocket library to run a websocket server.
Using `sled` key-value store.
Deployed to Heroku.

## Install and Run

Install Rust and Cargo then switch to using nightly.

``` shell
curl https://sh.rustup.rs -sSf | sh
rustup default nightly
```

Run. Optionally set PORT env var. Default is 3012.

``` shell
cargo run
```

Deploy.

``` text
Push to master. Heroku watches the master branch and will deploy to wss://nashhex.herokuapp.com.
```

## To Do

- Link to hex wikipedia article above
- If I ever wanted to learn testing with rust, this is an excellent candidate.
