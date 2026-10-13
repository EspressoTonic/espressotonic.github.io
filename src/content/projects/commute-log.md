---
{
  "title": "Commute Log",
  "summary": "A local commute-history prototype for comparing recorded bus journeys and departure windows. It exposes the evidence behind each result and makes missing, ambiguous or unavailable records visible.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Archive-backed local MVP",
  "role": "Product direction, data interpretation & prototype verification",
  "featured": true,
  "draft": false,
  "topics": [
    "Everyday tools",
    "Data provenance",
    "Local-first software"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13",
  "dateLabel": "September 2026",
  "sortDate": "2026-09",
  "featuredOrder": 3,
  "shortSummary": "Exploring recorded journeys and departure windows with traceable source information."
}
---

## The everyday question

How long did comparable bus journeys actually take, and which recorded departures arrived before a chosen deadline? The product starts with dated observations instead of replacing missing trips with an average or a predicted arrival time.

## My contribution

I defined the narrow commute-history product, examined source semantics and matching limits, and guided an AI-assisted React prototype. Verification covered the relationship between the retained archive, the derived journey list and the user-visible evidence.

## The local workflow

Users choose direction, date or weekday and an exact departure window, then inspect individual journeys. An arrival deadline can include a separately declared walking allowance. Saved preferences remain local, and archive import/export supports revisiting retained data.

The interface exposes the source records behind each derived journey. Ambiguous origin groups are excluded and reported; gaps are not filled with invented trips.

## What was built and checked

The September 2026 MVP used retained records for a bounded Gyeonggi bus-route pilot. Its build and matching logic were tested, and desktop and mobile browser checks covered filters, deadline arithmetic, persistence, evidence disclosure and archive handling.

A portable single-file app and reproducible source archive were retained locally. Browser file-download completion remained unverified, so a tested selectable-text export fallback was included.

## Limits and next steps

This is an archive-backed local web MVP. It is not a live collector, an installed mobile app or an Apps in Toss integration.

Provider timestamp semantics, source accuracy, ambiguous journey matching, route coverage and supported history access still constrain the product. A shared collector and broader route support are future work, not deployed features.
