---
sidebar_position: 6
title: Flashing
slug: /coreboot/flashing/
tags: [coreboot, chipsec, bios, flashing]
---

# Flashing

:::warning
Flashing firmware always carries some risk.
If something goes wrong, your device might not boot until you reflash it using an external programmer.
Always back up your current BIOS before writing Coreboot.
:::

### Install Flashing Tools

We will use the flashrom utility to read and write the BIOS chip, and cbfstool to inspect Coreboot images.

```bash
sudo apt install coreboot-utils
```


### Back Up Your Existing BIOS

Before doing anything else, make a full backup of your current BIOS.
This is your recovery point if you need to restore the original firmware.

```bash
sudo flashrom -p internal -r flashed.rom --ifd -i bios
```

This reads only the BIOS region from the internal programmer and saves it to flashed.rom.


### Prepare the Coreboot BIOS Image

Your compiled coreboot.rom contains more than just the BIOS region, so we must extract only the BIOS part to match the layout of the original firmware.

```bash
dd if=coreboot.rom of=coreboot_bios.rom bs=1 skip=5242880 count=11534336
```

Here:

- skip=5242880 skips the first 5 MB (non-BIOS regions such as Intel ME).
- count=11534336 copies the remaining 11 MB, which is the BIOS region.


### Verify Before Flashing

Compare file checksums:

```bash
sha1sum coreboot_bios.rom flashed.rom
```

Check the Coreboot File System (CBFS) contents:

```bash
cbfstool coreboot_bios.rom print
cbfstool flashed.rom print
```

See the first 20 mismatched bytes (if any):

```bash
cmp -l coreboot_bios.rom flashed.rom | head -n 20
```

Save CBFS listings to files and compare them:

```bash
cbfstool coreboot_bios.rom print > cbfs1.txt
cbfstool flashed.rom print > cbfs2.txt
diff -u cbfs1.txt cbfs2.txt
```

### Compare Build Information

Extract the `build_info` file from each image:

```bash
cbfstool coreboot_bios.rom extract -n build_info -f build_info.rom
cbfstool coreboot.rom extract -n build_info -f build_info.rom
cbfstool flashed.rom extract -n build_info -f build_info_flashed.rom
```

Compare them:

```bash
diff -u build_info.rom build_info_flashed.rom
```

### Flash the New Coreboot BIOS

Once everything looks correct, flash the prepared Coreboot BIOS region:

```bash
sudo flashrom -p internal -w coreboot_bios.rom --ifd -i bios
```

### Verify the Flashed Image

After flashing, always re-read the chip and compare it against the file you wrote.
This ensures the flash was successful and the chip contains exactly what you intended.

Read back the flashed chip:

```bash
sudo flashrom -p internal -r flashed_after.rom --ifd -i bios
```

Check CBFS contents:

```bash
cbfstool flashed_after.rom print
```

Compare with the intended Coreboot image:

```bash
cmp -l coreboot_bios.rom flashed_after.rom | head -n 20
```

Optional — compare CBFS listings in detail:

```bash
cbfstool coreboot_bios.rom print > cbfs_final_expected.txt
cbfstool flashed_after.rom print > cbfs_final_actual.txt
diff -u cbfs_final_expected.txt cbfs_final_actual.txt
```

Optional — verify build_info after flashing:

```bash
cbfstool flashed_after.rom extract -n build_info -f build_info_after.rom
diff -u build_info.rom build_info_after.rom
```

If all comparisons match, your new Coreboot firmware is flashed correctly.

You can now reboot into Coreboot!