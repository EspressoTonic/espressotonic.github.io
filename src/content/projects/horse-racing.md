---
{
  "title": "Horse-Racing Forecast Research",
  "summary": "A reproducible forecasting research project built around historical race data, chronological model evaluation, and timestamped prospective predictions. The emphasis is on reliable data lineage, honest baselines, and understanding where predictive performance fails to generalize.",
  "category": "personal",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Research prototype · ongoing evaluation",
  "role": "Independent project direction, data pipelines & evaluation",
  "featured": false,
  "draft": false,
  "topics": [
    "Forecasting",
    "Chronological evaluation",
    "Data pipelines"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13",
  "dateLabel": "2025–2026",
  "sortDate": "2025"
}
---

## The research question

Can historical race information support useful forecasts when evaluation respects time and compares the same fields? The project treats this as an applied machine-learning problem. It does not present a profitable predictor or recommendations for placing bets.

## Data with a traceable history

The recovered project combines official race records with explicit dataset manifests and quality checks. Derived data keeps raw-source identity traceable and handles duplicate records, missing observations, and source inconsistencies. Historical availability timestamps are not fully reconstructable, which limits some retrospective conclusions.

## Models and controlled comparisons

Work progressed from auditing earlier finish-time models to a compact ranking baseline and controlled feature experiments. Opponent-strength and historical-pace additions did not demonstrate a reliable improvement, so the simpler baseline was retained. Learning-curve and probability-calibration experiments document modest or inconsistent effects rather than a promised accuracy jump.

## Prospective evidence

The implemented collection workflow saves pre-race forecasts, frozen model identities, comparison rules, and subsequent outcomes. Ranking and probability evaluations preserve their own earliest eligible prediction records. Pending outcomes remain pending; retrospective benchmark reconstruction is labelled separately from rules frozen before prediction.

## An inspectable research interface

A local dashboard presents recorded forecasts, ranked fields, scored and pending coverage, and method limitations. This makes it possible to inspect what the model knew at prediction time and follow later reconciliation. Public deployment remains a separate step.

## What the results do not establish

The historical research model underperformed a final-odds favourite benchmark, which also has later information. The documented prospective sample was too short to establish stable performance. Research and live-model variants must remain separate, and calibration gains on one did not establish gains on the other. A matched prospective market comparison remains a future dependency, not a completed study.
