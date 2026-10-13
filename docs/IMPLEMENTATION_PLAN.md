# Night Gallery implementation plan — technical handoff

Prepared 2026-10-13 from the current repository. Implementation was subsequently completed locally on 2026-10-13; see `IMPLEMENTATION_STATUS.md` for current verification and release scope. The original future-tense sequence below is retained as the implementation contract. This is a future implementation plan, not a record of completed implementation. The owner selected D — Night Gallery, expanded the intended portfolio to thirteen projects, requested a future Blog section and four unlinked social-platform labels, and authorized designs and this plan. Website code has not been changed by this planning task. Implement only when the owner asks to proceed; public push, merge, Pages configuration, and deployment require the owner's publication instruction.

## Start here

This is the active implementation handoff for **D — Night Gallery**. Earlier A/B/C recommendations are superseded. D was selected by the owner; the new subpages are extensions for review, not proof of new achievements or publication permission.

Read in this order:

1. `docs/design/DESIGN.md` — reconciled visual system and component rules.
2. `docs/design/stitch/subpages/REVIEW.md` — desktop/phone references, exact design files, intentional adaptations, and design QA.
3. `docs/design/stitch/subpages/CONTENT_CONTRACTS.md` — source-backed project/CV wording and content limits.
4. `docs/design/stitch/expansion/CONTENT_ADDITIONS.md` — source-backed public-copy drafts for the nine newly included projects, with stage and evidence limits.
5. This plan, then the actual files named in your next slice.

The design package now covers **thirteen project details**, both category indexes, a real empty Blog index, and CV in the selected D style. The four existing public details are MAGraph, EnzymeMatch, Fridge Match and Location Todo. The nine additions are Virtual Cell Challenge 2026, MycoChase (published as GenoMycAnalyzer), Commute Log, JUNIOR, LawGPT, Horse-Racing Forecast Research, Nook Cam, Ballet Pose Feedback, and TC Personal Agent. LawGPT appears once. All use the same two reusable case-study treatments; do not implement thirteen unrelated page components.

The added pages are design references with source-backed public-copy drafts, not proof of completed products, benchmarks or publication permission. The full design inventory and current production inventory are different: only records that satisfy the content/release gates generate production routes. All thirteen remain in the implementation scope; missing dates or absent public repository links do not justify fabricating facts or dropping a substantive project. The Blog launches with zero published posts. Social shows LinkedIn, Instagram, X and Threads as plain text with no hyperlinks, exactly as requested.

### Copyable execution prompt for a smaller model

> Implement D — Night Gallery in `/Users/wycho/Documents/projects/espressotonic.github.io` by following `docs/IMPLEMENTATION_PLAN.md`, `docs/design/DESIGN.md`, the subpage review/content contracts, and `docs/design/stitch/expansion/CONTENT_ADDITIONS.md`. Work through T00–T10 in order, in small verified slices. Cover the thirteen designed project details through the existing shared Astro route, with four current public records and nine new public-safe editorial drafts subject to source/release gates. Add the real `/blog/` index with zero published posts and plain-text LinkedIn, Instagram, X and Threads labels without hyperlinks. Preserve existing uncommitted work, full case-study text, draft filtering, actual contact/publication facts, and the shared web/PDF CV with its authored selections unchanged. Do not invent dates, performance, product availability, profile URLs or blog articles. Do not import private vault drafts or source data, use the vault for code, ship exported CDN HTML, add a backend/framework, or commit/push/deploy without my instruction. Finish the locally reviewable site, release/PDF/browser checks and documentation; report intended-versus-public coverage and concrete limitations. Continue independent work when a factual detail is missing; ask only about that unresolved decision.

The eleven slices are a work sequence, not eleven permission gates. During an authorized implementation, proceed through ordinary reversible work without asking approval after each slice. This document itself does not start implementation.

## 1. Outcome and non-negotiable constraints

Deliver one coherent, responsive, dark portfolio for research labs and AI/biotech employers. The homepage introduces Woo Young Cho and makes the work easy to assess. Research and independent personal projects have separate indexes and thirteen intended truthful case studies. A real Blog index reserves space for future writing without inventing posts, and a Social section names the four selected platforms without links. The online CV uses Night Gallery; its printable PDF remains white paper with dark, readable text.

- Work in `/Users/wycho/Documents/projects/espressotonic.github.io`. Never put website code, scripts, screenshots, generated files, package caches, or design exports in the Obsidian vault.
- Keep Astro static output, TypeScript, Markdown collections, ordinary CSS, and existing GitHub Pages routes. No backend, authentication, client framework, CMS, analytics, search/filter application, animation library, or Tailwind dependency is required.
- D's composition, dark palette, sans-serif typography, and image-led character are selected. Incidental generated copy, scientific diagrams, labels, charts, numbers, and interface screens are not facts and are not automatically approved content.
- Preserve existing project/publication records, stable IDs, complete case-study bodies, contribution boundaries, and draft exclusion. Existing EnzymeMatch remains discoverable even if no longer featured on the homepage. The spatial-omics case study stays draft pending its public wording review.
- Generate a single responsive page per route. Desktop/mobile Stitch exports are visual references; do not embed them, replace the Astro source with export HTML, or ship separate mobile pages.
- No production link may point at an absent or draft route. Missing public code/demo links are omitted, not replaced with `#`, invented URLs, disabled buttons, or private links.
- Existing Obsidian blog drafts and project notes are sources, not automatic public content. Do not import or publish them wholesale; retain only reviewed public-safe copy in this public repository. A `draft: true` source file is still visible if pushed.
- LinkedIn, Instagram, X and Threads must remain plain labels until the owner provides URLs and asks to activate them. Existing email/GitHub/ORCID contact links remain separate and functional.
- Existing uncommitted work belongs to the user. Do not reset, clean, mass-delete, or rebuild the repository from scratch.

## 2. Verified starting point

The repository currently uses Astro 7.3.8, Node 24+, `astro:content`, `astro:assets`, strict TypeScript, Playwright, axe, and native Node tests. Dependency versions are pinned in `package.json`/lockfile; this redesign does not require upgrades.

| Current file | Existing responsibility | Planned responsibility |
| --- | --- | --- |
| `src/content.config.ts` | Validated profile/CV/project/publication schemas | Add minimal Blog/social schemas and optional unknown project dates; retain safe defaults |
| `src/lib/content.ts` | Collection access, preview policy, URLs, labels/dates | Public project/post selection, stable URLs and explicit homepage curation |
| `src/lib/policy.mjs` | Pure draft/category/feature/date selection | Retain and extend only if exclusion logic warrants a tested helper |
| `src/layouts/BaseLayout.astro` | SEO, skip link, navigation, footer, CSS | Four-item dark navigation, plain Social labels, font loading, active state and article language |
| `src/styles/tokens.css` | Seven light color variables | Accepted semantic Night Gallery colors, typography, spacing |
| `src/styles/global.css` | All responsive page/component styles | Refactor light rules into scoped dark components without piling up conflicting overrides |
| `src/styles/print.css` | White A4 CV formatting | Explicit print token reset and layout isolation |
| `src/pages/index.astro` | Current introduction/interests, cards, experience/contact | D hero, curated projects, interests/publications, honest Blog preview, background/contact and Social |
| `src/pages/research/index.astro` | Research grid and outputs | Research index in D style; all public research remains reachable |
| `src/pages/personal-projects/index.astro` | Personal grid | Personal index in D style, clear prototype status |
| `src/pages/projects/[id].astro` | One reusable project route with Markdown body/TOC/figures/outputs | Shared detail frame with research/personal media and body treatments |
| `src/pages/blog/index.astro` (new) | Absent | Real Blog route with zero-post empty state, later public post rows |
| `src/pages/blog/[id].astro` (new) | Absent | Shared future article route; no production article paths initially |
| `src/content/blog/.gitkeep` (new) | Absent | Preserve the intentionally empty Markdown collection directory |
| `src/pages/cv/index.astro` | CV heading/contact/PDF action | Dark online CV with anchors and a visible PDF action |
| `src/components/CvSections.astro` | CV content joined to public project/publication records | Preserve shared data and IDs; style for dark web and white print |
| `src/components/ProjectCard.astro` | Image, metadata, title, summary, project link | Shared card/row presentation using record fields |
| `src/components/ProjectIllustration.astro` | Generic three-stage workflow SVG | Project-specific explanatory variants, no unsupported methods/results |
| `src/components/PublicationList.astro` | Full citation/author/DOI rendering | Shared compact/home and full/CV presentations if needed |
| `src/pages/sitemap.xml.ts` | Static public routes from content selection | Keep draft-safe automatic generation |
| `scripts/check-content.mjs` | Source/reference/date/asset validation | Extend to new fields and hero reference checks |
| `scripts/build-release.mjs` | Check → build → PDF → artifact checks | Preserve this exact artifact flow |
| `scripts/generate-cv-pdf.mjs` | Print built `/cv/`, normalize internal links | Keep one source; adapt only if new print styling needs it |
| `scripts/check-build.mjs` | Route/draft/link/fragment/image/PDF validation | Keep and extend only for new meaningful release invariants |
| `tests/site.spec.ts` | Route/axe/overflow/navigation/PDF/draft checks | Update intended links and cover new public routes/templates |
| `tests/content.test.mjs` | Selection-policy tests | Preserve; add narrow cases only if selection semantics change |

Current public projects are `magraph`, `enzymematch`, `fridge-match`, `location-todo`. `spatial-omics-pipeline` is draft. All nine expansion project records and the Blog collection/routes are absent in v1. The thirteen designed details do not yet imply thirteen production routes. No Blog posts or SNS profile URLs are provided; do not create them from examples.

Current validated local baseline is recorded in `IMPLEMENTATION_STATUS.md`: nine HTML files including 404, two-page CV PDF, three policy tests, fifteen browser/accessibility tests. These are historical v1 results; rerun checks after implementation before claiming the redesign passes.

## 3. Accepted visual system

Use the accepted D homepage and newly designed D subpages as composition references. Record final screen IDs and any desktop/mobile reconciliation in `docs/design/stitch/subpages/REVIEW.md`. Keep older A/B/C designs as history, clearly superseded.

Suggested semantic mapping, taken from the selected D export:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#090e1b` | Canvas |
| `--surface` | `#101a2c` | Image/media surface and restrained panels |
| `--surface-raised` | `#16233b` | Selected nested media/control surfaces |
| `--ink` | `#edf3ff` | Headings and primary copy |
| `--muted` | `#adb9d0` | Body secondary copy and metadata |
| `--accent` | `#8fa7ff` | Links, focus, primary button fill |
| `--accent-hover` | `#b2c3ff` | Hover/focus interaction refinement |
| `--on-accent` | `#090e1b` | Primary button text |
| `--border` | visually derived from periwinkle at low opacity | Decorative separators, not sole control affordances |
| `--media` | `#101a2c` | Shared image canvas |

Do not use D's darker `#7f8ea8` for essential small copy without measuring contrast on its actual surface. Decorative separator contrast need not equal text contrast; interactive boundaries/focus and essential icons must remain perceptible. Normal text target is at least 4.5:1; large text and meaningful non-text controls at least 3:1.

- Sora for display headings; Inter for body/navigation. Mono only for small, optional metadata where helpful. No serif, beige, paper texture, terracotta, glowing orbs, fake telemetry, generic terminal styling, or glass dashboard panels.
- Self-host licensed, needed font files under `public/fonts/` with `font-display: swap`; keep a license file and a system fallback. Prefer variable fonts or a small real weight set. Do not leave Google Fonts or Tailwind CDN dependencies in production. Avoid adding a third font solely for decorative labels.
- Use approximately 1200–1280px outer content width, with 20px phone padding, 24–32px tablet padding, and up to 48px wide-screen padding. Match reviewed screens rather than treating these values as rigid.
- Display type scales with `clamp`; body 16–18px; narrow long-form prose approximately 65–72ch. H1 should wrap naturally and not require a `<br>` for one viewport.
- Open sections, clear separators, and distinct project media establish hierarchy. Do not turn every item into the same rounded card.
- Keep corners restrained (roughly 6–10px where the accepted screen uses them), motion subtle, focus visible, and reduced-motion honored.
- Use explicit dimensions/aspect ratio to reserve media space. Body/metadata alignment, reliable reading order, and image legibility take precedence over imitating an accidental export offset.

## 4. Content and minimal schema plan

Treat existing repository Markdown and the separately reviewed content inventory as factual sources. Preserve verified author order, contribution qualifiers, dates, status, DOI/URL, employer wording, and limitations. Generated screen text cannot overwrite these facts.

### 4.1 Profile/homepage

Update `src/content/profile/profile.md` with the agreed headline, concise two-paragraph introduction, three interest descriptions, and exploration sentence. Do not put page-sized JSX or HTML into the content file.

**Headline:** Understanding biology through its many measurements.

**Introduction:** I'm Woo Young Cho, a bioinformatics researcher working across omics, spatial imaging, and scientific software. I'm interested in developing machine-learning methods that bring complementary measurements into a shared representation of cellular states.

**Supporting paragraph:** Alongside research, I build practical applications and explore how useful AI assistants should work.

**Interest section heading:** Questions I'm drawn to.

| Interest title | Exact description |
| --- | --- |
| Multimodal representations of cellular states | Learning common representations from complementary biological measurements to understand cellular states. |
| Spatial biology and computational pathology | Connecting tissue morphology, molecular measurements, and spatial context to biological questions. |
| Protein structure, function, and molecular learning | Understanding molecular function and exploring how computational models can guide informative experiments. |

**Exploration sentence:** Currently exploring virtual biological systems and learning from experimental feedback.

**Background sentence:** My experience spans metagenomic representations, protein-structure analysis, scientific software, and spatial imaging.

**Contact heading:** Let's connect.

**Contact supporting text:** For research conversations, collaborations, and opportunities.

The interests are research directions, not proof of already achieved general-purpose models, clinical tools or active-learning expertise. The generated numeric interest eyebrows such as “01 / Multimodal States” are incidental and can be omitted. Preserve punctuation/wording as selected; curly versus straight apostrophe typography is not a factual change.


Minimal optional schema additions are sufficient:

- `heroProjectId: id.optional()` on profile, set to `magraph` for the accepted D homepage. Validate that it exists and is public for a release. Do not infer hero identity from alphabetical order or `featuredOrder` alone.
- `exploring: z.string().min(1).optional()` if the exploration sentence needs its own location below interests. Omit this field if the final implementation can keep it in meaningful Markdown without rendering it twice.
- `shortSummary: z.string().min(1).optional()` on projects only if existing summaries are too long for D's cards. Card/row uses `shortSummary ?? summary`; full detail/meta description/CV use the appropriate complete summary. Do not truncate mechanically with CSS line clamps that conceal meaning.
- Extend the existing `cover`/`figures` object with `fit: z.enum(['contain','cover']).default('contain')` only when data-specific crop behavior is needed. `contain` is the default for app screenshots and scientific figures. Intrinsic image dimensions determine portrait versus landscape; avoid duplicate desktop/mobile image fields unless different assets genuinely improve legibility.
- If evidence classification is required in more than one component, add `kind: z.enum(['screenshot','diagram','concept']).optional()` to the existing media object. It controls presentation only; a truthful visible caption remains required for conceptual imagery. Do not infer permission or verification from this value.

For projects with no supported implementation period, make `dateLabel` and `sortDate` optional rather than inserting filesystem or note-creation dates. Omit the period row when absent. Date-sorted indexes put dated records first (newest first) and undated records afterward by stable ID; featured ordering remains explicit and independent. Apply that rule in `policy.mjs` and update the source validator to check a date only when supplied. Keep `updated` required as the content-review date, never as a substitute project start. Nook Cam, JUNIOR and TC currently need this exception.

Avoid adding a page-builder schema, deeply nested section data, separate CV JSON, a new content database, or unused presentation fields. `statusDetail` already holds human-readable qualifications; retain the four current status enum values rather than creating a status enum for every design badge.

### 4.2 Homepage selection

Use explicit feature selection independent of date-sorted category indexes:

1. Resolve public hero `magraph`.
2. Select public featured research and exclude the hero before limiting the remaining feature rows. A limit applied before exclusion can silently drop a project.
3. Intended remaining research features are VCC and GenoMycAnalyzer once their reviewed source records are public. EnzymeMatch remains in the research index and keeps its stable detail route.
4. Personal work uses two actual-screenshot features, Fridge Match and Location Todo, followed by an open Commute Log row once public. This is three selected projects with varied presentation, not three identical screenshot cards. The current two-project limit must not silently exclude the Commute row.
5. Follow those features with six compact public-filtered links in this order: JUNIOR, LawGPT, Horse-Racing Forecast Research, TC Personal Agent, Nook Cam, Ballet Pose Feedback. These are compact discovery links rather than six more hero cards. Add a clear “All personal projects” link to the complete eligible index. All thirteen intended projects need the shared detail treatment. A project still in draft must disappear from the production home, index, related links, CV selections, and sitemap.
6. Keep `featuredOrder` unique per category across all records because the existing validator checks drafts too. Reconcile existing spatial-omics order 2 and EnzymeMatch order 3 before assigning new research orders.

Prefer a small helper in `src/lib/content.ts` returning `{ hero, research, personal, secondaryPersonal }` if selection repeats. Otherwise keep one readable server-rendered selection in `index.astro`. Use the pure `policy.mjs` only for general sorting/filtering rules worth testing.

| Feature | Intended short summary | Source/release gate |
| --- | --- | --- |
| MAGraph | Representing metagenomic gene neighbourhoods as graphs to investigate functional context. | Existing public record; Academic research · Master's thesis; hero must not repeat in remaining research rows |
| Virtual Cell Challenge 2026 | Developing and evaluating models of cellular responses across biological contexts. | No record yet; Independent research · Experiments and evaluation; source narrative must distinguish performed experiments, negative findings, proposed methods and unresolved evaluation |
| MycoChase (published as GenoMycAnalyzer) | Contributing pipelines and deployment work to reproducible sequencing-analysis software. | Publication exists, project record absent; owner-approved compact name; keep `/projects/genomycanalyzer/`, project dates and team contribution distinct from employment span |
| Fridge Match | An ingredient inventory and meal-planning prototype. | Existing public record; Private prototype; real existing screenshot preferred |
| Commute Log | Exploring recorded journeys and departure windows with traceable source information. | No record yet; Local MVP from retained brief is a source claim to reconcile with its project evidence; no live tracking/reliability implication |
| Location Todo | A location-aware reminder prototype with native mobile implementations. | Existing public record; Prototype; detail retains Android checked, full iOS build and physical-phone background validation pending |
| JUNIOR | Exploring supervised research assistants with JUNIOR | Secondary text link only after a substantive public-safe record exists; never a fabricated autonomous-scientist success story |

When content is not ready, render the smaller real portfolio cleanly. Do not ship empty, “coming soon,” or disabled cards to preserve the concept's card count. EnzymeMatch stays in the index; do not automatically promote or rewrite it solely to fill a missing VCC/GMA slot. No further owner choice is needed just to omit unsupported placeholders during authorized implementation.

Actual app screenshots retain real/sample-data captions. Concept illustrations remain explanatory. A label such as “Concept illustration” does not legitimize invented scientific facts inside the drawing. Source gates apply to the whole visual, including tiny node labels and numbers.


### 4.3 Project/publication inventory

Preserve the five existing project Markdown records and their full bodies; four are public and the employer-specific spatial-omics record stays draft. Add **nine substantive public-safe editorial records** from `docs/design/stitch/expansion/CONTENT_ADDITIONS.md` under `src/content/projects/`, initially with `draft: true`. The content brief has complete narratives rather than placeholder cards. Resolve public-readiness against its evidence boundaries before setting a record to `draft: false`; that flag governs release selection, not secrecy. Do not copy private source notes, credentials, source archives or raw audit JSON into the repository.

| Stable ID / file stem | Display title | Category | Required content boundary |
| --- | --- | --- | --- |
| `magraph` | MAGraph | Research | Existing master's thesis representation; later MetaGEAR team work distinct |
| `enzymematch` | EnzymeMatch | Research | Existing bachelor's thesis extension/evaluation; no invented later paper |
| `virtual-cell-challenge` | Virtual Cell Challenge 2026 | Research | Independent evaluation; preserve negative comparisons and latest pending versus performed experiments |
| `genomycanalyzer` | MycoChase (published as GenoMycAnalyzer) | Research | Owner-approved compact name, stable route; team software and pipeline/deployment contribution |
| `fridge-match` | Fridge Match | Personal | Existing private/local prototype; no public demo or invented impact |
| `location-todo` | Location Todo | Personal | Existing prototype; Android checked, full iOS/physical-device background limits retained |
| `commute-log` | Commute Log | Personal | Archive-backed local MVP; no live collector, complete route coverage or personal itinerary exposure |
| `junior` | JUNIOR | Personal | Supervised bioinformatics-copilot prototype; proposed behavior and verified execution distinguished |
| `lawgpt` | LawGPT | Personal | Early prototype/corpus audit; recovered assets do not establish a rebuilt retrieval harness or legal correctness |
| `horse-racing` | Horse-Racing Forecast Research | Personal | Forecast/evaluation research; no profitable policy or market-beating claim; historical/live/prospective evidence separate |
| `nookcam` | Nook Cam | Personal | Inspected private prototype; no new device trial, deployment proof or security-audit claim |
| `ballet-pose-feedback` | Ballet Pose Feedback | Personal | Early mock-tracking prototype; active iOS overlay is mock, real detection/dataset evaluation pending |
| `tc-personal-agent` | TC Personal Agent | Personal | Prototype history and vault-centered redesign; distinct from JUNIOR; future replacement agent not complete |

Every new filename is `<stable-id>.md`, with the existing schema's `context`, qualified `status`/`statusDetail`, actual role, summary, topics, H2 narrative sections, review date, and real links only. Map the sourced stage into the existing four status values; do not add an enum value per badge or label a proposal completed. Keep unknown dates omitted. No link is required merely because a repository identity appears in a private source note.

The expansion brief is a source-backed editorial audit, not a new experiment, successful build or live deployment verification. Preserve its latest corrections and exact limits. For Horse-Racing Forecast Research, do not combine research-model, live-model and prospective cohorts or imply betting success. For LawGPT, keep legal correctness and engineering checks distinct. For Ballet, make mock landmarks visually explicit. For Nook Cam, never use real household/pet video or connection credentials. For TC/JUNIOR, no private messages, task contents or biological-results claims belong in an illustrative screen.

Public project records require a substantive narrative, accurate contribution/stage, public-safe facts and assets, and no broken or invented links. Evidence boundaries must survive summaries, captions and status badges. Missing optional media or code links should yield a well-composed text-led case study; missing evidence for a strong claim requires removing the claim, not inventing a chart.

Existing publication IDs, author order and metadata remain unchanged. Published versus Preprint remains explicit. Keep the CV's authored `selectedProjectIds` (MAGraph, EnzymeMatch) and `selectedPublicationIds` unchanged; adding portfolio projects does not add them automatically to CV/PDF. `CvSections.astro` keeps joining selected IDs to public records; validate that selected IDs are not draft/absent rather than silently losing a selection.

### 4.4 Blog collection and publication policy

Add a `blog` Markdown collection in `src/content.config.ts`, using the same stable filename-ID rule. The first implementation has **zero posts**. Add `src/content/blog/.gitkeep` rather than a fictional article: `scripts/read-content.mjs` currently calls `readdir` and fails when a collection directory is absent, while an existing empty directory is valid. Do not weaken missing-directory errors for required collections globally.

Minimal frontmatter: `title`, `excerpt`, `language: 'en' | 'ko'`, `draft` defaulting to `true`, optional `publishedDate` and `updated` as validated ISO dates, and optional `relatedProjectIds` defaulting to `[]`. A non-draft post requires a real publication date, nonempty excerpt/body and valid references to public projects. Local `cover`/alt/caption can reuse the image shape when a real post needs it; tags, series, translation groups and other metadata wait for an actual use.

Add `posts()` and `postUrl(id)` to `src/lib/content.ts`; use a shared pure selection helper in `policy.mjs` if build/check paths need it. Exclude drafts before date sorting (newest first, stable ID tie-break). A future date does not schedule publication; `draft: false` with a future publication date is a content error. Document publication as an explicit reviewed source/release action. Development preview can render public-safe editorial drafts with the existing visible draft notice; production routes, home/index links and sitemap must exclude them.

Existing vault blog drafts, including Korean writing under `08 Blog`, are not automatically imported, published or exported to design services. Future posts are selected individually and reviewed for public copy. Preserve Korean titles/prose, set the document language per article, and do not fabricate an English translation. No RSS/Atom route, feed link, newsletter, comments, search, analytics or social embed is needed initially. A feed can be activated after real published content exists, using the same public-only selector.

### 4.5 Social profile labels

The owner explicitly requested **LinkedIn, Instagram, X and Threads**, all **without hyperlinks for now**. Add `socialProfiles: [{ label, url? }]` to profile data, defaulting to `[]`; initial data contains those four names and omits all URL keys. Keep this separate from existing profile `links` used for GitHub/ORCID and the email field.

An absent URL renders a plain `<span>` in a semantic list. Do not use `<a>`, `href="#"`, guessed handles, disabled buttons, `tabindex`, click handlers, link cursor, hover underline or `aria-disabled`. No profile discovery is part of this task. Only later owner-provided public HTTPS URLs activate ordinary links; reject empty-string and non-HTTPS URL values. CV/PDF retain their current professional contact links and do not acquire four inactive SNS labels.

## 5. Shared component and route contracts

### 5.1 Base shell

Files: `src/layouts/BaseLayout.astro`, `src/styles/tokens.css`, `src/styles/global.css`, `public/favicon.svg`, `public/social-preview.png`.

- Keep one `<main>`, one page H1, semantic header/nav/footer, skip link, canonical URLs, social metadata and descriptive title. Accept an optional `language` layout prop defaulting to `en`; future Korean articles use `lang="ko"` and appropriate article metadata.
- Update `theme-color` from light `#FAFAF7` to dark canvas and set `color-scheme: dark` for web rendering.
- Header navigation is Research, Personal Projects, Blog, CV. Keep it visible on phones: name/home on the first row, four ordinary nav anchors wrapping below when necessary. No hamburger, hidden menu, horizontal nav scrolling or client script is required.
- All important controls get a comfortable 44px minimum touch area. Name, labels, and navigation must fit at 360px; allow wrapping rather than reducing legibility.
- Homepage has no active Research item. Research details highlight Research; personal details highlight Personal Projects; Blog index and future articles highlight Blog. Preserve category-aware active logic without matching every root-prefixed path as active.
- Use a static header on narrow screens unless final screen review clearly justifies sticky behavior. If desktop header is sticky, make anchor `scroll-margin-top` account for its actual height and prevent focus/heading occlusion.
- Keep contact destinations `mailto:wooyoung510@gmail.com`, GitHub EspressoTonic, and the exact ORCID. In a separate footer SNS group, render LinkedIn, Instagram, X and Threads as plain labels, except on the CV page where this group is omitted. No new SNS URLs or interactions. Footer year/location/availability should be omitted unless sourced.

### 5.2 Shared project media

Likely new file: `src/components/ProjectMedia.astro`; reuse from `ProjectCard.astro`, homepage hero/rows, and `[id].astro` instead of three divergent image implementations.

Suggested props: `project`, `context: 'hero' | 'card' | 'detail'`, `loading?: 'eager' | 'lazy'`. Derive dimensions/fit from media metadata and passed context; keep figure caption in the parent when semantics call for `<figure>`.

- Use `astro:assets` for real local raster assets, correct `widths` and `sizes`, and explicit layout dimensions. Hero image can load eagerly; below-the-fold images lazy-load.
- Existing `src/assets/projects/fridge-match/interface.png` and `location-todo/activity.png` are actual sample-data captures. Reuse their truthful captions; do not substitute generated interface concepts.
- Do not recolor app screenshots to force dark mode. Present them on the dark canvas with a restrained frame.
- For a portrait screenshot, reserve a portrait slot or constrain its width; do not bury it as a narrow strip inside an enormous landscape frame.
- Accurate SVG/CSS diagrams are appropriate; retain an adjacent text explanation. Decorative SVG internals can be `aria-hidden` while the figure carries meaningful alt/caption text.
- Remove D's unsupported `core_orf`, target/node labels, pseudo-results, and method specificity. A concept diagram may illustrate verified relationships but cannot establish biological regulation, drug efficacy, clinical use, model superiority, or validated performance.
- Record each retained asset in a small Markdown asset inventory: source, permission/public-safe basis, project, actual/concept classification, alt, caption, crop/fit. Do not write signed Google download URLs or raw API responses into the repository.

### 5.3 Homepage

File: `src/pages/index.astro`; use shared media/cards/publications and content helpers.

DOM order: name/nav → headline/short bio/actions → MAGraph caption and hero visual → remaining research features → Fridge Match/Location Todo screenshot features → open Commute Log row → six compact personal links and all-projects link → questions/interests plus exploration sentence → selected publications → honest Blog preview → background/contact and Social → footer.

At desktop, headline/copy and MAGraph caption may share columns; the large visual spans the intended width. At phone size the DOM order remains intelligible with no CSS visual reordering that separates a title from its own link or image. Avoid duplicating the MAGraph card in Selected research.

Use `/research/` and `/personal-projects/` as the main homepage actions as in D. CV remains visible in navigation/background. Update the existing no-JavaScript test that currently clicks a `View CV` hero button: assert the real intended navigation path, rather than adding an unwanted button just to satisfy an old test.

The homepage Blog preview uses eyebrow “Blog / Coming later”, heading “Notes from the work.” and the exact text “Research notes, project write-ups, and things I learn along the way. No posts yet; longer-form writing will live here.” The “Visit the blog” link opens the real `/blog/` route. With zero published posts, show no fake article cards, date, reading-time, count or latest-post claim. The homepage Social block uses eyebrow “SNS” and heading “Elsewhere”, with the four plain labels specified in §4.5, visually separated from working contact links.

Publications should use compact unboxed rows. Add a `variant='compact'` or `showAuthors={false}` prop to `PublicationList` only if necessary; keep full citation rendering for research/CV. Even compact items retain exact title, venue/year, type/status, and destination.

### 5.4 Research and personal indexes

Files: `src/pages/research/index.astro`, `src/pages/personal-projects/index.astro`, `src/components/ProjectCard.astro`.

- Each project index has a concise H1/introduction and all public entries in deterministic order. The intended inventory is four research and nine personal projects; render counts from eligible data or omit counts rather than advertising thirteen released pages before their records are ready. Research uses the dated-first default order; the personal index uses the explicit groups and order below over public-filtered records.
- Research favors open visual rows with title, purpose, actual role/context/status, readable visual, and one clear project link. Publications remain a separate section.
- Personal projects use a varied but controlled gallery with purpose/status and readable screenshots. Use the same DOM structure at every breakpoint; different card sizes are presentational, not separate content.
- Category labels are “Research” and “Personal Projects”; personal means independent work, not inferred hobbies.
- No nonfunctional filter chips/search bars. With a modest inventory, headings and ordinary sections are enough.
- Preserve access to older/less-featured projects. Do not hide them behind an unbuilt interaction.

Personal index groups/order match the reviewed design:

| Section | Ordered public IDs |
| --- | --- |
| Everyday tools | `fridge-match`, `location-todo`, `commute-log` |
| Agents & knowledge | `junior`, `tc-personal-agent`, `lawgpt` |
| Vision & data experiments | `nookcam`, `ballet-pose-feedback`, `horse-racing` |

Implement this as a small presentation mapping of IDs over the existing public records, not duplicated title/body data or a new category taxonomy. Omit draft/absent entries and an empty group. The generic dated-first helper remains the default for research and ungrouped selections; explicit personal curation overrides it here. Detect duplicate group IDs, and append any future eligible but unmapped record to “More projects” in the default deterministic order so new public work never disappears silently.

### 5.5 Research detail template — MAGraph exemplar

File: `src/pages/projects/[id].astro`, shared media/illustration/publication components, existing `magraph.md`.

Top: back link to Research → title and purpose summary → contextual status/role/period facts → real external links if present → wide, accurate media figure with caption. Below: a readable long-form body with optional sticky desktop TOC and a compact in-flow phone TOC.

Required narrative content: problem/question → contribution → approach/decisions → evidence/outputs → limitations/current stage → lessons. These already exist as complete Markdown sections. Style the content; do not discard paragraphs to fit a mockup. The TOC should derive from actual rendered H2 headings, as it does today.

- Facts use a `<dl>`. Research category and academic/industry/independent context must not be conflated.
- Retain “Thesis researcher & primary MAGraph developer”, the verified thesis period, and the distinction from later team-wide MetaGEAR analyses.
- Put limitations close enough to evidence that the design cannot visually imply an unqualified claim. Do not create unsupported KPI boxes to fill a sidebar.
- Render related research outputs from `publicationIds` exactly once and preserve the correct preprint label.
- Optional related projects at the bottom must be derived from public entries and exclude the current project. A simple category return link is sufficient if no meaningful relationship has been established.

### 5.6 Personal detail template — Fridge Match exemplar

Use the same `/projects/[id]/` route and shared structural component, with category-specific class/slots only for a real visual need. Do not fork data fetching or create a one-off hard-coded Fridge Match route.

Top: back link → project title/purpose → clear current status and actual role → actual app screenshot → narrative. Readable screenshot galleries may carry more visual weight than a scientific workflow figure, but surrounding typography and color tokens stay shared.

- Keep the implemented pantry/recipe/shopping/cooking/undo workflow and the current private/local status precise.
- Show actual screenshots with authored/synthetic sample data captions. Do not imply availability because an interface is visually polished.
- No “Launch app”, “Try demo”, “App Store”, “GitHub source”, or performance/adoption statistics unless an existing verified link/evidence supports it.
- Preserve AI-assisted implementation attribution and the owner's product/verification role.
- Preserve persistence/synchronization/recovery decisions and release limits as prose rather than unsupported architecture badges.
- Use only meaningful images. A missing screenshot should reduce the gallery, not trigger invented UI.

| Existing public route | Shared treatment | Essential preserved boundary |
| --- | --- | --- |
| `/projects/magraph/` | Research detail exemplar | Dec 2022–Aug 2023; thesis-derived representation; later MetaGEAR team findings separate; preprint link only, no invented MAGraph code URL |
| `/projects/enzymematch/` | Reuse research detail | Mar–Aug 2021; extension/evaluation of existing software; public code link `https://github.com/MelseO24/EnzymeMatch`; do not invent exact thesis title or later peer-reviewed output |
| `/projects/fridge-match/` | Personal detail exemplar | Oct 2026; AI-assisted prototype; no public demo; account synchronization/recovery already in current scope |
| `/projects/location-todo/` | Reuse personal detail | Oct 2026; actual Android screenshot; preserve iOS/real-device limitations and distinction between inferred and manual visits |

The four existing routes above retain their exact boundaries; the nine expansion routes in §4.3 reuse these same treatments and the full source-backed narratives in `CONTENT_ADDITIONS.md`. Do not build only two polished exemplars or leave the additions as title-only placeholders. Validate all thirteen designed project details in local preview as their public-safe records are created, then verify the eligible production subset separately. The one `/projects/[id].astro` route remains the structural implementation; these are two presentation treatments, not thirteen hard-coded pages or duplicate component trees.


### 5.7 CV web and PDF

Files: `src/pages/cv/index.astro`, `src/components/CvSections.astro`, `src/styles/global.css`, `src/styles/print.css`, existing CV/profile/publication/project Markdown and PDF scripts.

Web order: name/discipline/contact + Download PDF → compact section navigation if helpful → experience → education → research outputs → selected projects → capabilities → languages. Retain all existing source data; no fictional awards, affiliations, logos, headshots, grades, dates, skill percentages, or years-of-experience totals.

- A side rail or left section labels on desktop are layout only. Mobile stacks labels and entries into a clear reading order; dates sit under or alongside the corresponding organization, never detached by CSS reordering.
- The PDF action is an ordinary `<a download href="/files/woo-young-cho-cv.pdf">`. An extra print button is unnecessary unless requested; browser Print works through CSS.
- Keep existing IDs (`experience`, `education`, `outputs`, `selected-projects`, `capabilities`) or explicitly update all anchors if changing them. Add an ID to languages only if it is linked.
- Experience/education dates and actual roles come directly from `cv.md`. Selected publications use the same records and author highlighting as the rest of the site.
- The PDF continues to be generated from the same built `/cv/` page by `scripts/generate-cv-pdf.mjs`; no separately authored PDF or second CV data file.
- In `@media print`, override the semantic color variables on `:root`: white canvas/surfaces, near-black ink, dark gray secondary copy, dark links, visible light gray rules, `color-scheme: light`. Also reset literal backgrounds/shadows/borders where selectors do not use variables.
- This token reset is essential: global `.authors strong`, `.date`, `.review-date`, and similar selectors otherwise retain pale web colors on white paper. Do not assume `body { color: black }` overrides descendants.
- Hide header/footer/download/section navigation and decorative media in print; make all content containers block/full-width; disable sticky/fixed positioning. Keep logical source order, sensible breaks, widows/orphans, and clickable links.
- Target the current two-page A4 CV for the current source content. If materially more content cannot fit legibly, report the tradeoff rather than shrinking body text to unreadable size or silently deleting content. The web page may be longer.
- Recheck PDF text, all pages visually, link annotations, no localhost references, and no clipped headings or blank extra page. `printBackground: true` means accidental dark surfaces will print, so visual verification is mandatory.

### CV source-integrity checklist

- Current source coverage is exactly three experience entries, two education entries, three selected outputs with full author lists, two selected projects, four capability groups and three languages. These counts document the present source, not a forever-fixed template limit.
- Preserve experience periods: Arontier Oct 2025–present; Connectagen Sep 2023–Oct 2025; AG Schirmer Oct 2021–Sep 2023. Preserve degree periods: M.Sc. Oct 2021–Aug 2023; B.Sc. Sep 2016–Aug 2021. The differing academic/research end months describe different spans and must not be silently normalized.
- The joint-program institution is “Technical University of Munich & Ludwig Maximilian University of Munich — joint program.” Do not abbreviate one university out of the education record merely to fit a layout.
- Current CV review date is `2026-10-13`. It changes only after an actual content review, not when a build runs. Keep it distinct from citation dates and employment dates.
- Selected CV projects stay MAGraph and EnzymeMatch unless deliberately changed after a content review. Homepage features are independent.
- Current CV selected output order is `ecoli-2026`, `genomycanalyzer-2024`, `metagear-2025` (published papers before preprint). D homepage order is 2026 paper, 2025 preprint, 2024 paper. Both are intentional; do not let a generic sort alter authored CV selection or turn the preprint into a journal paper.
- Preserve author order and all names from source, highlighting `ownerAuthorIndex` only. The 2026 paper owner index is 1; the other two are 5. Neither highlighting nor position establishes first/equal-first contribution. Do not replace author lists with a design-generated list.
- Exact source publication titles/DOIs are in `content-contracts.md`; full CV citations must match those records. The bibliography has not been independently reverified by this audit, so avoid describing a design check as publisher verification.
- Languages remain Korean — native; English — fluent; German — C1. Do not invent proficiency scores, institutions, awards, thesis names, a phone number, portrait, location or availability.

### 5.8 Blog index and future article template

Files: `src/pages/blog/index.astro`, `src/pages/blog/[id].astro`, `src/content/blog/.gitkeep`, content helpers/schema, and scoped CSS. Add `BlogList.astro` only when both home and index render actual post rows; the initial zero-post state does not need a general-purpose component.

The Blog index is an ordinary complete static page with eyebrow “Blog / Coming later”, H1 “Notes from the work.”, scope “A place for research notes, project write-ups, and things I learn along the way.”, and the honest empty-state heading “No posts yet.” Include a useful ordinary return-to-projects link. Do not render article skeletons, disabled controls, fictitious dates, subscription fields or loading UI. The shared article route's `getStaticPaths` returns zero production paths initially. `/blog/` remains in primary navigation and sitemap even when empty.

When reviewed public posts are later added, show editorial rows with title, date, language and excerpt. An article uses the D prose column with title/excerpt, real publication date, optional revision date, language, back-to-Blog link, optional local figure and meaningful heading anchors. It does not need a project's role/status/evidence structure. Related project links must target public records. Body H2 headings and long Korean titles wrap naturally; no forced translation, fabricated reading-time or invented title.

`src/pages/sitemap.xml.ts` adds `/blog/` and only eligible article URLs. No feed or feed link ships while there are no published posts. The source checker accepts zero records, validates real publication state and local assets for records that exist, and catches references to absent/draft projects. Build validation verifies draft articles never generate production routes or links.

### 5.9 Social presentation

Use the homepage eyebrow “SNS” and heading “Elsewhere” near the lower content/contact area, plus an “SNS” group in the shared footer except on CV. The four exact platform names appear as a quiet typographic list, without cards that resemble buttons. Icons are optional and decorative; never replace the text labels. Do not create a separate SNS route or crowd the four-item header with a fifth item. Missing URLs do not create a loading or error state. Existing email/GitHub/ORCID links stay in the separately labelled contact group. Implement the optional URL branch for future owner-provided addresses, but keep all current Social items as noninteractive spans. A `showSocial` layout prop (default true, false on CV) is sufficient to keep the CV footer focused on professional contacts; Blog navigation still appears on CV.

## 6. Responsive and accessibility acceptance

Test at least 360×800, 390×844, 768×1024, 1280×800, and 1440×1000. Also examine narrow zoom/reflow behavior. Do not optimize only the screenshot dimensions.

- No horizontal overflow on any public template or long publication title.
- All four header links remain visible/reachable with meaningful labels and comfortable target areas. Plain Social labels are readable but not focusable or styled as links.
- At 390×844 the homepage's main actions appear in the opening viewport as in the accepted D concept; a long unknown font-load delay cannot leave the layout unusable.
- Desktop detail TOC may be sticky; phone TOC is in normal document flow. Long anchor labels wrap. Clicking a TOC link brings the corresponding visible heading below any sticky header.
- Project metadata collapses from four/two columns to one/two useful columns; long role/status content must wrap without truncation.
- CV dates stack naturally on narrow screens; publication authors/DOIs/email addresses wrap without overflow. Future Korean Blog titles/body text reflow correctly and the article language is accurate; use isolated fixtures rather than publishing fake posts for the test.
- Every page works without JavaScript. No essential content behind carousels, hover-only states, or closed custom widgets.
- One H1, ordered heading levels, landmarks, correct active navigation, descriptive link names, skip link, visible keyboard focus.
- Body/caption/status text is not tiny or low contrast. Essential figure labels must be readable on phone; replace a dense image with an adjacent explanation instead of pretending zoom solves it.
- No image alt text duplicates a long visible caption word for word. Actual UI screenshot descriptions explain useful content; decorative artwork uses empty alt.
- Honor `prefers-reduced-motion`; no forced animation is needed.

## 7. Implementation slices with stop conditions

Each slice should end in a working, inspectable state. Check the diff before continuing. These instructions are suitable for a smaller model because each has a constrained file scope and concrete outcome.

### T00 — Read state and establish baseline

1. Confirm cwd, `git status --short`, current branch, and applicable AGENTS instructions. Reuse the current checkout unless the owner asks for another. Never overwrite existing uncommitted files.
2. Read this plan, selected D review/screens, content inventory, `README.md`, `IMPLEMENTATION_STATUS.md`, package scripts, schema, and impacted templates.
3. Confirm Node 24, installed dependencies, and available Chromium; use `npm ci` only when installation is actually needed. Avoid dependency upgrades.
4. Record thirteen intended project details, the currently public subset, real `/blog/` with zero articles, and four plain Social labels. Identify old factual claims versus generated placeholders. Do not treat every design link as a currently public route.
5. If current baseline is not recently verified, run `npm test` and `npm run build:release` once. Stop and diagnose failures before redesign changes; do not blindly update assertions.

Done: known working baseline, preserved worktree, exact selected assets/content, no ambiguous claim converted into fact.

### T01 — Confirm the retained design specification

Files: `docs/design/DESIGN.md`, `docs/design/stitch/subpages/REVIEW.md`, and this plan. The initial design handoff is already prepared; do not generate a new direction or repeat design exploration.

1. Reconcile D desktop/mobile font/color/spacing/nav inconsistencies into the semantic system above.
2. Document four-item header/footer, hero, project row/card, media, metadata, prose/TOC, citation, CV entry, Blog empty/index/article family, plain Social labels, actions/focus, responsive rules and print behavior.
3. Mark superseded A/B/C directions historical; retain the files.
4. Record actual selected subpage screenshots/IDs and any accepted deviations. Do not bind to a conflicting generated light design system.

Done: one style authority. Remaining factual/media limitations are explicit, not silently resolved by the implementer.

### T02 — Reconcile source content and references

Files: Markdown records, `src/content.config.ts`, `src/lib/content.ts`, `src/lib/policy.mjs`, `src/content/blog/.gitkeep`, `scripts/check-content.mjs` and relevant policy tests.

1. Update profile/interests from the agreed brief; preserve email/GitHub/ORCID. Add exactly four `socialProfiles` labels with URL keys omitted.
2. Preserve existing project bodies. Add nine substantive public-safe editorial records from the expansion brief, initially draft; retain every project's stage/evidence boundaries. Keep spatial-omics draft. Do not copy private source-note paths or payloads into public records.
3. Make unknown project periods optional and implement dated-first/undated-ID fallback ordering; no dates inferred from file or note timestamps. Preserve explicit homepage curation and unique featured orders.
4. Add minimal Blog schema/selection with zero initial posts. Preserve its empty directory through `.gitkeep`; do not create a fictitious article to placate `read-content.mjs`.
5. Introduce optional `heroProjectId`/`shortSummary`/media fields only where needed. Validate hero/project/publication references, unchanged CV selections, supplied dates, public assets and HTTPS links. Published posts require a body, excerpt, date, language and public related IDs; omitted SNS URLs are valid, blank ones are not.
6. Run `npm run check` and relevant policy tests. Review intended thirteen-project coverage separately from current production eligibility.

Done: all thirteen intended projects have retained/source-backed content paths; unresolved release details stay explicit. Empty Blog and unlinked Social data are valid. No private drafts, fabricated dates, duplicate CV data or fake public posts.

### T03 — Implement dark foundation and common shell

Files: tokens/global styles, `BaseLayout.astro`, local fonts/license, favicon/social assets only if required.

1. Add fonts and semantic tokens; map existing selectors to them. Search for hard-coded light/green colors (`#3d4941`, `#21634d`, white button text, light draft colors, light theme-color) and resolve them intentionally.
2. Style visible four-item navigation/footer, focus, selection, links, buttons and skip link. Add Blog active state, per-article language support and a plain SNS footer group with the CV exception. Preserve canonical/SEO metadata and category active semantics; do not make absent SNS URLs focusable.
3. Set a scoped dark color scheme and establish print overrides early enough that print does not become an afterthought.
4. Preview homepage, detail, Blog and CV at 390 and 1280 widths for structural regressions. Check all four navigation items fit/wrap and the Social labels read as noninteractive text.

Done: all routes inherit coherent, legible Night Gallery foundations; no obvious light islands except real screenshots and deliberate print.

### T04 — Implement reusable media and project presentations

Files: `ProjectMedia.astro` if justified, `ProjectCard.astro`, `ProjectIllustration.astro`, relevant styles and reviewed assets.

1. Centralize real image/diagram rendering; avoid duplicating image logic per page.
2. Add restrained card/row variants only if both are used. Keep shared title/summary/status/link data.
3. Replace generic repeated imagery with reviewed project-specific assets. Preserve existing actual screenshots; omit unsupported new images until usable.
4. Verify portrait/landscape behavior and captions at phone and desktop widths; check image transfer sizes and intrinsic dimensions.

Done: a project can render as hero, research row, personal card, and detail figure without broken crop, misleading caption, or divergent fact copy.

### T05 — Build the selected D homepage

File: `src/pages/index.astro`, limited shared styles/components.

1. Replace long v1 hero/interests sidebar with accepted headline/copy/actions and MAGraph feature.
2. Implement explicit public selection and hero exclusion before limiting research rows.
3. Render Fridge Match and Location Todo screenshot features, the open Commute Log row, then the six ordered compact project links from §4.2. Resolve each from public content and omit draft entries without dead links; keep the all-projects action.
4. Add interests/exploration, compact publication rows, honest zero-post Blog preview, background/contact and the four unlinked Social labels in the agreed order. Include “All personal projects” to expose the broader inventory.
5. Remove duplicate project descriptions/hero duplication and the old forced comma `<br>` treatment.
6. Check first viewport at 390×844 and 1280×800; compare against D using the same sizes.

Done: D is recognizable; research appears early; all links resolve; facts come from content; mobile actions and readable copy are preserved.

### T06 — Update project indexes and the Blog index

Files: research/personal index pages, new `src/pages/blog/index.astro`, shared card/row styles and `src/pages/sitemap.xml.ts`.

1. Render every eligible project, including non-featured EnzymeMatch and all ready additions. The target coverage is four research/nine personal; derive counts from actual public records or omit them.
2. Preserve category separation and research outputs. Apply the three explicit personal groups/order in §5.4 after public filtering; append future ungrouped public records deterministically. Use ordinary sections/grids with meaningful stage labels; no unrequested search/filter layer.
3. Build the real Blog index with “No posts yet.” Zero records must be a successful state. Do not add pretend posts, skeleton cards, newsletter fields or feed links.
4. Add `/blog/` to sitemap; related project/article URLs remain public-filtered. Check keyboard navigation, long title wrapping, missing optional media and mobile scanability.

Done: every public project is reachable, every listed route exists, the empty Blog is complete, and drafts never appear in production indexes or sitemap.

### T07 — Update shared project details and the future article route

Files: `src/pages/projects/[id].astro`, new `src/pages/blog/[id].astro`, shared components/styles; source changes only where supported by the reviewed brief.

1. Implement project title/facts/real links/hero structure and responsive prose/TOC. Omit the period fact when unsupported, without leaving a blank label.
2. Apply research/personal treatment through data/category, not separate routing architectures or thirteen hard-coded page trees.
3. Preserve complete Markdown narratives and actual H2 headings. Add honest images/related outputs once. Review stage badges and summaries against the full evidence boundaries.
4. Validate MAGraph/Fridge Match exemplars, then EnzymeMatch, Location Todo and all nine additions in public-safe development preview. Check Nook/JUNIOR/TC without dates, Ballet's mock-tracking label, LawGPT's restart stage and Horserace's evaluation limits. Spatial-omics remains draft.
5. Build the future Blog article template and `getStaticPaths` using public selection; zero generated article paths is correct initially. Exercise Korean-language/long-title layout through an isolated fixture, never a fake production post.
6. Keep all related project/post links public-filtered. Verify the eligible production subset separately from full design coverage.

Done: all thirteen intended case studies share coherent treatments and retain source limits; no empty placeholders or template overfit. Blog article infrastructure is ready without invented public content.

### T08 — Update CV web and print

Files: CV route/sections/styles, PDF script only if necessary.

1. Match the accepted dark CV hierarchy and section anchors, retain profile contact and one download action.
2. Keep complete experience, education, authored selected publications/projects, capabilities and languages from existing sources. Portfolio additions do not change CV selections; do not insert inactive Social labels or automatic Blog lists.
3. Implement explicit white-paper print reset and remove navigation/sticky/decorative web behavior in print.
4. Run `npm run build:release`; inspect the resulting PDF text and rendered pages. Correct print CSS rather than manually editing the PDF.
5. Check link targets in the PDF are canonical public URLs, not local preview addresses.

Done: online CV and downloadable PDF agree in content; PDF is legible, complete, appropriately paginated, and actually downloadable.

### T09 — Update meaningful checks and complete QA

Files: `tests/site.spec.ts`, `tests/content.test.mjs`, content/build checks, isolated fixtures only where behavior genuinely changed.

1. Preserve draft-selection tests. Add a meaningful optional-date ordering case, personal-group coverage/no-duplicate case, and the hero-exclusion/public-selection cases required by changed helpers; do not weaken featured-order/reference checks.
2. Cover all eligible project routes from current content, plus `/blog/`. Keep explicit research/personal exemplar flows and verify the full thirteen-page design inventory separately from the released subset.
3. Test zero-post Blog selection/index, non-draft versus draft post filtering, and draft absence from production routes/home/index/sitemap. Use an isolated fixture for published/Korean posts; never add a fake production article. No posts means zero article routes and no feed link.
4. Assert exact Social labels LinkedIn, Instagram, X, Threads appear as plain text with zero anchors/clickable controls within each Social group. They are not tab stops and have no link cursor. Confirm CV omits the SNS footer group while retaining Blog navigation. Verify existing email/GitHub/ORCID links still work separately. Check missing URL is valid but blank/non-HTTPS is rejected.
5. Update no-JavaScript navigation for Research, Personal Projects, Blog and CV. Keep skip link/focus, correct category back links, real TOC fragment targets and Location Todo's honest status assertion.
6. Keep axe on public pages, responsive overflow, real PDF download, 404, source-safe draft absence, sitemap and built local-link/asset validation. Extend build checks to Blog eligibility invariants and future article references.
7. Run the final release sequence once after the last meaningful change:

   ```sh
   npm test
   npm run build:release
   npm run test:site
   ```

   `build:release` already includes content/Astro checks, build, PDF and built artifact validation; do not add a duplicate final `check`. Plain `build` does not generate the PDF.

8. Browser tests serve the release artifact on 4322 using `scripts/serve.mjs`; leave unrelated previews alone. Visually inspect home, both project indexes, all new/detail layout variants, empty Blog, CV and 404 at required widths; inspect every PDF page. Check 200% zoom and Korean text using an isolated fixture.
9. Inspect requests/console for failed assets, external mockup CDN calls, browser errors, signed URLs, phantom articles, fake social links, duplicate H1 or unrelated generated copy. Capture evidence in ignored `.qa/` or another authorized repository review directory.

Done: current artifact passes required checks; intended/public route coverage and empty Blog behavior are explicit. No assertion is weakened solely to accommodate a bug or unverified claim.

### T10 — Final diff review and handoff

Files: `README.md`, `IMPLEMENTATION_STATUS.md`, accepted design/implementation documentation.

1. Inspect `git diff --stat` and substantive source diff. Check no vault files, credentials, raw API responses, signed URLs, generated build output, or accidentally staged unrelated changes.
2. Update status to a tested Night Gallery local candidate; do not retain v1 pass counts as if they validate the redesign. Record exact checks run and meaningful remaining limitations.
3. Document editing projects/media, all thirteen intended versus public records, adding a reviewed public Blog post, later activating owner-provided SNS URLs, release generation, preview and draft handling. Source files in a public repo are public even when `draft: true`; no automatic vault Blog import.
4. Show review screenshots and a concise change summary with known caveats. Leave commit/push/publication for the owner's instruction.

Done: a concrete, reviewable local implementation exists; all remaining decisions are visible and no deployment occurred inadvertently.

## 8. Known migration traps and recovery

| Risk | Why it matters | Required prevention / recovery |
| --- | --- | --- |
| Mistaking thirteen designed details for thirteen released pages | Nine additions have content drafts but no v1 source records/routes | Create substantive public-safe records; render production from eligibility selection; retain all intended coverage and keep link validation enabled |
| Existing uncommitted v1 source gets discarded | Current working tree contains intent-to-add/new files and an old root `index.html` deletion | Inspect current state; edit in place; no reset/clean/scaffold replacement |
| Duplicate feature order | Existing spatial draft and EnzymeMatch already use research orders 2 and 3 | Reconcile all records, including drafts; keep validator strict |
| Hero appears twice or a research entry vanishes | Existing API limits before page-specific exclusion | Exclude hero before applying remaining count; test the actual selection helper if added |
| New statuses overclaim maturity | Several additions are prototypes, mock tracking, recovered sources or future redesign | Preserve `status` plus qualified `statusDetail`; review title/summary/prose together against the expansion brief |
| Unknown dates become fabricated chronology | Nook Cam, JUNIOR and TC lack a supported project period | Allow optional period fields, omit facts cleanly, sort undated items deterministically, never reuse note/file dates |
| Empty Blog breaks the build | `read-content.mjs` uses `readdir` and missing directories throw | Keep an empty `src/content/blog/` with `.gitkeep`; zero articles is valid, not a reason to fabricate one |
| Private writing leaks through source control | Draft exclusion hides a rendered route, not a public Git file | Do not automatically import vault drafts; use only reviewed public-safe article copy |
| SNS placeholders become false profile links | User explicitly requested all four platforms without links | Render spans; no guessed URLs, href, disabled button, tab stop or link cursor; keep contact links separate |
| Dark web styles destroy PDF | Descendant color variables and backgrounds survive body print rule; PDF prints backgrounds | Reset tokens and web layout in print; render every PDF page |
| Font/CDN dependency leaks | Stitch exports use Tailwind runtime and Google Fonts | Implement Astro/CSS; self-host minimal licensed fonts; inspect requests |
| Scientific diagram implies invented methods/results | D contains illustrative node names beyond source evidence | Author accurate conceptual visuals and captions from verified project material |
| Screenshot crop hides interface evidence | Personal screenshots include portrait UI and small text | Use contain/intrinsic orientation, readable frame, meaningful caption |
| Test coverage misses new projects | Current route array contains only four public project details | Extend/derive current public route coverage; keep meaningful navigation cases |
| Lost long-form evidence | Mockup may shorten case study/CV to fit screen | Preserve Markdown body and CV records; apply layout around content |
| Draft treated as secrecy | Static build exclusion does not hide public Git source | Keep all repository records/assets public-safe; never copy confidential content |
| Production release accidentally triggered | Existing manual workflow deploys main only but push/merge is consequential | Keep task local; do not change deploy trigger or dispatch workflow without instruction |

If a slice breaks validation, fix or revert only that slice's own change with a narrowly reviewed patch. Do not discard the user's prior work. Stop expanding scope while a foundational data, routing, print, or accessibility failure remains unresolved.

## 9. Final acceptance checklist

- [ ] Selected D Night Gallery style is consistent across homepage, both project indexes, all thirteen intended case studies through shared templates, Blog, CV, footer and 404.
- [ ] No warm editorial/serif leftovers; no app interface recreated from generated claims.
- [ ] All public project pages exist and are reachable; drafts remain excluded in routes, listings, related links, CV, and sitemap.
- [ ] EnzymeMatch and existing complete content are preserved; nine additions retain stage/evidence limits, optional unknown periods, and stable IDs. Spatial-omics remains draft.
- [ ] `/blog/` exists with the honest zero-post state; no fabricated articles/feed, no automatic publication/import of vault drafts.
- [ ] LinkedIn, Instagram, X and Threads are plain noninteractive labels; no SNS hyperlinks. Existing contact URLs still work.
- [ ] Homepage selection/order and updated interests match reviewed content; no duplicate MAGraph feature.
- [ ] Publication titles, authors, statuses, links, email, GitHub, and ORCID match source records.
- [ ] Project visuals are distinct, readable, source-traceable, and honestly captioned; concept/sample interfaces are not presented as actual results.
- [ ] Research and personal detail templates communicate contribution, evidence, limitations, and current stage.
- [ ] Phone navigation/actions, TOC, title/citation wrapping, keyboard focus, contrast, and no-JavaScript navigation work.
- [ ] Web CV and printable PDF retain the same authored selections/content; adding projects, Blog or Social does not expand the CV automatically. PDF is white, readable, correctly linked and unclipped.
- [ ] Source/type checks, production build/PDF validation, policy tests, and browser/axe tests pass on the current artifact.
- [ ] Manual desktop/mobile/PDF review and diff review completed; remaining limits reported accurately.
- [ ] Repository documentation updated, code remains outside the vault, and nothing published without instruction.

## 10. Static product and workflow contracts

**Product:** visitors assess research fit, inspect contributions and limitations, browse independent tools and future writing, download the CV, and choose a real contact link. Thirteen intended project pages share two treatments; the curated homepage is not the full inventory. Social labels reserve the selected platforms without pretending profile links exist. Success is truthful, findable evidence and a usable CV, not a conversion metric.

**Screen map:** `/` → `/research/` or `/personal-projects/` → `/projects/<stable-id>/`; `/blog/` is a real initially empty index → future `/blog/<stable-id>/` only after posts are eligible; `/cv/` → `/files/woo-young-cho-cv.pdf`; unknown routes → `/404.html`. Header always includes Research, Personal Projects, Blog and CV. Project pages return to their category; cross-links target public records. Social is a plain-text section, not a route or set of current hyperlinks.

**Data model:** profile owns introduction/interests/contact, optional hero reference and four Social labels with optional future URLs; projects own category/context/status/role/optional period/media/body and publication IDs; publications own bibliography/author order; Blog owns future title/excerpt/language/publication state/body/related IDs; CV owns its unchanged authored selections, experience, education, capabilities, languages and review date. These are Markdown frontmatter/body collections, not a service database.

**Build contract:** read validated source → apply draft policy → resolve references → generate static HTML/assets/sitemap → print CV from the same built page → validate the same release artifact. A failed content/link/PDF check blocks calling the candidate release-ready. No runtime API, queue, account permissions, secrets, billing, analytics or form submissions are introduced.

**Visitor flows:** all primary navigation works with JavaScript disabled; project TOC uses native fragments; supported code/paper links use real destinations; PDF is a real download; email/GitHub/ORCID remain ordinary contact links. Blog empty state is a complete page; Social labels are intentionally noninteractive. Future reviewed posts use correct document language and public-only links. Missing media or optional links leave a well-composed text page, not an error state or a disabled control. A public index with fewer projects remains intentional and complete.

**Ownership and publication:** local design/implementation edits are separate from public release. The implementation should preserve the existing GitHub Pages deployment model. No GitHub permissions, workflow dispatch, merge/push, new external message or billing change is part of this handoff.
