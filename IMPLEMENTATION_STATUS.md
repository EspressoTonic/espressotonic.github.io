# Implementation status

- Current implementation: Night Gallery portfolio with three added case studies and horse-racing results integration
- Latest completed task: horse-racing publication and live verification (2026-10-15)
- Branch: main; integration merged from codex/horse-racing-integration
- Code: this separate projects repository
- Local release preview: http://127.0.0.1:4326
- Public site: https://espressotonic.github.io/; see dated release checkpoints below

## Initial v1 baseline — historical

- Astro 7.3.8 static site, validated Markdown, ordinary CSS, no client framework.
- Homepage, both category listings, individual case studies, CV, 404 and sitemap.
- Four production-included project pages: MAGraph, EnzymeMatch, Fridge Match, Location Todo.
- Spatial-omics page exists as an editorial draft, visible in development only.
- Shared profile/CV/output records, optimized real sample-data screenshots, original explanatory SVGs.
- Same-build two-page CV PDF with public-domain internal link annotations.
- Validation and manually triggered main-only Pages deployment workflows.
- README for content changes, preview, build, review, release and rollback.

## Initial v1 verification — historical

- Content/schema/TypeScript check passed; zero errors, zero warnings/hints on the final check.
- Release build passed; nine HTML pages, local links/fragments/images and PDF checked.
- Three content-policy tests passed.
- Fifteen Chromium browser/accessibility tests passed on the final artifact.
- Responsive overflow checked at 360, 768 and 1440px; no-JavaScript navigation and keyboard focus checked.
- CV text extraction, both rendered pages and 13 link annotations checked; no localhost PDF targets.
- Local IAB navigation and visual inspection completed; selected evidence in ignored .qa/.
- npm audit: zero reported vulnerabilities.

## Ongoing content review

- Review biography, public email/ORCID choice, current employment and all public wording.
- Spatial-omics stays excluded until its employer-facing wording is reviewed.
- Publish code/content changes manually on main after validation; bounded horse-racing snapshot-only updates use the fully validated automatic path.
- Latest deployment and live deep-link verification passed; repeat these checks for subsequent releases.

## Continue

Read README.md and the actual working state. Night Gallery implementation T00–T10 and the owner-authorized release are complete. Pages uses the custom Actions build; the site is live. Preserve the dated checkpoints below. Prior v1 test counts are history; the final release checks are recorded in the latest checkpoint.

## 2026-10-13 — Night Gallery design handoff

Owner selected D. Five Stitch-generated page concepts were locally reconciled to existing source copy; EnzymeMatch and Location Todo were added as applications of the two detail templates. All seven responsive HTML designs, current desktop opening captures, real local sample-data screenshots, content contracts, selected `docs/design/DESIGN.md`, and `docs/IMPLEMENTATION_PLAN.md` are retained. Narrow phone/desktop layout, assets and key navigation were checked in IAB. These are design checks, not new application test results.

No website application, dependency, build/PDF script, test, or deployment configuration changed in this task. Existing v1 validation above remains historical. No commit/push/deployment. Implementation follows T00–T10 only when requested. The current preview's PDF is the existing v1 file; final dark-web/light-print behavior requires the planned release verification.


## 2026-10-13 — Expanded portfolio, Blog and SNS design handoff

The retained local designs now cover all thirteen requested projects: four research and nine personal. Nine complete public-copy briefs, a Blog empty state, the expanded homepage/indexes, shared four-item navigation and LinkedIn/Instagram/X/Threads as plain noninteractive labels are included. No public SNS profile URL is inferred. All thirteen project mockups are linked in the design gallery; the application still has four public records plus the excluded employer draft.

The amended implementation plan retains eleven T00–T10 slices and specifies exact new content, source/release gates, optional unknown project periods, zero-post Blog behavior, future article language handling, unlinked SNS checks, CV selection preservation and meaningful validation. Existing CV content and the four original detail bodies are preserved. New text-led case studies do not invent images or results.

Design QA checked all eighteen visitor pages at 360 and 1280 pixels and representative routes at 390 pixels. No horizontal overflow, broken loaded images or invalid fragments were observed; four mobile nav links have 44px targets and SNS lists contain zero anchors. Local opening captures were retained. This is design/planning completion only; no new application validation, source changes, commit, push or deployment occurred.


## 2026-10-13 — Night Gallery implementation complete

All eleven implementation slices T00–T10 are complete. The approved copy was assembled as nine editorial drafts, checked against its retained brief and privacy/evidence boundaries, and included in the local release candidate. There are now thirteen non-draft project records (four research/nine personal) plus the excluded employer draft. No new project date, code/demo link, image, benchmark, scientific result or product-release claim was fabricated. Unknown periods remain absent for Nook Cam, JUNIOR and TC.

The current artifact has nineteen HTML pages (homepage, two indexes, thirteen details, Blog, CV and custom 404), zero article routes, a generated two-page CV PDF, local WOFF2 typography, actual optimized prototype captures, source-constrained concept diagrams, and a dark favicon/social image. Header navigation is Research / Personal Projects / Blog / CV. LinkedIn, Instagram, X and Threads are plain labels; professional contact links remain functional and the CV omits inactive SNS labels.

### Current verification

- `npm test`: nine policy/source-state tests, including drafts, hero exclusion, optional dates, curated groups, SNS URL validation and article publication rules.
- `npm run build:release`: source checks and Astro diagnostics (zero errors/warnings/hints), static build, same-build CV PDF generation, and artifact validation. The standard empty-Blog loader notices are expected, not missing-content failures.
- `npm run test:site`: thirty-four Chromium tests, covering all eighteen ordinary public routes, axe, five widths (360, 390, 768, 1280, 1440), 44px navigation, homepage curation, Blog zero state, noninteractive SNS, absent draft routes, actual TOC scroll, no-JavaScript navigation, PDF download, authored CV selections and 200% reflow. Public pages made no external runtime asset requests.
- IAB reviewed the opening, indexes, representative image/text case studies, Blog/SNS and CV; traversed the primary research/detail/CV/Blog flow. Current desktop reference comparisons use 1280×800; phone review uses 390×844.
- The future article template was built and rendered with long Korean text in a separate temporary copy. `lang=ko`, readable reflow and related public-project links were confirmed; its draft article route stayed absent. The actual collection still contains zero posts.
- Both PDF pages were rendered with Poppler and inspected. Text, full authors, all three languages and canonical link annotations were checked. White paper, dark legible type, complete sections and two-page pagination are preserved.
- All four original case-study bodies and the entire CV record are unchanged; publication records and package/lock files are unchanged. Source-only public-copy JSON provenance was not imported. Existing uncommitted work was preserved.

### Fidelity ledger

| Comparison | Accepted reference | Implementation evidence / resolution |
| --- | --- | --- |
| Opening copy and hierarchy | `docs/design/stitch/homepage.html`, `homepage-opening.png` | Exact selected headline, both paragraphs, name, navigation, actions and MAGraph feature; no extra hero copy. |
| Desktop geometry | Same reference at 1280×800 | Header/outer gutters match; H1 is 44px Sora/40px line height, width 776px at x48/y137. Corrected initial line-height/column drift; important targets retain at least 44px. |
| Palette and typography | `docs/design/DESIGN.md` | Exact navy/periwinkle/text tokens, local Sora/Inter, correct active/focus colors. No remote font/Tailwind runtime or warm site surfaces. |
| Research media | Reviewed MAGraph/EnzymeMatch concepts | Removed unsupported `core_orf`, embedding/target labels and repeated generic graphics. Kept gene-family/proximity semantics and honest visible concept captions; readable text accompanies narrow diagrams. |
| Actual product imagery | Fridge Match/Location Todo references | Reused the exact source captures, with contained orientation, sample-data captions and no recoloring or invented UI. Fixed the near-square Fridge capture being misclassified as a narrow portrait; added a rendered-width/aspect-ratio regression check. |
| Project detail treatments | Existing exemplars and nine text-led designs | Shared route preserves full source prose, real stage/role/optional period, actual H2-derived TOC and category return links; no blank media filler. |
| Blog/SNS | `subpages/blog.html`, expanded homepage | Exact empty-state copy and four unlinked platform labels. Zero fake articles, guessed profiles or disabled controls. |
| CV and print | `subpages/cv.html`, source CV | Source selections/authors/periods complete; date-column web layout and responsive index; white-paper print reset, inspected two-page PDF. |

The source-constrained diagram labels, compact paired MycoChase name, and 44px target refinements are intentional reconciliations required by the accepted plan. No material visual mismatch remains in the inspected views. Current review images were captured locally with the Stitch browser-capture CLI; nothing was uploaded to a design service.

### Remaining release scope

Local implementation is complete. No commit, push, merge or deployment occurred, and GitHub Actions/live Pages deep links were not run. Browser automation uses Chromium; additional browser/device-specific behavior can be checked after publication. The project case studies retain their own scientific/product limits; site tests do not validate those underlying research models or prototypes.


## 2026-10-14 — Commit and push authorization

The owner requested committing and pushing the completed implementation to `origin` on `codex/cv-homepage`. Include the intended application source, content, tests, workflows, licensed assets and retained design references. Generated build output, dependency directories, browser reports and private scratch records remain ignored. The validation workflow runs on branch push; the Pages workflow requires a separate manual run on `main`. Historical local-only statements above describe their dated checkpoints.


## 2026-10-14 — Release preparation and Linux PDF validation

Implementation commit `e2dee33` was pushed to `codex/cv-homepage`; the owner then authorized merging to `main` and deploying to GitHub Pages. The existing Pages source is legacy `main` root publishing and must switch to the custom Actions build for Astro output.

The first Linux CI release check falsely reported missing publication authors: PDF.js inserted spaces within positioned glyphs (for example `Yo o jung Hwang`). The retained two-page CI PDF was inspected and all 38 source author entries confirmed. Text comparison now tolerates extraction whitespace while preserving authored characters; a regression test rejects missing/misspelled entries. Local validation passed ten unit tests, the full release build/PDF check and thirty-four browser tests. The validation workflow retains its build artifact even on failure so future release failures are inspectable. Final CI, merge, deployment and live checks remain the next release steps.


## 2026-10-14 — Main merge and GitHub Pages release complete

Corrected branch validation [38485685583](https://github.com/EspressoTonic/espressotonic.github.io/actions/runs/38485685583) passed all ten unit tests, the nineteen-page release build/two-page CV PDF validation, and thirty-four Chromium tests. `main` was fast-forwarded to site code `3bea82e` and pushed. Pages was switched from legacy root publishing to custom workflow publishing. The manually dispatched [deployment 38485870488](https://github.com/EspressoTonic/espressotonic.github.io/actions/runs/38485870488) passed both build and deploy jobs.

The live site is https://espressotonic.github.io/. Live Chromium checks passed all eighteen public content routes, canonical URLs, loaded images and zero page/console errors. Desktop (1280×800) and phone (390×844) screenshots were inspected; representative phone routes had no horizontal overflow. Research → MAGraph → CV → actual PDF download worked; all four primary navigation links and keyboard skip worked without JavaScript. The downloaded PDF contains two pages, all 38 author entries, all three languages and no localhost annotations. Unknown routes return the custom 404 and the employer draft remains excluded from routes and sitemap. Live-check scripts, downloaded PDFs and screenshots are retained only in temporary storage outside the repository/vault. This documentation checkpoint does not change the deployed site code.


## 2026-10-15 — Three project additions

Added source-backed case studies for AI Usage Bar, Codex Account Switcher and GeNeDis Multi-Omics. The two native/CLI tools are public-source prototypes with remaining integration gates; GeNeDis is data acquisition and QC/pipeline design, without a completed model, selected endpoint or submission claim. Verified public code links for the two tools; omitted the unavailable GeNeDis repository link. Added cross-links between the tools and from GeNeDis to JUNIOR.

The source now has sixteen public projects (five research/eleven personal), plus the excluded employer draft. Recently added homepage rows use concise summaries; personal tools have their own index group. Full original case-study and CV content remains unchanged. Work is isolated on `codex/portfolio-additions`; Horse-Racing content/assets are outside this change. Playwright uses an optional per-worktree port and the dependency-free JavaScript config so simultaneous local checks can avoid port collisions.

Verification: eleven unit tests, twenty-two-page release build and shared two-page CV validation, thirty-eight Chromium tests including all twenty-one ordinary routes, accessibility, five widths and new project navigation. Desktop and phone captures were inspected. Browser plugin/skill is absent, so the existing Playwright workflow provides browser verification. Screenshots and scratch files stay outside Git and the vault. Commit/publication status is recorded by Git and the release handoff.


## 2026-10-15 — Horse-racing integration verified locally

Preserved the Astro case-study route and added a self-contained Night Gallery demo
at `/demos/horse-racing/`. The native evidence summary and React app use the same
verified display JSON. Model dropdowns read saved results; no model service,
credentials or training data are shipped. Paper comparisons retain cohort limits,
weekly replay remains distinct from prospective evidence, and historical losses
remain visible. Static fallback landmarks and no-JavaScript navigation pass the
ordinary checker; no blanket HTML-check exemption was added.

Source release `b1fc95290888f57e`, model-project source `f5462cc`. Fourteen unit and
boundary tests, the complete 20-HTML-page release/PDF build, and all 37 browser tests
pass. Tests cover existing content/CV contracts plus both 390/1440 dashboard flows,
all five model choices, hash reload, no-JS fallback, one JSON fetch, no external
runtime requests and axe accessibility. A mobile keyboard-scroll accessibility
issue was found and corrected in the source before import. Actual desktop/mobile
screenshots were inspected outside Git; Browser plugin unavailable, Playwright used.

Added a verified public-bundle importer and approved source hashes, with data-only
publication gated by every changed path and all existing release checks. The
compute-host publisher uses an isolated worktree, noninteractive SSH and ordinary
fast-forward pushes. Authentication succeeded from a systemd user job. Code/asset
changes require review. See `docs/HORSE_RACING_INTEGRATION.md` for contracts, failure
behavior and rollback. This checkpoint precedes the initial integration deployment.

### Combined-main verification

Merged the concurrent `3d011f1` additions into the horse-racing branch, preserving
all three case studies, their homepage/index changes, test assertions and configurable
Playwright port. The combined artifact passes fifteen unit tests, the complete
23-HTML-page release/two-page PDF validation, and all 41 Chromium tests on port 4329.
The earlier 20-page/37-test checkpoint describes the pre-merge portfolio.


## 2026-10-15 — Horse-racing results published and verified

Portfolio PR2 merged after current-main integration and successful CI. The compute
publisher delivered release `0f90ecd21b7a58a7` in data-only commit `68fc722`;
[Pages run 38688583560](https://github.com/EspressoTonic/espressotonic.github.io/actions/runs/38688583560)
passed gate, full release validation and deployment. Separate main validation
passed. This supersedes the earlier integration checkpoint's pending publication.

Both `/projects/horse-racing/` and `/demos/horse-racing/` are live. Live Chromium
checks verified all 21 ordinary content routes, CV download, all eight demo files
against release hashes, five model choices, all views, simulation controls, hash
reload, desktop 1440×1000 and phone 390×844, and no-JavaScript summary/fallback.
There were zero page/console errors and external runtime requests, with one JSON
fetch on the first dashboard load. Actual live screenshots were inspected outside
Git. The complete build remains 23 HTML pages, 15 unit tests and 41 browser tests.

Wednesday 12:00 KST model refresh and Mon/Thu–Sun 08:00 forecast captures now deliver
verified data through the compute host's systemd services. A full repeat under
systemd succeeded without a duplicate commit. Offline host/network delays updates;
failed validation preserves the prior Pages deployment. Source/asset changes need
a reviewed import and manual publication. No training artifacts or credentials
are public; statistical and prototype caveats remain unchanged.
