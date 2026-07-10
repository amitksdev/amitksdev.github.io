---
layout: project
title: "Electronic Load Tester | FullyAutomatix"
description: "Electronic Load Tester project featuring MOSFET and Op-Amp constant-current sink for battery capacity testing and power supply load regulation."
---

{:.kicker}
Project File

# Electronic Load Tester

{:.lead}
A MOSFET and Op-Amp constant-current sink for battery capacity testing and power supply load regulation, with OLED readout and over-temperature protection.

![Electronic Load Tester synthetic project render]({{ '/images/carousel/electronic-load-tester-1.jpg' | relative_url }}){:.hero-image}

## Build Summary

This electronic load tester uses a precision op-amp control loop to drive a power MOSFET as a programmable constant-current sink. Perfect for battery discharge testing, power supply stability checks, and measuring actual capacity under realistic load conditions.

- Op-amp feedback loop maintains constant current through MOSFET
- Precision current sense resistor (0.1Ω / 5W) for accurate measurement
- Adjustable load current from 0.1A to 5A via rotary encoder
- OLED display shows real-time voltage, current, power, and mAh discharged
- Over-temperature shutdown using NTC thermistor on MOSFET heatsink
- Arduino Nano for control, measurement, and data logging to SD card

## Technical Specs

| Load Current | 0.1 A – 5 A (adjustable) |
| Input Voltage | 3 V – 30 V DC |
| Power MOSFET | IRFZ44N (55V / 49A) with heatsink |
| Op-Amp | LM358 or TL072 dual op-amp |
| Current Accuracy | ±50 mA (with calibration) |
| Display | 0.96" OLED 128x64 I2C |
| Data Logging | MicroSD card via SPI |
| Target Cost | USD 22 synthetic BOM |
{:.specs}

## Project Images

![Electronic Load Tester schematic showing op-amp control loop and MOSFET sink]({{ '/images/projects/load-tester-schematic.svg' | relative_url }})

![Electronic Load Tester PCB layout with power stage and control circuitry]({{ '/images/projects/load-tester-pcb.svg' | relative_url }})

{:.footer-note}
Synthetic documentation by FullyAutomatix for concept demonstration.
