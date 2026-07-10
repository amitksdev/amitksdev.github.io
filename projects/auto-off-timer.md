---
layout: project
title: "Auto-Off Timer | FullyAutomatix"
description: "Auto-Off Timer project using a C005 timer IC, relay output, and capacitive power supply in a compact mains-connected build."
---

{:.kicker}
Project File

# Auto-Off Timer

{:.lead}
A compact mains-connected auto-off timer built around the C005 timer IC, a relay output stage, and a transformerless capacitive power supply — no bulky adapters required.

![Auto-Off Timer synthetic project render]({{ '/images/carousel/auto-off-timer.jpg' | relative_url }}){:.hero-image}

## Build Summary

The timer counts down a user-set period and switches off the load via a relay. The entire circuit runs from a capacitive dropper supply directly off mains, keeping the footprint to a single compact PCB.

- C005 timer IC driving a single-pole relay for load switching
- Capacitive power supply (X-rated cap dropper) — no transformer
- Onboard Zener regulation for stable 5 V logic rail
- Preset resistor network for fixed time intervals (15 / 30 / 60 min)
- LED indicator shows active countdown state
- Compact single-layer PCB fits a standard wall-plate enclosure

## Technical Specs

| Timer IC | C005 (or equivalent NE555 variant) |
| Power Supply | Capacitive dropper, 230 V AC in |
| Logic Rail | 5 V DC via Zener regulator |
| Relay Output | 5 V coil, 10 A / 250 V AC contacts |
| Time Ranges | 15 min, 30 min, 60 min (preset) |
| Target Cost | USD 6 synthetic BOM |
{:.specs}

## Project Images

![Auto-Off Timer block schematic showing mains, cap dropper, C005 and relay]({{ '/images/projects/timer-schematic.svg' | relative_url }})

![Auto-Off Timer compact single-layer PCB layout]({{ '/images/projects/timer-pcb.svg' | relative_url }})

{:.footer-note}
Synthetic documentation by FullyAutomatix for concept demonstration.
