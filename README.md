# wuddder.github.io

Personal website for Andrew Wu.

🔗 **Live:** https://wuddder.github.io

## Tech Stack

- React + Vite
- Deployed via GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
cp -r dist/* .
git add -A && git commit -m "Update site" && git push
```

## Structure

```
├── src/
│   ├── App.jsx      # Main component (edit content here)
│   ├── App.css      # Styles
│   └── main.jsx     # Entry point
├── assets/          # Built JS/CSS
├── index.html       # Production entry
└── index.dev.html   # Dev entry (used by Vite)
```
