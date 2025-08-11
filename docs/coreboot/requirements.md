---
sidebar_position: 2
title: Requirements
slug: /coreboot/requirements/
tags: [coreboot, requirements, bios]
---

# Requirements

Coreboot supports several Lenovo ThinkPad models. In this guide, we’ll focus on models where Coreboot can be installed via **internal flashing**, meaning you don’t need to open up the laptop or use external flashing tools. This makes the process much easier compared to installing Coreboot, which usually requires disassembly and external flashing.


## Hardware

- USB flash drive: Used to create a bootable image for downgrading the BIOS
- Lenovo ThinkPad laptop: must be one of the models listed below

The following ThinkPad models support internal BIOS flashing:

<div class="fixed-width-table">

|Model|
|-|
|X230|
|X230T|
|T430|
|T430s|
|T530|
|W530|

</div>


## Software

- Linux distribution: The operating system used to run the flashing tools and commands.
- CHIPSEC: A security tool for checking if your BIOS is vulnerable to internal flashing.
- Coreboot: The open-source firmware you’ll be installing.
- Flashrom: The utility used to read, write, and erase flash chips (required for flashing Coreboot).