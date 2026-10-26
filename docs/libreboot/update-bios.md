---
sidebar_position: 7
title: "Update Libreboot Firmware"
description: "Update an existing Libreboot install from inside Linux without opening the laptop: relax /dev/mem access, back up the chip, write the new ROM and verify it."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "update"]
tags: ["libreboot", "update", "flashprog", "bios"]
---
# Update Libreboot (internal flashing)

Once Libreboot is installed, newer releases can be written from Linux on the laptop itself, without opening it: build the new image as in [build ROMs](/docs/libreboot/roms/), allow flashprog to reach the flash chip (which may need the `iomem=relaxed` kernel option), read the current chip three times and keep a matching backup, then write the new image with `flashprog -p internal` and check it before rebooting. If you instead download a pre-built release from libreboot.org, it ships without the vendor files your board needs; insert them first with `./mk inject`, following Libreboot's instructions for your board.

## Step 1: Let flashprog reach the chip

Step 1 checks that the kernel lets flashprog access the flash. Run:

```bash
sudo flashprog -p internal
```

If it reports the chip without errors, go to step 2. If it reports an error about `/dev/mem`, restart with the `iomem=relaxed` kernel option. Open GRUB's settings:

```bash
sudo nano /etc/default/grub
```

add `iomem=relaxed` to the line starting `GRUB_CMDLINE_LINUX_DEFAULT`:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash iomem=relaxed"
```

then save, update GRUB and reboot:

```bash
sudo update-grub
sudo reboot
```

Some kernels are built with `CONFIG_STRICT_DEVMEM`, which blocks this access even then; Libreboot's documentation covers that case. Remove `iomem=relaxed` again once the update is done, because it loosens a protection the kernel normally enforces.

## Step 2: Check the chip size

Step 2 confirms the image you built matches the chip. The output of `sudo flashprog -p internal` includes the flash chip and its size; it should match the size in your board target's name (for example 12 MB for `lenovo_thinkpad_x230_12mb`).

## Step 3: Back up what is on the chip now

Step 3 reads the current firmware three times and keeps it only if the reads match:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump.bin
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump2.bin
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump3.bin
sha1sum dump*.bin
```

All three hashes must be the same. Keep `dump.bin` somewhere other than this laptop and delete the other two:

```bash
rm dump2.bin dump3.bin
```

## Step 4: Write the new image

Step 4 writes the update:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -w libreboot.rom
```

`laptop=force_I_want_a_brick` and `boardmismatch=force` switch off safety checks that otherwise refuse to flash laptops or boards flashprog does not recognise; with the correct image for your machine, Libreboot's documentation describes them as safe. To use as few overrides as possible, try plain `-p internal` first, then `-p internal:boardmismatch=force`, and add `laptop=force_I_want_a_brick` only if needed.

flashprog verifies the write and prints `VERIFIED` (or reports that the chip already matched) on success.

## Step 5: Check the result before rebooting

Step 5 reads the chip back and compares it with the image:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r new_dump.bin
sha1sum libreboot.rom new_dump.bin
rm new_dump.bin
```

If the two hashes match, reboot into the updated firmware. If they do not, do not reboot: write the image again, or write `dump.bin` back, until a read matches.
