---
{
  "title": "Virtual Cell Challenge 2026",
  "summary": "I submitted a model to the 2026 Virtual Cell Challenge, which asks how gene knockdowns change gene expression in unfamiliar cellular contexts. I compared simple transfer baselines with network-informed models using public perturbation data.",
  "shortSummary": "Predicting gene-expression responses to CRISPRi across cell contexts, with matched tests of network features.",
  "category": "research",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Final entry submitted · Results pending",
  "role": "Research design, model development & evaluation",
  "featured": true,
  "draft": false,
  "topics": ["Perturbation response", "Transfer evaluation", "Network features"],
  "links": [{"label": "Challenge brief", "url": "https://arcinstitute.org/news/virtual-cell-challenge-2026", "kind": "write-up"}],
  "publicationIds": [],
  "updated": "2026-11-04",
  "dateLabel": "September 2026–present",
  "sortDate": "2026-09",
  "featuredOrder": 2
}
---

## The research question

Can we use measured responses in one cell context to predict what happens after a gene knockdown in another? I used public single-cell perturbation data and the challenge's CRISPRi prediction task to study this transfer problem.

## My contribution

I designed the comparisons, built the model and evaluation workflows, and examined where performance broke down. I defined which targets and contexts to hold out and froze predictions before scoring. I compared transferred-effect and low-rank baselines with pathway and gene-network features.

## What the comparisons showed

An early baseline transferred poorly on the official validation panel. In a separate development experiment on a held-out cell context, adding STRING network features did not improve the population and count comparison over the matched reference. These experiments used different evaluation settings.

## Submission

I submitted a final entry for the 2026 challenge. The final competition score and ranking are pending.
