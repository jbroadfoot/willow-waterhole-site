# Willow Waterhole Greenspace Conservancy — willowwaterhole.org

Static HTML/CSS/JS site. No build step required to deploy — but pages are **generated from a template** to keep nav/footer identical.

## Structure
- `*.html` — 11 pages + 404
- `news/` — News & Stories posts (`YYYY-MM-slug.html`)
- `css/styles.css` — single design-system stylesheet (brand tokens at top)
- `js/main.js` — nav toggle
- `images/` — organized by section
- `_redirects`, `netlify.toml`, `sitemap.xml`, `robots.txt` — deploy config

## Editing rules
1. **Nav/footer changes must be made on every page identically** (they are template-generated; a diff across pages should show no differences except `aria-current`).
2. Acreage is **291** everywhere.
3. New posts: copy an existing `news/` file, update head metadata (title, description, canonical, OG, JSON-LD dates) and body; add a card to `news.html` and a line to `sitemap.xml`.
4. Add the GA4 snippet under the `<!-- Google Analytics -->` comment in each head when the site is live.

## Deploy
Netlify, publish directory `.` — see `netlify.toml`. Redirects from the old Squarespace URLs are in `_redirects`.

See `CHANGELOG.md` for release history and known gaps.
