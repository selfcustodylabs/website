---
sidebar_position: 2
title: "Unlocking BIOS"
description: "Unlock the Intel Flash Descriptor BIOS region with CHIPSEC so Coreboot can be flashed internally without an external SPI programmer."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "unlocking", "bios"]
tags: ["coreboot", "chipsec", "bios", "unlocking"]
date: "2025-08-12"
---
# Unlocking BIOS

The stock BIOS write-protects its own flash region, so before coreboot can be flashed internally those protections must be removed. On the older BIOS versions this guide uses, two flaws make that possible: the SMM_BWP and BLE protections are not enabled, and the S3 boot script, which restores settings after sleep, can be patched. Install CHIPSEC, check the current lock status, dump and patch the boot script, put the laptop to sleep and wake it so the patched script runs, remove the protected ranges, and verify the region is writable.


## Why can older ThinkPad BIOS versions be unlocked?

Two flaws in older factory BIOS versions for these ThinkPads make internal flashing possible without an external programmer.

The first is that two write protections are left off. In BIOS versions released before 2014, SMM_BWP and BLE are both disabled, so the operating system can write to the BIOS without triggering extra security checks. Our testing on several T430 and X230 BIOS versions found that SMM_BWP is set to 1 only from the update whose changelog says:

```text
(New) Improved the UEFI BIOS security feature.
```

That update blocks ordinary internal flashing, which is why the [downgrade](/docs/coreboot/internal/downgrading-bios/) comes first.

The second is the S3 boot script flaw. The instructions the firmware runs when the laptop resumes from sleep (the S3 state) could be modified from the running system, and modifying them can stop the firmware from re-locking the flash configuration (the FLOCKDN bit) on resume. Lenovo's [S3 boot script advisory](https://support.lenovo.com/eg/ru/product_security/s3_boot_protect) covers the fix.

## Which registers protect the BIOS flash?

Intel platforms of this generation protect the BIOS flash with three mechanisms:

| Protection | Where it lives | What it does |
|---|---|---|
| SMM_BWP (SMM BIOS Write Protect) | BIOS_CNTL register, LPC bridge PCI config offset `0xDC` | At 1, the BIOS can be written only from System Management Mode. Once set, it cannot be cleared |
| BLE (BIOS Lock Enable) | BIOS_CNTL | At 1, any attempt to set BIOSWE triggers a System Management Interrupt. Once set, it cannot be cleared |
| BIOSWE (BIOS Write Enable) | BIOS_CNTL | Whether the BIOS is writable. Always read/write |
| PR0-PR4 (SPI Protected Ranges) | SPI registers `SPIBAR + 0x74` to `SPIBAR + 0x84` | Each defines an address range; its WP bit blocks writes to that range |
| FLOCKDN (Flash Configuration Lock-Down) | HSFS register, `SPIBAR + 0x04` | At 1, the PR0-PR4 registers cannot be changed until the next hardware reset |

Internal flashing needs two things: BIOS_CNTL must allow writes (SMM_BWP and BLE at 0, so BIOSWE can be set to 1), and no protected range may cover the region being written (WP at 0 on PR0-PR4). FLOCKDN decides whether the second can be fixed: while it is 1, the protected ranges stay as the firmware set them.

## How does the S3 boot script get around the lock?

FLOCKDN can only be cleared by a hardware reset, and the firmware sets it again on every boot. Resuming from S3 sleep (suspend to RAM) is also such a reset, and on resume the chipset restores its settings by running the S3 boot script, a list of register writes kept in RAM. Editing that script before suspending changes what the firmware does on resume: if the write that sets FLOCKDN is changed to leave it at 0, the protected ranges can be cleared after waking, and the BIOS region becomes writable.

## Step 1: Install CHIPSEC

Step 1 installs [CHIPSEC](https://chipsec.github.io/), Intel's open-source framework for inspecting platform firmware security, which reads and writes the registers above. Install the build dependencies, clone the repository and build its driver:

```bash
sudo apt install build-essential python3-dev python3 python-is-python3 gcc linux-headers-$(uname -r) nasm
git clone https://github.com/chipsec/chipsec.git
cd chipsec
python setup.py build_ext -i
```

## Step 2: Check whether the flash configuration is locked

Step 2 reads the HSFS register (`SPIBAR + 0x04`) to see whether FLOCKDN is set:

```bash
sudo python chipsec_main.py -m common.spi_lock
```

<details>
<summary>Output</summary>

```text
[x][ =======================================================================
[x][ Module: SPI Flash Controller Configuration Locks
[x][ =======================================================================
[*] HSFS = 0xE009 << Hardware Sequencing Flash Status Register (SPIBAR + 0x4)
    [00] FDONE            = 1 << Flash Cycle Done
    [01] FCERR            = 0 << Flash Cycle Error
    [02] AEL              = 0 << Access Error Log
    [03] BERASE           = 1 << Block/Sector Erase Size
    [05] SCIP             = 0 << SPI cycle in progress
    [13] FDOPSS           = 1 << Flash Descriptor Override Pin-Strap Status
    [14] FDV              = 1 << Flash Descriptor Valid
    [15] FLOCKDN          = 1 << Flash Configuration Lock-Down
```

</details>

`FLOCKDN = 1` means the SPI configuration is locked: the protected ranges cannot be changed until the next hardware reset. That is the normal state, and Steps 4 to 7 work around it.

## Step 3: Check BIOS_CNTL and the protected ranges

Step 3 reads BIOS_CNTL and the five protected range registers:

```bash
sudo python chipsec_main.py -m common.bios_wp
```

<details>
<summary>Output</summary>

```text
 [x][ =======================================================================
 [x][ Module: BIOS Region Write Protection
 [x][ =======================================================================
 [*] BC = 0x 8 << BIOS Control (b:d.f 00:31.0 + 0xDC)
     [00] BIOSWE           = 0 << BIOS Write Enable
     [01] BLE              = 0 << BIOS Lock Enable
     [02] SRC              = 2 << SPI Read Configuration
     [04] TSS              = 0 << Top Swap Status
     [05] SMM_BWP          = 0 << SMM BIOS Write Protection
 [-] BIOS region write protection is disabled!

 [*] BIOS Region: Base = 0x00500000, Limit = 0x00BFFFFF
 SPI Protected Ranges
 ------------------------------------------------------------
 PRx (offset) | Value    | Base     | Limit    | WP? | RP?
 ------------------------------------------------------------
 PR0 (74)     | 00000000 | 00000000 | 00000000 | 0   | 0
 PR1 (78)     | 8BFF0B40 | 00B40000 | 00BFFFFF | 1   | 0
 PR2 (7C)     | 8B100B10 | 00B10000 | 00B10FFF | 1   | 0
 PR3 (80)     | 8ADE0AD0 | 00AD0000 | 00ADEFFF | 1   | 0
 PR4 (84)     | 8AAF0800 | 00800000 | 00AAFFFF | 1   | 0
```

</details>

On an older BIOS, `SMM_BWP = 0` and `BLE = 0`, which is what this method needs. The protected ranges PR1 to PR4 have `WP = 1`, so large parts of the BIOS region are still write-protected even though BIOS_CNTL looks permissive. Note the value of each protected range, which Step 8 needs, and the BIOS region's Base and Limit, which the [verification after flashing](/docs/coreboot/internal/flashing-bios/#verify-the-flashed-image) needs.

To see the raw register space instead, which also shows the SPIBAR base address (here `0xFED1F800`) and HSFS at offset `0x04`:

```bash
sudo python chipsec_util.py mmio dump SPIBAR
```

```text
[mmio] MMIO register range [0x00000000FED1F800:0x00000000FED1F800+00000200]:
+00000000: 0BFF0500
+00000004: 0004E009
...
```

## Step 4: Find the S3 boot script entry that sets FLOCKDN

Step 4 dumps the S3 boot script and finds the entry that writes to HSFS, which is `SPIBAR + 0x04`: with SPIBAR at `0xFED1F800`, that is `0xFED1F804`.

```bash
sudo python chipsec_util.py uefi s3bootscript
```

<details>
<summary>Output</summary>

```text
Entry at offset 0x2B8F (len = 0x17, header len = 0x0):
 Data:
 02 00 17 02 00 00 00 01 00 00 00 04 f8 d1 fe 00 |
 00 00 00 09 e0 04 00                            |
 Decoded:
   Opcode : S3_BOOTSCRIPT_MEM_WRITE (0x0002)
   Width  : 0x02 (4 bytes)
   Address: 0xFED1F804
   Count  : 0x1
   Values : 0x0004E009
```

</details>

The value `0x0004E009` written to that address sets `FLOCKDN = 1` on every resume.

## Step 5: Back up the BIOS region

Step 5 dumps the BIOS region three times and compares the dumps, so you have a backup you can trust before changing anything:

```bash
sudo flashrom -p internal -r bios_backup.rom --ifd -i bios
sudo flashrom -p internal -r bios_backup2.rom --ifd -i bios
sudo flashrom -p internal -r bios_backup3.rom --ifd -i bios
sha1sum bios_backup.rom bios_backup2.rom bios_backup3.rom
```

All three hashes must match:

```text
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup.rom
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup2.rom
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup3.rom
```

If they do, keep `bios_backup.rom` somewhere off the laptop and delete the other two. If they differ, the reads are unreliable: do not go on.

## Step 6: Patch the boot script

Step 6 changes the HSFS write in the boot script from `0xE009` to `0x6009`, which clears bit 15 (FLOCKDN) so the flash configuration stays unlocked after resume. Use the HSFS address you found in Step 4:

```bash
sudo python chipsec_main.py -m tools.uefi.s3script_modify -a replace_op,mmio_wr,0xFED1F804,0x6009,0x2
```

<details>
<summary>Output</summary>

```text
 [*] Modifying S3 boot script entry at address 0x00000000DAF49B8F..
 [mem] 0x00000000DAF49B8F
 [*] Original entry:
  2  0 17  2  0  0  0  1  0  0  0  4 f8 d1 fe  0 |
  0  0  0  9 e0  4  0                            |
 [mem] buffer len = 0x17 to PA = 0x00000000DAF49B8F
  2  0 17  2  0  0  0  1  0  0  0  4 f8 d1 fe  0 |
  0  0  0  9 60  0  0                            |
 [mem] 0x00000000DAF49B8F
 [*] Modified entry:
  2  0 17  2  0  0  0  1  0  0  0  4 f8 d1 fe  0 |
  0  0  0  9 60  0  0                            | 
 [*] After sleep/resume, check the value of register 0xFED1F804 is 0x6009
 [+] PASSED: The script has been modified. Go to sleep..
```

</details>

The "Modified entry" at the end of the output shows the new value, `60` in place of `e0`.

## Step 7: Sleep and resume to apply the patch

Step 7 puts the laptop into S3 sleep (suspend) and wakes it, so the firmware runs the patched script. After waking, check FLOCKDN again:

```bash
sudo python chipsec_main.py -m common.spi_lock
```

<details>
<summary>Output</summary>

```text
...
[x][ =======================================================================
[x][ Module: SPI Flash Controller Configuration Locks
[x][ =======================================================================
[*] HSFS = 0x6008 << Hardware Sequencing Flash Status Register (SPIBAR + 0x4)
    [00] FDONE            = 0 << Flash Cycle Done
    [01] FCERR            = 0 << Flash Cycle Error
    [02] AEL              = 0 << Access Error Log
    [03] BERASE           = 1 << Block/Sector Erase Size
    [05] SCIP             = 0 << SPI cycle in progress
    [13] FDOPSS           = 1 << Flash Descriptor Override Pin-Strap Status
    [14] FDV              = 1 << Flash Descriptor Valid
    [15] FLOCKDN          = 0 << Flash Configuration Lock-Down
[-] SPI Flash Controller configuration is not locked
[-] FAILED: SPI Flash Controller not locked correctly.
```

</details>

`[15] FLOCKDN = 0` means the flash configuration is unlocked. CHIPSEC reports this as FAILED because, from a security point of view, an unlocked controller is a failure; here it is the result you want.

## Step 8: Remove write protection from the protected ranges

Step 8 writes each protected range back with its WP bit (bit 31) cleared. The values below are this machine's ranges from Step 3 with the top bit removed (`0x8AAF0800` becomes `0x0AAF0800`); use the values your own Step 3 output printed.

```bash
sudo python chipsec_util.py mmio write SPIBAR 0x74 0x4 0x0AAF0800
sudo python chipsec_util.py mmio write SPIBAR 0x78 0x4 0x0ADE0AD0
sudo python chipsec_util.py mmio write SPIBAR 0x7C 0x4 0x0B100B10
sudo python chipsec_util.py mmio write SPIBAR 0x80 0x4 0x0BFF0B40
```

## Step 9: Verify the BIOS region is writable

Step 9 reads BIOS_CNTL and the protected ranges again:

```bash
sudo python chipsec_main.py -m common.bios_wp
```

<details>
<summary>Output</summary>

```text
[x][ =======================================================================
[x][ Module: BIOS Region Write Protection
[x][ =======================================================================
[*] BC = 0x 9 << BIOS Control (b:d.f 00:31.0 + 0xDC)
    [00] BIOSWE           = 1 << BIOS Write Enable
    [01] BLE              = 0 << BIOS Lock Enable
    [02] SRC              = 2 << SPI Read Configuration
    [04] TSS              = 0 << Top Swap Status
    [05] SMM_BWP          = 0 << SMM BIOS Write Protection
[-] BIOS region write protection is disabled!

[*] BIOS Region: Base = 0x00500000, Limit = 0x00BFFFFF
SPI Protected Ranges
------------------------------------------------------------
PRx (offset) | Value    | Base     | Limit    | WP? | RP?
------------------------------------------------------------
PR0 (74)     | 0AAF0800 | 00800000 | 00AAF000 | 0   | 0
PR1 (78)     | 0ADE0AD0 | 00AD0000 | 00ADE000 | 0   | 0
PR2 (7C)     | 0B100B10 | 00B10000 | 00B10000 | 0   | 0
PR3 (80)     | 0BFF0B40 | 00B40000 | 00BFF000 | 0   | 0
PR4 (84)     | 00000000 | 00000000 | 00000000 | 0   | 0
```

</details>

If every `WP?` value is 0, the BIOS region is writable and you can go on to [flash coreboot internally](/docs/coreboot/internal/flashing-bios/). The unlock lasts until the next reboot, which sets FLOCKDN again.

:::danger Write only the BIOS region
The flash descriptor and ME regions are still locked. Flash with `--ifd -i bios` so flashrom writes the BIOS region alone; a full-chip write fails partway through and can leave the laptop unable to boot.
:::
