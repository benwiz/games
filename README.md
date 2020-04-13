# catan-board

## Develop

``` shell
yarn install
yarn watch
```

``` shell
yarn clean
```

``` shell
yarn release
```
### From Emacs

Run `C-c C-x j s` which will start a shadow cljs repl based on the `.dir-local.el` config. It may be necessary to mess with emacs' `exec-path`. I recommend using `exec-path-from-shell`.

## To Do

- Script should clean all main.XXX.js files that are not the current one
