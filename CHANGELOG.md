# Willow Waterhole Website — Changelog

## v3.0 — 2026-07-03 · Full-site rebuild

The complete 15-page site, ready for the first Netlify deploy.

### Structure
- **New locked nav:** Visit · Things to Do · Events · Get Involved · About · Donate, with a slim 25th-anniversary utility bar above (remove after 2026).
- **New pages:** `visit.html` (full rebuild, sitemap order), `thingstodo.html`, `faqs.html`, plus three seed posts in `news/`.
- **Retired pages:** `explore.html`, `learn.html`, `birds.html`, `partners.html` — content redistributed into Things to Do and About; 301 redirects in place.
- **Prairie** remains the flagship standalone page.
- News posts live at `news/YYYY-MM-slug.html`.

### Content (locked decisions enforced)
- Acreage standardized to **291** site-wide.
- Whitmire quote removed everywhere.
- Boardwalk in present tense: **Now Open** (homepage feature, Things to Do, events, prairie CTA, flagship post).
- Newsletter signup form replaced by News & Stories model; past-newsletter archive linked.
- New **Flood Control** section on About (dark band): 608M gallons, ~13"/24-hr design storm, Sept 2019 Landsdowne result, Project Brays context, honest "reduces, not eliminates" framing, HCFCD/Conservancy roles.
- Partners rebuilt as three tiers (Public / Funding / Program) with relationship blurbs.
- Anniversary story rebuilt around the **before/after aerials** (labels avoid unverified years).
- MusicFEST copy updated for the Levitt transition (light touch; details to News & Stories).
- Bird content: 250+ species, 236 in Dec 2023 count, eBird hotspot L390915, 3rd-Saturday survey (no December).

### Template & quality
- Every page generated from one template: byte-identical nav/footer (verified by diff), skip link, aria-current nav state, aria-expanded menu toggle.
- Full SEO on every page: unique title/description, canonical, OG + Twitter, JSON-LD (Park, WebPage, Article, FAQPage), build stamp.
- GA4 placeholder comment in every head — paste the gtag snippet when live.
- Google Translate widget in footer (es/vi/zh-CN/fr).
- All below-fold images `loading="lazy"` with width/height; hero images excluded.
- Image work: anniversary aerials processed to ~230KB each; birds-bridge-2005.jpg 3.7MB→301KB; favicon 168KB→5KB; ways-to-give-02.jpg 746KB→527KB.
- `_redirects` covers all legacy Squarespace URLs (verified against live nav) + retired v2 pages.
- `sitemap.xml` regenerated (11 pages + 3 posts). 404 page added (noindex).

### QA results (this release)
- ✔ Nav/footer byte-identical across all 15 pages (nav differs only by aria-current)
- ✔ All internal links, anchors, and image paths resolve
- ✔ HTML tag balance valid on all pages
- ✔ Banned strings absent (Whitmire, "Three hundred", 300/279 acres, retired page refs)
- ✔ Every head: canonical, OG, Twitter, JSON-LD, GA placeholder, build stamp
- ✔ No page over 21KB HTML; no image over ~530KB

### Known gaps (for v3.1)
- **EIN** not published anywhere we could verify — footer says 501(c)(3) without EIN; add when Jay supplies.
- **Staff & board roster** — About has a placeholder with a `CONTENT NEEDED` comment.
- **Don't Miss map-key numbers** — cards are not numbered; add once official map legend numbers are confirmed.
- **Photo submission form** — anniversary page says "coming soon," email fallback in place.
- **Seed posts batch 2** — Spring 2026 newsletter stories (Trudy/Barbara articles).
- **Pre-cutover dependencies** on Squarespace: `/annualfund` (donate flow), `/membership`, `/pastnewsletter` — linked absolutely; replace when new flows exist.
- Trail letter labels (Trail A–F) on Things to Do assume map lettering — verify against the April 2025 map legend.
