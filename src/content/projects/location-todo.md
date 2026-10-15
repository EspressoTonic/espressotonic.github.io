---
{
  'title': 'Location Todo',
  'summary': 'A place-linked task prototype with grocery checklists, manual check-ins, and editable visit history. The project explores local data ownership, visible permissions, and honest boundaries around inferred location events.',
  'category': 'personal',
  'context': 'independent',
  'status': 'prototype',
  'statusDetail': 'Android emulator checked; full iOS build pending',
  'role': 'Product specification, AI-assisted development & verification',
  'dateLabel': 'Oct 2026',
  'sortDate': '2026-10-07',
  'featured': true,
  'featuredOrder': 2,
  'draft': true,
  'topics': ['Mobile software', 'Local-first data', 'Product design'],
  'cover':
    {
      'src': '../../assets/projects/location-todo/activity.png',
      'alt': 'Location Todo Android prototype showing synthetic weekly visit totals and editable manual and estimated visits.',
      'caption': 'Actual Android emulator screenshot using synthetic places and visits. Totals represent prototype records, not verified workouts.',
    },
  'links': [],
  'publicationIds': [],
  'updated': '2026-10-13',
}
---

## Problem and motivation

Some everyday tasks are connected to places: a grocery list matters at a store, while a gym visit can be useful to record after it ends. Location Todo explores this relationship without requiring a server account.

## My contribution

I specified the product, chose the workflow boundaries, directed AI-assisted implementation, and reviewed the verification evidence. The source has iOS and Android counterparts, with shared expectations about data ownership and the distinction between inferred and manually entered events.

## Approach and decisions

The prototype connects saved places with checklists, permission/registration state, manual check-ins, and editable visit history. Completed visits feed a local weekly summary. Users can export their stored records without changing the source data.

A central design decision is to show estimated events as estimates. Users can correct them, and manually entered history remains distinct. Permission or storage problems should be visible rather than produce a misleading impression of successful monitoring or saving.

## Evidence and outputs

The October 2026 checkpoint records a successful Android build, core behavior tests, and emulator interaction checks. The screenshot shows the real Android interface with synthetic places and visit records. The iOS source received source/core checks, which do not establish a full iOS app build.

## Limitations and current stage

The full iOS build and physical-phone background-location trials remained pending at the checkpoint. Neither platform has established real-device evidence for locked-screen reminder timing, visit accuracy, or battery impact.

JSON export is implemented; import, restore, and synchronization are not established. The prototype is not an App Store or Play Store release, and the weekly summary is not a clinically accurate activity tracker.

## Lessons learned

Location-aware software needs clear expectations about what a device can infer. Local ownership, correction tools, visible permissions, and preservation of unreadable data are useful foundations before testing real-world reliability.
