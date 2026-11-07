---
sidebar_position: 7
title: "Flash Libreboot to Your Laptop BIOS"
description: "Flash Libreboot onto a ThinkPad with one flash chip or two, using an external SPI programmer: find the chips, back up the factory firmware, write the new image."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "flashing"]
tags: ["libreboot", "flashprog", "bios"]
date: "2025-03-29"
---
# Flashing

Flashing writes the Libreboot image onto the laptop's flash with the Pico and the clip: open the laptop to reach the chip, check flashprog can see it, read the original firmware three times and keep a copy whose reads match, then write Libreboot and confirm it boots. A board with one flash chip goes through this once, with the whole image; a board with two chips goes through it once per chip, with the 8 MB and 4 MB files made at the end of [build ROMs](/docs/libreboot/roms/#step-5-split-the-image-if-your-board-has-two-chips). The backup is the step not to skip. If anything goes wrong, it is the only way back to a working laptop.

| | One chip | Two chips (`_12mb` targets) |
|---|---|---|
| Files to write | `libreboot.rom` | `libreboot_4mb.rom` and `libreboot_8mb.rom` |
| Factory backup | `factory.bin` | `factory_4mb.bin` and `factory_8mb.bin` |
| Clip on, back up and write | Once | Twice: the 4 MB chip, then the 8 MB chip |

Before starting, unplug the charger and remove the main battery and the CMOS coin cell. Nothing should power the board except the Pico. Run the commands on this page from your home folder, where build ROMs left the files.

## Step 1: Locate the chip or chips

Step 1 opens the laptop far enough to reach the flash: one SOIC-8 chip on a one-chip board, or an 8 MB and a 4 MB chip side by side on a two-chip board. Libreboot's install page for your board shows where they are.

Photograph each chip's markings before clipping on. They tell you the chip model if flashprog finds more than one candidate.

### One chip

| Laptop | Where the chip is |
|---|---|
| T420 | Full disassembly |
| T480s | Near the memory, under the bottom cover. The chip near the edge of the board is the Thunderbolt chip, not the firmware |

### Two chips

| Laptop | Where the chips are |
|---|---|
| X230 | Under the keyboard and palm rest |
| T440p | From the back, through the service panel |
| T430, T530, W530 | Full disassembly |

![Two flash chips side by side on a ThinkPad motherboard, the 4 MB and 8 MB halves of a 12 MB firmware](/img/libreboot/dual-chip.webp)

## Step 2: Detect the chip

Step 2 confirms flashprog can talk to the chip through the clip. Clip the Pomona firmly onto the chip (on a two-chip board, the 4 MB chip first), then plug the Pico into the computer you are flashing from.

![Two ThinkPads on a desk: one runs the flashing commands, the other is opened up with the Pico and clip attached to its flash chip](/img/libreboot/plug.webp)

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M
```

flashprog names the chip it found and its size, for example `(4096 kB, SPI)` for a 4 MB chip, which on a two-chip board confirms which chip the clip is on. If it reports several possible chips, pick the one matching your photo and name it with `-c` in every command from here on:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E"
```

`MX25L3206E/MX25L3208E` (4 MB) and, below, `EN25Q64` (8 MB) are the chips on our two-chip boards; yours may differ, so use the names flashprog gives you. If it finds nothing, reseat the clip and check the wiring against the [pin table](/docs/libreboot/raspberry-pico/connection/#which-pico-pin-goes-to-which-chip-pin).

## Step 3: Back up the factory firmware

Step 3 reads each chip three times and keeps the backup only if all three reads match, because a loose clip can return a corrupt read that looks normal. Keep the backup on more than one drive: it is the only way back to the original firmware.

### One chip

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -r factory.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -r factory_2.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -r factory_3.bin
sha1sum factory*.bin
```

Add `-c` and the chip name if step 2 needed it. All three hashes must be identical, for example:

```text
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory_2.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  factory_3.bin
```

If they differ, reseat the clip and read again until three reads agree. Then delete the extra copies:

```bash
rm factory_2.bin factory_3.bin
```

### Two chips

With the clip on the 4 MB chip:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_4mb.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_4mb_2.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r factory_4mb_3.bin
sha1sum factory_4mb*.bin
```

All three hashes must be identical. If they differ, reseat the clip and read again; if they never agree, the other chip may be talking over this one, which [the connection page fixes](/docs/libreboot/raspberry-pico/connection/#what-if-a-two-chip-boards-reads-never-match). Then move the clip to the 8 MB chip and read it the same way:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_8mb.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_8mb_2.bin
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r factory_8mb_3.bin
sha1sum factory_8mb*.bin
```

When both sets of hashes match, delete the extra copies:

```bash
rm factory_4mb_2.bin factory_4mb_3.bin factory_8mb_2.bin factory_8mb_3.bin
```

## Step 4: Write Libreboot

Step 4 writes the new firmware. flashprog erases the chip, writes the image and reads it back to verify it, and finishes with `Verifying flash... VERIFIED.` when the chip matches the file. If a write does not end in `VERIFIED`, do not power the laptop; check the clip and run the same write again.

### One chip

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -w libreboot.rom
```

For an independent check, read the chip back and compare it with the file; the two hashes must match:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -r flashed.bin
sha1sum libreboot.rom flashed.bin
```

### Two chips

With the clip on the 4 MB chip, write the 4 MB file:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -w libreboot_4mb.rom
```

Then move the clip to the 8 MB chip and write the 8 MB file:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -w libreboot_8mb.rom
```

If a file and a chip differ in size, flashprog stops with an error instead of writing, so a swapped file is caught here. For an independent check, read each chip back and compare it with its file, the 8 MB chip first since the clip is on it:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "EN25Q64" -r flashed_8mb.bin
sha1sum libreboot_8mb.rom flashed_8mb.bin
```

Then on the 4 MB chip:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M -c "MX25L3206E/MX25L3208E" -r flashed_4mb.bin
sha1sum libreboot_4mb.rom flashed_4mb.bin
```

Each pair of hashes must match.

## Step 5: Boot it

Step 5 confirms the laptop starts. Unclip, reconnect the battery or charger, and power on before putting the laptop back together: you should see Libreboot's boot menu. If it does not start, write the factory backup back with the same `-w` commands, `factory.bin` on a one-chip board, or `factory_4mb.bin` to the 4 MB chip and `factory_8mb.bin` to the 8 MB chip on a two-chip board, and the laptop returns to its original firmware.
