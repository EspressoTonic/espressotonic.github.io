# D — Night Gallery: reviewed subpage suite

2026-10-13. **Design and implementation planning only.** D is the owner's selected visual direction. The initial round extended it to seven responsive subpages; the current expanded package contains eighteen visitor-page references including the homepage, thirteen case studies, two indexes, Blog and CV. Application source, dependencies, build outputs and deployment configuration were not changed. Nothing was committed, pushed or published.

## Start with the local reviewed designs

Open the [design gallery](../index.html), [selected visual system](../../DESIGN.md), and [implementation plan](../../../IMPLEMENTATION_PLAN.md). The plan has exact file responsibilities, current/future content coverage, selected homepage wording, minimal schema additions, eleven implementation slices, CV/PDF rules, meaningful tests, migration traps, and a copyable smaller-model execution prompt.

| Reviewed local design | Treatment | Coverage |
| --- | --- | --- |
| [Homepage](../homepage.html) | Selected D expanded | Curated work, all-project navigation, interests, outputs, Blog and SNS |
| [MAGraph](magraph.html) / [EnzymeMatch](enzymematch.html) | Original research exemplars | Full existing source narratives and truthful concept figures |
| [VCC](virtual-cell-challenge.html) / [MycoChase · GenoMycAnalyzer](genomycanalyzer.html) | Text-led research details | Complete public-safe expansion briefs; honest evaluation/contribution boundaries |
| [Fridge Match](fridge-match.html) / [Location Todo](location-todo.html) | Original personal exemplars | Full source narratives and actual sample-data screenshots |
| [Commute Log](commute-log.html) | Personal detail | Archive-backed local MVP; live collection is future work |
| [JUNIOR](junior.html) / [TC Personal Agent](tc-personal-agent.html) | Personal details | Supervised scientific analysis versus personal memory and tasks; distinct projects |
| [LawGPT](lawgpt.html) | Personal detail | Corpus audit and proposed research harness; no validated legal-advice claim |
| [Horse-Racing Forecast Research](horse-racing.html) | Personal detail | Forecasting and prospective evaluation; no demonstrated market edge |
| [Nook Cam](nookcam.html) / [Ballet Pose Feedback](ballet-pose-feedback.html) | Personal details | Private camera prototype; early pose scaffold with explicitly mock tracking |
| [Research index](research.html) | Open project rows | Four intended research projects, selected interests and outputs |
| [Personal Projects index](personal-projects.html) | Three project groups | Nine independent projects; actual media where available |
| [Blog](blog.html) | Editorial empty state | Coming later; zero fabricated posts |
| [CV](cv.html) | Dark web CV | Existing complete source CV, bibliography and PDF action; selections unchanged |

These references guide reusable Astro components. Do not implement thirteen unrelated hard-coded project pages. The current application still has four public project records; nine complete source-backed briefs are retained in [CONTENT_ADDITIONS.md](../expansion/CONTENT_ADDITIONS.md), ready for editorial draft records during implementation. All thirteen designs are present, while production eligibility remains a separate content gate.

## Current expansion and verification

The nine additions and Blog were composed locally from the reviewed D templates. No new private notes, source archives, screenshots or project payloads were uploaded to Stitch. Stitch's browser-capture command saved local review screenshots only. The selected original D and earlier Canvas concepts remain provenance; current local HTML and current opening captures are the implementation reference.

- Confirmed all thirteen stable project IDs and category assignments. Every paragraph in the nine new designs matches its reviewed public-copy brief. Nook Cam, JUNIOR and TC omit unsupported project dates.
- Existing MAGraph, EnzymeMatch, Fridge Match, Location Todo and CV main-content blocks remain byte-identical; only their common header/footer changed. The CV footer omits inactive SNS labels, and the authored CV selections are unchanged.
- All eighteen visitor designs were checked in IAB at 360×800 and 1280×800: one H1, no horizontal overflow, valid local fragments and no broken loaded images. Homepage images were additionally brought into view and confirmed loaded. Representative home/index/Blog/CV/long-title details were checked at 390×844.
- All four mobile navigation targets have a 44px height. The SNS lists contain zero anchors. Blog contains a complete empty state, no article cards, and working links back to the projects.
- Current local opening captures cover all subpages, the homepage, the gallery and the Blog/SNS homepage section. These are design QA evidence; no new production build, accessibility certification, model benchmark or device trial was performed.
- Application diff checksum was preserved. No source/dependency/test/deployment change, commit, push or publication occurred.

The following provenance and initial-round notes remain useful context. Where they describe seven pages or the original smaller inventory, the expanded scope above supersedes them.

## Provenance and what changed after Stitch

Five concepts were generated in the existing Stitch project from D. The owner explicitly authorized sending website-facing CV/project copy to Stitch after automatic approval review blocked the initial text export. Actual prototype screenshot upload remained blocked and was not retried. Those files were inserted only into local reviewed HTML; they were not uploaded to Stitch.

**Use the local HTML and `*-opening.png` files as the current references.** Original Canvas screens still contain generated wording/placeholders and do not include the local source corrections. Raw exports, raw API responses, signed download URLs, and inaccurate original PNGs remain outside the repository. Canvas links below are provenance, not final copy authority.

| Initial Stitch concept | CLI-resolved screen | Current reviewed local file |
| --- | --- | --- |
| MAGraph | [3227c30920cb4d66940f7768fea285c3](https://stitch.google.com/projects/472790161448969402?node-id=3227c30920cb4d66940f7768fea285c3) | `magraph.html` |
| Fridge Match | [95234046ab9647d485a8d83e091aaf6e](https://stitch.google.com/projects/472790161448969402?node-id=95234046ab9647d485a8d83e091aaf6e) | `fridge-match.html` |
| CV | [f8a0f3f25cc9450e975158e562c71628](https://stitch.google.com/projects/472790161448969402?node-id=f8a0f3f25cc9450e975158e562c71628) | `cv.html` |
| Research index | [df807b938163434584368bbeb820cc7c](https://stitch.google.com/projects/472790161448969402?node-id=df807b938163434584368bbeb820cc7c) | `research.html` |
| Personal Projects index | [2240479ccfdd4eb0b68e075eb8acd1bd](https://stitch.google.com/projects/472790161448969402?node-id=2240479ccfdd4eb0b68e075eb8acd1bd) | `personal-projects.html` |

EnzymeMatch and Location Todo have no new Stitch screen IDs: they are explicitly local applications of the corrected templates. The selected originals remain in `../dark/D-desktop.html` and `../dark/D-mobile.html` as historical visual references. The current `../homepage.html` and expanded indexes expose the full design scope, with nine new complete public-copy briefs. Production links still depend on eligible source records.

Local corrections:

- Restored every existing project narrative paragraph and exact metadata; removed invented algorithms, measurements, scientific outcomes, implementation internals and fake reference IDs. Fridge's source Approach paragraphs are distributed across its Current workflow and Implementation decisions sections without losing content.
- Preserved full CV bibliography/author order and source dates. Removed claims of verified/audited records and visible route/file-path clutter. Kept the existing `#outputs` fragment.
- Replaced generic interests with the exact three selected titles/descriptions and exploration sentence; preserved source-backed project summaries and prototype qualifications.
- Reconciled all headers, navigation, footer, background and accent colors with D; reduced excessive monospace, increased small text, simplified the research figure, and made CV citations/projects open ruled rows.
- Inserted actual local screenshots with their exact sample-data captions. They are light application interfaces intentionally preserved within a dark portfolio.

## Asset inventory

| Asset | Source / classification | Rendering and public meaning |
| --- | --- | --- |
| `fridge-match-interface.png` | Exact copy of `src/assets/projects/fridge-match/interface.png`; actual prototype capture with authored sample kitchen | Contain; canonical alt/caption in CONTENT_CONTRACTS; documents workflow, not launch or impact |
| `location-todo-activity.png` | Exact copy of `src/assets/projects/location-todo/activity.png`; actual Android emulator with synthetic places/visits | Portrait/contain; totals are prototype records, not verified workouts or real-device location accuracy |
| MAGraph illustrations | Local code-native explanatory diagram, refined from generated composition | Gene families and observed proximity; clearly conceptual, no experimental result/causal claim |
| EnzymeMatch illustration | Local code-native explanatory workflow | Interaction filtering, geometric comparison, candidate prioritization; concept, not binding/catalysis evidence |
| `*-opening.png` | Browser-rendered reviewed local HTML at 1280×800 via Stitch's local capture CLI | Current design-review evidence; not images to embed as live site UI |

## Initial seven-page round: focused design QA

- IAB inspected all seven pages at 360×800, 390×844 and 1280×800: no horizontal overflow and no missing images. Navy `rgb(9,14,27)` and Sora headings confirmed in computed styles.
- Each page has one H1. Fragment targets exist. Phone navigation stayed visible with 44px link height in the representative template check.
- Clicked Research → MAGraph → CV → Research outputs; routes resolved in the design preview and the bibliography anchor reached the visible section.
- Existing PDF file is linked at `/files/woo-young-cho-cv.pdf` in the preview. It is the existing v1 shared-data PDF, not a newly styled/revalidated PDF produced by this task.
- Original D opening and new browser-rendered project/CV openings were inspected directly with `view_image`; composition, sans-serif hierarchy, palette, common header, media treatment, readable metadata and phone stacking were compared. Full source paragraphs and bibliography were checked separately from the screenshots.
- Final refinements resolved excessive terminal-style type, invented technical figure details, repetitive CV cards, illegible small metadata and screenshot placeholders. No known clipping or missing asset remains in the inspected widths.
- This is focused design QA, not a production accessibility certification. Keyboard/axe, no-JavaScript behavior, full responsive matrix, fonts without CDN, SEO, every production route, and all final PDF pages are implementation acceptance gates. Do not claim the old application test counts validate this redesign.

## Reconciliation ledger

| Comparison | D reference | Reviewed extension / intended implementation |
| --- | --- | --- |
| Identity/navigation | Sora name, horizontal visible nav | Same shell and labels on all seven pages; phone uses two rows |
| Palette/type | Navy, periwinkle, Sora/Inter | Exact canvas/accent tokens, restrained media surfaces; body and metadata use Inter |
| Page hierarchy | Spacious introduction and image-led work | Research figure plus long-form prose; product screenshot beside introduction; CV chronological rows |
| Images | Generated conceptual/project visuals | Source-constrained concepts and actual local app captures with honest captions |
| CV density | Homepage has compact background/citations | Full source CV remains long and readable; PDF stays a separate print presentation of shared data |
| Responsive behavior | Separate D desktop/phone concepts | One responsive HTML per subpage checked at narrow widths; implementation likewise uses one DOM |
| Content readiness | Homepage illustrates expanded portfolio | Current designs show all thirteen intended projects; the implementation plan distinguishes designs, editorial drafts and production eligibility |

No implementation should retain exported Tailwind CDN scripts, remote font dependency, raw HTML duplication, placeholder app UI or unsupported generated copy. Follow the accepted specification and real content sources, not raw Canvas claims.

## Preview recovery

The running review gallery is `http://127.0.0.1:4324/index.html`. To reopen from the retained artifacts later, use `python3 docs/design/stitch/serve-preview.py` from the website repository. It binds only localhost and maps the design routes to these HTML references. It does not start or alter the Astro app. All thirteen project design routes, both indexes, Blog, CV, assets and plan/spec links are mapped. These are localhost design routes; they do not establish production publication.
