# Personal-Website

A college-application portfolio site. It's plain HTML/CSS/JS with no build step.

## Tabs
Overview · Ninja Competition · Course Design · Eagle Scout · Recycling Advisory · Research · Service & Leadership · Academics & Athletics

Each tab has its own link you can paste into an application, e.g. `…/#eagle-scout` or `…/#course-design`.

## Adding photos, videos and articles
Everything is in **`content.js`**:

1. Set `name`, `subtitle`, and optionally `email` and `resumeUrl` in `SITE`.
2. Under `MEDIA`, fill in the `url` or `src` of the pre-made slots, or add new ones:
   - **YouTube:** `{ type: "youtube", url: "https://www.youtube.com/watch?v=…", title: "…", caption: "…" }`
     (unlisted YouTube videos work well for interviews and course run-throughs)
   - **Photo:** upload it to `assets/images/<tab>/`, then `{ type: "image", src: "assets/images/eagle-scout/shelter.jpg", … }`
   - **Article / web page:** `{ type: "link", url: "https://…", … }`
   - **PDF:** upload it to `assets/docs/`, then `{ type: "pdf", src: "assets/docs/proposal.pdf", … }`
   - **Short video file:** `{ type: "video", src: "assets/images/course-design/clip.mp4", … }` (keep it under ~25 MB; use YouTube for anything longer)
3. **Before sharing with colleges**, set `showPlaceholders: false` so empty slots are hidden.

Compress photos before uploading (about 1600px wide is plenty).

## Publishing free with GitHub Pages
1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**, set Source to "Deploy from a branch", choose `main` / `(root)`, and click Save.
3. The site goes live at `https://<your-github-username>.github.io/Personal-Website/` within a minute or two.

## Previewing locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.
