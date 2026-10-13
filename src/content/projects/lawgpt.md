---
{
  "title": "LawGPT",
  "summary": "A Korean legal-research prototype exploring how source-aware retrieval, persistent case context, and controlled tool use can make an assistant's reasoning easier to inspect. The current restart focuses on recovering and auditing the existing corpus before rebuilding retrieval.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Early prototype · corpus audit",
  "role": "Independent project direction & prototype development",
  "featured": false,
  "draft": false,
  "topics": [
    "Retrieval",
    "Source provenance",
    "Agent workflows"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13",
  "dateLabel": "Restarted September 2026",
  "sortDate": "2026-09"
}
---

## A source-first research assistant

The project investigates how a legal-research interface can keep a user's question, missing facts, retrieved documents, and model interpretation distinct. Its current purpose is personal learning and evidence of agent-harness engineering. It is not a validated legal-advice service.

## What already exists

Earlier repositories contain a Korean chatbot prototype, hierarchical classification assets, and collection code for statutes and judicial decisions. An audit recovered a small tracked case sample and located a larger historical collection. Finding those files established that prior work exists; it did not establish corpus completeness, freshness, or retrieval accuracy.

## Preserving the source

The restart prioritizes comparing retained source documents with processed text. The historical preprocessing can remove legally meaningful terms and structure, so the proposed replacement preserves originals, document identities, source links, and version information before producing derived chunks.

## The proposed harness

The planned system combines bounded retrieval tools, case state, follow-up questions, citation checks, controlled retries, and inspectable execution traces. A keyword baseline comes before embedding comparisons. Local inference is the initial budget-conscious direction; a particular model has not been validated for this task.

## Evidence and next milestone

The restart has reached recovery and repository inspection. A new retrieval index, replacement harness, and model benchmark remain to be demonstrated. The next useful evidence is a reproducible corpus audit and a fixed evaluation set that checks source resolution, missing-fact handling, and unsupported claims.

## Limits

Generated conversations are training or evaluation material, not authoritative law. Engineering checks do not establish legal correctness. Any eventual public use would require a separately reviewed scope and appropriate substantive validation; the portfolio presents the prototype and its limits.
