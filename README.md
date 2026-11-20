# Basketball Score Board

A small scoreboard for a pickup game. Two sides, Home and Guest, each with a score and three buttons: +1, +2, and +3. New Game puts both scores back to zero.

There is no build step. Open `index.html` in a browser, or serve the folder if you prefer:

```bash
python -m http.server 2020
```

Then go to `http://localhost:2020`.

The page is three files:

- `index.html` is the two columns and the buttons
- `style.css` is the dark board, the red digits, and the New Game button
- `main.js` keeps the two scores and updates them when you click

The digit font comes from a CDN, so the numbers look like a scoreboard only when you are online. Offline, they fall back to a normal monospace font. The buttons still work either way.
