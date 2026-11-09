---
{
  "title": "GeNeDis Multi-Omics Hackathon",
  "summary": "For the GeNeDis hackathon, I built a workflow to predict RNA expression from DNA copy number and vice versa in lung cancer. I compared a learned residual model with simpler baselines on TCGA and tested gene-rank transfer on an independent CPTAC cohort.",
  "shortSummary": "Predicting lung-cancer RNA expression from copy number and vice versa, with an independent test of gene-rank transfer.",
  "category": "research",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Updated submission sent · Outcome pending",
  "role": "Cohort design, data pipeline & model evaluation",
  "featured": false,
  "draft": false,
  "topics": ["Multi-omics", "Lung cancer", "Cross-modal reconstruction"],
  "links": [{"label": "Hackathon brief", "url": "https://2026.genedis.org/hackathon/", "kind": "write-up"}],
  "publicationIds": [],
  "updated": "2026-11-09",
  "dateLabel": "October 2026–present",
  "sortDate": "2026-10-07"
}
---

## The challenge

Can measurements from one molecular assay recover information normally measured by another? I focused on RNA expression and continuous DNA copy-number alterations (CNA) in lung adenocarcinoma and lung squamous cell carcinoma. The two prediction tasks were RNA to CNA and CNA to RNA. [GeNeDis hackathon brief](https://2026.genedis.org/hackathon/)

## How the submitted workflow worked

1. **Match the assays before fitting.** My Snakemake workflow paired RNA and CNA from the same tumor sample and kept one sample per patient. I checked identifiers, excluded ambiguous genes, and froze the patient splits. The primary TCGA benchmark used 991 paired patients. I selected the genes and fit scaling using training patients only. [TCGA PanCancer Atlas cohorts via cBioPortal DataHub](https://github.com/cBioPortal/datahub)
2. **Start with linear and factor models.** I compared ridge regression on principal components, regularized canonical correlation analysis, and MOFA+ factors. These gave me reference points for what could be predicted from each assay with simpler models. [MOFA+](https://doi.org/10.1186/s13059-020-02015-1)
3. **Learn a correction to the ridge prediction.** In the updated submission, the R3D2 model first predicted the target assay with ridge regression. A small neural network learned to correct its remaining errors in a lower-dimensional representation of the target assay. At inference, both branches took only the observed assay.
4. **Test transfer on a separate cohort.** I refit on TCGA alone and evaluated on 217 paired tumors from CPTAC. Because the assay scales differed, I compared within-sample gene percentiles on a shared gene panel and reported results by tumor type. [CPTAC adenocarcinoma data](https://www.linkedomics.org/data_download/CPTAC-pancan-LUAD/) · [CPTAC squamous carcinoma data](https://www.linkedomics.org/data_download/CPTAC-pancan-LSCC/)

## What the comparisons showed

R3D2 gave the lowest continuous-value reconstruction error in both directions on the previously examined TCGA development split. In CPTAC, PCA ridge gave the lowest gene-rank error for RNA to CNA. For CNA to RNA, R3D2 improved on PCA ridge and roughly tied a baseline that predicted the average profile for the tumor type. The CPTAC experiment tests transfer of relative gene ranks. Continuous cross-platform prediction and clinical utility remain unvalidated.

## Submission status

The organizers acknowledged the initial package on November 3, 2026. I sent the updated package with R3D2 and the CPTAC benchmark on November 4. The outcome is pending.
