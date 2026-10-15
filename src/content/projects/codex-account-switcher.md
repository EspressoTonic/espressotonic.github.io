---
{
  'title': 'Codex Account Switcher',
  'summary': 'A small Python CLI for launching the native Codex tool with explicitly selected account profiles. I implemented profile isolation, preservation checks, bounded diagnostics and synthetic tests without introducing a global account switch or copying credentials between profiles.',
  'shortSummary': 'An explicit-profile CLI for isolated Codex launches, with preservation checks and bounded diagnostics.',
  'category': 'personal',
  'context': 'independent',
  'status': 'prototype',
  'statusDetail': 'Implemented CLI · Live account validation pending',
  'role': 'CLI design, Python implementation & cross-platform testing',
  'featured': false,
  'draft': false,
  'topics': ['CLI tools', 'Profile isolation', 'Software reliability'],
  'links':
    [
      {
        'label': 'Source code',
        'url': 'https://github.com/EspressoTonic/codex-account-switcher',
        'kind': 'code',
      },
    ],
  'publicationIds': [],
  'updated': '2026-10-15',
  'dateLabel': 'October 2026–present',
  'sortDate': '2026-10-14',
}
---

## Explicit profiles instead of a global switch

The project explores how to use separate Codex account environments without silently replacing the authentication or configuration of another session. Each wrapped launch selects a profile explicitly. There is no global account selection that changes the behavior of unrelated running tools.

## What I implemented

The standalone Python CLI can create or register profiles, list them, inspect their readiness, delegate native login, launch a session, and perform explicitly requested logout or registry removal. Profiles select separate account homes while the native tool retains responsibility for authentication.

New profiles request encrypted keyring storage. Existing registered homes retain their native files and configuration. The wrapper does not copy credential contents between profiles or treat a successful help command as proof that two real accounts can refresh and run correctly.

## Preservation and operational boundaries

Private profile metadata stays outside Git and is written atomically with bounded size and owner-only access. Path and permission checks reject unsupported arrangements rather than changing shared storage permissions automatically. Advisory locks protect wrapped operations on a profile; they do not control unrelated native sessions launched outside the wrapper.

Diagnostics redact supplied private values, and native probes have output and time limits. Launch behavior preserves exit status and signal forwarding. Registry removal and native logout remain explicit operations rather than side effects of choosing a different profile.

## Verification

The initial implementation passed 24 synthetic tests covering preservation, unsafe paths and permissions, concurrency, authentication-routing rejection, redaction, bounded status checks, locks and process behavior. Hosted CI passed on Linux and macOS, including source and standalone-package checks.

A Linux installation was checked with version, help and an isolated synthetic-profile diagnostic. That established installation and basic invocation, not a working personal/work account pair.

## What remains to validate

Real two-account login and refresh, keyring availability and lock failures, terminal behavior and compatibility with the native tool remain manual integration gates. One attempted profile setup exposed unresolved storage-permission and keyring prerequisites; the policy was not weakened to turn that into a success claim.

This is an implemented source prototype, not an independently audited credential-management product. Native CLI changes and organizational account rules remain outside what synthetic tests can establish.

## Related work

[AI Usage Bar](/projects/ai-usage-bar/) monitors usage readings. This CLI has independent dependencies and a separate lifecycle, so monitoring does not require changing the active account.
