# Horse-racing results integration

Owner-approved scope, October 15, 2026. The existing Astro case study at
`/projects/horse-racing/` links to the static React dashboard at
`/demos/horse-racing/`. Both use Night Gallery. React stays confined to the demo;
portfolio navigation, the evidence summary and the demo fallback work without JS.
No visitor runs a model. The precomputed JSON snapshot is the single display source.
The release follows the owner’s Production App Roadmap: explicit scope, data
boundaries, review, browser verification and a recoverable publication path.

## Data contract and workflow

The compute project prepares an immutable, audited release. Import into a review
branch with Node 24.16.0:

```
node scripts/import-horse-racing.mjs /absolute/path/to/release --approve-source
npm test
npm run build:release
npm run test:site
```

`--approve-source` is for reviewed source/asset changes. Normal imports require
exact approved source hashes and unchanged compiled assets. Only index, hashed
assets and display JSON enter `public/demos/horse-racing/`; release provenance
is normalized into `release.json`. Package guides, embedded workflow templates,
raw inputs, credentials and model weights are excluded. `config/horse-racing-source.json`
records the approved exporter/frontend code, never a secret. Import verifies hashes,
safe paths, symlink boundaries, dates, evidence identities and absence of direct
paper-superiority claims. Full build verification repeats checks on the *built*
copy. Static HTML retains its H1/main and local-link checks; no route is exempted.

The native Astro component derives current headline figures from that same JSON.
It labels historical study, held-out replay and genuine prospective counts
separately. Article source does not hard-code changing headline statistics.
Published-paper values are numerically compared with explicit different-cohort
limits. Loss-making bankroll results and experimental confidence remain visible.

## Publication and unattended delivery

PR/push CI validates main and all `codex/**` branches. Initial interface changes use
a reviewed main release. The existing manual main-only Pages workflow remains.
It also accepts main pushes touching the two snapshot paths. Before an automatic
release, `check-snapshot-push.mjs` checks *every* changed file; any other path keeps
publication manual. It then runs all unit/content checks, Astro checking, the
release build, CV PDF verification and browser tests. Only that validated artifact
is uploaded/deployed. A failed build never replaces the previous Pages deployment.

The private compute host's publisher uses existing noninteractive SSH authentication,
fetches portfolio main and works in an isolated temporary Git worktree. It checks
the immutable source manifest and runs this repository's strict importer. It can
commit only display JSON and release metadata, never compiled JS/CSS or site code.
A normal fast-forward push rejects concurrent changes; retry from fresh main.
No token from the conversational GitHub connector is stored or required.

The Wednesday 12:00 KST refresh and Mon/Thu–Sun 08:00 forecast captures call delivery
after successful retrieval/audit/export/package. Logs and delivery receipts stay
on the compute host. A push receipt records *pending Actions validation*, not a
successful deployment. Offline host/network delays are visible through the site's
snapshot date and stale-data notice. The next run can deliver without changing
old predictions. Automatic imports reject older snapshots; intentional rollback
requires reviewing a previous bundle and invoking a main-only manual publication.

## Verification and failure modes

- Boundary tests cover modified files, unexpected paths, corrupt bundles, symlinks
  and internal navigation. Profile/publication URLs still require HTTPS.
- Browser flow: case study → Explore results → each model → Results/Forecasts →
  Research/Simulation/Method → hash reload → case study; one JSON load and no model/API
  request. No-JS navigation and summary remain useful.
- Full existing site routes, draft exclusion, CV content/PDF, accessibility and
  responsive tests stay enabled. Browser plugin not available; regular Playwright.
- Actual snapshot is public data and reviewed statistical output, not a synthetic
  CI fixture. Do not promote retrospective replay to pre-race proof or infer profit.
- Snapshot/code mismatch, failed audits or CI, missing credentials, network errors
  and concurrent pushes fail closed. Source changes require reviewed reapproval.
- GitHub retains deploy history; keep old source packages for reproducible rollback.
