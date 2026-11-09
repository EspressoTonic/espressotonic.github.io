---
{
  "title": "Virtual Cell Challenge 2026",
  "summary": "I built and submitted a model that predicts single-cell responses to CRISPRi in unfamiliar cell lines from untreated profiles. The final model combined a learned response predictor with a correction based on directed signaling paths.",
  "shortSummary": "Predicting CRISPRi responses in unseen cell contexts with a learned response model and directed signaling paths.",
  "category": "research",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Final entry submitted · Results pending",
  "role": "Research design, model development & evaluation",
  "featured": true,
  "draft": false,
  "topics": ["Perturbation response", "Transfer evaluation", "Network features"],
  "links": [
    {"label": "Challenge brief", "url": "https://arcinstitute.org/news/virtual-cell-challenge-2026", "kind": "write-up"},
    {"label": "Official rules", "url": "https://virtualcellchallenge.org/rules", "kind": "write-up"}
  ],
  "figures": [
    {"id": "vcc-workflow", "src": "../../assets/projects/virtual-cell-challenge/workflow.svg", "alt": "Four steps from untreated RNA and a target gene through ordered response prediction, SIGNOR correction, and count sampling.", "caption": "Submitted model workflow. The ordered predictor estimates gene-expression shifts, and the SIGNOR model adjusts them where suitable signaling paths are available."},
    {"id": "vcc-h1-counts", "src": "../../assets/projects/virtual-cell-challenge/h1-count-comparison.svg", "alt": "Dot plot of the local H1 count composite. Longer-path and submitted SIGNOR are close together above the Ordered base. Rewired SIGNOR and STRING are below the base.", "caption": "Local H1 development comparison across 65 targets and three fixed sampling banks. Mean composite scores were 0.05675 for submitted SIGNOR, 0.05678 for longer paths, 0.05493 for the Ordered base, 0.05416 for the rewired control, and 0.05175 for STRING. The sampling banks share one biological context."}
  ],
  "publicationIds": [],
  "updated": "2026-11-09",
  "dateLabel": "September 2026–present",
  "sortDate": "2026-09",
  "featuredOrder": 2
}
---

## The challenge

Given untreated single-cell RNA profiles and a gene to knock down, predict the resulting gene expression in a cell line with no observed knockdown responses available to the model. I designed the comparisons and built the workflow from training through submission. [Arc Institute’s challenge brief](https://arcinstitute.org/news/virtual-cell-challenge-2026)

## How the submitted model worked

1. **Learn from measured responses.** I trained on public CRISPRi Perturb-seq profiles from K562 and RPE1 (Replogle et al.) and HepG2 and Jurkat (Nadig et al.). At inference, untreated RNA represented the new cell context, and the requested gene identified the intervention. [Replogle and Nadig data references](https://github.com/Virtual-Cell-Research-Community/scPertEval/blob/main/docs/user-guide/datasets.md)
2. **Predict a change for each output gene.** An ensemble trained with three seeds combined a learned response predictor with GenePT embeddings and Reactome pathway membership. The decoder treated the knocked-down gene and the measured gene as an ordered pair, so reversing their roles could change the prediction. [GenePT](https://pubmed.ncbi.nlm.nih.gov/37905130/) · [Reactome](https://reactome.org/)
3. **Add a signaling-path correction.** I trained a second model to adjust the base prediction using short, directed SIGNOR paths and untreated expression from the new cell context. The path features distinguished activating, inhibitory, and unknown-sign links. The submitted version allowed paths of up to four steps and used the base prediction for pairs without usable path features. [SIGNOR 3.0](https://doi.org/10.1093/nar/gkac883)
4. **Generate single-cell counts.** I applied the predicted shifts to samples from the untreated cells and used negative binomial or Poisson distributions to generate count profiles. This produced a population of predicted cells for each requested knockdown.

[View the submitted workflow diagram](#vcc-workflow).

## What the comparisons showed

I tested simple transfer and low-rank baselines, then compared the frozen base model with several network additions. STRING did not improve the matched count benchmark on public H1 cells. The submitted SIGNOR correction modestly improved the composite score on 65 H1 targets relative to the base model and the degree-preserving rewired graph control. The H1 benchmark was used repeatedly during development, so this comparison cannot establish generalization to a new cell line.

[View the local H1 comparison](#vcc-h1-counts).

## Submission status

I submitted the final SIGNOR model on November 6, 2026, Korea time. The organizers processed the entry. The final competition score and ranking are pending.
