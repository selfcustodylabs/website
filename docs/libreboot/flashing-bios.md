---
sidebar_position: 7
title: "Flash Libreboot to Your Laptop BIOS"
description: "Flash a Libreboot ROM onto your laptop with an external SPI programmer: locate the chips, split the ROM, detect, and write the new firmware."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "flashing"]
tags: ["libreboot", "flashprog", "bios"]
---
# Flashing

Flashing writes the Libreboot image onto the laptop's flash chip with the Pico and the clip: open the laptop to reach the chip, split the image if the board has two chips, check flashprog can see each chip, read the original firmware three times and keep a copy whose reads match, then write Libreboot and confirm it boots. The backup is the step not to skip. If anything goes wrong, it is the only way back to a working laptop.

Before starting, unplug the charger and remove the main battery and the CMOS coin cell. Nothing should power the board except the Pico.

## Step 1: Locate the chip or chips

Step 1 opens the laptop far enough to reach the flash.

| Laptop | Chips | How to reach them |
|---|---|---|
| X230 | Two: 4 MB ("top") and 8 MB ("bottom") | Remove the keyboard and palm rest |
| T420 | One: 8 MB | Full disassembly |
| T430, T530, W530 | Two: 4 MB and 8 MB | Full disassembly |
| T440p | Two: 4 MB and 8 MB | From the back, through the service panel |
| T480s | One: 16 MB, near the memory (the chip near the edge is the Thunderbolt chip) | Remove the bottom cover |

![Two flash chips side by side on a ThinkPad motherboard, the 4 MB and 8 MB halves of a 12 MB firmware](/img/libreboot/dual-chip.webp)

Photograph each chip's markings before clipping on. They tell you the chip model if flashprog finds more than one candidate.

## Step 2: Split the image for two-chip boards

Step 2 applies only to the 12 MB boards (X230, T430, T440p, T530 and W530). Their firmware is one 12 MB image stored across two chips, so split it into the first 8 MB, for the 8 MB "bottom" chip, and the last 4 MB, for the 4 MB "top" chip:

```bash
dd if=libreboot.rom of=libreboot_bottom.rom bs=1M count=8
dd if=libreboot.rom of=libreboot_top.rom bs=1M skip=8
```

The T420 and T480s have one chip and take the whole `libreboot.rom` as it is.

## Step 3: Detect the chip

Step 3 confirms flashprog can talk to the chip through the clip. Clip the Pomona firmly onto the chip (the top chip first, on two-chip boards), then plug the Pico into the computer you are flashing from.

![Two ThinkPads on a desk: one runs the flashing commands, the other is opened up with the Pico and clip attached to its flash chip](/img/libreboot/plug.webp)

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M
```

If flashprog reports several possible chips, pick the one matching your photo and name it with `-c` in every command from here on:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E"
```

`MX25L3206E/MX25L3208E` and, below, `EN25Q64` are the chips on our boards; yours may differ, so use the names flashprog gives you. If it finds nothing, reseat the clip and check the wiring against the [pin table](/docs/libreboot/raspberry-pico/connection/#which-pico-pin-goes-to-which-chip-pin).

## Step 4: Back up the factory firmware

Step 4 reads each chip three times and keeps the dump only if all three reads match, because a loose clip can return a corrupt read that looks normal. For the top chip:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_top.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_top2.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_top3.bin
sha1sum factory_top*.bin
```

All three hashes must be identical, for example:

```text
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory_top.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory_top2.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory_top3.bin
```

If they differ, reseat the clip and read again until three reads agree. Then keep one copy, on more than one drive:

```bash
rm factory_top2.bin factory_top3.bin
```

On two-chip boards, move the clip to the bottom chip and repeat with its chip name and `factory_bottom` file names:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_bottom.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_bottom2.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_bottom3.bin
sha1sum factory_bottom*.bin
rm factory_bottom2.bin factory_bottom3.bin
```

On one-chip boards, read the single chip the same way, as `factory.bin`.

## Step 5: Write Libreboot

Step 5 writes the new firmware. flashprog erases the chip, writes the image and reads it back to verify it, and finishes with `Verifying flash... VERIFIED.` when the chip matches the file. For the top chip:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -w libreboot_top.rom
```

Then move the clip to the bottom chip:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -w libreboot_bottom.rom
```

On one-chip boards, write `libreboot.rom` to the single chip. If a write does not end in `VERIFIED`, do not power the laptop; check the clip and run the same write again.

For an independent check, read the chip back and compare it with the file:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r flashed_top.bin
sha1sum libreboot_top.rom flashed_top.bin
```

The two hashes must match.

## Step 6: Boot it

Step 6 confirms the laptop starts. Unclip, reconnect the battery or charger, and power on before putting the laptop back together: you should see Libreboot's boot menu. If it does not start, write your factory backup back to the chip with the same `-w` command and the `factory_*.bin` files, and the laptop returns to its original firmware.
