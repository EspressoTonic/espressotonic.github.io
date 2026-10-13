> **Current decision — 2026-10-13:** The owner selected **D — Night Gallery**. The active subpage suite and detailed implementation handoff are in [../subpages/REVIEW.md](../subpages/REVIEW.md). Earlier comparisons below are retained as history.

# Dark portfolio directions

2026-10-13. Design exploration only; no production implementation or publication.

## Owner feedback and current brief

The owner found the light editorial concepts too Claude-like and requested a different design in dark mode. The warm paper palette, serif headings, and monograph presentation are no longer the active direction. Earlier A/B concepts are retained as history.

Keep the audience of research labs and AI/biotech employers. Keep separate research and personal-project indexes, project detail pages, a CV page and downloadable CV. The content and evidence boundaries in the original `../REVIEW.md` still apply; its recommendation of light concept B is superseded by this dark exploration.

## The two alternatives

- **C — Carbon Atlas:** near-black graphite, acid-sage accent, confident sans-serif type and a narrow navigation rail. Research is presented as a structured visual index. The rail must become a compact visible header on a phone.
- **D — Night Gallery:** deep navy, cool blue/periwinkle accents, modern sans-serif type, conventional top navigation and larger, varied project visuals. The work supplies most of the page's color. Research and personal projects remain separate sections.

Neither direction should use serif headings, paper textures, beige or terracotta styling, generic gradient spheres, glass dashboard surfaces, fake terminal output, live telemetry or fabricated metrics. Diagrams are labelled concept illustrations and fictional interface previews are labelled sample data.

## Interpretation and content rules

Generated concepts are composition references. Their diagrams are not scientific results, and their interface previews are not evidence that an application already looks that way. Before implementation, replace them with permitted actual screenshots or explanatory diagrams based on verified project material.

Use repository content records and the retained brief for facts and links. Preserve exact citation titles, Published/Preprint distinctions, email, GitHub and ORCID. Do not infer achievements, current institutional affiliation, availability, clinical use, authorship rank or project maturity from the visual design.

## Implementation consequences after selection

1. Write one accepted dark design specification. Do not reuse the old light `DESIGN.generated.md` as the style authority. The selected dark screenshots govern composition; the implementation specification must reconcile their desktop/mobile differences.
2. Keep the existing Astro static architecture. Share content records and responsive components; do not copy independent desktop and mobile HTML into separate live pages. Generated CDN scripts and temporary export URLs do not belong in the production implementation.
3. Map dark tokens to canvas, raised surface, primary text, secondary text, rule, link, primary action and focus. Verify contrast on actual surfaces, including project visuals and statuses; dark backgrounds do not automatically imply accessible contrast.
4. Preserve semantic headings and readable line lengths. Make navigation and actions keyboard reachable, add a skip link, use visible focus, and give phone links adequate tap areas. Essential labels should not rely on tiny mono text or dim gray.
5. Build project-specific assets with explicit alt text, captions and fit rules. Prefer `contain` for readable app UI; do not crop away the evidence or enlarge placeholders into decorative filler.
6. Generate the research index, personal-project index, MAGraph case study, Fridge Match case study and CV designs using the selected dark language before the implementation pass.
7. Follow the existing implementation and validation sequence in `../REVIEW.md`, substituting the accepted dark design. Keep all code in `/Users/wycho/Documents/projects/espressotonic.github.io`; nothing belongs in the vault.

## Review status

Final visual findings, screen links and focused verification results are recorded below when export review is complete. These checks are design QA, not a production accessibility certification or a claim that all generated HTML routes are implemented.

## Recommendation and remaining visual decisions

Recommend **D — Night Gallery** for the owner's latest feedback. Its navy palette, Sora headings, open research rows and asymmetric personal-project composition make a stronger departure from the previous warm editorial concepts. C is a useful alternative for a more structured technical identity; its repeated cards and mono labels feel closer to a dashboard.

The main remaining visual work is asset quality: replace D's broad conceptual MAGraph panel with an accurate project-specific illustration, replace the sample application interfaces with permitted real screenshots, and let the portrait Location Todo screenshot occupy more of its frame. Keep figure text large enough to read on a phone. C's prototype panels repeat some project descriptions; remove those duplicates during implementation.

The concepts may vary in small details across desktop and mobile, including eyebrows, casing, corner treatment and citation cards. An implementation must reconcile these into one coherent responsive system. Choosing a direction does not make every incidental generated label or component a requirement.

## Focused verification

- Desktop openings were rendered in a browser at 1280 × 800 and inspected visually.
- Phone layouts were checked at 390 × 844: dark surfaces and sans-serif headings confirmed; no horizontal overflow; both primary actions visible in the first viewport. Final C actions measured 44/46px high and D actions 44px after the figure cleanup; both final phone layouts were rechecked without overflow.
- Required project, publication and contact destinations and exact headline/citation/exploration text were checked against the retained content reference. These are href/content checks, not claims that every destination is live or every project route already exists.
- Unrequested algorithm/method subtitles in phone illustrations were removed, and their absence was checked in the final exports. Concept illustrations remain provisional and must be validated against project material before public use.
- No full accessibility audit was performed. Small secondary text, focus appearance, tap targets, image descriptions and all breakpoints still require implementation QA.
- Website application code remains unchanged. Design artifacts belong only under the website repository's docs/design/stitch/dark directory, outside the vault. No publication, push, commit or project binding.

## Current screen references

| Screen | Stitch screen |
| --- | --- |
| C desktop | [cd4e07cf8e924e6c93a4048f5bb3f925](https://stitch.google.com/projects/472790161448969402?node-id=cd4e07cf8e924e6c93a4048f5bb3f925) |
| C mobile | [abb3646b4cda417d9726ea8592d519c3](https://stitch.google.com/projects/472790161448969402?node-id=abb3646b4cda417d9726ea8592d519c3) |
| D desktop | [3471269857be4ff6b91bcdadbfad13fe](https://stitch.google.com/projects/472790161448969402?node-id=3471269857be4ff6b91bcdadbfad13fe) |
| D mobile | [9142830c57df474d8433875d5be66d49](https://stitch.google.com/projects/472790161448969402?node-id=9142830c57df474d8433875d5be66d49) |

Original HTML and PNG exports are named by direction and device. `C-opening.png` and `D-opening.png` are browser-rendered desktop views. Prompts are retained as `C-brief.md` and `D-brief.md`; raw API responses and signed asset URLs are excluded.
