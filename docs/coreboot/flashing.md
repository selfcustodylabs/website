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
sudo apt install flashrom coreboot-utils
```

### Back Up Your Existing BIOS Region

Before doing anything else, make a full backup of your current BIOS.
This is your recovery point if you need to restore the original firmware.

```bash
sudo flashrom -p internal -r factory.rom --ifd -i bios
```

:::warning
This does not back up the entire firmware, only the BIOS region. The Intel Management Engine and descriptor regions are excluded, so this is not a full recovery image.
:::


### Flash the Coreboot BIOS

Once everything looks correct, flash the prepared Coreboot BIOS region:

```bash
sudo flashrom -p internal -w coreboot.rom --ifd -i bios
```

### Verify the Flashed Image

After flashing, always re-read the chip and compare it against the file you wrote.
This ensures the flash was successful and the chip contains exactly what you intended.

Read back the flashed chip:

```bash
sudo flashrom -p internal -r flashed_bios.rom --ifd -i bios
```

Your compiled coreboot.rom contains more than just the BIOS region, so we must extract only the BIOS part to match the layout of the original firmware.

```bash
dd if=coreboot.rom of=coreboot_bios.rom bs=1 skip=5242880 count=11534336
```

Here:

- skip=5242880 skips the first 5 MB (non-BIOS regions such as Intel ME).
- count=11534336 copies the remaining 11 MB, which is the BIOS region.

### Quick Byte-for-Byte Comparison

Check that the flashed BIOS region matches the extracted BIOS region:

```bash
cmp -l coreboot_bios.rom flashed_bios.rom | head -n 20
```

If no differences appear, the BIOS region was flashed correctly.

### Compare Build Information Inside CBFS

Extract the `build_info` file from each image:

```bash
cbfstool coreboot_bios.rom extract -n build_info -f build_info_expected.rom
cbfstool flashed_bios.rom extract -n build_info -f build_info_actual.rom
```

Compare them:

```bash
diff -u build_info_expected.rom build_info_actual.rom
```

If the output is empty, the `build_info` files match.

### Check CBFS Contents

Print the CBFS layout of the flashed BIOS:

```bash
cbfstool flashed_bios.rom print
```

Compare it with the intended Coreboot image:

```bash
cbfstool coreboot_bios.rom print > cbfs_expected.txt
cbfstool flashed_bios.rom print > cbfs_actual.txt
diff -u cbfs_expected.txt cbfs_actual.txt
```

### Conclusion

If all comparisons match, your new Coreboot firmware has been flashed correctly and is ready to boot.
