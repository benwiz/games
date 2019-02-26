# power-hour

A controller to run a power hour using Spotify.

## Thoughts about React

All my functions ended up in in my top level component (App), why can they not live in the component they actually work with and pass the data upward to App to update the state?

## Version 1 Plan

### How to use

1. Start music on Spotify like normal (possibly within desired playlist)
2. Click the "start" button. Songs will begin changing every 60 seconds.

## To Do

- Sort out an elegant way to deal with the fact that the Spotify access token expires at exactly 1 hour (meaning, likely before the game ends)
  - Could be something like automatically getting a new access token shortly before it expires and storing the state of the game in the cookie, potentially no one would even notice
- Restart without page reload (and call it "Stop / Restart")
- Make everything pretty

- Play a sound when song switches
- Come up with a clever p5.js animation for the background
  - Maybe something related to how many ounces of beer
    - Possibly simulate a liquid that's slowly going down

- Later
  - Declare game over
  - Config game length
  - Config song length
  - Show how many beers are needed for configs
