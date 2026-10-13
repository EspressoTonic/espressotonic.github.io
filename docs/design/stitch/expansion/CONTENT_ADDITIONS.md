# Night Gallery — content additions

Prepared 13 October 2026. This is the content contract for the design and implementation plan. It does not change application source, publish a project, or import private records into the website.

## Coverage and stable inventory

**Design coverage: 13 project subpages — four research and nine personal.** The current application has four non-draft project records: MAGraph, EnzymeMatch, Fridge Match, and Location Todo. The nine additions below are implementation-ready copy drafts, not nine already-published records. The employer-specific spatial-omics record stays unpublished and outside this inventory.

Use these IDs consistently in filenames, routes, index entries, related links, tests, and the sitemap. LawGPT is one project. The two ballet repositories support one Ballet Pose Feedback case study. TC and JUNIOR remain separate projects.

| ID / route suffix | Display title | Category | Source state | Stage | Period |
| --- | --- | --- | --- | --- | --- |
| `magraph` | MAGraph | research | Existing non-draft record | Completed academic thesis | Dec 2022–Aug 2023 |
| `virtual-cell-challenge` | Virtual Cell Challenge 2026 | research | New copy draft | Independent research · Experiments and evaluation | September 2026–present |
| `genomycanalyzer` | MycoChase (published as GenoMycAnalyzer) | research | New copy draft | Team software · Published work | September 2023–August 2025 |
| `enzymematch` | EnzymeMatch | research | Existing non-draft record | Completed academic thesis | Mar–Aug 2021 |
| `fridge-match` | Fridge Match | personal | Existing non-draft record | Prototype · local/private; no public demo | Oct 2026 |
| `commute-log` | Commute Log | personal | New copy draft | Archive-backed local MVP | September 2026 |
| `location-todo` | Location Todo | personal | Existing non-draft record | Prototype · Android emulator checked; full iOS build pending | Oct 2026 |
| `nookcam` | Nook Cam | personal | New copy draft | Private prototype | Omit |
| `ballet-pose-feedback` | Ballet Pose Feedback | personal | New copy draft | Early prototype · mock tracking | June 2026 prototype |
| `junior` | JUNIOR | personal | New copy draft | Supervised bioinformatics-copilot prototype | Omit |
| `tc-personal-agent` | TC Personal Agent | personal | New copy draft | Prototype history · Vault-centered redesign | Omit |
| `horse-racing` | Horse-Racing Forecast Research | personal | New copy draft | Research prototype · ongoing evaluation | 2025–2026 |
| `lawgpt` | LawGPT | personal | New copy draft | Early prototype · corpus audit | Restarted September 2026 |

Every detail route is `/projects/{id}/`. The research index contains the four eligible research records; the personal index contains the nine eligible personal records once implemented and checked. Counts must derive from the actual non-draft set or be omitted. A draft must not create a production route, card, related-project link, CV reference, or sitemap entry.

## Homepage and navigation contract

- The accepted current homepage uses **Fridge Match and Location Todo** as the two actual-screenshot features, followed by an open **Commute Log** row and six compact links. The current implementation plan and reviewed HTML own this order; the earlier three-item ordering was superseded during the design reconciliation.
- Preserve the selected research hierarchy: MAGraph lead feature, supported additional research rows, and access to the full research index. Do not turn the homepage into thirteen repeated cards.
- Primary navigation is **Research · Personal Projects · Blog · CV**. The name links home; Contact remains a meaningful homepage anchor.
- The accepted Blog section uses **“Notes from the work.”** and the selected zero-post explanation; its real `/blog/` index says **“No posts yet.”** See the plan/spec for exact final copy. There are zero article records; do not manufacture posts, publication dates, tags, feeds, newsletter forms, or placeholder article routes.
- The Social section displays **LinkedIn · Instagram · X · Threads** as plain text, with no hyperlinks, handles, click handlers, disabled controls, or focusable placeholders. Preserve email, GitHub, and ORCID separately as existing functional professional/contact links.

## Content implementation rules

1. Preserve the existing four project bodies, supported links, period labels, roles, and media captions unless the implementation plan identifies an explicit copy correction. Their records remain the source for the four existing designs.
2. Add the nine new records under `src/content/projects/{id}.md`. Copy the metadata and exact public text below. The frontend presents `stage` as `statusDetail`; it is descriptive text, not a new status enum. Use the mapped `status` and `context` values provided for each record.
3. Mark each record as draft during assembly. Make it non-draft only after its copy, links, media, route, and index behavior meet the documented checks. The owner has requested inclusion; this is a content-completeness gate, not an invented requirement for a new round of approval.
4. Unknown project periods remain absent. Make `dateLabel` and `sortDate` optional in the project schema and use explicit editorial order as the deterministic fallback. Do not use note creation, file modification, commit, or audit dates as invented project start dates. The record `updated` field may describe an actual editorial update without becoming a project-period label.
5. Category order is the stable table order above. The three personal homepage IDs must be explicit in the selection policy. An optional project date must not displace that curated ordering.
6. Use only the public links listed for each addition. An empty list means no Code or Demo action. A known repository name or authenticated access does not establish a public destination. Do not render empty anchors or `#` placeholders.
7. This file intentionally contains no private absolute paths, raw source notes, corpus payloads, credentials, network details, or private account identifiers. Keep source audit records in working context outside the public repository. Do not paste their `sourceNotes` fields into production content.
8. New figures are optional. Use source-constrained concepts where justified; otherwise omit missing media cleanly rather than creating interface placeholders, fabricated screenshots or invented charts. Actual local screenshots stay local unless their separate upload/publication scope permits export.

## Existing project roles to preserve

| Project | Exact role |
| --- | --- |
| MAGraph | Thesis researcher & primary MAGraph developer |
| EnzymeMatch | Bachelor’s thesis development & evaluation |
| Fridge Match | Product design, AI-assisted development & verification |
| Location Todo | Product specification, AI-assisted development & verification |

Existing supported links remain unchanged: MAGraph has its related MetaGEAR preprint; EnzymeMatch has its project repository. Fridge Match and Location Todo currently have no public demo or source-code action. Existing project imagery retains its original synthetic-data captions and evidence limits.

## Nine new project records

### Virtual Cell Challenge 2026

- File: `src/content/projects/virtual-cell-challenge.md`
- Route: `/projects/virtual-cell-challenge/`
- `title`: Virtual Cell Challenge 2026
- `category`: `research`
- `context`: `independent`
- `status`: `ongoing`
- `statusDetail`: Independent research · Experiments and evaluation
- `role`: Research design, model development & evaluation
- `dateLabel`: September 2026–present
- `topics`: Cellular-response modeling, Transfer evaluation, Reproducible research
- Homepage personal feature: no

**Exact summary**

An independent investigation of how cellular-response models transfer across biological contexts. I compare simple baselines, biological priors and cell-state models while keeping development results, competition scores and biological claims distinct.

**Exact body**

#### The research question

Can a response learned in one cellular context help predict another when only untreated cells are available? The project uses public perturbation data and the 2026 Virtual Cell Challenge as a setting for studying that transfer problem.

#### My contribution

I direct the research questions and comparison design, develop the modeling and evaluation workflow, and examine where its conclusions fail to generalize. The work emphasizes reproducible data preparation, explicit target and context exclusions, and frozen predictions before outcome scoring.

#### Experiments completed

Completed comparisons include transferred-effect and low-rank baselines, pathway and directed-graph priors, and a bounded native LEMUR study. These experiments use different evaluation settings; their scores are not interchangeable.

A first baseline received an official 2026 validation result and transferred poorly. The matched directed-graph comparison did not establish a real-graph advantage. The native LEMUR pilot showed modest distributional signals in a narrower represented-target setting, without demonstrating challenge transfer.

#### Current work

A streaming conditional count-model comparison has been prepared using public individual-cell data. Data preparation and resource profiling established bounded scale feasibility; predictive results were still pending at the latest recorded checkpoint on 13 October 2026.

A separate population-supervision follow-up is a research proposal. It must not be described as a completed experiment or an improvement over the current models.

#### What this establishes

The strongest result so far is a clearer evaluation boundary: a more expressive model or a biological prior does not automatically improve transfer. Simple comparators, matched controls and negative findings remain part of the project record.

Model-generated responses do not establish biological validity, causal mechanisms or individual-cell histories. Gene coverage and the limited number of source contexts remain material constraints.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Keep completed experiments, pending predictive results, and proposed population-supervision follow-up separate. The copy reflects the 13 October 2026 checkpoint, not a live training-status check.
- No competition-rank, positive-transfer, state-of-the-art, validated-biology, or causal-discovery claim. Do not convert distributional model output into an individual-cell history.
- No public Code action is established. Exclude run identifiers, credentials, infrastructure details, and unreviewed scientific figures.

### MycoChase (published as GenoMycAnalyzer)

- File: `src/content/projects/genomycanalyzer.md`
- Route: `/projects/genomycanalyzer/`
- `title`: MycoChase (published as GenoMycAnalyzer)
- `category`: `research`
- `context`: `industry`
- `status`: `completed`
- `statusDetail`: Team software · Published work
- `role`: Pipeline development, tailored deployment & operations
- `dateLabel`: September 2023–August 2025
- `topics`: Research software, Workflow integration, Deployment
- Homepage personal feature: no

**Exact summary**

My contributions to a team-developed genomics analysis system, connecting reproducible analysis workflows with reporting and operational deployment. The related GenoMycAnalyzer software paper was published in BMC Genomics in 2024.

**Exact body**

#### From analysis to usable software

Sequencing analysis becomes useful to collaborators when its inputs, quality checks and outputs form a coherent workflow. This project brought Mycobacterium genome analysis into a web-facing software and reporting system.

#### My contribution

My work focused on pipeline implementation and the tailored deployed version: adapting workflows for different sequencing inputs, supporting database curation and validation, and connecting analysis results to reports.

I also handled system setup, deployment, maintenance and operational support. These are contributions within a collaborative software project; the publication and its evaluation represent the wider team's work.

#### Engineering focus

My engineering focus is reliable workflow integration, maintainable software packaging, report generation, and the practical boundary between research code and a supported service. The public project includes command-line packages alongside partially released web-service source.

#### Published evidence

The peer-reviewed article, “GenoMycAnalyzer: a web-based tool for species and drug resistance prediction for Mycobacterium genomes,” appeared in BMC Genomics in 2024. I am a coauthor.

The paper provides the system-level validation context. Its reported performance should be attributed to the published team study, rather than presented as an isolated personal benchmark or a guarantee for new clinical settings.

#### Scope and lessons

Building deployable research software required attention to analysis assumptions, output interpretation, and ongoing operations as well as algorithms. My contribution connects those concerns at a software-engineering level.

Internal deployment details, organization-specific configurations, and non-public data stay outside this case study. The work does not establish sole authorship, regulatory clearance, or independent clinical validation.

**Public links**

- `paper` — [Read the paper](https://doi.org/10.1186/s12864-024-10320-3)
- `code` — [Public web-service source](https://github.com/IRCGP-Lab/GenoMycAnalyzer_Source)

**Evidence and privacy gates**

- Preserve the owner-selected MycoChase name with the published GenoMycAnalyzer identity and the stable genomycanalyzer route.
- Keep the project period distinct from full employment dates. Attribute system-level evidence to the team publication; do not claim sole authorship or clinical/regulatory validation.
- Use only the paper and public source link listed below. Keep internal configurations, employer-only repositories, client identities, and non-public data out of the page.
- Keep the narrative at the software-engineering level; do not add operational pathogen-analysis procedures.

### Commute Log

- File: `src/content/projects/commute-log.md`
- Route: `/projects/commute-log/`
- `title`: Commute Log
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Archive-backed local MVP
- `role`: Product direction, data interpretation & prototype verification
- `dateLabel`: September 2026
- `topics`: Everyday tools, Data provenance, Local-first software
- Homepage personal feature: yes — position 2, between Fridge Match and Location Todo

**Exact summary**

A local commute-history prototype for comparing recorded bus journeys and departure windows. It exposes the evidence behind each result and makes missing, ambiguous or unavailable records visible.

**Exact body**

#### The everyday question

How long did comparable bus journeys actually take, and which recorded departures arrived before a chosen deadline? The product starts with dated observations instead of replacing missing trips with an average or a predicted arrival time.

#### My contribution

I defined the narrow commute-history product, examined source semantics and matching limits, and guided an AI-assisted React prototype. Verification covered the relationship between the retained archive, the derived journey list and the user-visible evidence.

#### The local workflow

Users choose direction, date or weekday and an exact departure window, then inspect individual journeys. An arrival deadline can include a separately declared walking allowance. Saved preferences remain local, and archive import/export supports revisiting retained data.

The interface exposes the source records behind each derived journey. Ambiguous origin groups are excluded and reported; gaps are not filled with invented trips.

#### What was built and checked

The September 2026 MVP used retained records for a bounded Gyeonggi bus-route pilot. Its build and matching logic were tested, and desktop and mobile browser checks covered filters, deadline arithmetic, persistence, evidence disclosure and archive handling.

A portable single-file app and reproducible source archive were retained locally. Browser file-download completion remained unverified, so a tested selectable-text export fallback was included.

#### Limits and next steps

This is an archive-backed local web MVP. It is not a live collector, an installed mobile app or an Apps in Toss integration.

Provider timestamp semantics, source accuracy, ambiguous journey matching, route coverage and supported history access still constrain the product. A shared collector and broader route support are future work, not deployed features.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Describe an archive-backed local MVP, not a live collector, installed mobile app, comprehensive route service, or future-arrival guarantee.
- Preserve ambiguity and timestamp limits. Derived matched segments are interpretations of provider records, not independently verified passenger journeys.
- No public source/demo link is established. Any image must use sanitized sample data; omit personal routes, home/work locations, routine schedules, API keys, and retained private archives.

### Nook Cam

- File: `src/content/projects/nookcam.md`
- Route: `/projects/nookcam/`
- `title`: Nook Cam
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Private prototype
- `role`: Independent product design & prototype development
- `dateLabel`: omit
- `topics`: WebRTC, Private networking, Everyday tools
- Homepage personal feature: no

**Exact summary**

A private pet-camera prototype that gives a spare phone a camera role and another device a viewing role. It explores a self-hosted connection design, explicit pairing, and clear connection states without building a cloud video-storage service.

**Exact body**

#### An everyday camera workflow

The intended use is simple: leave a phone with a pet and view its live camera from another device. The interface separates camera setup from watching, so each screen can focus on the state of its own connection rather than exposing network configuration during normal use.

#### What is implemented

The repository contains a React interface with camera and watcher screens, pairing controls, browser camera access, WebRTC connections, and a Node signaling hub. Separate setup scripts support the private-network and local-certificate configuration described in the project documentation.

#### Connection architecture

The design uses a private VPN connection to a self-hosted hub, with authenticated media relay available when a direct connection is unavailable. Signaling and media have separate responsibilities. The prototype is designed for live viewing without retaining video recordings; that design is not a completed security audit.

#### Making states visible

Pairing, camera availability, media connection, and leaving a session are explicit parts of the product flow. Development-only demo states support visual review, and their generated pet imagery must be labelled as demo content rather than evidence of a real camera session.

#### Evidence boundary

The prototype includes the interface, connection logic, setup scripts, and network test sources. Cross-device operation and long-running reliability remain to be demonstrated in this case study. A working design and documented setup are a starting point for device trials, not proof of dependable remote monitoring.

#### Remaining work

Practical validation still needs device and network testing, including browser camera suspension, reconnect behavior, certificate setup, and mobile network changes. Home-network reachability can constrain the self-hosted approach. The current work is a private prototype, with no public demo or broadly validated service claim.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- The repository establishes an implemented private prototype, not merely an idea. It does not establish a newly verified cross-device deployment, long-running reliability, or independent security audit.
- No supported project period or public source/demo URL is established; omit them.
- Use only labelled conceptual imagery or public-safe interface states. Demo pet imagery is generated demo content, not a real camera session. Never expose network profiles, addresses, pairing credentials, certificates, or real private video.

### Ballet Pose Feedback

- File: `src/content/projects/ballet-pose-feedback.md`
- Route: `/projects/ballet-pose-feedback/`
- `title`: Ballet Pose Feedback
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Early prototype · mock tracking
- `role`: Independent prototype development & pipeline design
- `dateLabel`: June 2026 prototype
- `topics`: Computer vision, Movement feedback, Mobile software
- Homepage personal feature: no

**Exact summary**

An early movement-feedback project linking an offline pose-processing pipeline to an iOS camera interface. It explores inspectable body-geometry features and portable scoring packages; the current iOS overlay uses mock landmarks while real tracking and dataset validation remain pending.

**Exact body**

#### A bounded feedback problem

The initial scope is a short held ballet pose rather than unrestricted choreography assessment. The aim is to make broad body geometry and simple feedback inspectable, while acknowledging that a single camera cannot reliably judge every aspect of technique.

#### The offline pipeline

The Python repository contains modules for video ingestion, pose extraction, smoothing, normalization, feature computation, debug overlays, and scoring-package export. A link-and-time-range workflow and batch input format organize candidate reference clips. The first usable reference dataset and expert-label review remain pending in the documented task list.

#### The iOS companion

The SwiftUI repository contains camera, overlay, landmark, geometry, scoring, and feedback modules. The active screen is a narrow camera-and-skeleton check with animated mock landmarks. Real pose detection is an integration task, and the scoring modules are not the active end-to-end user flow.

#### A shared scoring contract

Versioned packages connect stable landmark names to derived angles, errors, target ranges, and feedback strings. This separates detection from scoring logic and avoids treating raw image coordinates as a complete assessment. Debug overlays are intended as a human review gate before accepting extracted data.

#### What the prototype demonstrates

So far, the work combines a modular pipeline, an initial scoring package, and an iOS interface scaffold. Validated pose detection, accurate coaching, and a completed build on a real device remain to be established. Dependency setup, source-file integration, detector integration, and reference-clip review are explicit next steps.

#### Technique and evaluation limits

Turnout, foot quality, musicality, and subtle technique are outside the reliable scope of this early single-camera approach. Any later feedback needs expert-labelled examples and evaluation across capture conditions. The project should support exploration and practice review without presenting itself as a replacement for a ballet teacher.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Treat the offline pipeline and iOS scaffold as one case study. The older candidate-only description is superseded by source evidence of scaffold implementation.
- The active iOS overlay uses animated mock landmarks. Do not imply real MediaPipe detection, device-build success, reviewed reference data, expert-labelled accuracy, or dependable coaching.
- No public source/demo URL is established. Reference media needs suitable reuse permission; illustrations must be labelled conceptual or mock.
- The early single-camera scope cannot reliably assess turnout, foot quality, musicality, or subtle technique; do not claim replacement of a ballet teacher.

### JUNIOR

- File: `src/content/projects/junior.md`
- Route: `/projects/junior/`
- `title`: JUNIOR
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Supervised bioinformatics-copilot prototype
- `role`: Project concept & analysis-governance design
- `dateLabel`: omit
- `topics`: Scientific assistants, Workflow validation, Human review
- Homepage personal feature: no

**Exact summary**

A personal bioinformatics-copilot prototype built around bounded workflows, input checks and human review. The aim is to make analysis assistance traceable before making stronger claims about automated discovery.

**Exact body**

#### The problem

A fluent answer is not enough to establish that a biological analysis is appropriate. JUNIOR explores how an assistant can first identify the analysis family, inspect the available inputs and expose assumptions before proposing work.

#### The project direction

I am shaping a supervised analysis-and-reporting loop: identify the task, check input sufficiency, propose a narrow workflow, use deterministic tools where appropriate, and produce an auditable report with caveats.

Relevant methods and literature should support the workflow. Human approval remains a boundary for changing scientific direction or making strong biological claims.

#### Prototype scope

The local prototype explores workflow classification, input validation, and supervised tool execution. These boundaries are part of its governing design, with concrete end-to-end examples still needed to show how well they work together.

Benchmarked analysis accuracy, production readiness, and a verified catalog of complete workflows remain to be established. The next step is evidence for a small, clearly defined analysis task.

#### What it is learning from

Broader scientific-agent systems provide architectural reference points for separated roles, literature grounding, and auditable artifacts. I am starting with a bounded bioinformatics-analysis loop; autonomous therapeutic discovery is outside the prototype's demonstrated capabilities.

#### Next evidence to establish

The next useful case-study evidence is a documented input-to-report example with explicit validation gates, reproducible artifacts and failure cases. Tool correctness, workflow appropriateness and biological interpretation should be evaluated separately.

JUNIOR is distinct from TC: its focus is supervised scientific analysis, while TC concerns personal memory, tasks and knowledge workflows.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Do not treat a note-creation date as a project start; omit the period.
- Keep governing design and proposed workflow behavior distinct from verified end-to-end execution. No benchmark performance, production deployment, autonomous discovery, or therapeutic-results claim.
- No public source/demo link is established. Keep JUNIOR distinct from TC; one concerns supervised bioinformatics analysis and the other personal knowledge and tasks.

### TC Personal Agent

- File: `src/content/projects/tc-personal-agent.md`
- Route: `/projects/tc-personal-agent/`
- `title`: TC Personal Agent
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Prototype history · Vault-centered redesign
- `role`: Personal workflow, memory architecture & system direction
- `dateLabel`: omit
- `topics`: Personal knowledge, Memory architecture, Workflow design
- Homepage personal feature: no

**Exact summary**

A continuing exploration of personal memory, tasks and knowledge workflows. TC's earlier prototypes now inform a vault-centered personal agent, with durable knowledge kept separate from runtime state and service integrations.

**Exact body**

#### The underlying need

Personal projects, study notes and recurring responsibilities spread across tools and conversations. This project asks how an assistant can use that context without turning each service or runtime store into a conflicting source of truth.

#### The direction changed

A June 2026 decision established the Markdown vault as the canonical knowledge and task source. TC is now the predecessor label and implementation history that a future vault-centered personal agent will replace or absorb.

Task services, runtime databases, and application state are adapters, caches, or working projections around that source. The older architecture is part of the project's history, not its final design.

#### Prototype history

Earlier experiments covered personal-agent memory, task and web components, a local notes-and-tasks application, and task-import tooling. They provide implementation history for the current direction.

These prototypes inform the redesign; the replacement agent is not complete. Historical automations also need their own verification before they can be described as current capabilities.

#### Design principles

Durable knowledge needs clear provenance, retrievable structure, and explicit corrections. The assistant should distinguish a saved conclusion from transient execution state and keep permissions and human decisions visible.

The architecture separates memory boundaries and workflow design from the private messages, account details, and personal task contents that may eventually pass through it.

#### What comes next

The next step is to turn the vault-centered direction into bounded, verifiable workflows with reliable retrieval and controlled actions. That remains separate from claiming that the future agent is complete.

TC and JUNIOR remain separate projects: this one organizes personal context and responsibilities; JUNIOR explores supervised bioinformatics analysis.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- The vault-centered direction supersedes the older architecture. TC is predecessor history for a future replacement/absorbing agent, not a completed new agent.
- A direction-change date is not a project start; omit the period. Historical automation entries do not establish current live functionality.
- No public source/demo link is established. Exclude private messages, task records, relationship conversations, account identifiers, and runtime memory contents from screenshots and examples.

### Horse-Racing Forecast Research

- File: `src/content/projects/horse-racing.md`
- Route: `/projects/horse-racing/`
- `title`: Horse-Racing Forecast Research
- `category`: `personal`
- `context`: `independent`
- `status`: `ongoing`
- `statusDetail`: Research prototype · ongoing evaluation
- `role`: Independent project direction, data pipelines & evaluation
- `dateLabel`: 2025–2026
- `topics`: Forecasting, Chronological evaluation, Data pipelines
- Homepage personal feature: no

**Exact summary**

A reproducible forecasting research project built around historical race data, chronological model evaluation, and timestamped prospective predictions. The emphasis is on reliable data lineage, honest baselines, and understanding where predictive performance fails to generalize.

**Exact body**

#### The research question

Can historical race information support useful forecasts when evaluation respects time and compares the same fields? The project treats this as an applied machine-learning problem. It does not present a profitable predictor or recommendations for placing bets.

#### Data with a traceable history

The recovered project combines official race records with explicit dataset manifests and quality checks. Derived data keeps raw-source identity traceable and handles duplicate records, missing observations, and source inconsistencies. Historical availability timestamps are not fully reconstructable, which limits some retrospective conclusions.

#### Models and controlled comparisons

Work progressed from auditing earlier finish-time models to a compact ranking baseline and controlled feature experiments. Opponent-strength and historical-pace additions did not demonstrate a reliable improvement, so the simpler baseline was retained. Learning-curve and probability-calibration experiments document modest or inconsistent effects rather than a promised accuracy jump.

#### Prospective evidence

The implemented collection workflow saves pre-race forecasts, frozen model identities, comparison rules, and subsequent outcomes. Ranking and probability evaluations preserve their own earliest eligible prediction records. Pending outcomes remain pending; retrospective benchmark reconstruction is labelled separately from rules frozen before prediction.

#### An inspectable research interface

A local dashboard presents recorded forecasts, ranked fields, scored and pending coverage, and method limitations. This makes it possible to inspect what the model knew at prediction time and follow later reconciliation. Public deployment remains a separate step.

#### What the results do not establish

The historical research model underperformed a final-odds favourite benchmark, which also has later information. The documented prospective sample was too short to establish stable performance. Research and live-model variants must remain separate, and calibration gains on one did not establish gains on the other. A matched prospective market comparison remains a future dependency, not a completed study.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Completed forecasting collection and local dashboard work can be described; the separate matched prospective market study has not started in the latest documented checkpoint.
- No profitable policy, market-beating predictor, guaranteed hit rate, or recommendations for placing bets. Do not substitute top-three inclusion for winner accuracy.
- Keep historical research and live-model variants, retrospective calculations and frozen prospective rules, and ranking/probability cohorts distinct.
- No public source/demo link is established. Avoid identifying private infrastructure or reproducing raw records, source hashes, logs, credentials, or betting simulations.

### LawGPT

- File: `src/content/projects/lawgpt.md`
- Route: `/projects/lawgpt/`
- `title`: LawGPT
- `category`: `personal`
- `context`: `independent`
- `status`: `prototype`
- `statusDetail`: Early prototype · corpus audit
- `role`: Independent project direction & prototype development
- `dateLabel`: Restarted September 2026
- `topics`: Retrieval, Source provenance, Agent workflows
- Homepage personal feature: no

**Exact summary**

A Korean legal-research prototype exploring how source-aware retrieval, persistent case context, and controlled tool use can make an assistant's reasoning easier to inspect. The current restart focuses on recovering and auditing the existing corpus before rebuilding retrieval.

**Exact body**

#### A source-first research assistant

The project investigates how a legal-research interface can keep a user's question, missing facts, retrieved documents, and model interpretation distinct. Its current purpose is personal learning and evidence of agent-harness engineering. It is not a validated legal-advice service.

#### What already exists

Earlier repositories contain a Korean chatbot prototype, hierarchical classification assets, and collection code for statutes and judicial decisions. An audit recovered a small tracked case sample and located a larger historical collection. Finding those files established that prior work exists; it did not establish corpus completeness, freshness, or retrieval accuracy.

#### Preserving the source

The restart prioritizes comparing retained source documents with processed text. The historical preprocessing can remove legally meaningful terms and structure, so the proposed replacement preserves originals, document identities, source links, and version information before producing derived chunks.

#### The proposed harness

The planned system combines bounded retrieval tools, case state, follow-up questions, citation checks, controlled retries, and inspectable execution traces. A keyword baseline comes before embedding comparisons. Local inference is the initial budget-conscious direction; a particular model has not been validated for this task.

#### Evidence and next milestone

The restart has reached recovery and repository inspection. A new retrieval index, replacement harness, and model benchmark remain to be demonstrated. The next useful evidence is a reproducible corpus audit and a fixed evaluation set that checks source resolution, missing-fact handling, and unsupported claims.

#### Limits

Generated conversations are training or evaluation material, not authoritative law. Engineering checks do not establish legal correctness. Any eventual public use would require a separately reviewed scope and appropriate substantive validation; the portfolio presents the prototype and its limits.

**Public links**

None. Omit external action buttons.

**Evidence and privacy gates**

- Use the legal-research/agent-harness restart framing; the older lawyer-matching plan is historical. The no-paid-API direction supersedes hosted-inference-first suggestions.
- Current restart evidence reaches recovery and corpus inspection. Do not claim newly built embeddings, a replacement harness, legal accuracy, comprehensive corpus coverage, or validated public advice.
- No public source/demo link is established. Keep private corpus locations, raw documents, credentials, and operational details outside the retained website content.

## Cross-page acceptance checks

- All thirteen design mockups use the same stable title/ID mapping. Distinguish design coverage from the four records currently eligible for production.
- The full personal index includes nine intended entries in the design; the homepage still features only Fridge Match, Commute Log, and Location Todo.
- A missing period produces no blank metadata label or invented date. Short and long case studies retain a balanced layout.
- The only new external project actions are the two listed for MycoChase/GenoMycAnalyzer. Check those targets before release; do not infer additional demos from screenshots.
- Blog navigation resolves to the honest empty index. No private blog draft is copied or published, and no fake article enters a feed or sitemap.
- LinkedIn, Instagram, X, and Threads are visible, non-interactive text. Existing email, GitHub, and ORCID links continue to work.
- Mobile rows, titles, stages, body text, figures, and contact labels wrap without overflow. Any chart or screenshot caption describes the actual evidence level.
- The shared CV and PDF do not automatically expand to list all thirteen projects; preserve their curated source and existing professional contacts.
- Verify required site checks after implementation. This design/content audit itself is not a new runtime, model, device, or scientific validation.
