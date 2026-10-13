---
{
  'title': 'Fridge Match',
  'summary': 'An independent cooking-planning prototype connecting pantry inventory, recipe matching, shopping lists, and cooking history. I explored how local persistence and account synchronization can make an everyday workflow recoverable.',
  'category': 'personal',
  'context': 'independent',
  'status': 'prototype',
  'statusDetail': 'Local/private prototype; no public demo',
  'role': 'Product design, AI-assisted development & verification',
  'dateLabel': 'Oct 2026',
  'sortDate': '2026-10-07',
  'featured': true,
  'featuredOrder': 1,
  'draft': false,
  'topics': ['Product design', 'Persistence', 'Everyday tools'],
  'links': [],
  'publicationIds': [],
  'updated': '2026-10-13',
  'cover':
    {
      'src': '../../assets/projects/fridge-match/interface.png',
      'alt': 'Fridge Match prototype with sample ingredients, cooking suggestions, and recipe controls.',
      'caption': 'Actual local prototype interface using the authored sample kitchen. The screenshot documents the workflow, not production availability or measured impact.',
    },
}
---

## Problem and motivation

Choosing what to cook often starts with a mismatch between what is already in the kitchen and what a recipe requires. Fridge Match explores a connected workflow: inspect inventory, find suitable recipes, understand missing ingredients, and update the kitchen after cooking.

## My contribution

I defined the product direction and implementation priorities, developed the prototype with AI assistance, and directed verification of the core workflows. The project is also a learning exercise in state management, persistence, recovery, and clear product boundaries.

## Approach and decisions

The prototype connects ingredient inventory, deterministic recipe matching, cuisine/time preferences, shopping lists, cooking confirmation, and undo. A small authored recipe collection keeps matching behavior inspectable while the broader catalogue remains a separate task.

Persistence evolved from device-local state into local storage plus account-scoped synchronization in the private prototype. Offline changes remain pending until they can be synchronized. Conflicts require an explicit recovery decision rather than silently replacing another copy.

## Evidence and outputs

The October 2026 checkpoints record implemented inventory, recommendation, shopping, cooking, and undo flows. Persistence checks covered retained preferences and state across service restart, and recovery/backup behavior was checked in the private environment.

The image on this page is a real prototype screenshot with synthetic test data. It documents the interface, not user adoption or a measured reduction in food waste.

## Limitations and current stage

Fridge Match remains a local/private prototype. A public endpoint, production identity/recovery, real device integration, and operational coverage remain release work. The recipe collection and substitution examples are prototype content; they do not establish nutritional, allergen, or food-safety guarantees.

There is no public demo link because public deployment has not been verified.

## Lessons learned

The valuable engineering work was making ordinary edits survive interruptions and giving users understandable recovery choices. Synchronization is a product interaction as well as a storage problem.
