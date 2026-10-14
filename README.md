# Random Smashdown Web Application

I wanted to create a version of my Python Random Smashdown Selector program using React + Vite so people can use it on their phone or computer with a nice looking UI

The purpose/inspiration for this project is to randomly select a fighter, from the game Super Smash Bros Ultimate for Nintendo Switch, for the player like the in-game mode Smash Down.
Yes the game has a random feature but I like to pick which color I want to use. This allows me to do so lol
The roster will decrease in size, deleting the randomly selected fighter, ensuring you dont get a duplicate fighter selection.
This could also just be used with friends to diversify gameplay!

**Live site:** https://www.random-smashdown.site/

## Features

- **Random fighter selection** from the full Smash Bros. Ultimate roster, with fighter portrait, emblem and color-themed background.
- **No duplicates:** each selected fighter is removed from the roster until it is empty ("Complete!").
- **Multiplayer (up to 4 players):** use the `+` / `-` buttons beside the `?` block to add or remove player slots. The `?` button rerolls every active slot with distinct fighters.
- **Per-player backgrounds:** each player's fighter color is shown behind their slot, separated by white divider lines, with the ink splatter and portrait above each player container.
- **Drag and drop swapping:** drag a fighter icon from the roster onto a player container to swap. The replaced fighter returns to the end of the roster.
- **Remove Miis:** optionally take the Mii Fighters out of the roster.
- **Fighter history:** fighters from previous rolls are listed at the bottom.
- **Responsive:** below 900px the players switch to a 2x2 grid with scaled portraits.
- **Installable (PWA-style):** add it to your phone's home screen using the icons in `public/` (`logo512.png`, `manifest.json`).

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- Plain CSS (no UI framework)
- ESLint

## Getting Started

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# create a production build in dist/
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

## Project Structure

```
public/                       Static assets (manifest, home screen icons)
src/
  App.jsx                     Page layout
  components/
    SmashRoster/              Roster data, randomizer, player slots, backgrounds
    CSSIcon/                  Draggable roster icon
    TitleBar/                 Header
    Footer/                   Footer
  assets/images/              Local images (? block, ink splatter, Mii logos)
```

Fighter data (name, icon, portrait, background color, emblem) lives in the `fighters` state in `src/components/SmashRoster/SmashRoster.jsx`.

## Notes

- Fighter images are loaded from [ssbwiki.com](https://www.ssbwiki.com/) and [smashbros.com](https://www.smashbros.com/), so an internet connection is required.
- Drag and drop uses the browser's native API, so it works with a mouse but not on touch screens.

## Status

Still a W.I.P. so stay tuned for updates!

## Credits

Created by Miguel Torres ([MTorres29](https://github.com/TheMTorres29)). Super Smash Bros. is a trademark of Nintendo; this is an unofficial fan project and is not affiliated with Nintendo.
