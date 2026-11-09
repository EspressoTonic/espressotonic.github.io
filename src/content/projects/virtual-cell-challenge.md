---
{
  'title': 'Virtual Cell Challenge 2026',
  'summary': 'I built and submitted a model that predicts gene-perturbation responses in new cell contexts. The final approach combines a learned expression-response model with a small correction from directed signaling paths.',
  'shortSummary': 'A submitted perturbation-response model combining ordered gene pairs, pretrained gene features and directed signaling paths.',
  'category': 'research',
  'context': 'independent',
  'status': 'completed',
  'statusDetail': 'Final entry submitted and processed · Official score undisclosed',
  'role': 'Research design, data integration, modeling & evaluation',
  'featured': true,
  'draft': false,
  'topics': ['Perturb-seq', 'Context transfer', 'Directed biological priors'],
  'links':
    [
      {
        'label': 'Challenge brief',
        'url': 'https://arcinstitute.org/news/virtual-cell-challenge-2026',
        'kind': 'write-up',
      },
      {
        'label': 'Official rules',
        'url': 'https://virtualcellchallenge.org/rules',
        'kind': 'write-up',
      },
    ],
  'publicationIds': [],
  'updated': '2026-11-09',
  'dateLabel': 'September–November 2026',
  'sortDate': '2026-09',
  'featuredOrder': 2,
}
---

## The challenge

When a gene is turned down, which other genes change their expression—and does the answer transfer to a different kind of cell? CRISPR interference (CRISPRi) reduces transcription of a selected target. Perturb-seq measures the resulting RNA profiles in individual cells. The [2026 Virtual Cell Challenge](https://arcinstitute.org/news/virtual-cell-challenge-2026) uses these experiments to ask whether a model can predict responses in unfamiliar cellular contexts.

At inference, my model received **untreated single-cell RNA counts and the identity of the gene to suppress**. It had to produce 400 predicted cells per intervention, with 18,533 gene columns. The final panel contained 300 targets in each of three contexts: **360,000 predicted cell profiles** in total.

These are predicted populations, not observations of the same cells before and after treatment. The central problem is learning how an intervention changes an expression distribution while separating that effect from ordinary variation between cells and contexts.

## My role and the data

I led the hypothesis development, public-data audit, model comparisons and final submission workflow. My central question was whether biological relationships could help an expression model transfer: perturbing A may affect B through a pathway even when perturbing B does not affect A.

The final response model used public CRISPRi data from **K562, RPE1, HepG2 and Jurkat**. Public H1 data supplied a local development benchmark; untreated cells supplied the final inference contexts. Other acquired datasets supported separate experiments, but were not all pooled into the submitted model. Source references are collected in the [scPertEval dataset documentation](https://github.com/Virtual-Cell-Research-Community/scPertEval/blob/main/docs/user-guide/datasets.md).

I also built the gene-ID audits, missing-data handling, frozen prediction exports, matched count-generation comparisons and reproducible execution workflow. A shared gene name is not enough to establish a valid join: aliases, ambiguous mappings and duplicated identifiers can silently change which biological features a model receives.

## How the submitted model worked

The final model, **Ordered + SIGNOR H4/S0**, separates predicting an expression shift from generating individual-cell counts. A frozen three-seed ensemble supplies the response estimate; a learned pathway residual makes a bounded adjustment.

<div id="project-figures"></div>

<figure id="vcc-workflow" class="project-figure">

![Untreated RNA and the target gene enter the Ordered predictor, followed by the SIGNOR correction and count sampling.](../../assets/projects/virtual-cell-challenge/workflow.svg)

<figcaption>Submitted inference workflow. The graph contributes features for a learned correction; it does not directly prescribe every RNA response.</figcaption>

</figure>

### 1. Learn an asymmetric response model

The base model, which I call **Ordered**, combines base response heads, [GenePT gene-description embeddings](https://github.com/yiqunchen/GenePT), Reactome pathway membership and an ordered target/output decoder. The intervention gene and the measured gene have different roles: the model can learn a different response for A → B than for B → A.

Untreated RNA provides context features through 2,000 input genes. Training supports learned response effects for 10,915 output genes. The three fitted seeds are combined to reduce dependence on a single fit. GenePT contributes pretrained knowledge from gene descriptions; this is not a DNA- or RNA-sequence encoder.

### 2. Add directed biological paths

[SIGNOR](https://doi.org/10.1093/nar/gkac883) supplies curated, directed signaling relationships. I retained activating, inhibitory and unknown-sign channels, then learned how those features should modify the base prediction in each context. A protein-activity relationship is not automatically an RNA-expression effect, so the sign of a database edge is evidence supplied to the model, not a fixed transcriptional rule.

The submitted setting permits paths of up to **four steps**. Its **S0** setting allows no intermediate gene missing from the modeled output axis. An intermediate can still lack its own perturbation experiment. For example, a measured C can support an A → C → B path even if C was never knocked down in the training set.

The broader sweep also allowed paths through genes outside the output axis. Those mediators were retained during path extraction before projecting back to the prediction coordinates, rather than silently dropping C or treating A → B as a newly observed direct interaction. Longer paths were attenuated, and activating and inhibitory routes were kept separate. The submitted model uses the more conservative H4/S0 setting.

Only **73 of the 300 final targets** had nonempty H4/S0 route features. All 300 still received a full model prediction. The graph was therefore an incremental correction with limited coverage, not a complete cellular simulator.

### 3. Generate the required cell populations

The model converts the predicted shifts into counts using fixed untreated-cell samples, source-trained negative binomial parameters for a subset of genes, and Poisson sampling for the remainder. Each head retains its frozen scaling, support masks and clipping before the predictions are averaged.

All 18,533 native gene columns remain in the output. Genes outside the supported response axis retain zero learned shift. This produces the required population-shaped submission, but matching the output dimensions does not establish that the model has recovered all biological heterogeneity.

## What the comparisons showed

The main local comparison used **65 knockdown targets, 18,075 count genes and three fixed 400-cell sampling banks in H1**. The composite combines six measures of predicted-versus-observed populations; higher is better. Using the same sampling banks helps separate model differences from sampling noise.

**How to read the plot.** Each dot is the mean composite over the three banks. The dashed line is Ordered. The horizontal axis is zoomed to show small differences; it is not an accuracy percentage.

<figure id="vcc-h1-counts" class="project-figure">

![Local H1 mean composites: submitted SIGNOR 0.056745; longer-path SIGNOR 0.056785; Ordered 0.054932; rewired SIGNOR 0.054165; STRING 0.051755.](../../assets/projects/virtual-cell-challenge/h1-count-comparison.svg)

<figcaption>Local development results, not official competition scores. Submitted SIGNOR H4/S0 scored 0.056745, versus 0.054932 for Ordered and 0.054165 for the exact degree-rewired H4/S0 control.</figcaption>

</figure>

H4/S0 improved the mean composite by **0.001813** over Ordered and won in all three banks. The longer H7/S3 model had the highest inspected mean, **0.056785**, but won in two banks. Its advantage over H4/S0 was only 0.000039. I submitted H4/S0 for its shorter paths and more consistent bank wins, rather than choosing solely by the highest mean.

The exact rewired control preserves node degrees while changing connections. Real H4/S0 exceeded it by 0.002580 in mean and won in two banks. That supports further investigation of topology; one rewiring is insufficient to establish a robust biological mechanism.

The source-context diagnostic was less encouraging. Over 3,106 known target/context observations, equal-context strong-response MAE changed from **0.090128 to 0.090123**, while full MAE slightly worsened from **0.038338 to 0.038339**. The gain was small and metric-dependent.

H1 was repeatedly inspected during development, and the three banks share the same biological context. They are not independent biological replications or an untouched test set. Generalization to the final contexts remains a separate question.

## Other approaches we tested

**Simple transferred responses and low-rank models.** Zero-effect controls, transferred response patterns, SVD, ridge regression and small feed-forward networks established what could be achieved with limited structure. They also exposed a recurring issue: predicting too much change can be worse than a conservative control when most expression is stable or the context has shifted.

**Cell-state and population models.** A bounded native [LEMUR](https://bioconductor.org/packages/lemur/) study examined condition-dependent cell representations. Separate conditional-VAE and population-supervision experiments modeled distributions more directly. Their narrower diagnostics did not establish a better final transfer model. Control drift and count calibration motivated residual corrections and explicit zero-effect checks; added expressiveness alone did not solve them.

**Alternative biological representations.** I compared gene sets, genomic-location features, directed GNNs, pretrained representations and network residuals. Audited GenePT features became part of Ordered, while the other tested representations did not displace that final parent. The STRING residual scored **0.051755** on the matched H1 protocol, below Ordered's **0.054932**. This was a result for the tested adapter and data, not evidence that foundation models or interaction networks are generally ineffective.

**Pathway dictionaries and regulatory inference.** The later work compared Reactome, SIGNOR, WikiPathways, DoRothEA, curated CollecTRI/OmniPath and K562 mutual-information/DPI networks, with bounded path depths and missing-mediator allowances. Jiang-derived programs and an ARACNe-style MI/DPI experiment were also investigated. The latter had very limited panel coverage after regulator eligibility, capacity and stability filtering; a column-alignment audit did not identify a general gene-name misjoin as the explanation.

**Conservative mixtures.** On the same H1 protocol, a learned response basis reached **0.055966**. Halving the SIGNOR correction gave **0.054914**, and an equal SIGNOR/learned-basis blend gave **0.052818**, versus **0.056745** for full SIGNOR. Combining two plausible models was not automatically beneficial.

These experiment families used different scopes and validation settings. Only the explicitly matched H1 numbers above should be compared directly.

## What I would change in a follow-up

The next study should test the reasons for failure more directly. These are proposed comparisons, not completed improvements.

- **Make validation harder before making the model larger.** Reserve a new evaluation boundary and distinguish a known perturbation in a new context from a target whose responses are excluded everywhere. Refit every baseline under the same exclusions. This would reduce dependence on repeatedly inspected H1 results.
- **Gate pathways by the receiving cell.** Condition individual mediator contributions on untreated RNA and measured availability, then compare with context-shuffled and ungated controls. The current head uses context features, but does not explicitly gate each mediator's activity. RNA would still be an imperfect proxy for protein activity.
- **Improve regulatory coverage before judging the prior.** Admit eligible panel regulators before applying a computational cap, audit how many target/output pairs remain reachable, and compare additional rewired and sign-shuffled graphs. Vary missing-intermediate allowance at fixed path length to isolate missingness from depth.
- **Separate response magnitude from population generation.** Compare frozen mean shifts under the same observation model, then vary the count model while holding those means fixed. A stronger generative or transport model should first preserve the zero-effect control and improve distributional diagnostics under a matched protocol.
- **Model knockdown strength and unsupported genes explicitly.** Replace the inherited own-target zero-effect rule with an evaluated suppression model and quantify uncertainty on weakly supported outputs. Broader embeddings or sequence features are candidates to test, not a substitute for response labels or correct gene alignment.

## Final status and limitations

The final entry was submitted on **November 6, 2026, Korea time**. The official API reports it as processed and published on the final test panel. As checked on **November 9**, the final competition score and ranking are pending public disclosure. The numbers on this page are local development measurements.

The submitted source, model components, gene axes and generated artifacts were frozen with checksums. Reload checks reproduced the original heads, and the complete output passed official packaging validation.

The project produced a complete submission and a reproducible comparison of several modeling choices. Its main scientific lesson is modest: curated pathways can be useful as a learned correction, but coverage, context transfer, calibration and evaluation design determine whether that extra information helps. The observed local gain does not establish causal regulation, correct single-cell histories or broad biological validity.
