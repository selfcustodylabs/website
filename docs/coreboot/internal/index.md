---
sidebar_position: 0
sidebar_label: "Overview"
title: "Internal Coreboot Flashing"
description: "Flash Coreboot from inside a running system: downgrade your stock BIOS, unlock the Intel Flash Descriptor, and write the new firmware safely."
keywords: ["coreboot", "internal flashing", "intel me", "flash descriptor", "bios", "self custody"]
tags: ["coreboot", "bios", "flashing"]
slug: /coreboot/internal
date: "2026-04-15"
---

# Internal coreboot flashing

Internal flashing replaces the laptop's stock BIOS with coreboot from inside a running Linux system, without opening the laptop or using an external programmer. It works only on machines whose BIOS region can be unlocked: you install a BIOS version old enough to have the relevant vulnerabilities, use CHIPSEC and a sleep-and-resume trick to remove the write protection, then write and verify the coreboot image. It is faster than external flashing, but it cannot touch the Intel ME region.

## What are the steps?

1. [Downgrade the stock BIOS](/docs/coreboot/internal/downgrading-bios/) to a version that still allows internal flashing.
2. [Unlock the BIOS region](/docs/coreboot/internal/unlocking-bios/) with CHIPSEC.
3. [Flash coreboot](/docs/coreboot/internal/flashing-bios/) and verify the result.

If your laptop does not support internal flashing, or you want to neutralise the Intel ME, use [external flashing](/docs/coreboot/external-flashing/) instead.
