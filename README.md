# power-hour

A controller to run a power hour using Spotify.

## Thoughts about React

All my functions ended up in in my top level component (App), can/should I move them lower and try harder to pass only data? I feel like I should.

## Getting set up

Install everything

```sh
npm install
```

Run local server

```sh
npm start
```

Deploy

```sh
npm run deploy
```


## To Do

- Reset button has broken

- Make the selects look good, probably in one row, outlined, all the same width
- Hide configs if gameHasStarted==true

- Sort out an elegant way to deal with the fact that the Spotify access token expires at exactly 1 hour (meaning, likely before the game ends)
  - Could be something like automatically getting a new access token shortly before it expires and storing the state of the game in the cookie, potentially no one would even notice
- Finalize making everything pretty (or just leave it as is cuz its pretty enough)
- For final drink, play The Final Countdown

- Later
  - Declare game over by showing a new "end of game" component
  - Play a sound when song switches
  - Come up with a clever p5.js animation for the background
    - Maybe something related to how many ounces of beer
      - Possibly simulate a liquid that's slowly going down
  - Update the theme to be the avg color of the albumImage
  - Clean all data when consuming it, not when using it
