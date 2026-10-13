---
{
  "title": "Virtual Cell Challenge 2026",
  "summary": "An independent investigation of how cellular-response models transfer across biological contexts. I compare simple baselines, biological priors and cell-state models while keeping development results, competition scores and biological claims distinct.",
  "category": "research",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Independent research · Experiments and evaluation",
  "role": "Research design, model development & evaluation",
  "featured": true,
  "draft": false,
  "topics": [
    "Cellular-response modeling",
    "Transfer evaluation",
    "Reproducible research"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13",
  "dateLabel": "September 2026–present",
  "sortDate": "2026-09",
  "featuredOrder": 2,
  "shortSummary": "Developing and evaluating models of cellular responses across biological contexts."
}
---

## The research question

Can a response learned in one cellular context help predict another when only untreated cells are available? The project uses public perturbation data and the 2026 Virtual Cell Challenge as a setting for studying that transfer problem.

## My contribution

I direct the research questions and comparison design, develop the modeling and evaluation workflow, and examine where its conclusions fail to generalize. The work emphasizes reproducible data preparation, explicit target and context exclusions, and frozen predictions before outcome scoring.

## Experiments completed

Completed comparisons include transferred-effect and low-rank baselines, pathway and directed-graph priors, and a bounded native LEMUR study. These experiments use different evaluation settings; their scores are not interchangeable.

A first baseline received an official 2026 validation result and transferred poorly. The matched directed-graph comparison did not establish a real-graph advantage. The native LEMUR pilot showed modest distributional signals in a narrower represented-target setting, without demonstrating challenge transfer.

## Current work

A streaming conditional count-model comparison has been prepared using public individual-cell data. Data preparation and resource profiling established bounded scale feasibility; predictive results were still pending at the latest recorded checkpoint on 13 October 2026.

A separate population-supervision follow-up is a research proposal. It must not be described as a completed experiment or an improvement over the current models.

## What this establishes

The strongest result so far is a clearer evaluation boundary: a more expressive model or a biological prior does not automatically improve transfer. Simple comparators, matched controls and negative findings remain part of the project record.

Model-generated responses do not establish biological validity, causal mechanisms or individual-cell histories. Gene coverage and the limited number of source contexts remain material constraints.
