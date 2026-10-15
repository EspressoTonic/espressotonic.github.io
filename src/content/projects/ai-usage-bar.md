---
{
  'title': 'AI Usage Bar',
  'summary': 'A native macOS menu-bar app for inspecting AI-provider usage limits, reset times and local system resources. I built a shared collector, clear reading states and optional displays while keeping account access explicit and provider-specific limits visible.',
  'shortSummary': 'A native macOS view of AI usage limits, reset times and local system resources.',
  'category': 'personal',
  'context': 'independent',
  'status': 'prototype',
  'statusDetail': 'Native macOS prototype · Integration validation ongoing',
  'role': 'Product design, native Swift implementation & validation',
  'featured': false,
  'draft': false,
  'topics': ['Native macOS', 'Usage visualization', 'Developer tools'],
  'links':
    [
      {
        'label': 'Source code',
        'url': 'https://github.com/EspressoTonic/ai_usage_bar',
        'kind': 'code',
      },
    ],
  'publicationIds': [],
  'updated': '2026-10-15',
  'dateLabel': 'October 2026–present',
  'sortDate': '2026-10-14',
}
---

## Making usage limits inspectable

Different AI providers expose different usage windows, reset schedules and account information. The project brings those readings into a small native macOS interface while preserving what each provider actually reports. It also shows local CPU, memory use and memory pressure rather than presenting provider usage as the computer's own resource consumption.

## What I built

The Swift application includes a menu-bar quota popover, a fuller dashboard, settings and a shared collector. Enabled providers retain separate reported limits, reset times, source information and reading age. Loading, unavailable, stale and error states remain visible instead of being replaced by a guessed percentage.

Account-aware additions support explicitly selected local or SSH sources, optional quota history and notifications. Account and plan details appear only when supplied by the source. A selected source and usage window can be shown in the menu bar; optional pace estimates remain estimates, not a provider guarantee about future capacity.

## One collector, optional displays

The collector owns provider fetching and local resource sampling. A bounded local bridge lets optional displays use that information without starting a second collector. Touch Bar support is packaged separately for BetterTouchTool, so it does not become a dependency of the main app.

An optional context display uses bounded local session metadata. It labels a last-turn estimate rather than treating cumulative token counts as the current context size. Chat actions remain separate from passive monitoring and require explicit selection and permission.

## Privacy and failure boundaries

Provider authentication remains with the owning tools. App-owned preferences and the reduced quota cache use authenticated encryption with a Keychain-held key; chat transcripts, signing secrets and personal runtime captures do not belong in the source repository. Network and bridge inputs are bounded, and diagnostics avoid exposing raw account or transport details.

These controls are engineering boundaries, not a claim that the application has undergone an independent security audit. Remote path trust, signed-client identity and provider changes still need integration-specific checks.

## Evidence and current limits

The project has an implemented native app, authored boundary tests, optimized packaging and hosted CI checks. Native UI checks cover quota and resource displays using synthetic demonstrations; some selected provider readings have also been observed during development. Fixture coverage does not establish compatibility with every account, provider version or network environment.

Public signing and notarization, physical Touch Bar behavior, longer stability runs and remaining live-integration cases are separate release gates. The portfolio describes source and prototype progress, not a broadly validated binary release.

## Related work

[Codex Account Switcher](/projects/codex-account-switcher/) is a separate CLI project for launching the native Codex tool with explicitly selected account homes. Account switching is not a hidden responsibility of the usage collector.
