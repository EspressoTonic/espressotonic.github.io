---
{
  "title": "TC Personal Agent",
  "summary": "A continuing exploration of personal memory, tasks and knowledge workflows. TC's earlier prototypes now inform a vault-centered personal agent, with durable knowledge kept separate from runtime state and service integrations.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Prototype history · Vault-centered redesign",
  "role": "Personal workflow, memory architecture & system direction",
  "featured": false,
  "draft": false,
  "topics": [
    "Personal knowledge",
    "Memory architecture",
    "Workflow design"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13"
}
---

## The underlying need

Personal projects, study notes and recurring responsibilities spread across tools and conversations. This project asks how an assistant can use that context without turning each service or runtime store into a conflicting source of truth.

## The direction changed

A June 2026 decision established the Markdown vault as the canonical knowledge and task source. TC is now the predecessor label and implementation history that a future vault-centered personal agent will replace or absorb.

Task services, runtime databases, and application state are adapters, caches, or working projections around that source. The older architecture is part of the project's history, not its final design.

## Prototype history

Earlier experiments covered personal-agent memory, task and web components, a local notes-and-tasks application, and task-import tooling. They provide implementation history for the current direction.

These prototypes inform the redesign; the replacement agent is not complete. Historical automations also need their own verification before they can be described as current capabilities.

## Design principles

Durable knowledge needs clear provenance, retrievable structure, and explicit corrections. The assistant should distinguish a saved conclusion from transient execution state and keep permissions and human decisions visible.

The architecture separates memory boundaries and workflow design from the private messages, account details, and personal task contents that may eventually pass through it.

## What comes next

The next step is to turn the vault-centered direction into bounded, verifiable workflows with reliable retrieval and controlled actions. That remains separate from claiming that the future agent is complete.

TC and JUNIOR remain separate projects: this one organizes personal context and responsibilities; JUNIOR explores supervised bioinformatics analysis.
