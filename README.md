# Liyakat Hussain — Portfolio

Personal portfolio for **Liyakat Hussain**, Machine Learning & Computer Vision Engineer and Data Scientist at Sabudh Foundation.

Built with **React 18**, **Vite 6**, and **Tailwind CSS 4**.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
portfolio/
├── index.html            # Vite entry (mounts #root)
├── vite.config.js        # Vite + React + Tailwind plugins
├── public/favicon.svg
└── src/
    ├── main.jsx          # React entry
    ├── App.jsx           # page composition
    ├── index.css         # Tailwind + global styles
    ├── data.js           # all portfolio content (edit here)
    ├── hooks/useReveal.js
    └── components/        # Navbar, Hero, About, Experience, Projects, Skills, Highlights, Contact, Footer
```

## Deploy

The site is ready to deploy. Build settings are already configured in `vercel.json` and `netlify.toml`.

### Option A — Vercel (recommended)

1. Push this project to GitHub (create a new repo at [github.com/new](https://github.com/new), then run):

```bash
git remote add origin https://github.com/YOUR_USERNAME/liyakat-hussain-portfolio.git
git push -u origin main
```

2. Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repo.
3. Vercel auto-detects Vite — click **Deploy**. Your site will be live at a `*.vercel.app` URL.

**Or deploy from the terminal:**

```bash
npx vercel login
npx vercel --prod
```

### Option B — Netlify (fastest, no GitHub needed)

1. Build locally: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page — done.

For continuous deploys, connect a GitHub repo at [app.netlify.com](https://app.netlify.com) instead.

### Option C — GitHub Pages

1. Push to GitHub (same as Option A step 1).
2. In repo **Settings → Pages**, set source to **GitHub Actions** and use a Vite deploy workflow, or deploy the `dist/` folder via Netlify/Vercel linked to the repo.

---

**Build command:** `npm run build`  
**Publish directory:** `dist`

