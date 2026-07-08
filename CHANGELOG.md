# Willow Waterhole Website — Changelog

## v3.10.1 — 2026-07-08 · Visit page polish pass

Refinements to the v3.10 rebuild based on a design/UX review. Same section order and architecture, no content removed.

### Fixed
- **Grid stretch dead space**: `.getting-here-grid` and `.in-the-area-grid` used CSS Grid's default `align-items:stretch`, which forced every card in a row to match its tallest neighbor. Where content length varied, this left up to 71px of dead space at the bottom of shorter cards (most visible in "In the Area," where "Coffee & Breakfast" had a large gap below its 2-item list next to "Local Favorites"' 4 items). Fixed with `align-items:start` on both grids — desktop only, mobile was never affected since it collapses to one column.
- **Map image distortion ("skewed map")**: root cause was the `<img>` having explicit `width`/`height` attributes with no `height:auto` in CSS. When the container rendered narrower than the declared 1100px width, the browser shrank the width but kept the height fixed, stretching the image (rendered ratio 1.40 vs. the file's true 1.55). Added `height:auto` to `.mapblock img` (shared by `visit.html` and `lakes-trails.html`) and corrected both pages' height attributes from 733 to 712 to match the source image's real aspect ratio. This was a CSS bug, not an asset problem — no new map image needed.

### Refined
- **Seasonal Visitor Guide**: tightened the intro sentence and cut the first bullet, which repeated the intro's early-morning point. Four bullets now, no redundancy.
- **Plan Your Time cards**: the distance/description meta line was a single muted, easy-to-skip line under the title. Split into a bold, dark "About 2 miles"-style subhead plus a lighter description line below it, and darkened the time-range label (`--blue` → `--blue-d`) for a touch more contrast.
- **Getting Here cards**: reordered fields so the place name leads (title → tagline → parking → one-sentence description → links, was label → title → parking → paragraph → links), softened the "Best for..." tagline from a loud bold-uppercase-blue label to a quiet italic caption, and cut each card's paragraph to one tight sentence. Less competition between five previously same-weight elements.
- **In the Area**: added a divider rule under each block heading and thin dividers between list items, so it reads as a structured local guide instead of floating text blocks. No icons added, per direction.
- **Shared section-intro class**: the five section intro paragraphs (Plan Your Time, Getting Here, Before You Go, While You're Here, In the Area) each repeated an identical inline `style="max-width:...;margin-top:-.6rem"`. Replaced with one `.section-intro` class. No visual or content change.
- **Type scale consolidation**: unified three near-duplicate in-card body sizes (1rem/16px, .97rem/15.5px) down to .95rem across `.seasonal-card p`, `.byg-block p`, and `.getting-here-card p`, matching the size already used by `.etiquette-item p`, `.ita-block p`, and `.ptime-card ul li`. Sitewide shared `.checklist` left untouched.

## v3.10 — 2026-07-08 · Visit page full redesign

Complete rebuild of `visit.html` per the locked v3.10 build spec. All 10 sections rebuilt in one pass; nav and footer boilerplate unchanged.

### New section structure
Hero + fact strip → **Discover Willow Waterhole** (new: 65/35 editorial split, "Park at a Glance" list, location map + directions) → Seasonal Visitor Guide (redesigned as a single white card with image+badge, 58/42 split) → **Plan Your Time** (3 equal photo cards, no lot footer) → **Getting Here** (new: fixed 2×2 grid, replaces the old "Best Place to Start" section) → Park Map (added a caption line) → **Before You Go** (new: two-column layout with green-divider headings, replaces the old single-block "Know Before You Go") → While You're Here (etiquette items now grouped into two explicit 3-item columns) → **In the Area** (new: fixed 2×2 grid of neighborhood blocks, replaces the old single paragraph) → Closing CTA (green button on the blue band, per spec).

### Content corrections applied throughout
- Trail mileage corrected to **8.5 miles** everywhere on the page, including the footer ("eight miles" → "8.5 miles of trails").
- Westbury Lake now reads "the largest lake in the park" — no acreage stated, no citywide claim.
- 291 acres stated plainly, never rounded.

### Technical
- Added new CSS: `.discover-section`, `.glance-list`/`.glance-label`, `.seasonal-card` (replaces `.seasonal`/`.seasonal-wrap`/`.seasonal-img`/`.seasonal-content`), `.plan-time-grid`/`.ptime-card` (replaces `.visit-cards`/`.visit-card`), `.getting-here-grid`/`.getting-here-card` (replaces `.start-grid`/`.start-card`), `.before-you-go`/`.byg-block`, `.etiquette-grid`/`.etiquette-item`, `.in-the-area-grid`/`.ita-block`, `.cta-tall`. Removed the superseded `.plan-grid`/`.plan-card` block (confirmed unused elsewhere).
- All literal grid layouts verified as multi-column at desktop widths via computed styles (65fr/35fr, 58fr/42fr, 3-col, 2×2), not collapsed to single-column.
- Verified: HTML tag balance clean, all image paths resolve, zero em-dashes, zero remaining "8 miles"/"eight miles"/"110-acre"/"largest lake in Houston" strings. Confirmed visually at mobile and desktop widths.
- Build stamp v3.10; stylesheet cache-bust bumped to `?v=3.10`.
- `#essentials`, `#parking`, and `#map` anchors preserved (linked from nav/footer on every other page).

## v3.9 — 2026-07-06 · Lakes & Trails definitive structure: Featured Places first, sentence-case headings, wider cards

Reorders and restyles the per-lake sections per the definitive spec. Same content as v3.8 (all 45 guide-note bullets and 24 spotlight cards unchanged) — this pass is structure and typography only.

### Section order flipped
Featured Places (the expandable spotlight cards) now comes right after Parking & Access, ahead of Park Details (the categorized guide notes), matching the site's "exploration first, reference second" positioning. Final per-lake order: Lake Header, Quick Facts, Overview + Map, Parking & Access, Featured Places, Park Details, Continue Exploring.

### Headings renamed and fixed to sentence/title case
- "What You'll Discover" → **Park Details**; "Explore [Lake]" → **Featured Places** (generic heading, not lake-specific, matching the spec's literal example), with a short "Tap a feature to learn more." intro line.
- Both are now real `<h3>` elements (serif, brand green) instead of the small-caps `.eyebrow-s` treatment used elsewhere on the site.
- Removed `text-transform:uppercase` from every lakes-trails-specific label: quick-facts field labels, the "On the Park Map" marker label, the "Find [Lake]" map label, and the Park Details category headings (Trails & Connections, Places to Pause, etc.) — all now render in their natural title case. Sitewide shared classes (`.eyebrow-s` etc., used on every other page) were left untouched.

### Featured Places cards widened
Card grid minimum width increased 220px → 260px, thumbnail image 64px → 84px, more internal padding and gap. Cards still wrap naturally into multiple rows.

### Typography and spacing
Overview paragraph: max-width capped at 52ch and line-height increased to 1.8 for readability. Increased margins between quick-facts/overview, overview/parking, and section headings throughout. No decorative dividers added — spacing changes only.

### Technical
- Removed the now-fully-orphaned `.lake-parking` class (dead since the v3.8 rename to `.parking-card`).
- Verified: all 45 checklist bullets, 24 spotlight cards, and 20 guide-note categories intact post-reorder (correcting a miscount in the v3.8 changelog, which said 20 spotlight cards; the correct count has always been 24). All 32 images resolve, HTML tag balance clean, zero em-dashes, zero remaining ALL CAPS on lakes-trails-specific labels.
- Build stamp v3.9; stylesheet cache-bust bumped to `?v=3.9`.
- The six highlighted map images are still the same placeholder-with-TODO-comment approach from v3.8; no change to that status.

## v3.8 — 2026-07-06 · Lakes & Trails final structure: highlighted map, reordered sections, prev/next nav

Locks in the final per-lake structure for `lakes-trails.html`. Still one scrolling guide, not six pages. No content cut — all 45 guide-note bullets and 20 spotlight cards carry over unchanged.

### Section order (per lake)
Lake Header → Quick Facts → Overview + Map (2-col) → Parking & Access → What You'll Discover → Explore This Lake → Continue Exploring. Parking now sits right after the overview/map instead of after the guide notes, so it's not buried below a scroll of content.

### Quick Facts
- Fields renamed/split: "Distance · Trail" combined field → separate **Loop Length** and **Trail** fields.
- **Difficulty removed** (every lake repeated "Easy, ADA accessible," adding no information); the accessibility note now lives as a small inline addition on the Trail field instead.

### Overview + Map
- Replaced the v3.7 primary-photo-plus-locator-card pair with a single "highlighted map" slot per the new spec, paired 2-column with the overview paragraph. Each map has a "Find [Lake Name]" label and the lake's marker badge overlaid in the corner.
- **Blocked on a new asset**: the six highlighted map images (base aerial photo, current lake's shape tinted green + outlined, everything else desaturated, letter marker) don't exist yet and need real design/coordinate work I can't produce reliably. Per Jay's call, shipped with the existing per-lake aerial photo as a placeholder in that slot, each flagged with an inline `<!-- TODO -->` comment, so the rest of the page ships now. Swap in the real assets when ready — no other markup changes needed.
- Removed the locator caption text ("Where [Lake] sits within the Greenway") that v3.6.1/v3.7 had introduced.

### Parking & Access
- Added a "Get Directions" button per lake, linking to Google Maps (reusing address queries already established on visit.html where available).

### Explore This Lake
- Subhead copy updated to "Tap a feature to learn more about the places, trails, art, and habitats that make this lake unique." Cards themselves unchanged.

### Continue Exploring (new)
- Prev/next jump-scroll links at the bottom of each lake section, in A–F order. Westbury (first) shows Next only; Prairie (last) shows Prev plus a "Back to top" link.

### Technical
- New CSS: `.overview-map-grid`, `.map-find-label`, `.highlighted-map` (with corner-badge overlay), `.lake-continue`. Removed the now-fully-superseded `.lake-media-v2`/`.lake-media-primary`/`.lake-media-locator`/`.lake-detail-grid` from v3.7.
- Verified: all 45 checklist bullets and 20 guide-note categories accounted for post-restructure, all 32 images resolve, HTML tag balance clean, zero em-dashes.
- Build stamp v3.8; stylesheet cache-bust bumped to `?v=3.8`.

## v3.7 — 2026-07-06 · Lakes & Trails Phase 2: Guide Notes, marker badge, asymmetric media, parking up front

Refinement pass on `lakes-trails.html`. No content cut — every one of the 45 highlight bullets and all 20 spotlight cards carry over unchanged; only structure and layout changed.

### Guide Notes (replaces flat checklist)
- Each lake's highlight bullets are now grouped into a fixed shared category set (only categories with content are shown): Trails & Connections, Places to Pause, Art & Landmarks, Wildlife & Habitat, Water & Stormwater.
- Category counts per lake: Westbury 3, Triangle 4, Scout 2, Heron 5 (the full set), Willow 4, Prairie 2.

### Map marker
- Replaced the bare stacked letter above each lake name with an inline circular badge (`.marker-badge`, deep green #2D5016) plus an "On the Park Map" label, sitting directly before the lake name.

### Media layout
- Replaced the equal-weight stacked photo pair with an asymmetric primary/locator pair: a large full-width scenic photo on top, and the aerial/map image below at reduced size in a bordered "locator card," captioned "Where [Lake Name] sits within the Greenway."

### Parking moved up
- Parking info moved from after the photos/checklist to directly under the quick-facts bar, and restructured from two prose paragraphs into a compact 3-line card: Address, Cross streets, Connects to.

### Spotlight section renamed
- "Spotlight Features" → "Explore [Lake Name]" with a one-line subhead. The expandable `<details>` cards themselves are unchanged.

### Technical
- New CSS: `.lake-marker`/`.marker-badge`/`.marker-label`, `.parking-card`, `.lake-detail-grid`/`.guide-notes`/`.guide-cat`, `.lake-media-v2`/`.lake-media-primary`/`.lake-media-locator`. Removed the now-fully-orphaned `.lake-highlights-media`/`.lake-media-stack` from v3.6.1.
- Verified: all 45 highlight bullets accounted for post-regrouping, all 36 images resolve, HTML tag balance clean, zero em-dashes.
- Build stamp v3.7; stylesheet cache-bust bumped to `?v=3.7`.

## v3.6.1 — 2026-07-06 · Lakes & Trails: orienting photo pair per lake

Follow-up to v3.6. Each lake section had a "regular view" photo and a dedicated aerial/map photo sitting unused in the image library (11 files total) even though every lake has one of each. Added both, stacked beside the Highlights & Features checklist in a new two-column layout (`.lake-highlights-media` / `.lake-media-stack`), matching the reference orienting-photo pattern.

- Westbury, Scout, Heron, Willow, and Prairie use their dedicated `-map.jpg` aerial image; Triangle has no dedicated map file, so its `-topography.jpg` satellite image fills that role.
- Heron's "regular view" photo is also reused as the Stormwater Weir spotlight fallback (no better dedicated image exists for that feature) — the one remaining minor duplication, flagged rather than forced into a mismatched photo.
- Responsive: image pair stacks below the checklist on screens under 780px.

## v3.6 — 2026-07-06 · New page: Lakes & Trails Guide

New standalone reference page, `lakes-trails.html`. Not in main nav and not yet linked from Things to Do (that connection is a deliberate future pass); reachable by direct URL and now listed in sitemap.xml for search discovery.

### Content
- Restores the richer per-lake content from the original Squarespace `/lakes-trails` page (Highlights, Location & Parking, and 3-6 named Spotlight Features per lake with photos), which had been condensed down when the site was rebuilt. Content supplied verbatim by Jay, with one confirmed correction: the Prairie Lake boardwalk is described as built (not "future"), matching its actual status.
- Six lake sections in lettered order (A. Westbury, B. Triangle, C. Scout, D. Heron, E. Willow, F. Prairie), each with a quick-facts bar (distance, difficulty, parking, best-for tags), overview, highlights checklist, parking/access block, and an expandable spotlight gallery.
- Difficulty is stated as "Easy, ADA accessible" for all six lakes, inferred directly from the intro's explicit "8 miles of accessible walking paths" claim rather than invented per-lake.
- A few spotlight features (Naturescapes and Trail Overlook at Westbury, Stormwater Weir at Heron, Grassy Mound Overlook at Willow) don't have a dedicated close-up photo in the image library; these reuse the lake's general photo rather than a mismatched one.

### Technical
- New CSS added under `/* v3.6 lakes & trails page */`: sticky jump-nav (positioned below the main nav's 86px height to avoid double-sticky overlap), `.qf-bar` quick-facts bar, `.lake-parking` block, and `.spotlight-grid` using native `<details>/<summary>` for the expandable gallery (no JS).
- Added to `sitemap.xml`. Footer left byte-identical to every other page (still points to `thingstodo.html#lakes`) since connecting this page into site navigation is out of scope for this pass.
- Build stamp v3.6 on this new page; stylesheet link uses `?v=3.6`.
- Verified: all 26 referenced images exist, zero em-dashes, HTML tag balance clean, all 6 lake anchors present exactly once.

## v3.5.1 — 2026-07-06 · Netlify cache hotfix + closing CTA consistency fix

Two follow-up fixes after v3.5 shipped and the live Netlify site looked broken (unstyled text, no card layouts).

### Root cause and fix: stale CSS cache
- `netlify.toml` sets a 7-day `Cache-Control` on `/css/*`. With styles.css changing multiple times in one day (v3.0 through v3.5), any browser that loaded the site earlier kept serving old cached CSS against new HTML that referenced classes the cached CSS didn't define yet, rendering as plain unstyled text.
- Fixed by adding a `?v=3.5` cache-busting query string to the `styles.css` link on all 15 pages, forcing a fresh fetch. **This version must be bumped on every future release** or the same failure will recur.

### Design fix: closing CTA
- Every `.cta` section on every other page (about, anniversary, donate, events, faqs, getinvolved, news, prairie, thingstodo) uses the same simple pattern: centered heading, one paragraph, one white button, no image. v3.5's visit.html closing CTA broke this with a one-off split image/blue-block layout that didn't match anything else on the site.
- Replaced it with the standard `.cta`/`.wrap-narrow` pattern used everywhere else. Removed the now-orphaned `.cta-split`/`.cta-img` CSS.

## v3.5 — 2026-07-06 · Visit page design system: planning guide with visual rhythm

Second full-body rebuild of `visit.html` on the same day, replacing v3.4's structure with an explicit visual-rhythm design system (every section specifies its own layout, imagery, and CSS component).

### Structure
- **Hero**: background image swapped to the westbury-lake-drone aerial (center 30%); hero buttons removed entirely, since the essentials bar immediately below handles logistics.
- **Planning Your Visit**: three text `.plan-card` components (cream, green top border) replacing the plain `.igrid`/`.icard` pattern.
- **Seasonal Visitor Guide**: rebuilt as a two-column image/content split panel (`.seasonal-wrap`), image left with a floating season badge, copy and tips right. Still flagged `<!-- SEASONAL -->` for quarterly updates.
- **Choose Your Visit**: three photographed `.visit-card` components (image top, hover zoom, trip highlights, "Start at" lot tip) replacing the text-only cards from v3.4.
- **Best Place to Start**: new goal-first `.start-card` grid (Birdwatch / Prairie Boardwalk / Scenic Walk & Picnic / Explore the Entire Greenway), replacing v3.4's lot-matrix table and expanded lot cards entirely. Each card links to a single Things to Do anchor or prairie.html rather than the multi-link lot cards from the previous rebuild.
- **Park Map, Know Before You Go, Nearby Amenities**: carried forward from v3.4 with minor copy tightening; amenities converted from a list back to prose per this spec.
- **Closing CTA**: rebuilt as an image/copy split band (gazebo photo right) instead of v3.4's single centered CTA.

### Removed (superseded by this version)
- v3.4's `.lot-matrix` table and per-lot detail cards, and their CSS (`.lot-matrix`, `.lot-tip`, `.season-card`), now unused anywhere in the codebase and deleted rather than left orphaned.
- The `thingstodo.html#prairie-lake` and `thingstodo.html#heron-lake` anchor links from the old lot cards; this version links `#birds`, `#westbury-lake`, `#lakes`, and `prairie.html` instead.

### Technical
- New CSS added under `/* v3.5 visit page components */`: `.plan-grid`/`.plan-card`, `.seasonal`/`.seasonal-wrap` family, `.visit-cards`/`.visit-card`, `.start-grid`/`.start-card`, and a `.cta-split` mobile breakpoint for the closing CTA.
- Verified all 8 spec'd cross-links resolve: `visit.html#essentials`, `#parking`, `#map` (each present exactly once), `thingstodo.html#birds`, `#westbury-lake`, `#lakes`, and `prairie.html`.
- Zero em-dashes; HTML tag balance clean.
- Build stamp bumped to v3.5 on visit.html only.

## v3.4 — 2026-07-06 · Visit page full rebuild: planning guide structure

Full body rebuild of `visit.html` (nav, footer, and utility bar unchanged). Reframes the page from a parking-first layout into a planning guide: orientation, seasonal expectations, trip-length matching, then parking, map, and logistics.

### New sections
- **Planning Your Visit**: first-timer orientation, "how long should I stay," and best-time-to-visit cards.
- **Seasonal Visitor Guide**: a single rotating `.season-card` (Summer 2026 content), flagged with a `<!-- SEASONAL -->` comment for quarterly updates.
- **Choose Your Visit**: quick/half-day/full-day cards, each with a "Best lot" tip pointing to the right parking lot for that trip length.
- **Where to Park**: new `.lot-matrix` table (lot × lakes served × best for × directions) above the four expanded lot cards, now correctly split into four distinct lots (previously Clematis was one combined card). Each lot card links out to its matching Things to Do lake anchor (and prairie.html for Gasmer) instead of duplicating lake detail.
- **Know Before You Go** split into two groups: "Before You Arrive" (what to bring, restrooms/access) and "While You're Here" (etiquette benefit cards).
- **Nearby Amenities** converted from prose paragraphs to a scannable labeled list.
- **Closing CTA** simplified from a three-card row to one focused CTA ("Explore Things to Do") with a secondary "See upcoming events" link.

### Removed
- The old parking-first "What do you want to do?" four-card grid (superseded by the lot matrix + expanded cards).
- The standalone Forest Breathing teaser (that content lives on Things to Do; this page now just gets visitors there faster).
- The "Top 5 Moments" section (not part of the new structure; the first-timer's must-sees now live implicitly in the planning/parking cards).

### Corrections
- Clematis North and South are now described as genuinely distinct lots: North serves Willow *and* Heron Lake via Kinder Foundation and Audubon Trails; South serves Willow Lake only via the Kinder Foundation Trail, and is positioned as the quieter option.

### Technical
- New CSS added under `/* v3.4 visit page */`: `.season-card`, `.lot-matrix` (with a mobile card-collapse breakpoint at 640px), `.lot-tip`. No existing classes modified.
- Verified all cross-links resolve: `visit.html#essentials`, `#parking`, `#map` (each present exactly once), and the four new `thingstodo.html#...-lake` anchors plus `prairie.html`.
- Meta description updated to reflect the new planning-guide framing.
- Build stamp bumped to v3.4 on visit.html only.

## v3.3 — 2026-07-05 · Technical audit fixes, button consistency, heading hierarchy, homepage content

### Homepage (index.html)
- Secondary hero CTA changed to "See What's Happening" linking to events.html.
- Removed the redundant standalone "Now Open" Prairie Boardwalk feature band (prairie still appears in the hero, events card, activity grid, and lakes section).
- Added a signature label under each of the six lakes (e.g. "Best First Stop", "Premier Birding"), wrapped with the heading in a `.lk-head` cell so the four-column lake grid stays intact.
- Unified the events module: featured card + upcoming list now share one `.up-module` cream panel under a single "What's Happening" heading.
- Added `aria-label` to each activity icon link and matching `alt` text on each icon image.
- OG/Twitter image switched to the new `westbury-lake-drone.jpg` hero.

### Button consistency
- 404 "Plan Your Visit", visit "Learn Forest Breathing" changed from blue to green (primary actions). Donate "Learn More" was already green. No `btn-blue` remains site-wide.
- about.html flood-band button retitled "See Our Events" (removed the unpublished "Rooted Resilience" name), kept as ghost on the dark band.

### Heading hierarchy
- Footer column headings (Visit / Explore / Connect) changed from `<h4>` to `<div class="f-col-head">` across all pages, removing a heading-level skip; added `.f-col-head` style.
- Benefit-card headings audited: already `<h3>` everywhere (no `<h2>` found), so no change needed.

### SEO
- Shortened over-length titles: index → "Willow Waterhole Greenspace | Houston Urban Nature" (50ch); prairie → "Prairie Boardwalk | Willow Waterhole Greenspace, Houston" (56ch).
- Lengthened the 404 meta description to a fuller 126-character version.

### Files & assets
- Verified the three `news/` posts, the seven `images/press/` placeholder logos, and the visit park-map image all exist in the repo.
- getinvolved.html OG/Twitter image changed from `support/27.jpg` to the more descriptive `support/support-01.jpg`.

### Notes / still pending
- index `og:title`/`twitter:title` intentionally keep the longer descriptive title; only the SEO `<title>` was shortened.
- Real event dates, MusicFEST image, real press logos, David's TPW photos, staff/board roster, and the Houston Business Journal TIRZ piece remain outstanding (see v3.2 notes).

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
