# Talentica Resource — Website (Plain HTML/CSS/JS)

No Python, no build step, no dependencies. Just static files.

## Structure
```
index.html
static/
  css/style.css
  js/main.js
  images/logo_wide.png
  images/logo_icon.png
```

## Run locally
Just double-click `index.html` to open it in a browser — or, for the best
experience (some browsers restrict local file access), serve it with a
tiny local server:
```bash
cd talentica-html-css-js
python3 -m http.server 8000
```
Then open http://localhost:8000

## Deploy
Works on any static host as-is: GitHub Pages, Netlify, Vercel, Cloudflare
Pages, or a plain shared-hosting FTP upload. Just upload the whole folder
(keeping index.html at the root and static/ alongside it).

## Notes
- The contact form is front-end only (shows a confirmation message on submit).
  To make it actually send messages, hook it up to a form service like
  Formspree, or add a small backend.
