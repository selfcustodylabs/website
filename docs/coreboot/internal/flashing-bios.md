# Flash Coreboot to Your Laptop BIOS

> Flash Coreboot from inside a running system after the BIOS region is unlocked. Includes safety checks and verification of the flashed image.

Source: https://selfcustodylabs.com/docs/coreboot/internal/flashing-bios/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

With the BIOS region unlocked, flashing coreboot internally takes three steps: back up the current BIOS region, write the coreboot image to it with flashrom, and verify the result before rebooting. If something goes wrong the laptop may not boot, and recovering it needs an external programmer, so make the backup first.

Internal flashing cannot neutralise the Intel ME, because the ME region is locked and cannot be read or written from the running system. To neutralise it, use an external programmer to dump, modify and rewrite the whole firmware image, as [external flashing](https://selfcustodylabs.com/docs/coreboot/external-flashing/) describes.

## Step 1: Back up the existing BIOS region

Step 1 reads the current BIOS region to a file, your recovery point if you need to restore the original firmware:

```bash
sudo flashrom -p internal -r factory.rom --ifd -i bios
```

This backs up the BIOS region only. The descriptor and Intel ME regions are locked and left out, so `factory.rom` is not a full image of the chip; a full one needs an external programmer.

## Step 2: Flash coreboot

Step 2 writes the coreboot image to the BIOS region alone:

```bash
sudo flashrom -p internal -w coreboot.rom --ifd -i bios -N
```

`--ifd -i bios` tells flashrom to use the layout in the flash descriptor and write only the BIOS region. `-N` limits flashrom's own verification to that region, because the locked ME region cannot be read back.

## Step 3: Verify the flashed image

Step 3 reads the BIOS region back from the chip and compares it with the image you wrote, so you know the chip holds exactly what you intended before you reboot:

```bash
sudo flashrom -p internal -r flashed.bin --ifd -i bios
```

Then compare the two in any of three ways, each at a different level.

### Compare the bytes

The byte comparison checks the raw BIOS region. `coreboot.rom` is a full image of the chip, so first cut the BIOS region out of both files. The offsets below come from the BIOS region in the CHIPSEC output on the [unlocking page](https://selfcustodylabs.com/docs/coreboot/internal/unlocking-bios/), Base `0x00500000` and Limit `0x00BFFFFF`: `skip` is the base (5 MB) and `count` the region's size (7 MB). Use the Base and Limit your own machine printed.

```bash
dd if=coreboot.rom of=coreboot_bios.rom bs=1 skip=5242880 count=7340032
dd if=flashed.bin of=flashed_bios.bin bs=1 skip=5242880 count=7340032
cmp -l coreboot_bios.rom flashed_bios.bin | head -n 20
```

If `cmp` prints nothing, the BIOS region was flashed correctly.

### Compare the build information

The build information check compares the `build_info` file that coreboot stores in its file system (CBFS):

```bash
cbfstool coreboot.rom extract -n build_info -f build_info_expected.txt
cbfstool flashed.bin extract -n build_info -f build_info_actual.txt
diff -u build_info_expected.txt build_info_actual.txt
```

If `diff` prints nothing, the two match.

### Compare the CBFS contents

The CBFS check compares the list of files inside the image, with their offsets, types and sizes. Print the layout of the image you built:

```bash
cbfstool coreboot.rom print
```

<details>
<summary>Output</summary>

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

</details>

Then save the layout of both images and compare them:

```bash
cbfstool coreboot.rom print > cbfs_expected.txt
cbfstool flashed.bin print > cbfs_actual.txt
diff -u cbfs_expected.txt cbfs_actual.txt
```

If all three comparisons match, coreboot has been written correctly and the laptop can be rebooted.
