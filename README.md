# Awit at Alamat

An e-magazine on the myths, stories and music of five Indigenous cultural communities of the Davao Region: Ata Manobo, Bagobo-Tagabawa, Mandaya, Mansaka and Obo Manuvu.

## Files

```
index.html           page structure
css/style.css        all styles
js/data.js           ALL CONTENT: text, sources, group names (edit this file)
js/community.js      builds the page from data.js
js/scroll.js         scroll animation and the horizontal community selector
js/main.js           starts everything; menu, comparison table, links
assets/img/          cover illustrations (SVG)
assets/vendor/       GSAP 3 and ScrollTrigger (stored locally, no CDN needed)
render.yaml          Render deploy settings
```

## Before you submit

1. Open `js/data.js` and fill in `meta.group`, `meta.section` and `meta.teacher`.
2. Look at every "To verify" box in the chapters. Either confirm the item with a source or leave the label so readers know it is unconfirmed.
3. To use a photograph instead of an illustration, put the file in `assets/img/` and change that community's `cover.src`, `cover.alt` and `cover.credit`. Only use photos you have permission to use. Keep images below about 300 KB (1600 px wide JPG or WebP is enough).
4. Do not add recordings of chants, prayers or sacred songs unless the community has agreed in writing.

## Preview on your computer

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000. Opening `index.html` by double-clicking also works.

## Deploy on Render (static site)

1. Push this folder to a GitHub repository.
2. In Render, choose **New → Static Site** and pick the repository.
3. Leave **Build Command** empty (or `echo ok`) and set **Publish Directory** to `.`
4. Deploy. Render can also read the included `render.yaml` if you use **New → Blueprint**.

## Accessibility notes

- Visitors who turn on "reduce motion" get a plain tabbed selector with no scroll pinning or parallax.
- The selector works with mouse wheel, trackpad, touch, the arrow buttons, and the keyboard (Tab to a name, then arrow keys, Home and End).
- A "Skip the community selector" link appears when tabbing into that section.
