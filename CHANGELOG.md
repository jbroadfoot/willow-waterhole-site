# Willow Waterhole Website — Changelog

## v3.2 — 2026-07-04 · Content refinements, featured coverage, MusicFEST reframe, calendar fix

Targeted edits plus one design rework on top of v3.1. Missing inputs are stubbed with `<!-- TODO -->` comments.

### Events & calendar
- Event date badges changed from ordinal format ("3rd SAT") to full dates ("Sun, Jul 12" / "Sat, Jul 18") on `index.html` and `events.html`; `.up-date` restyled as a wider horizontal pill. Placeholder dates flagged with `<!-- TODO: Jay to supply real dates -->`.
- **MusicFEST reframed** (`events.html`): heading now "MusicFEST at Willow Waterhole", Levitt-focused copy (next festival anticipated Spring 2027), "biggest day of the year" / Halloween / food-truck language removed, button changed to "Visit Levitt Houston" linking to levitthouston.org. Image swapped from the flag photo to `willow-waterhole-westbury-lake-gazebo.jpg` with a `<!-- TODO -->` for a better MusicFEST image.

### Homepage
- Added a `<!-- ROTATING -->` maintenance comment above the "In the News" strip (no layout change).

### Visit page
- Removed the orphaned standalone lead section between hero and parking; its intent folded into the parking section intro.
- **Parking reworked from parking-first to experience-first**: new heading "What do you want to do?" with four goal-named cards (See the boardwalk / Bird or wildlife watch / Make a day of it / Just exploring), each surfacing the matching lot, address, description, and directions link. Added a high-contrast `.lotname` style and darkened the address line.

### News & Stories
- Renamed the stories feed heading to "What's Growing at the Waterhole" and reworded the hero H1 to "News & Stories from the greenway." to avoid duplication.
- Added a **"Featured in"** press-logo strip (7 publications) and a **"Recent Coverage"** curated list (6 linked articles) with a back-to-top link. Placeholder press logos generated at `images/press/` (200×80 PNGs); flagged with `<!-- TODO -->` to swap in real logos.
- Each news post now ends with a "See more stories" / "Upcoming events" nav block.

### Anniversary
- Added the American/Texas flags photo (Bob Schwartz Gazebo) between "Then & Now" and "The Story" (shown uncropped at a tasteful size rather than full-bleed, since the source image is portrait).
- Timeline enriched with nine dated milestones (2005–2020) from the 2021 Southwest News article; kept the v3.1 2025/2026 entries and dropped the now-redundant duplicate 2026 card.

### Sitewide polish
- **All em-dashes removed** (87 occurrences across 14 files), replaced contextually with commas, colons, periods, or parentheses (no hyphens or en-dashes). En-dashes in year ranges (2001–2026) left intact.
- **Divider audit**: the signature divider now only sits at a white/cream boundary. Removed from `thingstodo.html` and `visit.html` (where it sat between two colored sections); all other pages verified correct.
- Build stamp bumped to v3.2 on every edited file.

### Blocked / pending (for future patches)
- Real event dates (Jay to supply)
- MusicFEST image (Jay to source from Levitt/WWGC library)
- Real publication logo files (Jay to grab from each site)
- David's TPW photos (pending)
- Staff & board roster (pending; `<!-- CONTENT NEEDED -->` in place on About)
- Houston Business Journal TIRZ piece (pending publication)

## v3.1 — 2026-07-03 · Content corrections and homepage updates

Targeted patch on top of v3.0 — direct edits to existing pages, not a full rebuild.

### Homepage
- Hero image replaced with `images/general/westbury-lake-drone.jpg` (`.hero-media`, `background-position: center 30%`).
- Ghost button now links to `prairie.html` ("Explore the Prairie").
- Six Lakes subhead (`.lakes .sub`) widened (560px → 680px) to fix an awkward text wrap.
- "Before you go" link now points to `visit.html#essentials`.

### Boardwalk spec corrections (site-wide)
- `half-mile` → `1/3-mile`, `20-acre` → `15-acre`, `elevated` → `concrete` everywhere describing the boardwalk — across `index.html`, `thingstodo.html`, `prairie.html`, `visit.html`, `news.html`, `events.html`, `donate.html`, and `news/2026-06-prairie-boardwalk-open.html`, including all meta descriptions and JSON-LD.
- `prairie.html`: added boardwalk access note — Cullen Foundation Trail loop around Prairie Lake, and the Windwood Drive trailhead from the northwest.

### Corrections
- **Visit:** Clematis south lot (11300 block) no longer references Heron Lake or the Audubon Trail; north lot unchanged.
- **About:** `TIRZ 25` corrected to `TIRZ 20`, with a note that it annexed Willow Waterhole Greenway in late 2023.
- **About — Partners:** added Elkins Foundation, Martin Marietta, River Oaks Garden Club, and Garden Club of Houston (Funding tier); added Bellaire Southwest Rotary (Program tier).
- **Things to Do:** Triangle Lake copy now names the Edith Smith Outdoor Classroom (stone circle seating).
- **Things to Do:** removed the running reference from the Activities section ("Walk, hike & run" → "Walk & hike").
- **Events:** added "The Greenway as Venue" under Seasonal & Special, covering cross-country meets and fun runs hosted at the park.
- **FAQs & Things to Do:** fish stocking description now specifies "from 2016 to 2019."
- **Anniversary:** added 2025 (80 Eagle/Gold Award projects, Great Blue Heron sculpture installed) and 2026 (boardwalk opened, 25th Anniversary celebrated) timeline entries.

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
