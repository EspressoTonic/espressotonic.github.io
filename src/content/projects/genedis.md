---
{
  "title": "GeNeDis Multi-Omics Hackathon",
  "summary": "For the GeNeDis hackathon, I built a reproducible workflow to pair RNA expression with DNA copy-number measurements in lung cancer and test how well each modality can reconstruct the other.",
  "shortSummary": "Pairing lung-cancer RNA expression and copy-number data, then testing reconstruction in both directions.",
  "category": "research",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Submission received · Outcome pending",
  "role": "Cohort design, data pipeline & model evaluation",
  "featured": false,
  "draft": false,
  "topics": ["Multi-omics", "Lung cancer", "Cross-modal reconstruction"],
  "links": [{"label": "Hackathon brief", "url": "https://2026.genedis.org/hackathon/", "kind": "write-up"}],
  "publicationIds": [],
  "updated": "2026-11-04",
  "dateLabel": "October 2026–present",
  "sortDate": "2026-10-07"
}
---

## The research question

How much can RNA expression tell us about DNA copy-number changes, and vice versa? I used public TCGA lung adenocarcinoma and lung squamous cell carcinoma measurements to ask this question in cases with both assays available.

## What I submitted

I built a repeatable workflow for checking sample identifiers and matching the assays, then used MOFA-based latent factors to test reconstruction in both directions. The package focused on making the cohort and the directional comparison reproducible.

## Follow-up and limits

After submission, I compared linear and residual neural baselines on held-out samples. Those development comparisons are separate from the received package. The project has yet to establish that the workflow generalizes to an independent cohort.

## Submission

The organizers confirmed receipt on November 3, 2026. Selection and award outcomes are pending.
