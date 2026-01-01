# Uploader (Vite + React) - ready to use

## Setup

1. Move this folder to your machine (or extract the ZIP).
2. In the project root run:
   ```bash
   npm install
   ```
3. Update `src/firebase.js` with your Firebase project's configuration (Project Settings → SDK setup).
   Make sure `storageBucket` matches your project (e.g. `"your-project.appspot.com"`).
4. Start dev server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:5173 and test uploading images.

## Build & Deploy

Build:
```bash
npm run build
```

Deploy to Firebase Hosting (if configured):
```bash
firebase deploy
```

