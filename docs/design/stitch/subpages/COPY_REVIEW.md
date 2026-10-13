# Stitch export content review and local corrections

2026-10-13. Reviewed generated MAGraph, Fridge Match and CV exports against the existing website Markdown content. This is a content-integrity check, not independent scientific verification or an accessibility certification.

## Provenance and retained files

| File | Meaning |
| --- | --- |
| `magraph-stitch-original.html`, `fridge-match-stitch-original.html`, `cv-stitch-original.html` | Exact raw generated HTML preserved in scratch before correction; not recommended public artifacts |
| `magraph.html`, `fridge-match.html`, `cv.html` | Locally reviewed HTML: generated composition with the source-copy corrections described below |
| `fridge-match-interface.png` | Copy of the existing permitted website screenshot at `src/assets/projects/fridge-match/interface.png`; sample kitchen data; added only to local reviewed HTML |

No Canvas edit was made by this correction task. A Stitch link still opens the raw generated design and can show the inaccuracies recorded below. Final retained screenshots must be re-rendered from the reviewed local HTML; original Stitch PNGs no longer represent the corrected copy.

The actual Fridge Match screenshot was not uploaded to Stitch. Its Canvas design contains a plain placeholder. The local reviewed design replaces that placeholder with the existing real screenshot, preserving its source alt and caption. No raw export with unsupported text should silently be labelled factual or approved.

## MAGraph — corrected

The generator expanded almost every narrative section with unsupported implementation and evaluation details. Selective removal was insufficient. All six narrative section bodies were replaced with the **exact existing Markdown paragraphs** from `src/content/projects/magraph.md`, preserving the generated section/layout classes and headings. All nine source paragraphs are present, including personal-versus-team attribution and scientific limits.

Examples of removed unsupported text:

- `REF: THESIS-2023-MG` — invented identifier; removed its badge.
- `Authoring reproducible Snakemake workflows wrapping gene prediction (Prodigal), homology clustering (Linclust/MMseqs2), and coordinate extraction.` — not established in the public source record; whole contribution body restored.
- `graph nodes ... accrue weight and provenance metadata` and claims of exact intergenic annotations — not established in this record; approach body restored.
- `two independent published metagenomic cohorts` — source establishes two cohorts, not these added qualifiers; evidence body restored.
- `validating the foundational representation design` — unsupported validation conclusion; evidence body restored.
- Filtering prescriptions, reconstructed metabolic clusters, highest-weight paths and graph-density evaluation claims — absent from source; removed with the expanded paragraphs.
- `EDGE_ID: #AB_0842`, `span: 124 bp`, `PROV: [contig_α, sample_04]`, `indexed` — fake record payload; replaced with plain “Gene families”, “Observed relationships”, “Annotations”.
- `© 2025 Woo Young Cho. Calibrated under archival and peer-reviewed standards.` — invented date/assurance; replaced with “Woo Young Cho”.

The three conceptual illustration descriptions are now bounded to source:

1. “Gene-neighborhood information is observed on assembled metagenomic contigs.”
2. “Gene families are nodes; assembly-derived proximal gene relationships are edges.”
3. “Observed neighborhoods and their annotations remain in a queryable representation.”

The figure retains: “Concept illustration of the thesis representation; not an experimental result.” Illustrative gene/family shapes are not represented as measured data. No added code link or quantitative result survives.

## Fridge Match — corrected

All narrative bodies were restored from the **exact source paragraphs** in `src/content/projects/fridge-match.md`. Its two Approach paragraphs are distributed across the generated “Current workflow” and “Implementation decisions” sections; the other source sections map directly. All nine source paragraphs are present.

Examples of removed unsupported text:

- `state reducers`, `strict manual test control`, and explicit schema/event-log architecture — not established in the source; contribution restored.
- `Ingredients are matched against exact inventory keys; missing ingredients are automatically routed into draft shopping items.` — extra implementation specifics; workflow restored.
- `atomic deductions` — atomicity not established; removed.
- `guaranteeing zero input loss` — unsupported absolute guarantee; removed.
- `Relies on indexed client storage for instantaneous interaction speed` — invented storage/performance claim; removed.
- `Full transaction rollback verified for accidental cooking logs.` — no such exact verification claim in the source; replaced by actual recorded persistence/recovery evidence.
- `private staging environment`, `automated web scraping`, and `real-device native packaging` — generated specificity beyond the source; replaced by exact source wording.
- `No public release or external endpoint is deployed.` / `no public demo or repository` — absence was inferred too strongly; retained the source status “Local/private prototype; no public demo” and source deployment-verification caveat.
- `Target display: object-contain · local render` — implementation clutter in visible UI; removed with the placeholder.
- `Deterministic cycle: state mutates only on user verification and explicit undo.` — unsupported state invariant; replaced by “Inventory, recipe matching, shopping lists, cooking confirmation, and undo.”

Local reviewed image alt: “Fridge Match prototype with sample ingredients, cooking suggestions, and recipe controls.”

Local reviewed image caption: “Actual local prototype interface using the authored sample kitchen. The screenshot documents the workflow, not production availability or measured impact.”

The retained exact source Evidence section now truthfully refers to the real image actually displayed. The image remains local; it is not generated UI and was not sent to Stitch.

## CV — checked and corrected

All three experience entries, two degree entries, three publication titles/statuses/dates/full author lists, selected project summaries, four capability groups and language labels matched current records. No correction to a factual bibliography field was needed.

Source periods are preserved; the design's spacing around en dashes is merely typography. The publication order remains source-authored: 2026 published paper, 2024 published paper, 2025 preprint. The owner is not labelled first or equal-first author.

Removed presentation claims/clutter:

- `Verified public CV record` and its redundant month badge — removed, because neither a mockup nor this audit establishes external verification.
- `Audited record` — removed from the output-section descriptor.
- `Route: /cv/` — removed from visible text; semantic routes remain unchanged.
- `Print-friendly PDF (/files/woo-young-cho-cv.pdf)` → `Print-friendly PDF`; download href stays exact.
- `View project case study (/projects/magraph/) →` → `View project case study →`; href unchanged.
- `View project overview (/projects/enzymematch/) →` → `View project overview →`; href unchanged.
- Reconciled generated `#research-outputs` links and section ID to existing application `#outputs`.

## Verification performed

- Every canonical Markdown body paragraph appears verbatim in each corrected project export: nine MAGraph paragraphs and nine Fridge Match paragraphs.
- Known generated method/result/storage/rollback/guarantee strings listed above are absent from reviewed project files.
- Project and CV fragment links target existing unique IDs.
- Exact download/profile/publication hrefs were preserved.
- The local screenshot has intrinsic dimensions 1080 × 1089 and uses `object-fit: contain`.

Root will reconcile shared headers, fonts, colors and final responsive visual QA after this content pass. Those visual tasks are separate from the source-copy corrections recorded here.
