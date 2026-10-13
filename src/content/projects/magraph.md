---
{
  'title': 'MAGraph',
  'shortSummary': 'Representing metagenomic gene neighbourhoods as graphs to investigate functional context.',
  'summary': 'A graph-based representation that preserves gene-neighborhood context lost when metagenomic assemblies are reduced to gene catalogues. My thesis work combined representation design, implementation, and reproducible analysis.',
  'category': 'research',
  'context': 'academic',
  'status': 'completed',
  'role': 'Thesis researcher & primary MAGraph developer',
  'dateLabel': 'Dec 2022–Aug 2023',
  'sortDate': '2023-08',
  'featured': true,
  'featuredOrder': 1,
  'draft': false,
  'topics': ['Metagenomics', 'Biological representations', 'Research software'],
  'links':
    [
      {
        'kind': 'paper',
        'label': 'Related preprint',
        'url': 'https://doi.org/10.1101/2025.09.29.679262',
      },
    ],
  'publicationIds': ['metagear-2025'],
  'updated': '2026-10-13',
}
---

## Problem and motivation

Gene catalogues make metagenomic cohorts manageable, but sequence-based clustering can flatten the positional information present on assembled contigs. Neighboring genes can provide useful context for functional modules and operon-level analysis. My master’s thesis investigated how to retain this neighborhood layer in a reusable computational representation.

## My contribution

I designed and implemented the MAGraph component under supervision in AG Schirmer. The work combined Python package development, a graph-like data model, database-backed storage, annotation, and reproducible processing. My contribution is the thesis-derived representation and implementation; it should be distinguished from later team-wide MetaGEAR analyses and scale.

## Approach and decisions

MAGraph represents gene families as nodes and assembly-derived proximal gene relationships as edges. The representation retains information about observed neighborhoods and their annotations rather than treating a catalogue as an isolated list of sequences.

I used Python, MongoDB, and Snakemake-supported workflows to connect assembly-derived information, gene families, and biological annotation. The project also examined how expression information could be attached to the representation. The central design decision was to preserve context in a queryable form that could support multiple downstream questions.

## Evidence and outputs

The thesis implemented the representation and demonstrated operon-level analysis on two metagenomic cohorts. It combined a qualitative recovery task with evaluation of edge-classification approaches. The contribution is best understood through the representation, workflow, and analysis design rather than a single headline score.

The related MetaGEAR work was reported as a 2025 bioRxiv preprint, on which I am a co-author. The preprint describes a broader framework and later analyses; its full scale and findings are not all personal thesis achievements.

## Limitations and current stage

A representation built from experimental assemblies depends on sequencing depth, assembly quality, and gene calling. Missing or fragmented neighborhoods can limit the observed relationships. An annotated edge is evidence of observed context, not proof of biological regulation or function.

The thesis project is complete. Wider biological claims and direct comparisons to specialized predictors require their own evaluation context.

## Lessons learned

Useful biological software needs both a coherent representation and a reproducible path from data to that representation. Preserving what is known about the data—and what remains uncertain—matters as much as making the output easy to query.
