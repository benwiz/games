# taboo

## What

The Taboo card game on your phone.

## Why

I wanted to be able to place this game at improptu times with friends.

## How

ClojureScript React application.

## Develop

Install

``` shell
yarn install
```

Clean

``` shell
yarn clean
```

Run

``` shell
yarn watch
```

*NOTE!! This is easy to forget:*

Visit `http://localhost:8700/dev.html` for development.

## Deploy

TODO call this from an npm script

``` shell
./release.sh
```

### From Emacs

Run `C-c C-x j s` or `M-x cider-jack-in-cljs` which will start a shadow cljs repl based on the `.dir-local.el` config. It may be necessary to mess with emacs' `exec-path`. I recommend using `exec-path-from-shell`.

## Notes

- Tried to use wired-elements but had a horrible time trying to get it to import into clojurescript

## To Do

- Release script should clean all main.XXX.js files that are not the current one
- figure out how to not need dev.html
- port react-tinder-card to cljs and release on clojars
