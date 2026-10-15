---
{
  'title': 'EnzymeMatch',
  'summary': 'A structural-bioinformatics thesis project extending a database-dependent enzyme search tool. I developed and evaluated interaction matching, candidate ranking, and workflow improvements while examining computational tradeoffs.',
  'shortSummary': 'Extending interaction matching and geometric ranking in a structural-bioinformatics thesis project.',
  'category': 'research',
  'context': 'academic',
  'status': 'completed',
  'role': 'Bachelor’s thesis development & evaluation',
  'dateLabel': 'Mar–Aug 2021',
  'sortDate': '2021-08',
  'featured': true,
  'featuredOrder': 4,
  'draft': false,
  'topics': ['Structural bioinformatics', 'Method development', 'Research software'],
  'links':
    [
      {
        'kind': 'code',
        'label': 'Project repository',
        'url': 'https://github.com/MelseO24/EnzymeMatch',
      },
    ],
  'publicationIds': [],
  'updated': '2026-10-13',
}
---

## Problem and motivation

Finding candidate enzymes for a substrate can benefit from structural information about known binding sites. EnzymeMatch explores a database-dependent approach: compare the interaction requirements of a query with annotated protein structures, then prioritize compatible candidates for further investigation.

## My contribution

My bachelor’s thesis extended and evaluated an existing EnzymeMatch codebase in protein modelling. I implemented workflow and matching improvements, candidate scoring, runtime and memory improvements, and usability fixes under supervision. The project involved extending research software, rather than claiming sole authorship of the entire original tool.

## Approach and decisions

The approach combines interaction-type filtering with geometric comparison of binding-site patterns. My thesis additions included support for additional interaction geometry and ranking beyond a binary match/no-match output. I also connected stages into a more usable complete workflow.

Improving geometric detail creates a computational tradeoff. I investigated those costs alongside the method’s output, and improved data iteration and caching to reduce avoidable processing overhead.

## Evidence and outputs

The work produced thesis-described implementation changes and evaluations on example ligands. The public EnzymeMatch repository provides the research-software context. This page represents a bachelor’s thesis project; a later peer-reviewed publication is not established here.

## Limitations and current stage

A compatible structural pattern does not prove binding or catalysis. Database coverage, available annotations, geometric approximations, and the definition of evaluation negatives influence the interpretation of candidates. More detailed modes can also be expensive.

The thesis work is complete. Candidate ranking is a computational prioritization step whose biological utility needs independent validation.

## Lessons learned

Method development is also about usability and cost. A more detailed model can be scientifically appealing while becoming difficult to use at scale; evaluating both sides is part of building useful research software.
