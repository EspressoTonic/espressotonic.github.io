# Night Gallery — selected visual system

Status: D selected by the owner, 2026-10-13. This specification reconciles the selected homepage and the subpage design references. It governs future implementation; the current task changed design documentation only. New page mockups remain reviewable proposals within D. No generated scientific or biographical claim outranks source content.

## References and precedence

- Current homepage composition: `stitch/homepage.html` and `stitch/homepage-opening.png`. Original selected D references remain in `stitch/dark/D-desktop.html`, `D-opening.png`, and `D-mobile.html`/`.png`; current responsive and content contracts supersede their older shell and placeholders.
- Subpage composition and review: `stitch/subpages/REVIEW.md` and named HTML/PNG files.
- Factual source: current `src/content/` records, then `stitch/subpages/CONTENT_CONTRACTS.md`, the nine complete public-safe expansion briefs in `stitch/expansion/CONTENT_ADDITIONS.md`, and the exact-copy sections in `../IMPLEMENTATION_PLAN.md`. Expansion briefs are editorial drafts, not newly released records.
- Responsive rules and source integrity override accidental mockup differences. Earlier A/B light and C Carbon Atlas designs are history. `stitch/DESIGN.generated.md` is not current.

## Character

A dark, image-led research portfolio with open structure, confident sans-serif headings, readable case studies, and restrained blue accents. Research evidence and the person's work provide visual identity. Use a horizontal header, varied project compositions, modest separators and an intentional reading column. Avoid cream/serif editorial styling, green dashboard framing, fake telemetry, generic terminal windows, glowing spheres and decorative metrics.

## Tokens

| Semantic token | Value | Purpose |
| --- | --- | --- |
| Canvas | `#090e1b` | Overall screen background |
| Surface | `#101a2c` | Media frames and restrained panels |
| Raised surface | `#16233b` | Small inner media areas |
| Primary text | `#edf3ff` | Headings and strong copy |
| Secondary text | `#adb9d0` | Body text, metadata and captions |
| Accent | `#8fa7ff` | Links, focus and main button fill |
| Accent hover | `#b2c3ff` | Hover/focus refinement |
| On-accent | `#090e1b` | Text on accent-filled buttons |
| Rule | Low-opacity periwinkle | Decorative separators; stronger boundary for interactive controls |

Sora display; Inter body/UI. Self-host only required licensed weights with `font-display: swap`. A mono metadata accent is optional, not a reason to add another production font. Body 16–18px; generous line height around 1.6–1.75. H1 scales around 32–48px depending on page; no forced line break that fails at intermediate widths. H2 around 24–30px. Essential metadata/captions remain readable. Test 4.5:1 normal-text contrast on each actual surface.

Outer content width about 1200–1280px with 20px phone padding and up to 48px desktop padding. Prose stays about 65–72ch. Use clear section spacing, usually 56–80px desktop and 40–56px phone. Small corners about 6–10px; avoid putting every paragraph into a card. These are implementation starting values; match reviewed composition at actual viewports.

## Shared shell and interactions

- Header: name/home at left; Research, Personal Projects, Blog, CV at right. On phones, name row then visible navigation row. No hamburger or client runtime required. At least 44px touch area for important controls.
- Footer: public email, GitHub, ORCID, and relevant navigation. A separate SNS group contains LinkedIn, Instagram, X and Threads labels with local monochrome brand marks and no hyperlinks; omit that group from CV and PDF. No invented availability, location, phone, portrait, affiliation or logo.
- Primary button: periwinkle fill with dark text. Secondary action: plain link or restrained outlined button. Focus is an obvious 2px accent outline with offset. Hover must not be the only state indicator.
- Main content has one H1, skip link and semantic landmarks. Every essential flow works without JavaScript.
- Screen links and IDs are design references, not production routing. Build real existing Astro routes and preserve canonical URLs.

## Page families

| Family | Composition | Content rule |
| --- | --- | --- |
| Homepage | Introduction + MAGraph feature, wide concept visual, open research rows, varied personal gallery, interests, citations, Blog preview, SNS, contact | Exact selected copy in implementation plan; missing projects do not create dead cards |
| Research index | Brief introduction, open project/media rows, distinct research outputs | Four intended research projects; all eligible research remains accessible, including EnzymeMatch |
| Personal index | Brief introduction, actual app images and open project rows in three groups, explicit stage | Nine intended projects; Everyday tools, Agents & knowledge, Vision & data experiments; filter drafts before rendering |
| Research detail | Back link, title/summary, role/period/status, supported outputs, explanatory figure, article + TOC | MAGraph exemplar extends to EnzymeMatch and VCC and MycoChase (published as GenoMycAnalyzer) |
| Personal detail | Back link, title/summary/stage, role/period, prominent screenshot, product narrative + TOC | Fridge Match exemplar extends to Location Todo and the other seven personal projects, with text-led layouts when no public image is available |
| Blog | Open title and topic rows beside a complete empty state; later article prose | H1 “Notes from the work.”, visible Blog label, “No posts yet.”; no fabricated posts or dates |
| CV | Name/discipline/contact/PDF action, compact anchors, chronological text, full citations, capabilities/languages | Shared source remains complete; no independent CV copy or promotional truncation |

The article section rhythm is question/problem → contribution → approach/decisions → evidence → limitations/current stage → lessons. Preserve actual Markdown paragraphs, not just headings from screenshots. Use a narrow desktop TOC if helpful, in-flow anchors on phones, with correct scroll offset. Metadata is an accessible definition list, not a KPI dashboard.

CV dates may form a narrow left column beside entry content at desktop. Stack naturally at phone widths. Full author lists wrap without shrinking into illegibility. Keep the existing `#outputs` fragment. PDF path stays `/files/woo-young-cho-cv.pdf`. Screen is dark; printed PDF is white with dark text, with explicit token reset and no navigation. Current source targets two readable A4 pages; do not force fit by deleting content.

## Media contracts

- MAGraph: concept of gene families and observed assembly proximity only. No GNN, causal/regulatory claims, invented benchmark plots or fabricated node semantics. Caption it as a concept rather than experimental output.
- Fridge Match / Location Todo: preserve actual existing light product UI within the dark portfolio. Use `contain` and truthful sample-data captions. Do not recolor, fake or crop away relevant controls.
- Stitch placeholders are deliberate because actual screenshot upload was not authorized after automatic review blocked it. Actual images were inserted into the locally reviewed design exports and remain ready for implementation from their existing source files.
- Never ship placeholders merely to match a concept's empty space. Unsupported/missing imagery reduces the media layout cleanly. Keep concept/actual-source classifications in the asset inventory.

## Responsive system

One responsive DOM/template per route. Desktop side content stacks below the corresponding introduction, preserving reading order. App screenshots keep their aspect ratio. Dense conceptual diagrams need a phone composition or adjacent text; do not squeeze tiny labels. Long roles, publication titles, author lists, URLs and education names wrap. Test 360, 390, 768, 1280 and 1440 widths, keyboard focus and 200% zoom/reflow.

## Implementation boundary

Use the existing Astro static/content architecture and ordinary CSS. Generated Tailwind CDN/Google Fonts HTML is reference material only. No new React framework, backend, CMS, animation framework, deployment service or account feature. Use the eleven verified slices and acceptance gates in `../IMPLEMENTATION_PLAN.md`.

## Expanded portfolio, Blog and SNS contract — 2026-10-13

The current reference set is eighteen visitor-page mockups: homepage, thirteen project details, two indexes, Blog and CV. The gallery is a separate review utility. All thirteen are designed; the existing application still has four public project records and one excluded employer-specific draft. Create the nine new public-safe editorial records during implementation, preserving their evidence boundaries and release gates. A design link is not evidence that a production route already exists.

- Homepage personal work: Fridge Match and Location Todo use actual contained screenshots; Commute Log is an open text row. Six compact links expose JUNIOR, LawGPT, Horse-Racing Forecast Research, TC Personal Agent, Nook Cam and Ballet Pose Feedback. EnzymeMatch remains reachable from the Research index.
- The nine new case studies use the existing typography, title/summary, role/stage/optional period, article and anchor rhythm. No screenshots, results or product availability are invented to fill space. Nook Cam, JUNIOR and TC omit project periods because none are supported.
- Blog homepage preview: “Notes from the work.” with “Research notes, project write-ups, and things I learn along the way. No posts yet; longer-form writing will live here.” Link “Visit the blog” to `/blog/`.
- Blog page: eyebrow “Blog / Coming later”, H1 “Notes from the work.”, scope “A place for research notes, project write-ups, and things I learn along the way.”, empty-state heading “No posts yet.” Three topic rows describe intended scope, not existing article titles. No fake posts, newsletter, counters, feed, search or loading placeholders.
- Homepage social: eyebrow “SNS”, heading “Elsewhere”, followed by LinkedIn, Instagram, X and Threads in an ordinary list. Each name has a 20px local Font Awesome brand SVG; the SVG is decorative and hidden from assistive technology. The exact four names remain noninteractive spans: no href, guessed handles, disabled buttons, tab stops or pointer cursor. Existing professional contact links remain separate and functional. No SNS route is needed.
- Final production styles must not copy the external CSS/CDN loading strategy of these design references. Keep ordinary Astro CSS and self-hosted licensed fonts as already planned.
