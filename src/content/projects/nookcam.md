---
{
  "title": "Nook Cam",
  "summary": "A private pet-camera prototype that gives a spare phone a camera role and another device a viewing role. It explores a self-hosted connection design, explicit pairing, and clear connection states without building a cloud video-storage service.",
  "category": "personal",
  "context": "independent",
  "status": "prototype",
  "statusDetail": "Private prototype",
  "role": "Independent product design & prototype development",
  "featured": false,
  "draft": true,
  "topics": [
    "WebRTC",
    "Private networking",
    "Everyday tools"
  ],
  "links": [],
  "publicationIds": [],
  "updated": "2026-10-13"
}
---

## An everyday camera workflow

The intended use is simple: leave a phone with a pet and view its live camera from another device. The interface separates camera setup from watching, so each screen can focus on the state of its own connection rather than exposing network configuration during normal use.

## What is implemented

The repository contains a React interface with camera and watcher screens, pairing controls, browser camera access, WebRTC connections, and a Node signaling hub. Separate setup scripts support the private-network and local-certificate configuration described in the project documentation.

## Connection architecture

The design uses a private VPN connection to a self-hosted hub, with authenticated media relay available when a direct connection is unavailable. Signaling and media have separate responsibilities. The prototype is designed for live viewing without retaining video recordings; that design is not a completed security audit.

## Making states visible

Pairing, camera availability, media connection, and leaving a session are explicit parts of the product flow. Development-only demo states support visual review, and their generated pet imagery must be labelled as demo content rather than evidence of a real camera session.

## Evidence boundary

The prototype includes the interface, connection logic, setup scripts, and network test sources. Cross-device operation and long-running reliability remain to be demonstrated in this case study. A working design and documented setup are a starting point for device trials, not proof of dependable remote monitoring.

## Remaining work

Practical validation still needs device and network testing, including browser camera suspension, reconnect behavior, certificate setup, and mobile network changes. Home-network reachability can constrain the self-hosted approach. The current work is a private prototype, with no public demo or broadly validated service claim.
