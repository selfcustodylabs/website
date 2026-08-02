---
sidebar_position: 0
sidebar_label: "Overview"
title: "Internal Coreboot Flashing"
description: "Flash Coreboot from inside a running system: downgrade your stock BIOS, unlock the Intel Flash Descriptor, and write the new firmware safely."
keywords: ["coreboot", "internal flashing", "intel me", "flash descriptor", "bios", "self custody"]
tags: ["coreboot", "bios", "flashing"]
slug: /coreboot/internal
---

# Internal Coreboot Flashing

Internal flashing lets you replace your laptop's stock BIOS with Coreboot from inside the running system, without opening the chassis or attaching an external SPI programmer. It only works on machines whose Intel Flash Descriptor region can be unlocked.

This path is faster than external flashing, but the prerequisites are strict: you need the right BIOS version, a writable descriptor region, and a verified ROM image to flash.

## In this section

- **[Downgrade Stock BIOS](./downgrading-bios)**: install the BIOS version with an unlocked Intel ME region
- **[Unlock the BIOS Region](./unlocking-bios)**: use CHIPSEC to clear the Flash Descriptor write protection
- **[Flash Coreboot](./flashing-bios)**: write the new firmware and verify the result

If your laptop does not support internal flashing, see the [external flashing guide](/docs/coreboot/external-flashing) instead.
