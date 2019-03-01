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

- Automatic spotify token refresh:
  - If fewer than 5 minutes left on spotify-access-token cookie
    - Delete the cookie
    - Create a new cookie called power-hour-configs
    - Refresh the page
  - The page must now also look for power-hour-configs cookie, if it exists
    - Load configs and other state variables from the cookie
    - Delete the cookie

- Later
  - Most things can definitely be prettier
  - For final drink, play The Final Countdown
  - Declare game over by showing a new "end of game" component
  - Play a sound when song switches
  - Come up with a clever p5.js animation for the background
    - Maybe something related to how many ounces of beer
      - Possibly simulate a liquid that's slowly going down
  - Update the theme to be the avg color of the albumImage
  - Clean all data when consuming it, not when using it
