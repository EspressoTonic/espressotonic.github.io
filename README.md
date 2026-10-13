# Woo Young Cho — personal portfolio

A static Astro portfolio in the selected D — Night Gallery design, with thirteen project case studies, Research and Personal Projects indexes, an initially empty Blog, and a shared web/PDF CV. Source content is curated public Markdown. No backend, account, or runtime content API is required.

## Local workflow

Use Node 24 (the development runtime is recorded in `.nvmrc`).

```sh
npm ci
npx playwright install chromium
npm run dev
```

Development serves at http://127.0.0.1:4321 and includes public-safe editorial drafts. Stop it before starting release tests. A draft flag excludes content from the production site; it does not make a public repository private.

```sh
npm test
npm run build:release
npm run test:site
npm run preview
```

`build:release` checks data/types, builds the static site, prints the built `/cv/` page to `dist/files/woo-young-cho-cv.pdf`, and validates local links. It does not rebuild after generating the PDF. Plain `npm run build` and the development server do not generate a fresh PDF; use the release preview for download verification.

## Content

Records are Markdown in `src/content/{profile,cv,projects,publications,blog}` with validated frontmatter. The records use YAML frontmatter; JSON-shaped frontmatter with the same fields also works. Keep dates quoted.

- **Add a project:** copy a project record, choose a stable kebab-case filename, set category/context/status and your contribution, start with `draft: true`, add supported prose, and preview. Add only public-safe material. After review, set `draft: false`, then run the release checks. Routes/listings are generated automatically.
- **Add an image:** place a selected screenshot/diagram under `src/assets/projects/<id>/`; `cover.src` resolves relative to its Markdown file. Supply alt text and a truthful caption. Optional additional images use `figures` with stable IDs. Never publish private identifiers or unreviewed employer imagery.
- **Update CV:** edit the single CV record. The web/PDF CV use it; the authored project/output selections stay independent of homepage features. Update `updated` only for a substantive content review.
- **Update an output:** edit its publication record. Project `publicationIds` owns the project/output relationship; reverse references are derived. Authors are in verified order; `ownerAuthorIndex` is zero-based and only controls highlighting.
- **Change status:** update the badge, qualification, prose tense, and limitations together. Do not use a badge to hide an overclaimed result.
- **Missing links/images:** omit the field. Never use `#`, fake demo URLs, or invented screenshots.
- **Unknown project periods:** omit `dateLabel` and `sortDate` when unsupported. Dated indexes sort newest first, then undated IDs deterministically; the personal index uses the curated groups in `src/lib/policy.mjs`.
- **Homepage curation:** profile `heroProjectId` identifies MAGraph; research excludes the hero before limiting features. Fridge Match/Location Todo use actual screenshots, followed by Commute Log and six compact public-only links.
- **Stable URLs:** avoid renaming released project filenames. Category changes do not alter `/projects/<id>/`.

## Writing and social profiles

The actual Blog collection starts with zero posts. `src/content/blog/.gitkeep` preserves that directory. Astro prints its ordinary empty-collection notices during build; this is expected and the release checks explicitly accept zero posts. No feed, subscription form, fake post, automatic vault import, or scheduled publishing is included.

To add a reviewed article, create `src/content/blog/<stable-id>.md` with `title`, `excerpt`, `language: en | ko`, `draft: true`, optional `publishedDate`/`updated` (`YYYY-MM-DD`), optional `relatedProjectIds`, and a real Markdown body starting at H2. Only public-safe copy belongs in the repository, even in a draft. Set `draft: false` only with a real nonfuture publication date and public related-project IDs; run the release checks. The route is `/blog/<stable-id>/`, with the correct document language. Korean layout was exercised in an isolated temporary build, not by adding a fake article here.

Profile `socialProfiles` contains LinkedIn, Instagram, X and Threads with all URL fields absent. They render as noninteractive text in the homepage and footer; CV/PDF omit the inactive SNS group. Later profile activation requires the owner's public HTTPS URL and corresponding review of the current no-link acceptance checks. Existing email/GitHub/ORCID links stay separate.

Typography is self-hosted Inter/Sora; licenses and source information are in `public/fonts/`. Reviewed source images and diagram classifications are in `docs/design/ASSETS.md`. The dark social preview has a vector source at `src/assets/identity/social-preview.svg` and its PNG at `public/social-preview.png`.

## Release

PRs run validation and upload a review artifact; they do not deploy. The manual deployment workflow only permits `main`, builds and checks one artifact, and deploys that exact artifact. Configure GitHub Pages to use GitHub Actions when publication is authorized. No personal token is needed.

Before releasing, review public copy, contact details, current employment, output status, and image permissions. Spatial-omics wording is initially an editorial draft excluded from production. After deployment, check root/nested URLs, PDF, and 404 handling. Roll back by reverting or redeploying a known-good commit; do not force-push.

## Current implementation

Night Gallery is implemented as a tested local release candidate. The release contains four research and nine personal projects, both indexes, homepage, Blog, CV and custom 404: nineteen HTML pages, zero Blog articles, and a two-page CV PDF. The employer-specific spatial-omics record remains excluded. A project page documents the work and its limits; it does not establish that its prototype is publicly deployed.

- [Implementation status](IMPLEMENTATION_STATUS.md) — completed slices, checks, source preservation and fidelity ledger.
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md) — retained task sequence and contracts.
- [Expansion content briefs](docs/design/stitch/expansion/CONTENT_ADDITIONS.md) — nine source-backed narratives and evidence limits.
- [Visual system](docs/design/DESIGN.md), [design gallery](docs/design/stitch/index.html), and [asset inventory](docs/design/ASSETS.md).
- The current static release preview is `http://127.0.0.1:4326`; `npm run preview` uses 4321 when it is free. The separate design gallery can be reopened with `python3 docs/design/stitch/serve-preview.py` on 4324.

The owner authorized committing/pushing and then merging to `main` and deploying to GitHub Pages on 2026-10-14. Publish through the validated, manually triggered Actions workflow; check the final deployment and live routes.
