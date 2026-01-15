---
sidebar_position: 3
title: "Flash Coreboot to Your Laptop BIOS"
description: "Practical guide: Flashing. Covers Verify the Flashed Image, bitcoin, self custody."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "flashing"]
tags: ["coreboot", "chipsec", "bios", "internal", "flashing"]
---
# Internal Flashing

Flashing firmware always carries some risk.
If something goes wrong, your device may fail to boot and will require recovery with an external programmer.
Always make a full backup of your current BIOS before attempting to flash Coreboot.

:::note
Note that **internal flashing cannot be used to disable Intel ME**, because the ME region is locked and cannot be read or written from the host.
If your goal is to neutralize or disable Intel ME, the only reliable method is to use an **external programmer** to dump, modify, and reflash the entire firmware image (see the External Flashing section).
:::


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
sudo flashrom -p internal -w coreboot.rom --ifd -i bios -N
```

## Verify the Flashed Image

After flashing, always re-read the chip and compare it against the file you wrote.
This ensures the flash was successful and the chip contains exactly what you intended.

Read back the flashed chip:

```bash
sudo flashrom -p internal -r flashed.bin --ifd -i bios
```

You can now choose among 3 distinct verification methods:

### 1. Quick Byte-for-Byte Comparison

This method operates at the raw binary level and checks that the flashed BIOS region matches the extracted BIOS region.

Your compiled coreboot.rom contains more than just the BIOS region, so we must extract only the BIOS part to match the layout of the original firmware.

```bash
dd if=coreboot.rom of=coreboot_bios.rom bs=1 skip=5242880 count=11534336
dd if=flashed.bin of=flashed_bios.bin bs=1 skip=5242880 count=11534336
```

Here:

- skip=5242880 skips the first 5 MB (non-BIOS regions such as Intel ME).
- count=11534336 copies the remaining 11 MB, which is the BIOS region.

Now perform the check:

```bash
cmp -l coreboot_bios.rom flashed_bios.bin | head -n 20
```

If no differences appear, the BIOS region was flashed correctly.

### 2. Compare Build Information Inside CBFS

This method operates at the specific metadata level.

Extract the `build_info` file from each full rom image:

```bash
cbfstool coreboot.rom extract -n build_info -f build_info_expected.rom
cbfstool flashed.bin extract -n build_info -f build_info_actual.rom
```

Compare them:

```bash
diff -u build_info_expected.rom build_info_actual.rom
```

If the output is empty, the `build_info` files match.

### 3. Check CBFS Contents

This method operates at the filesystem content level.

Print the CBFS layout of the Coreboot BIOS:

```bash
cbfstool coreboot.rom print
```

<details>
<summary>Output</summary>
<p>

```text
FMAP REGION: COREBOOT
Name                           Offset     Type           Size   Comp
cbfs_master_header             0x0        cbfs header        32 none
cpu_microcode_blob.bin         0x80       microcode       26624 none
fallback/romstage              0x68c0     stage           92312 none
fallback/ramstage              0x1d1c0    stage          120593 LZMA (255636 decompressed)
config                         0x3a940    raw              3332 LZMA (10602 decompressed)
revision                       0x3b680    raw               774 none
build_info                     0x3b9c0    raw               105 none
fallback/dsdt.aml              0x3ba80    raw             14537 none
vbt.bin                        0x3f380    raw              1409 LZMA (4459 decompressed)
cmos_layout.bin                0x3f940    cmos_layout      2060 none
fallback/postcar               0x40180    stage           23488 none
fallback/payload               0x45dc0    simple elf     473556 none
(empty)                        0xb97c0    null           202212 none
bootblock                      0xeadc0    bootblock       20480 none
```

</p>
</details>

Print the CBFS layout of the Flashed BIOS:

```bash
cbfstool flashed.bin print
```

<details>
<summary>Output</summary>
<p>

```text
FMAP REGION: COREBOOT
Name                           Offset     Type           Size   Comp
cbfs_master_header             0x0        cbfs header        32 none
cpu_microcode_blob.bin         0x80       microcode       26624 none
fallback/romstage              0x68c0     stage           92312 none
fallback/ramstage              0x1d1c0    stage          120593 LZMA (255636 decompressed)
config                         0x3a940    raw              3332 LZMA (10602 decompressed)
revision                       0x3b680    raw               774 none
build_info                     0x3b9c0    raw               105 none
fallback/dsdt.aml              0x3ba80    raw             14537 none
vbt.bin                        0x3f380    raw              1409 LZMA (4459 decompressed)
cmos_layout.bin                0x3f940    cmos_layout      2060 none
fallback/postcar               0x40180    stage           23488 none
fallback/payload               0x45dc0    simple elf     473556 none
(empty)                        0xb97c0    null           202212 none
bootblock                      0xeadc0    bootblock       20480 none
```

</p>
</details>

Compare it with the intended Coreboot image:

```bash
cbfstool coreboot.rom print > cbfs_expected.txt
cbfstool flashed.bin print > cbfs_actual.txt
diff -u cbfs_expected.txt cbfs_actual.txt
```

### Conclusion

If all comparisons match, your new Coreboot firmware has been flashed correctly and is ready to boot.
