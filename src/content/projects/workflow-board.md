---
{
  "title": "Workflow Board",
  "summary": "A job monitor I built for long-running research runs across machines. It keeps the last reported progress visible when a source becomes unreachable and distinguishes the health of monitoring from the state of the job.",
  "shortSummary": "A job monitor for long-running research runs across machines, with progress and last-seen timestamps.",
  "category": "personal",
  "context": "independent",
  "status": "ongoing",
  "statusDetail": "Internal tool · In use",
  "role": "Design, implementation & operational testing",
  "featured": false,
  "draft": false,
  "topics": ["Research software", "Job monitoring", "Reliability"],
  "links": [],
  "publicationIds": [],
  "updated": "2026-11-04",
  "dateLabel": "October 2026–present",
  "sortDate": "2026-10"
}
---

## The problem

I run research jobs on different machines, and each machine exposes progress differently. If a host drops offline, a missing update alone cannot tell me whether a run is still active, completed, or failed. I built Workflow Board to put those observations in one place.

## What I built

Each run is explicitly registered with a stable identity. The board records progress, the source of that observation, and when it was last seen. A reporting interruption leaves the last observation visible. A confirmed outcome updates the run record. Removing a tracker only removes its monitoring entry and leaves the workload itself running.

## An illustrative example

A training run last reported epoch 8 of 20. If its host becomes unreachable, the board can still show “epoch 8 of 20” with the original timestamp and an indication that the source is unreachable. When reporting recovers, the run can continue under the same identity.

## What I use it for

I use the board to check research runs and recover their context after interruptions. I tested retry behavior and recovery during day-to-day use. The interface is a React and TypeScript frontend backed by FastAPI and SQLite.
