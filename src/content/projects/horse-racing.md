---
{
  "title": "Horse-Racing Forecast Research",
  "summary": "A reproducible forecasting research project built around historical race data, chronological model evaluation, and timestamped prospective predictions. The emphasis is on reliable data lineage, honest baselines, and understanding where predictive performance fails to generalize.",
  "shortSummary": "Forecasting research with chronological model comparisons and timestamped prospective predictions.",
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
  "links": [{"label": "Explore results", "url": "/demos/horse-racing/", "kind": "demo"}],
  "publicationIds": [],
  "updated": "2026-10-15",
  "dateLabel": "2025–2026",
  "sortDate": "2025"
}
---

## The research question

Can race histories produce useful rankings when training and evaluation respect time? I built a reproducible research pipeline to investigate that question, then turned its saved predictions into an inspectable public experiment.

## My contribution

I recovered official race records, audited their quality and earlier feature leakage, built automated cleaning and chronological evaluation, and compared tree models with neural ranking models. I also implemented timestamped prediction archives, independent audit checks, a paper bankroll simulator, and this static results interface.

## Data with a traceable history

Dataset manifests select source versions rather than concatenating overlapping archives. Cleaning quarantines malformed cases and handles duplicates, missing observations and inconsistent outcomes. Historical profile snapshots cannot silently become past features. Every horse and jockey history ends before the target week starts. Raw sources remain preserved; original publication timestamps and entry-card revisions are not fully reconstructable.

## Models and controlled comparisons

The neural model encodes each horse's prior runs and each jockey's activity across distinct days, then scores runners within a race. A fixed ranking head is the retained research baseline. Position-specific and conditional heads test richer interactions; they have not established a reliable gain on the matched historical experiment. CatBoost provides a separate tree-based comparison.

Scheduled batch retraining uses rolling chronological windows and prospective evaluation. The weekly recipe separates weight training, model selection, probability calibration and the final held-out week. Saved weekly versions are distinct from the historical study. The dropdown changes which saved results a visitor reads; training and prediction happen on the compute host.

## Prospective evidence

Last-week replay results are retrospective, using revised starter information, even though their labels were excluded from fitting. Genuine prospective evidence begins with immutable forecasts captured before a race starts. The original earliest forecast remains intact. A separately registered procedure selects the first eligible capture after the Wednesday refresh, using its exact model version. Family results and selected-version results remain distinct. Published and raw win probabilities receive log loss, race-sum Brier and reliability checks after verified outcomes arrive; matched comparisons use identical captured fields. A frozen reference bundle receives the same fresh history as the refreshed model. Pending outcomes remain pending, and a refreshed model does not rewrite its predecessors' record.

## Published-study context

The historical fixed scorer has higher reported hit rates on all seven tasks in So, Woo and Lee (2025), whose [Table 6 reports the reference values](https://journal.kci.go.kr/jksci/archive/articlePdf?artiId=ART003266151). Our dashboard shows the rates, differences, citations and protocols. The studies use different races and validation; these numbers do not establish superiority on a shared benchmark. The Yonsei thesis's top-two figure is an overlap count on a 0–2 scale, not percentage accuracy.

## An inspectable research interface

[Explore the dashboard](/demos/horse-racing/) to select a weekly model, inspect full race fields and experimental win probabilities, separate replay from prospective performance, compare historical models and papers, or replay a ₩1m virtual account. One dated JSON snapshot supplies both this summary and the interactive page. It contains public display results; visitors need no account or model service.

## Limitations and what I learned

All seven historical equal-stake pools lose money. Better hit rates do not establish useful odds or profit, and the final-odds favourite remains a stronger reference with later information. Calibration worsened neural probability scores on the recent held-out week, so probabilities remain experimental. A single week and a short prospective record cannot establish stable performance.

The useful engineering result is an auditable evaluation loop: preserve what was known, compare on the same races, measure uncertainty, and keep negative findings visible. The next research priority is more genuinely prospective evidence and comparable pre-race market information before promoting a new architecture or strategy.
