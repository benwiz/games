# taboo

## Develop

``` shell
yarn install
yarn watch
```

``` shell
yarn clean
```

NOTE!! This is easy to forget:

Visit `http://localhost:8700/dev.html` for development.

## Deploy

TODO call this from an npm script

``` shell
./release.sh
```

### From Emacs

Run `C-c C-x j s` which will start a shadow cljs repl based on the `.dir-local.el` config. It may be necessary to mess with emacs' `exec-path`. I recommend using `exec-path-from-shell`.

## To Do

- **figure out how to not need dev.html**
- Release script should clean all main.XXX.js files that are not the current one
- Return to using versioned js files. maybe.
- Switch to wired-elements but could not get to import
