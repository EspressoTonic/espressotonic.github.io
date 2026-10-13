# MAGraph — research project

Create a DIFFERENT PAGE in the same selected D Night Gallery portfolio. Preserve the source screen's visual identity, not its homepage layout/content. Navy #090e1b canvas, #101a2c media surfaces, #edf3ff text, #adb9d0 secondary text, #8fa7ff periwinkle accent; Sora display and Inter body. This is the owner's selected style; ignore earlier cream or sage design systems. No serif, beige, glow, dashboards, decorative fake metrics, stock photos, or fake product screenshots. Refined open layout, generous but purposeful spacing, thin separators, readable prose. Same visible top navigation: Woo Young Cho /; Research /research/; Personal Projects /personal-projects/; CV /cv/. On phones name first row and links second row; all visible and at least 44px tap height, no hamburger. Footer public email wooyoung510@gmail.com, GitHub https://github.com/EspressoTonic and ORCID https://orcid.org/0009-0002-7227-3326. Use proper links, semantic headings, visible focus and accessible contrast. Design desktop 1280px AND genuinely responsive HTML at 390px (min-width:0, no fixed-width overflowing tables/diagrams, wrap metadata, stack columns, 20px side padding, 16px body). Keep source-backed factual text exact. Do not invent links or facts. One H1. The actual CV PDF href is /files/woo-young-cho-cv.pdf. Use NO remote photo imagery; create only modest CSS/SVG conceptual visuals where specified. Full page, no content truncation.

PAGE: MAGraph — research project
Replace homepage with the research case-study detail page. Above the title use a modest All research back link. Large MAGraph H1 with summary below. Near the title, show Academic / Completed, period and actual role; no cards for every metadata field. Supported action Related preprint. Below hero create a wide, restrained concept figure: three clearly labelled stages Assembled neighbourhoods → Gene families & observed proximity → Queryable context. Use schematic gene bars/nodes with no invented biological labels, scores, inference or GNN terminology. Caption exactly: Concept illustration of the thesis representation; not an experimental result. On mobile stack its stages so labels remain legible. Below, compact desktop On this page anchor column alongside an article of six substantial readable sections. On mobile anchor navigation wraps above the article. Do not collapse paragraphs behind accordions. A small lower related-output block may repeat the preprint with a Preprint label. End with All research and Contact, no invented next project. Use all factual material below without inventing results:


Route `/projects/magraph/`; back link `/research/`. Role and contribution should be visible near the title without turning the page into a metrics dashboard.

| Field | Exact supported value |
| --- | --- |
| Title | MAGraph |
| Category/context | Research · Academic |
| Status | Completed |
| Period | Dec 2022–Aug 2023 |
| Role | Thesis researcher & primary MAGraph developer |
| Topics | Metagenomics; Biological representations; Research software |
| Public output link | Related preprint → `https://doi.org/10.1101/2025.09.29.679262` |
| Related output ID | `metagear-2025` |
| Review date | 2026-10-13 |

Exact summary: “A graph-based representation that preserves gene-neighborhood context lost when metagenomic assemblies are reduced to gene catalogues. My thesis work combined representation design, implementation, and reproducible analysis.”

Recommended section content, faithfully condensed from the record:

1. **Problem and motivation.** Sequence-based clustering makes metagenomic cohorts manageable but can flatten positions on assembled contigs. Neighbouring genes provide context for functional modules and operon-level analysis. The master's thesis investigated retaining this layer in a reusable representation.
2. **My contribution.** Designed and implemented the MAGraph component under supervision in AG Schirmer. Python package development, graph-like data model, database-backed storage, annotation and reproducible processing. This is the thesis-derived representation and implementation; later team-wide MetaGEAR analyses and scale are separate.
3. **Approach and decisions.** Gene families are nodes and assembly-derived proximal gene relationships are edges. Store observed neighbourhoods and annotations in a queryable representation. Python, MongoDB and Snakemake-supported workflows connect assembly information, families and annotation. The project examined attaching expression information; do not turn this into a claim of a validated multiomics model.
4. **Evidence and outputs.** Representation implemented; operon-level analysis demonstrated on two metagenomic cohorts; qualitative recovery task and edge-classification evaluation. Explain the workflow and evaluation context rather than inventing a headline score. Link the related 2025 MetaGEAR preprint and label it a preprint.
5. **Limitations and current stage.** Depends on sequencing depth, assembly quality and gene calling. Missing/fragmented neighbourhoods limit observed relationships. An annotated edge is observed context, not proof of regulation or function. Thesis complete; wider biological claims and specialized-predictor comparisons need their own evaluation.
6. **Lessons learned.** A coherent representation needs a reproducible path from data, with uncertainty preserved as carefully as queryability.

### MAGraph figure contract

- An explanatory gene-neighbourhood representation is justified. Clear progression may show assembled gene neighbourhoods → gene families / graph representation → queryable observed context.
- Distinguish an illustration from a result. Caption: “Concept illustration of the thesis representation; not an experimental result.”
- Keep gene-family and adjacency semantics true to the source. No inferred causal arrows, regulatory effects, fabricated biological labels, scores, statistical plots, predictive superiority, dataset dimensions or benchmark rank.
- No real scientific figure asset is currently present under `src/assets/projects/` for MAGraph. The existing generic illustration can be replaced with a source-grounded SVG, but it is not a thesis figure.
- No public MAGraph source-code URL is established in its content record. Do not invent a GitHub repository or active “View code” button. The related preprint is the supported primary action.
- Do not claim sole authorship of MetaGEAR, paper-wide scale as a personal achievement, first/equal-first authorship, single-cell modeling, or clinical validation.
