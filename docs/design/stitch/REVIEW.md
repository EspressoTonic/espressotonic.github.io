> **Current decision — 2026-10-13:** The owner selected **D — Night Gallery**. The active subpage suite and detailed implementation handoff are in [subpages/REVIEW.md](subpages/REVIEW.md). Earlier comparisons below are retained as history.

> Current direction: the owner requested a different dark design. See [Dark design review](dark/REVIEW.md). The light A/B recommendation below is historical.

# Portfolio redesign — Stitch design review

Date: 2026-10-13. Status: design exploration; no owner-selected direction yet.

These are homepage concepts, with desktop and mobile variants. The existing Astro website has not been redesigned or published. Files in this folder are review artifacts, not deployable application sources. The generated HTML uses external font and Tailwind CDN resources and is retained for visual reference.

## Recommendation

Use **B — Research Fieldnotes** as the starting composition. A real research project appears beside the introduction on desktop. This makes the landing page useful to research labs and AI/biotech employers immediately. The simpler publication list also scans better than a dense set of citation cards.

Keep A as an alternative if a large typographic opening and open research rows feel more personal. Its longer opening pushes actual work farther down the page. A desktop still underlines Research on the homepage; remove that misleading active state in any implementation.

Mobile B is a useful ordering reference, but its uppercase actions, bracketed labels and boxed citations drift toward a technical dashboard. Preserve the desktop's quieter editorial treatment when making the real responsive page. The internal concept name “Research Fieldnotes” is not required public-facing copy.

## What has been reviewed

- Desktop and mobile exports inspected for hierarchy, visible content and major layout problems.
- Contact, profile, publication and project destinations checked against the brief and the corrected desktop links.
- Fabricated metric, telemetry and scientific-diagram details removed during concept refinement.
- B mobile's invented email, generic profile/publisher links and changed project routes caught and sent back for correction.
- The “Currently exploring virtual biological systems and learning from experimental feedback.” sentence restored in B's final revision.
- A and final B mobile checked at 390 × 844: no horizontal overflow; both primary actions fit above the fold. A's actions were measured at 44px high. This is a focused layout check, not a complete accessibility audit.
- All expected project, publication and contact destinations occur in the final B desktop/mobile exports; the invented email is absent and the exploration sentence is present.
- A mobile paraphrases “practical applications” as “practical tools”; reconcile to the brief when implementing shared copy.

## Content and evidence boundaries

Use `BRIEF.md` and the repository's existing `src/content/` records as content inputs. Stitch output is not an authoritative record of the owner's experience. Any discrepancy must be reconciled before publishing.

| Project | Public framing | Do not imply |
| --- | --- | --- |
| MAGraph | Gene-neighbourhood graphs for metagenomic functional context; master's research | Single-cell project, validated clinical application, unsupported performance |
| Virtual Cell Challenge 2026 | Independent experiments and evaluation of cellular-response models | Benchmark leadership, positive results where experiments were negative |
| GenoMycAnalyzer | Team software; pipeline and deployment contribution | Sole authorship, clinical adoption or personal ownership of all methods |
| Fridge Match | Ingredient inventory and meal-planning prototype | Released service or measured food-waste reduction |
| Commute Log | Local MVP exploring recorded journeys and departure windows | Live location feed, live telemetry or reliability metrics |
| Location Todo | Location-aware reminder prototype with native implementations | Fully validated iOS/background-location behavior |
| JUNIOR | Exploring supervised research assistants | Production autonomous scientist or experimentally validated research outcomes |

Academic work and personal projects stay distinct in navigation and project metadata. “Personal” means independently built projects; do not infer hobbies or private biographical interests.

## Required visual improvements after selection

1. Replace the nearly identical research diagrams with meaningful, distinct visuals: a gene-neighbourhood graph for MAGraph, an honest evaluation/process visual for Virtual Cell Challenge, and a workflow/product visual for GenoMycAnalyzer. Obtain them from real project material or author explanatory diagrams based on verified facts. Label conceptual diagrams accordingly.
2. Replace all three sample personal-project interfaces with actual permitted screenshots. Existing Fridge Match and Location Todo images live in `src/assets/projects/`. Capture Commute Log only from an available real app and use non-sensitive example data. Keep placeholders explicitly labelled until replacement.
3. Use `contain` for legible UI screenshots; avoid forcing portrait interfaces into a cropped landscape frame. Define width, height/aspect ratio and alt text; lazy-load below-the-fold assets.
4. Keep meaningful body text at least 16px where practical and essential metadata around 13px or larger. Do not let status, citation or diagram labels depend on faint gray 11px text. Verify 4.5:1 normal-text contrast in the implementation.
5. Keep a single responsive layout. Desktop and mobile HTML exports are independent sketches, not two codebases to combine. Preserve shared copy, routes, typography and citation styling.
6. Keep mobile navigation visible, with comfortable tap areas. A's mobile header links need larger clickable areas. Add a skip link, visible keyboard focus and correct current-page semantics in the real site.
7. Preserve publication titles and Published/Preprint distinctions. Preserve the owner's actual contribution; do not add first-author or equal-contribution claims.

## Next design screens, after direction selection

Generate and review a research index, personal-project index, research case study (MAGraph), personal-project case study (Fridge Match), and CV page. Use the same project design system and factual brief. Each page must work on desktop and mobile.

Research detail structure: question → context → owner's role → approach → evidence/results with limitations → figures → links/publication → related project. Personal detail structure: everyday problem → intended user → actual current behavior → owner's role → screenshots → implementation decisions → status/limitations → source/demo links only if available. Do not fabricate metrics to fill a template.

The indexes should support scanning by project name, one-sentence purpose, status and image. With a small inventory, ordinary sections are enough; do not add a search/filter application merely for decoration.

## Implementation sequence for a smaller model

This is a future handoff sequence, not permission to start implementation. Work only in `/Users/wycho/Documents/projects/espressotonic.github.io`; never create website code in the Obsidian vault.

1. Read this review, the selected screens, `BRIEF.md`, repository instructions, `package.json`, and the current content schema. Inspect `git status` and preserve existing uncommitted work. Keep Astro and static GitHub Pages output. Do not add a backend, client framework, animation package or analytics by default.
2. Create a concise accepted design specification from the chosen direction. `DESIGN.generated.md` is an unapproved generator proposal: discard irrelevant prescriptions about modals, telemetry, BibTeX controls, install snippets, or institutional labels. Write only components needed by the agreed page map.
3. Reconcile content in `src/content/profile/profile.md` and project/publication records. Preserve existing EnzymeMatch and other projects even if they are not homepage features. Add supported new project records through the current schema. Unverified claims and unavailable public assets remain drafts. Keep employer-confidential material excluded.
4. Implement typography, palette and spacing in `src/styles/tokens.css` and `global.css`; shared navigation and footer belong in `src/layouts/BaseLayout.astro`. Preserve print styles, SEO metadata and accessibility foundations.
5. Implement the selected hero and home sections in `src/pages/index.astro`; extend `ProjectCard`, `ProjectIllustration`, and `PublicationList` only where a reusable component is warranted. Keep homepage selection separate from the full project inventory. Use content records, not copied generated HTML, for links and facts.
6. Apply the accepted system to `/research/`, `/personal-projects/`, `/projects/[id]/` and `/cv/`. Preserve project route slugs and existing incoming links. Do not add links to draft or absent pages. Share CV data with its PDF generation flow.
7. Add optimized, attributed or permission-cleared visuals. Keep an asset record with source, permission, alt text, caption and crop rule. Decorative visuals get empty alt text; scientific diagrams need readable explanatory text outside the image.
8. Run existing content checks/tests, Astro checks, production build and site tests using the scripts in `package.json`: `npm run check`, `npm test`, `npm run build:release`, `npm run test:site` (inspect their current prerequisites before running). Update assertions only for intended behavior. Extend tests only for meaningful new routing/content/accessibility risks.
9. Inspect the rendered homepage, one page of each template and PDF at representative phone, tablet and desktop sizes. Check no horizontal overflow, keyboard access, focus visibility, actual link targets, image legibility, draft exclusion, citation status and contact details. Verify no required fonts/assets depend on temporary export URLs or CDN-only mockup behavior.
10. Produce screenshots and a concise diff review. Report what passed and any unresolved issue. Leave commit/push/deployment for the owner's publication instruction; this design task does not authorize publication.

Acceptance: the selected design remains recognizable; all public claims are supported; project images distinguish the work; mobile actions are visible early; research and personal work are clearly separated; the site remains static, accessible, fast and maintainable.

## Export caveats

Screen retrieval by exact ID succeeds. The CLI's project screen-list endpoint returned an empty list despite successful generation and direct retrieval, so exports and exact screen IDs are preserved here. Do not generate duplicates to work around that listing behavior. Screen links below were resolved using `stitch url`; URL resolution itself does not verify the Canvas UI.

No project binding, batch upload, commit, push or deployment was performed. No website code or assets were written into the vault.

## Current screen references

| Screen | Stitch screen |
| --- | --- |
| A desktop | [4bf4e6d46d1647adb44dbefe52663e0b](https://stitch.google.com/projects/472790161448969402?node-id=4bf4e6d46d1647adb44dbefe52663e0b) |
| A mobile | [e708c2a97820459084b6f9e67a4c2cad](https://stitch.google.com/projects/472790161448969402?node-id=e708c2a97820459084b6f9e67a4c2cad) |
| B desktop | [557f46a247d74cd4bee82daf1228c501](https://stitch.google.com/projects/472790161448969402?node-id=557f46a247d74cd4bee82daf1228c501) |
| B mobile | [6cad38cbb0014aa29e96d93c778ec634](https://stitch.google.com/projects/472790161448969402?node-id=6cad38cbb0014aa29e96d93c778ec634) |

Open `index.html` for the local comparison gallery. Original HTML/PNG exports are named by direction and device. `A-opening.png` and `B-opening.png` are browser-rendered desktop opening views. Signed download URLs, raw API responses, credentials and scratch scripts are excluded from this handoff.
