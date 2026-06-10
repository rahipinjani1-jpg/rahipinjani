# Rahi Pinjani — Portfolio Website

React + Tailwind CSS + Vite

---

## Quick Start

```bash
npm install
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → /dist
```

---

## Adding Your Photos

All images go inside the **`/public/images/`** folder.
The site reads them directly from there — no import needed.

Create one sub-folder per project, named exactly as shown below.
Use `.jpg` or `.png` — both work fine.

---

## Image Folder Structure & File Names

```
public/
└── images/
    ├── hero.jpg                     ← Homepage hero (full portrait of Rahi)
    │
    ├── patchwork/                   ← Project 01 — Kathedar
    │   ├── hero.jpg                 (1 photo — best full shot of curtain / textile)
    │   ├── process-1.jpg            (sorting remnants)
    │   ├── process-2.jpg            (curating palette)
    │   ├── process-3.jpg            (at the JACK machine)
    │   ├── process-4.jpg            (piecing the grid)
    │   ├── lookbook-1.jpg           (wide/landscape — final curtain installed)
    │   ├── lookbook-2.jpg           (portrait — detail or person with curtain)
    │   └── lookbook-3.jpg           (portrait — close-up texture detail)
    │
    ├── wire/                        ← Project 02 — Taar
    │   ├── hero.jpg                 (1 photo — best shot of wire on dress)
    │   ├── process-1.jpg            (wire gauge / material study)
    │   ├── process-2.jpg            (structural form reference)
    │   ├── process-3.jpg            (wire sculpting in progress)
    │   ├── lookbook-1.jpg           (wide — full look with wire dress)
    │   ├── lookbook-2.jpg           (portrait — detail of wire motif)
    │   └── lookbook-3.jpg           (portrait — minaudière bag shot)
    │
    ├── tulip/                       ← Project 03 — Khilna
    │   ├── hero.jpg                 (1 photo — best outdoor/final wearing shot)
    │   ├── process-1.jpg            (composing the motif / hoop setup)
    │   ├── process-2.jpg            (painting the stems)
    │   ├── process-3.jpg            (building the bloom)
    │   ├── process-4.jpg            (first fitting / mirror selfie)
    │   ├── lookbook-1.jpg           (wide — outdoors full look)
    │   ├── lookbook-2.jpg           (portrait — mirror or standing)
    │   └── lookbook-3.jpg           (portrait — close-up of painted detail)
    │
    ├── kurti/                       ← Project 04 — Gulab
    │   ├── hero.jpg                 (1 photo — best full-length shot of kurti)
    │   ├── process-1.jpg            (chalk tracing on hoop)
    │   ├── process-2.jpg            (hand embroidering)
    │   ├── process-3.jpg            (pearl-centred roses close-up)
    │   ├── process-4.jpg            (Rajasthani doll tassels)
    │   ├── lookbook-1.jpg           (wide — full look)
    │   ├── lookbook-2.jpg           (portrait — front detail)
    │   └── lookbook-3.jpg           (portrait — embroidery close-up)
    │
    ├── lehenga/                     ← Project 05 — Reshmi
    │   ├── hero.jpg                 (1 photo — best full-length lehenga shot)
    │   ├── sketch.jpg               (fashion illustration / design drawing)
    │   ├── lookbook-1.jpg           (wide — final look outdoors, skirt in motion)
    │   ├── lookbook-2.jpg           (portrait — front)
    │   └── lookbook-3.jpg           (portrait — side or back)
    │
    ├── velvet/                      ← Project 06 — Raat
    │   ├── hero.jpg                 (1 photo — best lehenga or saree shot)
    │   ├── lookbook-1.jpg           (wide — Act I lehenga, full look)
    │   ├── lookbook-2.jpg           (portrait — Act I lehenga back/side)
    │   ├── lookbook-3.jpg           (portrait — Act I lehenga front)
    │   ├── saree-1.jpg              (wide — Act II saree, full look)
    │   └── saree-2.jpg              (portrait — Act II saree standing)
    │
    ├── navratri/                    ← Project 07 — Navrang (NEW — Project 8)
    │   │   RENAME your files like this:
    │   ├── lookbook-1.jpg           ← Project8_2.png  (full-length smiling, used as WIDE hero)
    │   ├── lookbook-2.jpg           ← Project8_1.png  (looking down, sunset behind)
    │   └── lookbook-3.jpg           ← Project8_3.png  (leaning on railing, back 3/4)
    │
    ├── suit/                        ← Project 08 — Misty Rose (NEW — Project 9)
    │   │   RENAME your files like this:
    │   ├── reference.jpg            ← Project9_Reference.png  (design illustration/sketch)
    │   ├── lookbook-1.jpg           ← Project9_1.png  (arms crossed outside CCD)
    │   ├── lookbook-2.jpg           ← Project9_2.png  (full-length outside, used as hero)
    │   └── lookbook-3.jpg           ← Project9_3.png  (seated inside café)
    │
    └── khushi/                      ← Project 09 — Khushi (NEW — Project 10)
            RENAME your files like this:
        ├── process-1.jpg            ← Project10_1.png  (sewing striped fabric at machine)
        ├── process-2.jpg            ← Project10_2.png  (fitting dress on pug, table)
        ├── process-3.jpg            ← Project10_3.png  (pug running with dress on head)
        ├── lookbook-1.jpg           ← Project10_2.png  (same as process-2, fitting)
        └── lookbook-2.jpg           ← Project10_3.png  (same as process-3, running)
```

> **Note for Khushi:** `process-2.jpg` and `lookbook-1.jpg` can be the same image
> (Project10_2). Similarly `process-3.jpg` and `lookbook-2.jpg` can both be Project10_3.
> Just copy and rename.

---

## Image Tips

| Use | Recommended size |
|-----|-----------------|
| Hero images | At least **1400 × 900px** |
| Lookbook wide (lookbook-1) | At least **1200 × 700px**, landscape if possible |
| Lookbook portrait (lookbook-2/3) | At least **600 × 800px** |
| Process images | At least **400 × 600px** |
| Thumbnails on projects list | Same as hero — it's cropped automatically |

- **Format:** `.jpg` preferred for photos (smaller file). `.png` also works.
- **Orientation:** Portrait photos look best everywhere. Landscape works for the `lookbook-1` wide slot.
- `object-position: center top` is set by default — so faces / tops of garments are never cropped.

---

## Project Summary (all 9)

| # | Slug | Name | Folder |
|---|------|------|--------|
| 01 | `patchwork` | Kathedar | `/images/patchwork/` |
| 02 | `wire` | Taar | `/images/wire/` |
| 03 | `tulip` | Khilna | `/images/tulip/` |
| 04 | `kurti` | Gulab | `/images/kurti/` |
| 05 | `lehenga` | Reshmi | `/images/lehenga/` |
| 06 | `velvet` | Raat | `/images/velvet/` |
| 07 | `navratri` | Navrang | `/images/navratri/` |
| 08 | `suit` | Misty Rose | `/images/suit/` |
| 09 | `khushi` | Khushi | `/images/khushi/` |

---

## File Structure

```
rahi-portfolio/
├── public/
│   └── images/          ← PUT ALL YOUR PHOTOS HERE
│       ├── hero.jpg
│       ├── patchwork/
│       ├── wire/
│       ├── tulip/
│       ├── kurti/
│       ├── lehenga/
│       ├── velvet/
│       ├── navratri/
│       ├── suit/
│       └── khushi/
│
├── src/
│   ├── data/projects.js     ← All project text content
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── ProjectDetail.jsx
│   ├── components/
│   │   ├── Nav.jsx
│   │   └── Footer.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
└── package.json
```

---

## To Edit Text Content

Open `src/data/projects.js` — every project's name, description, concept text,
process labels, and metadata is in one place. Edit freely.

