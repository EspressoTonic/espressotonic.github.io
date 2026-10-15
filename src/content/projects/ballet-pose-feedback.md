---
{
  "title": "Ballet Pose Feedback",
  "summary": "An early movement-feedback project linking an offline pose-processing pipeline to an iOS camera interface. It explores inspectable body-geometry features and portable scoring packages; the current iOS overlay uses mock landmarks while real tracking and dataset validation remain pending.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Early prototype · mock tracking",
  "role": "Independent prototype development & pipeline design",
  "featured": false,
  "draft": true,
  "topics": [
    "Computer vision",
    "Movement feedback",
    "Mobile software"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13",
  "dateLabel": "June 2026 prototype",
  "sortDate": "2026-06"
}
---

## A bounded feedback problem

The initial scope is a short held ballet pose rather than unrestricted choreography assessment. The aim is to make broad body geometry and simple feedback inspectable, while acknowledging that a single camera cannot reliably judge every aspect of technique.

## The offline pipeline

The Python repository contains modules for video ingestion, pose extraction, smoothing, normalization, feature computation, debug overlays, and scoring-package export. A link-and-time-range workflow and batch input format organize candidate reference clips. The first usable reference dataset and expert-label review remain pending in the documented task list.

## The iOS companion

The SwiftUI repository contains camera, overlay, landmark, geometry, scoring, and feedback modules. The active screen is a narrow camera-and-skeleton check with animated mock landmarks. Real pose detection is an integration task, and the scoring modules are not the active end-to-end user flow.

## A shared scoring contract

Versioned packages connect stable landmark names to derived angles, errors, target ranges, and feedback strings. This separates detection from scoring logic and avoids treating raw image coordinates as a complete assessment. Debug overlays are intended as a human review gate before accepting extracted data.

## What the prototype demonstrates

So far, the work combines a modular pipeline, an initial scoring package, and an iOS interface scaffold. Validated pose detection, accurate coaching, and a completed build on a real device remain to be established. Dependency setup, source-file integration, detector integration, and reference-clip review are explicit next steps.

## Technique and evaluation limits

Turnout, foot quality, musicality, and subtle technique are outside the reliable scope of this early single-camera approach. Any later feedback needs expert-labelled examples and evaluation across capture conditions. The project should support exploration and practice review without presenting itself as a replacement for a ballet teacher.
