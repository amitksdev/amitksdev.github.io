---
layout: project
title: "12V UPS | FullyAutomatix"
description: "12V UPS project page featuring Li-Ion battery pack with current limiting and BMS protection."
---

{:.kicker}
Project File

# 12V UPS

{:.lead}
A bench-top 12 V uninterruptible power supply built around a Li-Ion cell pack with active current limiting and a dedicated BMS for safe charge, discharge, and over-current protection.

![12V UPS synthetic project render]({{ '/images/carousel/12v-ups.jpg' | relative_url }}){:.hero-image}

## Build Summary

The UPS sits inline between a 12 V DC supply and a load, seamlessly switching to battery when mains power is interrupted. A hardware current-limit stage protects both the cells and the load during heavy transients.

- Li-Ion cell pack (3S configuration, 11.1 V nominal) with spot-welded nickel strips
- Dedicated BMS IC for over-charge, over-discharge, over-current, and short-circuit cut-off
- Adjustable current-limiting circuit using an op-amp sense resistor loop
- Automatic switchover relay with sub-20 ms transfer time
- LED fuel gauge and fault indicator on front panel

## Technical Specs

| Output Voltage | 12 V DC regulated |
| Battery Chemistry | Li-Ion 18650, 3S2P |
| BMS | DW01 / FS8205A cell protection |
| Current Limit | Adjustable 0.5 A – 3 A via trim-pot |
| Charge Input | DC barrel 14.4 V / 2 A CC-CV |
| Transfer Time | < 20 ms on mains failure |
| Target Cost | USD 38 synthetic BOM |
{:.specs}

## Project Images

![12V UPS block schematic showing charge path, BMS and relay switchover]({{ '/images/projects/ups-schematic.svg' | relative_url }})

![12V UPS PCB layout with 18650 cell holders, BMS IC and relay]({{ '/images/projects/ups-pcb.svg' | relative_url }})

{:.footer-note}
Synthetic documentation by FullyAutomatix for concept demonstration.
