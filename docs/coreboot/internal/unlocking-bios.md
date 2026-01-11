---
sidebar_position: 2
title: "Unlocking BIOS"
description: "Practical guide: Unlocking BIOS. Covers Security Issues, Install CHIPSEC, Examining BIOS Protections Theory."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "unlocking", "bios"]
tags: ["coreboot", "chipsec", "bios", "unlocking"]
---
# Unlocking BIOS

Before flashing Coreboot internally, it’s important to understand the security protections built into the BIOS and how older versions can be exploited to bypass them.


## Security Issues

Older factory BIOS versions for these ThinkPad models have multiple security weaknesses, but two of them are especially relevant for installing Coreboot without using an external programmer:


### 1. SMM_BWP and BLE not enabled

In BIOS versions released before 2014, both of these protections (SMM_BWP and BLE) are disabled by default.

**Why it matters:** When disabled, the BIOS can be written from the operating system without triggering extra security checks, making internal flashing possible.
Our testing on multiple T430 and X230 BIOS versions confirmed that SMM_BWP = 1 only appears starting from the update whose changelog says:

```text
(New) Improved the UEFI BIOS security feature.
```

This change effectively blocks normal internal flashing.


### 2. S3 Boot Script vulnerability

This flaw allowed changes to the system’s resume-from-sleep instructions (S3 state). For more info visit this [link](https://support.lenovo.com/eg/ru/product_security/s3_boot_protect)

**Why it matters:** By modifying the boot script, it was possible to disable certain BIOS protections (such as the FLOCKDN bit) after waking from sleep, making the BIOS writable.
This vulnerability was later patched in newer BIOS versions.


## Install CHIPSEC

[CHIPSEC](https://chipsec.github.io/) is a framework for analyzing platform level security of hardware, devices, system firmware, low-level protection mechanisms, and the configuration of various platform components.

It contains a set of modules, including simple tests for hardware protections and correct configuration, tests for vulnerabilities in firmware and platform components, security assessment and fuzzing tools for various platform devices and interfaces, and tools acquiring critical firmware and device artifacts.

To install CHIPSEC on your system follow the below steps.

Install the dependencies:

```bash
sudo apt install build-essential python3-dev python3 python-is-python3 gcc linux-headers-$(uname -r) nasm
```

Clone the CHIPSEC repository on GitHub:

```bash
git clone https://github.com/chipsec/chipsec.git
cd chipsec
```

Build the Driver and Compression Tools

```bash
python setup.py build_ext -i
```


## Examining BIOS Protections (Theory)

On Intel platforms, there are two main mechanisms that protect the BIOS chip from being modified:

1. **BIOS_CNTL Register**

Located in the LPC Interface Bridge Registers (accessible through PCI configuration space at offset 0xDC).
It contains the following important bits:

- **SMM_BWP** (SMM BIOS Write Protect) – If set to 1, the BIOS can only be written from System Management Mode (SMM). Once enabled, it cannot be changed.
- **BLE** (BIOS Lock Enable) – If set to 1, attempting to set BIOSWE to 1 will trigger a System Management Interrupt (SMI). Once enabled, it cannot be changed.
- **BIOSWE** (BIOS Write Enable) – Controls whether the BIOS is writable. This bit is always read/write.

2. SPI Protected Range Registers (**PR0–PR4**)

These are part of the SPI Configuration Registers (addresses from SPIBAR + 0x74 to SPIBAR + 0x84).
Each register defines a protected address range and includes a WP (Write Protect) bit, which determines whether writes are blocked for that range.

3. **FLOCKDN Bit**

Found in the HSFS register (`SPIBAR + 0x04`).
If set to 1, the PR0–PR4 registers are locked and cannot be modified. Once set, it cannot be cleared until a full power cycle reset.


### Requirements for Flashing

For internal BIOS flashing to be possible, we ideally need:
- SMM_BWP = 0
- BIOSWE = 1
- BLE = 0
- FLOCKDN = 0

Or, all SPI Protected Range registers (PRx) should have `WP = 0`.


## Checking Current BIOS Lock Status

The goal here is to see whether your BIOS is locked against internal writes. We do this by inspecting certain chipset registers.

### Step 1: Check the HSFS Register

Run:

```bash
sudo python chipsec_main.py -m common.spi_lock
```

This will display the Hardware Sequencing Flash Status (HSFS) register, located at `SPIBAR + 0x04`.

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

One of the most important bits here is:

**FLOCKDN (bit 15)**: “Flash Configuration Lock-Down.”
- 1 = Locked. You cannot change the SPI Protected Range (PR0–PR4) registers until the next hardware reset.
- 0 = Unlocked. You can edit the PR registers and remove write protection.

If you see:

```text
FLOCKDN = 1
```

It means the SPI configuration is locked. We’ll need to bypass this later if we want to disable write protection.


### Step 2: Check BIOS_CNTL and Protected Ranges (PR0–PR4)

Run:

```bash
sudo python chipsec_main.py -m common.bios_wp
```

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

- **Good:** On older BIOS versions, `SMM_BWP = 0` and `BLE = 0`.
- **Bad:** PR1–PR4 have `WP = 1`, meaning large portions of the BIOS region are write-protected even though BIOS_CNTL itself looks permissive.


### Step 3: Looking at the Raw Registers (Optional)

Another way to examine SPI configuration registers is to dump the raw-mapped SPIBAR register space directly:

```bash
sudo python chipsec_util.py mmio dump SPIBAR
```

This will show:

- The base address of SPIBAR (e.g., `0xFED1F800`)
- All register values, including `0x0004E009` at offset `0x04` (HSFS)

```text
[mmio] MMIO register range [0x00000000FED1F800:0x00000000FED1F800+00000200]:
+00000000: 0BFF0500
+00000004: 0004E009
...
```

### Why This Matters

In theory, to flash the BIOS internally, you’d just clear the WP bits in `PR0–PR4.`
But if `FLOCKDN = 1` in HSFS, the chipset won’t let you change those registers until the next hardware reset (and firmware will usually lock it again at boot).

That’s why the later steps in the guide focus on modifying the S3 boot script, to stop the firmware from setting `FLOCKDN = 1` during resume, so we can remove the `WP` bits.


## Removing Protections (Practice)

Normally, the FLOCKDN bit (which locks the SPI configuration) can only be cleared by a full hardware reset.
This reset happens not only on a full reboot, but also when waking the computer from S3 sleep (suspend to RAM).

When the system wakes from S3, the chipset restores all its settings by running a set of instructions called S3 Boot Scripts.
These scripts are stored in RAM, which means we can edit them before waking, and change what the firmware does during resume.


### Step 1: Dump the S3 Boot Script

Run:

```bash
sudo python chipsec_util.py uefi s3bootscript
```

This lists many entries. Look for one that writes to the HSFS register (`SPIBAR + 0x04`).
If your `SPIBAR` address is `0xFED1F800`, that’s `0xFED1F804` for HSFS.

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

That `0x0004E009` value sets `FLOCKDN = 1`, which we don’t want.


### Step 2: Back Up Your BIOS Region (Important!)

Before making changes, back up the BIOS region so you can recover if something goes wrong.
To create a reliable backup of the BIOS chip(s), it's advisable to perform a triple dump of them

```bash
sudo flashrom -p internal -r bios_backup.rom --ifd -i bios
sudo flashrom -p internal -r bios_backup2.rom --ifd -i bios
sudo flashrom -p internal -r bios_backup3.rom --ifd -i bios
```

Next, use sha1sum to compare the dumped BIOS images

```bash
sha1sum bios_backup.bin bios_backup2.bin bios_backup3.bin
```

If the hashes match, you should see something like this:

```bash
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup2.bin
6cf9bfc90df1ed01336872cd159a00c101d0a7b0  bios_backup3.bin
```

Once you've confirmed that the hashes are the same, you can clean up any temporary dump files:

```bash
rm -fr bios_backup2.bin bios_backup3.bin
```


### Step 3: Patch the Boot Script

We’ll modify the script so it writes `0x6009` instead of `0xE009` to HSFS.
This clears bit 15 (`FLOCKDN`), leaving it unlocked after resume.

Run:

```bash
sudo python chipsec_main.py -m tools.uefi.s3script_modify -a replace_op,mmio_wr,0xFED1F804,0x6009,0x2
```

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

If successful, you’ll see at the end of the logs a “Modified entry” output with the new `0x6009` value:

### Step 4: Apply the Patch by Sleeping and Resuming

- Put your machine into S3 sleep (suspend)
- Wake it back up
- Check if `FLOCKDN` is now 0:

```bash
sudo python chipsec_main.py -m common.spi_lock
```

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

If you see:

```text
[15] FLOCKDN = 0 << Flash Configuration Lock-Down
```
...then it’s unlocked.


### Step 5: Remove Write Protection from BIOS Ranges

Now that `FLOCKDN` is cleared, we can disable write protection (WP) on all protected ranges:

```bash
sudo python chipsec_util.py mmio write SPIBAR 0x74 0x4 0x0AAF0800
sudo python chipsec_util.py mmio write SPIBAR 0x78 0x4 0x0ADE0AD0
sudo python chipsec_util.py mmio write SPIBAR 0x7C 0x4 0x0B100B10
sudo python chipsec_util.py mmio write SPIBAR 0x80 0x4 0x0BFF0B40
```

### Step 6: Verify

Check again:

```bash
sudo python chipsec_main.py -m common.bios_wp
```

<details>
<summary>Output</summary>
<p>

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

</p>
</details>

If all `WP?` values are now 0, the BIOS region is fully writable.


### Step 7: Flash Internally

You can now flash Coreboot or a modified BIOS:

```bash
sudo flashrom -p internal -w coreboot.rom --ifd -i bios -N
```

:::danger Important
Only flash the BIOS region (--ifd -i bios). The FD and ME regions are still locked.
:::