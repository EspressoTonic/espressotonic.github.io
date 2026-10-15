---
{
  'title': 'GeNeDis Multi-Omics',
  'summary': 'An independent research project preparing public cancer and rheumatoid-arthritis datasets for reproducible multi-omics analysis. Current work separates source acquisition, sample identity, assay quality and analysis eligibility before selecting a biological question or building an analysis copilot.',
  'shortSummary': 'Preparing traceable public multi-omics data and explicit QC contracts for question-driven analysis.',
  'category': 'research',
  'context': 'independent',
  'status': 'ongoing',
  'statusDetail': 'Research in progress · Data preparation & pipeline design',
  'role': 'Data-source review, provenance tracking & research workflow design',
  'featured': false,
  'draft': false,
  'topics': ['Multi-omics', 'Data provenance', 'Reproducible workflows'],
  'links': [],
  'publicationIds': [],
  'updated': '2026-10-15',
  'dateLabel': 'October 2026–present',
  'sortDate': '2026-10-07',
}
---

## Integration starts with knowing what can be compared

The GeNeDis project asks how public molecular measurements can support a reproducible and biologically interpretable analysis. Its current setting spans non-small cell lung cancer and rheumatoid arthritis. The first task is to distinguish which assays, samples and labels are actually available before treating them as an integrated cohort.

## Work completed

I assembled a source and label catalogue, acquired public processed molecular products and metadata, and recorded source versions and acquisition checks. The collection includes RNA, copy-number and selected proteomic resources. Initial table and identifier checks exposed repeated gene identifiers, missing identifiers and incomplete metadata that affect downstream joins.

Acquisition establishes that source files were obtained and inspected within a stated boundary. It does not establish complete labels, compatible normalization, same-patient modality matching or a scientifically valid analysis cohort. Some source-access and processed-data gaps remain unresolved.

## The proposed QC release

The current design separates a fixed preparation stage from question-specific analysis. Source ingestion preserves original identities and representations. Sample and gene mapping, assay-specific checks, missingness and provenance then support a versioned release with explicit quality flags and exclusions.

General data quality is distinct from analysis eligibility: a sample can pass a technical check while lacking the pairing or label needed for a particular comparison. Exact adapters, thresholds, exclusion rules and the first biological endpoint are still under discussion. This is a pipeline design, not a completed processing or modelling run.

## A possible JUNIOR application

The project is also a proposed concrete setting for JUNIOR: a question-to-analysis copilot that produces a reviewable plan, uses explicit input and method contracts, and grounds its report in actual workflow artifacts. A fixed QC release would constrain the data available to that loop.

The copilot integration has not been implemented or evaluated. It should not be described as an autonomous discovery system or as an improvement over a fixed analysis workflow.

## Evaluation before conclusions

One candidate question is what copy-number information adds to RNA-based characterization of lung-cancer subtypes. Other disease and assay comparisons remain alternatives; none is presented here as the selected or completed experiment.

A defensible comparison would need verified sample pairing, leakage-aware preprocessing, matched baselines and a stated validation contract. Independent-cohort evidence must remain distinct from measurements paired within the same patient. Study membership and acquisition differences can otherwise become shortcuts for the intended biological label.

## Current stage

The supported evidence is public-data acquisition, initial source and identifier review, and an evolving QC and analysis design. No final endpoint, trained model, competitive result, clinical biomarker or official submission is claimed. The next milestone is a reviewed data-release contract and a bounded first analysis with its assumptions fixed in advance.
