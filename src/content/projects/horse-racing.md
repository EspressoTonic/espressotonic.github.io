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
  "links": [{"label": "Forecast archive", "url": "/demos/horse-racing/", "kind": "demo"}],
  "publicationIds": [],
  "updated": "2026-11-11",
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

## November research checkpoint: measure what each change adds

A review of 29 studies helped organize the next comparisons around feature availability, training objectives, competitor interactions and probability quality. I tested each proposed input exclusion with fresh models: an unchanged control and five separate exclusions, each with three fixed seeds. Every model used the same training, selection, calibration and scoring periods.

On 1,232 historical development races, none of the five exclusions established a meaningful improvement:

| Input treatment | Winner hit rate | Win log loss ↓ |
| --- | ---: | ---: |
| Unchanged control | 33.36% | 1.8881 |
| Remove duplicate missing-data flags | 33.12% | 1.8871 |
| Remove jockey-history raw times | 33.28% | 1.8881 |
| Remove jockey-history mount bodyweights | 33.04% | 1.8884 |
| Remove jockey-history moisture values | 33.36% | 1.8882 |
| Remove runner number | 33.77% | 1.8862 |

All five adjusted uncertainty intervals include no change. Removing runner number adds five correct winners, but the loss improvement is smaller than the threshold set before fitting. The near-zero effects of the jockey measurement exclusions describe their incremental value in this representation; they do not show that ground or physical condition is irrelevant. An independent audit reproduced the selected checkpoints, probability pooling, calibration and race scores.

A separate matched experiment found a stronger historical signal from sectional pace. Its no-pace control scored 32.63% winner hits and 1.8901 log loss; adding the horse's historical pace and rival summaries scored 34.17% and 1.8663. Own-horse pace also improved loss, while the extra contribution from rivals remained uncertain. These reused historical races support further investigation rather than a claim of confirmed future improvement.

To test those findings prospectively, I archived every one of nine research variants for all 28 remaining November 7–8 races before Saturday racing began: the pruning control and five exclusions, plus three pace variants. Their original fields, model versions and estimated probabilities are preserved. These research forecasts have a separate identity from the operational model choices in the dashboard.

The modelling audit also clarified a structural limit: current first-place scores are computed for each runner individually. Later conditional ranking stages do not make the first-place score respond to a rival's running style. A small field-conditioned scoring model and a model of finishing-time distributions remain hypotheses for later controlled experiments.

## November 11: scoring the forecasts saved before racing

Fresh official results resolve all 28 November 7–8 races in the research archive. Every variant was recorded before Saturday racing, and every model is scored on the same 270 declared runners. The original probabilities and model versions are retained; none of these research models was refitted for this result.

| Saved forecast | Winners correct | Win log loss ↓ | Brier score ↓ |
| --- | ---: | ---: | ---: |
| Pruning control | 6/28 · 21.4% | 2.0472 | 0.8418 |
| Remove runner number | 6/28 · 21.4% | 2.0119 | 0.8373 |
| Pace control | 6/28 · 21.4% | 2.0527 | 0.8399 |
| Horse's own historical pace | 7/28 · 25.0% | 1.9625 | 0.8150 |
| Horse pace plus rival summaries | 7/28 · 25.0% | 1.9681 | 0.8197 |
| Operational fixed LSTM, same archived card | 7/28 · 25.0% | 2.1446 | 0.8640 |
| Operational CatBoost, same archived card | 4/28 · 14.3% | 1.9828 | 0.8316 |

All five pruning variants still pick six winners; their differences concern probability quality. Own-horse pace improves log loss by 0.0902 against its matched control while adding one correct winner. Rival summaries do not improve on own pace in this weekend. The operational models use different training recipes, so their scores provide context rather than an isolated architecture comparison.

This is one genuinely prospective research weekend. It supports continued evaluation of historical pace, but the hit rates remain modest and no stable improvement, reliable individual confidence or profitable strategy is established. The 28-race comparison is separate from the dashboard's complete Friday–Sunday operational record.

## Prospective evidence

Model holdout replay results are retrospective, using revised starter information, even though their labels were excluded from fitting. Genuine prospective evidence begins with immutable forecasts captured before a race starts. The original earliest forecast remains intact. A separately registered procedure selects the first eligible capture after the Wednesday refresh, using its exact model version. Family results and selected-version results remain distinct. Published and raw win probabilities receive log loss, race-sum Brier and reliability checks after verified outcomes arrive; matched comparisons use identical captured fields. A frozen reference bundle receives the same fresh history as the refreshed model. Pending outcomes remain pending, and a refreshed model does not rewrite its predecessors' record.

## October 20 checkpoint: the first completed forecast weekend

Verified October 16–18 results now score all 44 races and 468 declared runners in the registered pre-race cohort. These predictions were saved on October 15, before racing began. Three later withdrawals retain their original forecast probabilities and receive zero winner mass.

| Archived weekly model | Winners correct | Win log loss ↓ |
| --- | --- | --- |
| Fixed horse/jockey LSTM | 18/44 · 40.9% | 1.8370 |
| Position-head LSTM | 18/44 · 40.9% | 1.8489 |
| Conditional-head LSTM | 17/44 · 38.6% | 1.8440 |
| CatBoost | 9/44 · 20.5% | 2.0519 |

All three LSTMs included the winner among their three selections in 30/44 races (68.2%). The fixed model's raw versus published log loss is 1.8730 versus 1.8370; Brier is 0.7862 versus 0.7745. The uniform reference has log loss 2.3613. These are one-week observations, with uncertainty intervals suppressed under the registered 20-week reporting floor. They do not establish a durable advantage or justify switching the default model. The frozen reference is the same model bundle in this first cycle, so this week cannot demonstrate a benefit from retraining.

The dashboard's **Results → Registered weekly updating procedure** contains these genuine scores. Its older model-holdout replay remains separately dated October 5–11.

## Input repairs: correctness and model performance

A later audit found that a numeric-only parser discarded valid alphanumeric jockey IDs. A versioned repair recovered 183 historical event identities and was tested separately from log-count/recency preprocessing and binary flags kept as 0/1.

On the reused 2025 development races, identity repair changes horse-only LSTM accuracy from 32.39% to 32.71% and log loss from 1.9241 to 1.9114. It clears the four-comparison-adjusted loss criterion, but 90.7% of that reduction comes from one already-inspected international race. The model still misses its winner. This supports fixing identity handling while broad predictive improvement remains unconfirmed.

I also replayed the frozen research checkpoints on October 16–18, without fitting or selecting a seed on those outcomes:

| Horse-only research LSTM | Winners correct | Win log loss ↓ |
| --- | --- | --- |
| Original inputs and fitted model | 15/44 · 34.1% | 1.9221 |
| Identity-repair candidate | 17/44 · 38.6% | 1.9067 |
| Numeric-preprocessing candidate | 16/44 · 36.4% | 1.9132 |

These are **after-the-fact research replays**, excluded from the genuine forecast record above. Their training dates and feature definitions differ from the operational weekly models. Archived card, horse and context inputs were retained; individual jockey rides were reconstructed from the same pre-race history with a strict pre-Monday cutoff. Weekly day-averaged records cannot be substituted just because their column names match. All three MLP research conditions selected 15/44 winners. One weekend is insufficient to promote a candidate.

## Published-study context

The historical fixed scorer has higher reported hit rates on all seven tasks in So, Woo and Lee (2025), whose [Table 6 reports the reference values](https://journal.kci.go.kr/jksci/archive/articlePdf?artiId=ART003266151). Our dashboard shows the rates, differences, citations and protocols. The studies use different races and validation; these numbers do not establish superiority on a shared benchmark. The Yonsei thesis's top-two figure is an overlap count on a 0–2 scale, not percentage accuracy.

## An inspectable research interface

[Explore the dashboard](/demos/horse-racing/) to select a weekly model, inspect full race fields and experimental win probabilities, separate replay from prospective performance, compare historical models and papers, or replay a ₩1m virtual account. One dated JSON snapshot supplies both this summary and the interactive page. It contains public display results; visitors need no account or model service.

## Limitations and what I learned

All seven historical equal-stake pools lose money. Better hit rates do not establish useful odds or profit, and the final-odds favourite remains a stronger reference with later information. Calibration worsened neural probability scores on the October 5–11 holdout, despite improving the October 16–18 prospective scores. Probabilities remain experimental. A single week and a short prospective record cannot establish stable performance.

The useful engineering result is an auditable evaluation loop: preserve what was known, compare on the same races, measure uncertainty, and keep negative findings visible. The next research priority is more genuinely prospective evidence and comparable pre-race market information before promoting a new architecture or strategy.
