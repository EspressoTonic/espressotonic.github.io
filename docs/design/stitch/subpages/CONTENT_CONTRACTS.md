# Night Gallery subpages — public content contracts

Audited 2026-10-13. Read-only audit of the existing website content and the retained website implementation/design notes. These are source-faithful design inputs, not a new external verification or owner approval of every biography sentence. Application and vault files were not changed.

## Authority and scope

- Existing public facts: `src/content/profile/profile.md`, `src/content/cv/cv.md`, `src/content/projects/*.md`, and `src/content/publications/*.md` in `/Users/wycho/Documents/projects/espressotonic.github.io`.
- Current design authority: owner selected D — Night Gallery. Its images may illustrate the new composition; generated copy is not a source of new facts.
- Existing implementation plan: the website project note, especially the source-correction gates and the 2026-10-13 local implementation checkpoint. Current implemented records supersede the initial empty-repository assumptions.
- All public dates, labels, links, citations and caveats should come from shared source records. Retain detailed wording in the real page even where a design mockup needs compact sections.
- Do not transfer private source dossiers, operational endpoints, employer data or personal identifiers beyond the existing public contact fields into Stitch or the public repository.

## Shared navigation and identity

| Label | Destination / exact copy |
| --- | --- |
| Home/name | Woo Young Cho → `/` |
| Research | `/research/` |
| Personal Projects | `/personal-projects/` |
| Blog | `/blog/` — designed complete empty state; zero published posts |
| CV | `/cv/` |
| Contact from a subpage | `/#contact` |
| Public email | `wooyoung510@gmail.com` → `mailto:wooyoung510@gmail.com` |
| GitHub | `https://github.com/EspressoTonic` |
| ORCID | `https://orcid.org/0009-0002-7227-3326` |
| Download PDF | `/files/woo-young-cho-cv.pdf` |

No location, phone, portrait, availability statement, academic title, institutional logo, award or new social profile URL is established by these records. The owner requested LinkedIn, Instagram, X and Threads as plain labels without hyperlinks; those labels do not establish account handles. Do not add one to fill visual space.

## MAGraph — canonical research detail

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

## Fridge Match — canonical personal-project detail

Route `/projects/fridge-match/`; back link `/personal-projects/`. Show actual current stage near the title. The page should communicate product decisions and actual implementation evidence without implying release.

| Field | Exact supported value |
| --- | --- |
| Title | Fridge Match |
| Category/context | Personal · Independent |
| Status | Prototype |
| Status detail | Local/private prototype; no public demo |
| Period | Oct 2026 |
| Role | Product design, AI-assisted development & verification |
| Topics | Product design; Persistence; Everyday tools |
| Public code/demo links | None established; omit these actions |
| Review date | 2026-10-13 |

Exact summary: “An independent cooking-planning prototype connecting pantry inventory, recipe matching, shopping lists, and cooking history. I explored how local persistence and account synchronization can make an everyday workflow recoverable.”

Recommended section content:

1. **Problem and motivation.** Choosing what to cook starts with a mismatch between kitchen inventory and recipe requirements. Flow: inspect inventory → find suitable recipes → understand missing ingredients → update the kitchen after cooking.
2. **My contribution.** Defined product direction and implementation priorities, developed with AI assistance and directed verification of core workflows. A learning exercise in state, persistence, recovery and product boundaries. Preserve “AI-assisted” rather than recasting the work as independently hand-coded.
3. **Current workflow.** Ingredient inventory, deterministic recipe matching, cuisine/time preferences, shopping lists, cooking confirmation and undo. Small authored recipe collection keeps matching inspectable; a broader catalogue remains separate work. Do not relabel this as generative-AI recommendations.
4. **Implementation decisions.** Evolved from device-local state to local storage plus account-scoped synchronization. Offline changes remain pending until synchronization. Conflicts require an explicit recovery decision rather than silently replacing another copy.
5. **Evidence and outputs.** October 2026 checkpoints record the inventory, recommendation, shopping, cooking and undo flows. Persistence checks covered retained preferences/state across service restart; recovery and backup behavior checked in the private environment. No measured adoption or food-waste reduction is established.
6. **Limitations and current stage.** Local/private prototype. Public endpoint, production identity/recovery, real-device integration and operational coverage remain release work. Prototype recipes/substitution examples do not establish nutritional, allergen or food-safety guarantees. No public demo link because deployment has not been verified.
7. **Lessons learned.** Ordinary edits should survive interruptions; recovery should be understandable. Synchronization is also a product interaction.

### Fridge Match image contract

Actual local image already exists: `src/assets/projects/fridge-match/interface.png`.

Exact alt: “Fridge Match prototype with sample ingredients, cooking suggestions, and recipe controls.”

Exact caption: “Actual local prototype interface using the authored sample kitchen. The screenshot documents the workflow, not production availability or measured impact.”

Use `contain` and preserve legible interface content. A conceptual image in Stitch remains visibly labelled “Interface concept · sample data” until replaced by the actual permitted screenshot. Do not show a fake “live” badge, users/revenue/waste-saved metric, public launch date or store badge. Do not disclose account details, local URLs or private infrastructure.

## CV — source-faithful page contract

Route `/cv/`; public download `/files/woo-young-cho-cv.pdf`. H1 “Woo Young Cho”; subtitle “Computational biology & bioinformatics”. Content review date 2026-10-13. Contact fields and destinations are in the shared table above.

The screen CV may use Night Gallery dark styling, but the generated printable/downloadable CV must remain readable on white paper. Preserve one shared data source, semantic text, clickable public URLs and the same content review date. Dark web styling must not become dark full-page printed backgrounds by default.

### Experience — authored order

**Arontier — Researcher, AI Team — Oct 2025–present**

- Develop reproducible analysis workflows for transcriptomic and spatial-omics research, connecting data processing with interpretable outputs.
- Build and maintain workflow components for multiplex-imaging processing, quality control, per-cell feature extraction, and reporting.
- Investigate computational approaches to therapeutic hypothesis prioritization and high-dimensional biological data; ongoing work retains explicit validation limits.

**Connectagen — Bioinformatics Data Engineer — Sep 2023–Oct 2025**

- Developed bioinformatics workflows integrating biological data processing, curated databases, automated analysis, and stakeholder-facing reports.
- Built operational research software and maintained compute infrastructure supporting analysis workloads.
- Contributed to diagnostic bioinformatics and published collaborative genomics research.

**AG Schirmer, Technical University of Munich — Thesis research, academic projects & research internship — Oct 2021–Sep 2023**

- Designed and implemented MAGraph, preserving gene-neighborhood context in a graph-based metagenomic representation.
- Built reproducible analysis and database workflows for gene-centric metagenomic research.
- Investigated genomic-neighborhood approaches to gene-family analysis under academic supervision.

### Education

- **M.Sc. Bioinformatics**, Technical University of Munich & Ludwig Maximilian University of Munich — joint program. **Oct 2021–Aug 2023**.
- **B.Sc. Bioinformatics**, Technical University of Munich & Ludwig Maximilian University of Munich — joint program. **Sep 2016–Aug 2021**.

No thesis title, thesis grade, degree honor or numerical GPA is in the current public CV record. Do not invent one. The AG Schirmer combined academic/internship span ending Sep 2023 and M.Sc. ending Aug 2023 serve different fields; do not “correct” one to make the dates match.

### Research outputs

Preserve Published/Preprint distinctions. Current CV selection order is `ecoli-2026`, `genomycanalyzer-2024`, `metagear-2025`; this keeps published papers before the preprint. If the design groups by type, keep that rule explicit rather than implying all are journal publications. Do not invent publication counts beyond the listed record set.

1. **Genomic signatures associated with epidemiologically defined high-risk pathogenic Escherichia coli isolates identified by interpretable machine learning** — Journal of Microbiology 64(8), e2604011 · 2026 · Published. Date 2026-08-31. DOI `10.71150/jm.2604011`. Link `https://pubmed.ncbi.nlm.nih.gov/42687640/`. Authors: Yoojung Hwang, **Woo Young Cho**, Woojung Lee, Insun Joo, Jeong-Ih Shin, Mi-Ran Seo, Seung-Hun Shin, Kwan Soo Ko, Kun Taek Park, Yeun-Jun Chung, Seung-Hyun Jung.
2. **GenoMycAnalyzer: a web-based tool for species and drug resistance prediction for Mycobacterium genomes** — BMC Genomics 25, 387 · 2024 · Published. Date 2024-04-20. DOI/link `https://doi.org/10.1186/s12864-024-10320-3`. Authors: Doyoung Kim, Jeong-Ih Shin, In Young Yoo, Sungjin Jo, Jiyon Chu, **Woo Young Cho**, Seung-Hun Shin, Yeun-Jun Chung, Yeon-Joon Park, Seung-Hyun Jung.
3. **Gene-centric metagenomic analyses reveal microbiome functional insights into diseases** — bioRxiv · 2025 · Preprint. Date 2025-09-29. DOI/link `https://doi.org/10.1101/2025.09.29.679262`. Authors: Shen Jin, Aurelie Cenier, Lea Eisenhard, Emilio Ríos, Daniela Wetzel, **Woo Young Cho**, Till R. Lesker, Tobias Eisen, Svenja Schorlemmer, Agnieszka Gaska, Tingting Zheng, Marilena Stamouli, Merianne Mohamad, Sudip Das, Vishal C. Patel, Till Strowig, Melanie Schirmer.

The owner is second in the 2026 paper's authors, sixth in the other two. Highlight the owner's name if useful, but do not infer equal contribution or principal authorship. These bibliography fields were audited against the current records only, not freshly checked with publishers in this subtask.

### Selected projects

- MAGraph → `/projects/magraph/`; use its canonical summary.
- EnzymeMatch → `/projects/enzymematch/`; summary: “A structural-bioinformatics thesis project extending a database-dependent enzyme search tool. I developed and evaluated interaction matching, candidate ranking, and workflow improvements while examining computational tradeoffs.”

Do not automatically replace these deliberate CV selections with the homepage's featured selection. Newly featured projects may be added only after their source records and public claims are ready.

### Capabilities — exact group names and supported content

**Sequence & structural bioinformatics**
- Sequence search, clustering, functional annotation, and genomic-context analysis.
- Protein-structure and binding-site comparison; representations connecting sequence, structure, and function.

**Scientific programming & computing**
- Python, R, and shell scripting for research software and workflows.
- Snakemake, SLURM, Linux, Docker, and Apptainer execution environments.

**Machine learning & biological analysis**
- Applied modelling, feature engineering, cross-validation, benchmark design, and error analysis.
- Genomic, transcriptomic, metagenomic, single-cell, spatial-omics, and multiplex-imaging analysis.

**Data systems & research deployment**
- MongoDB and relational-database design; large-scale biological data storage and retrieval.
- APIs, automated reporting, and deployment of research software.

No skill percentages, rating bars, years-of-expertise totals, TensorFlow/PyTorch claims or certifications appear in this source. Do not invent them.

### Languages

Korean — native · English — fluent · German — C1.

## Project inventory and future page coverage

| ID / expected route | Current source / eligibility | Template and caveat |
| --- | --- | --- |
| `magraph` | Complete, non-draft record | Research detail reference designed now; thesis completed; broader MetaGEAR team output separate |
| `enzymematch` | Complete, non-draft record | Reuse research detail; Mar–Aug 2021; bachelor's thesis development & evaluation; code `https://github.com/MelseO24/EnzymeMatch`; exact thesis/paper naming remains a historical reconciliation gate; no later peer-reviewed paper established |
| `fridge-match` | Complete, non-draft record and actual screenshot | Personal detail reference designed now; local/private prototype; no public demo |
| `location-todo` | Complete, non-draft record and actual Android screenshot | Reuse personal detail; Oct 2026; Android emulator checked, full iOS build pending; real-device background timing, visit accuracy and battery not validated; export implemented, import/restore/sync not established |
| `spatial-omics-pipeline` | Record exists, `draft: true` | Employer-facing case-study wording under review; keep excluded from production routes, listing, sitemap and public links |
| `virtual-cell-challenge` | Homepage concept/brief only; no content record | Independent experiments/evaluation, including negative findings; needs source-grounded role/period/body, performed-vs-proposed evidence, limitations and permissible figure; no benchmark leadership or implied success |
| `genomycanalyzer` | Publication exists; no project record | Research/software detail needed; must distinguish owner's pipeline/deployment contribution from team methods; no sole authorship or clinical adoption claim |
| `commute-log` | Homepage concept/brief only; no content record | Personal detail needed; local MVP for recorded journeys/departure windows; no live location feed, telemetry, reliability metrics or public-service claim; capture actual permissible screenshot if available |
| `junior` | Homepage concept/brief link only; no content record | Personal prototype exploring supervised research assistants; needs bounded implemented-vs-proposed account; no production autonomous-scientist claim |
| LawGPT, NookCam, Ballet pose feedback, TC | Historical candidate context only; absent current content and public brief coverage | Do not create routes or public copy simply to complete an inventory; retrieve the project-specific evidence and public boundary in a future content task before inclusion |

The current production content set supports four detail pages. Use two representative designs to define reusable research/personal structures for all ready pages; do not fabricate separate project facts to fill every future mockup. An absent project route linked by a concept is an implementation gate, not an existing live page.

## Content deltas and caveats to carry into implementation

1. The current `profile.md` still has the v1 headline and interests. D uses the revised headline and three research questions from the retained design brief. Reconcile the selected homepage copy into the shared profile record explicitly; do not let the CV silently inherit promotional copy from a mockup.
2. The current source has four non-draft project pages, whereas the D homepage contains VCC, GenoMycAnalyzer, Commute Log and JUNIOR links. Those records and supported page contents must exist before public linking. Preserve EnzymeMatch even if it is not a homepage feature.
3. Existing Fridge Match and Location Todo images are actual prototype screenshots with synthetic data. D's generated interfaces are provisional composition references, not substitutes for implementation evidence.
4. Existing three publication records, experience/education/languages are internally consistent for these templates. They are not independently reverified here. “Present” role status and language proficiency are source claims, not new external checks.
5. Do not add exact thesis titles or assertions of EnzymeMatch publication. The retained plan explicitly marks its thesis/paper naming as needing reconciliation.
6. Employer spatial-imaging detail stays draft. General CV responsibilities do not authorize publication of confidential implementation diagrams, data, customer names or unpublished results.
7. Keep exact PDF route and one shared CV data owner. Test the complete release generation after dark CSS is applied, including all PDF pages and actual download validity.

## Expanded scope — owner request, 2026-10-13

The nine additional complete public-copy briefs and stable thirteen-project inventory are in [CONTENT_ADDITIONS.md](../expansion/CONTENT_ADDITIONS.md). They add VCC, MycoChase (published as GenoMycAnalyzer), Commute Log, JUNIOR, TC Personal Agent, LawGPT, Horse-Racing Forecast Research, Nook Cam and Ballet Pose Feedback. They do not alter the four existing project narratives or the CV's authored selections.

Blog is an actual empty route for later writing. No private vault draft is imported or published automatically. Primary navigation is Research, Personal Projects, Blog, CV. Homepage and non-CV footer SNS lists show LinkedIn, Instagram, X and Threads as spans, without links, guessed URLs or button behavior. Existing email/GitHub/ORCID links remain functional and separate. Exact Blog/SNS wording and implementation contracts are in the current plan and visual system.
