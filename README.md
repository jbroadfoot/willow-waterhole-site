# Willow Waterhole Greenspace Conservancy — willowwaterhole.org

Static HTML/CSS/JS site. **There is no build step and no template.** Every page is hand-maintained, which means nav and footer markup is duplicated across all 21 HTML files in three variants: the 14 root pages, and the 7 files in `news/` which use `../` relative paths.

## Structure
- `*.html` — 13 pages + 404
- `news/` — News & Stories posts (`YYYY-MM-slug.html`)
- `css/styles.css` — single design-system stylesheet (brand tokens at top). **This is the only stylesheet.** Pages link to `css/styles.css`; do not create or edit a copy at the repo root.
- `js/main.js` — nav toggle
- `images/` — organized by section
- `_redirects`, `netlify.toml`, `sitemap.xml`, `robots.txt` — deploy config

## Editing rules
1. **Nav/footer changes must be made on every page by hand.** Nothing enforces this. After any nav or footer edit, diff the `<footer>` block across pages — within each of the three variants it should be byte-identical, and root vs `news/` should differ only in `../` prefixes.
2. Acreage is **291** everywhere.
3. New posts: copy an existing `news/` file, update head metadata (title, description, canonical, OG, JSON-LD dates) and body; add a card to `news.html` and a line to `sitemap.xml`.
4. Add the GA4 snippet under the `<!-- Google Analytics -->` comment in each head when the site is live.

## Deploy
Netlify, publish directory `.` — see `netlify.toml`. Redirects from the old Squarespace URLs are in `_redirects`.

See `CHANGELOG.md` for release history and known gaps.
