# spyfall

## What

Play Spyfall with just your phone

## Why

I wanted a portable game that required no materials. Turns out this is excellent for COVID social distancing.

## How

Vanilla JavaScript because this app is so simple.

Locations and roles are deterministically shuffled based on the product of the game room and player id.

# Run locally

```sh
npm install -g nodemon http-server
nodemon -x http-server
```

## Deploy

Push to master

## To Do

- Spyfall: "next" button, just make it a + for now
- Feedback form for reporting bugs, bad locations/roles, and suggesting new locations/roles
  - probably just make it a mailto link with a template
- "Easy mode" where there is a predefined subset of locations
- "Hard mode" where locations are grouped into sets of 12 really similar locations (e.g. "stores" includes boutique, sports store, restaurant, fast food, etc.)
- Next game button (maybe)
