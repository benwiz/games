# hex-server

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
Push to master. Heroku will deploy to wss://nashhex.herokuapp.com.
```
