---
{
  "title": "JUNIOR",
  "summary": "A personal bioinformatics-copilot prototype built around bounded workflows, input checks and human review. The aim is to make analysis assistance traceable before making stronger claims about automated discovery.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Supervised bioinformatics-copilot prototype",
  "role": "Project concept & analysis-governance design",
  "featured": false,
  "draft": false,
  "topics": [
    "Scientific assistants",
    "Workflow validation",
    "Human review"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13"
}
---

## The problem

A fluent answer is not enough to establish that a biological analysis is appropriate. JUNIOR explores how an assistant can first identify the analysis family, inspect the available inputs and expose assumptions before proposing work.

## The project direction

I am shaping a supervised analysis-and-reporting loop: identify the task, check input sufficiency, propose a narrow workflow, use deterministic tools where appropriate, and produce an auditable report with caveats.

Relevant methods and literature should support the workflow. Human approval remains a boundary for changing scientific direction or making strong biological claims.

## Prototype scope

The local prototype explores workflow classification, input validation, and supervised tool execution. These boundaries are part of its governing design, with concrete end-to-end examples still needed to show how well they work together.

Benchmarked analysis accuracy, production readiness, and a verified catalog of complete workflows remain to be established. The next step is evidence for a small, clearly defined analysis task.

## What it is learning from

Broader scientific-agent systems provide architectural reference points for separated roles, literature grounding, and auditable artifacts. I am starting with a bounded bioinformatics-analysis loop; autonomous therapeutic discovery is outside the prototype's demonstrated capabilities.

## Next evidence to establish

The next useful case-study evidence is a documented input-to-report example with explicit validation gates, reproducible artifacts and failure cases. Tool correctness, workflow appropriateness and biological interpretation should be evaluated separately.

JUNIOR is distinct from TC: its focus is supervised scientific analysis, while TC concerns personal memory, tasks and knowledge workflows.
