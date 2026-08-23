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

## Editing content

All text — profile, stats, experience, projects, skills, certifications, education — lives in `src/data.js`. Update that file to change what the site displays.
