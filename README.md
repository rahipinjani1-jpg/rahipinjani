# Rahi Pinjani — Portfolio

Personal portfolio website for **Rahi Pinjani**, a Mumbai-based fashion designer and creative maker. Built as a custom React SPA with a focus on clean typography, art-forward layout, and smooth transitions.

**Live site:** [rahipinjani.vercel.app](https://rahipinjani.vercel.app)

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS v4**
- **Vanilla SPA routing** via History API (no React Router)
- Deployed on **Vercel**

---

## Features

- 9 handcrafted project pages with concept, process, and lookbook sections
- Instagram content feed (embedded via Instagram oEmbed)
- Hover-based image prefetch for instant project load
- Fully responsive: mobile, tablet, desktop
- SEO: JSON-LD structured data, sitemap, Open Graph tags
- Path-based routing (`/`, `/about`, `/work`, `/project/:slug`)

---

## Local Development

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview production build locally
```

---

## Project Structure

```
rahipinjani/
├── public/
│   ├── images/              ← all project photos (not in repo)
│   │   ├── hero.png
│   │   ├── patchwork/
│   │   ├── wire/
│   │   ├── tulip/
│   │   ├── kurti/
│   │   ├── lehenga/
│   │   ├── velvet/
│   │   ├── navratri/
│   │   ├── suit/
│   │   └── khushi/
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── data/
│   │   └── projects.js      ← all project text, metadata, image manifests
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── ProjectDetail.jsx
│   ├── components/
│   │   ├── Nav.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── prefetch.js      ← hover-based image prefetch
│   ├── App.jsx              ← routing logic
│   └── index.css            ← Tailwind + custom design tokens
│
├── index.html               ← SEO meta tags, JSON-LD, Open Graph
├── vercel.json              ← SPA rewrite rules
└── vite.config.js
```

---

## Projects

| # | Slug | Name | Category |
|---|------|------|----------|
| 01 | `patchwork` | Kathedar | Textile Design, Upcycling |
| 02 | `wire` | Taar | Avant-Garde Accessories |
| 03 | `tulip` | Khilna | Surface Design, Garment Making |
| 04 | `kurti` | Gulab | Indian Craft, Embroidery |
| 05 | `lehenga` | Reshmi | Bridal, Handcraft |
| 06 | `velvet` | Raat | Garment Design, Drape |
| 07 | `navratri` | Navrang | Festive Wear |
| 08 | `suit` | Misty Rose | Tailoring |
| 09 | `khushi` | Khushi | Everyday Wear |

---

## Content

All project text lives in `src/data/projects.js`. Each project entry contains the name, description, concept paragraphs, process labels, and image file paths. Edit there to update any copy or add new projects.

Images are stored in `public/images/` and not tracked in this repository.
