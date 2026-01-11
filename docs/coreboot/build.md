---
sidebar_position: 3
title: "Build Coreboot"
description: "Practical guide: Build Coreboot. Covers Step 1: Install tools and libraries needed for coreboot, Step 2: Download Coreboot Source Tree, Step 3: Build the."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "build"]
tags: ["coreboot", "build", "bios"]
---
# Build Coreboot

Now we will walk through building Coreboot from scratch. We will first install the required tools, then download Coreboot’s source code, build its toolchain, configure it for your mainboard, and finally compile it into a ROM file you can flash.


## Step 1: Install tools and libraries needed for coreboot

Coreboot needs several development tools and libraries to compile successfully.
The packages you need depend on your Linux distribution. Run the command that matches your system:

Debian-based distros (e.g., Ubuntu, Linux Mint):

```bash
sudo apt install -y python-is-python3 bison build-essential curl flex git gnat libncurses-dev libssl-dev libcmocka-dev zlib1g-dev pkgconf libpci-dev flashrom coreboot-utils
```

Arch-based distros (e.g., Manjaro, EndeavourOS):

```bash
sudo pacman -S base-devel curl git gcc-ada ncurses zlib
```

Red Hat-based distros (e.g., Fedora, CentOS, RHEL):

```bash
sudo dnf install git make gcc-gnat flex bison xz bzip2 gcc g++ ncurses-devel wget zlib-devel patch
```

If any package is missing, Coreboot may fail to build, so make sure the installation finishes without errors.


## Step 2: Download Coreboot Source Tree

We will now download Coreboot’s source code from the official repository and move into its directory:

```bash
git clone https://review.coreboot.org/coreboot
cd coreboot
```

This will give you the latest development version of Coreboot.
If you want to build a specific version, you can check out the corresponding branch or tag after cloning.


## Step 3: Build the Coreboot Toolchain

Coreboot uses its own toolchain to ensure that builds are reproducible and work on all supported boards.
You must build this toolchain before compiling Coreboot itself.

First, see which toolchains are available:

```bash
make help_toolchain
```

<details>
<summary>Output</summary>
<p>

```text
*** Toolchain targets ***
  crossgcc        - Build coreboot cross-compilers for all platforms
  crossgcc-clean  - Remove all built coreboot cross-compilers
  iasl            - Build coreboot IASL compiler (built by all cross targets)
  clang           - Build coreboot clang compiler
  nasm            - Build coreboot nasm
  test-toolchain  - Reports if toolchain components are out of date
  crossgcc-ARCH   - Build cross-compiler for specific architecture
  ARCH can be "i386", "x64", "arm", "aarch64", "riscv", "ppc64", "nds32le"
  Use "make [target] CPUS=#" to build toolchain using multiple cores
  Use "make [target] DEST=some/path" to install toolchain there
  Use "make [target] BUILDGCC_OPTIONS="-m" to get packages from coreboot mirror"
```

</p>
</details>

Choose the one that matches your target architecture.
For most x86 systems, including laptops like the ThinkPad T430s, use the i386 toolchain.

Examples:

```bash
make crossgcc-i386 CPUS=$(nproc)       # build i386 toolchain
make crossgcc-aarch64 CPUS=$(nproc)    # build Aarch64 toolchain
make crossgcc-riscv CPUS=$(nproc)      # build RISC-V toolchain
```

**Important notes:**

- The `i386` toolchain works for all x86 and x86_64 boards.
- You can try building with your system’s compiler, but this often causes build errors. The Coreboot toolchain is strongly recommended.


## Step 4: Configure the Build

In this step, we configure Coreboot for your specific computer, in this example, the Lenovo ThinkPad T430s. Coreboot is highly modular, and the configuration determines how it initializes your hardware and what additional software (“payloads”) it will run after startup.

Run the interactive configuration menu:

```bash
make menuconfig
```

This menu lets you select various options such as the motherboard, ROM chip size, and payload.

### Motherboard

Navigate in the menu:

```text
Mainboard  --->  
    Mainboard vendor (Lenovo)
    Mainboard model (ThinkPad T430s)
    ROM chip size (16384 KB (16 MB))
< Exit >
```

:::note
Make sure the ROM chip size matches your actual hardware. Using the wrong size may result in a non-working firmware.
:::

### Payload

A payload in Coreboot is a small program that Coreboot loads after it finishes initializing the hardware. Common payloads include:
- **SeaBIOS**: provides a legacy BIOS environment to boot traditional operating systems.
- **GRUB2**: a modern bootloader capable of booting Linux, Windows, and other systems, with more features than SeaBIOS.

Next, select your preferred payload.

#### SeaBIOS

SeaBIOS provides a traditional BIOS interface, making it a simple choice for booting legacy operating systems or when you want a classic BIOS like experience.

```text
Payload  --->
    Payload to add (SeaBIOS)
    SeaBIOS version (1.16.3)
< Exit >
< Exit >
< Yes >
```

#### GRUB2

GRUB2 is a modern, flexible bootloader that can boot Linux, Windows, and other systems. It is more powerful than SeaBIOS but requires some extra configuration.

Install the required dependencies for building the GRUB2 payload:
```bash
sudo apt install automake autoconf autopoint libfreetype6-dev unifont fonts-unifont unifont-bin gawk
```

In the configuration menu:

```text
Payload  --->
     Payload to add (GRUB2)
     GRUB version (2.12)
     Extra modules to include in GRUB image (NEW)
  [*]Include GRUB2 runtime config file into ROM image (NEW)
< Exit >
< Exit >
< Yes >
```
Add GRUB2 Extra Modules.

Modules extend GRUB’s capabilities, for example supporting USB, LVM, encryption, or different filesystems. For a typical laptop, include:

```text
cryptodisk nativedisk ehci ohci usb usbms usbserial_pl2303 usbserial_ftdi usbserial_usbdebug jpeg all_video hashsum regexp linux part_msdos part_gpt lvm luks gcry_md5 gcry_sha1 gcry_sha256 gcry_sha512 gcry_rsa gcry_rijndael gcry_des search search_fs_file search_fs_uuid configfile probe
```

These modules ensure that GRUB can boot from internal disks, USB sticks, handle encrypted drives, and support multiple filesystems.

Create a basic `grub.cfg` to define the boot behavior and include it in the “Include GRUB2 runtime config file into ROM image” option.

<details>
<summary>grub.cfg</summary>
<p>

```text
# Coreboot GRUB2: auto-boot with ESC menu and user instructions

set timeout=2
set timeout_style=hidden
set default=0

# Show instructions
echo "Press ESC to access the boot menu."
echo "Otherwise, the system will boot from the hard drive automatically."

### Primary entry: Boot internal disk ###
menuentry "Boot first disk" {
    echo "Booting from the hard drive..."
    search --no-floppy --set=root --file /grub/grub.cfg
    configfile /grub/grub.cfg
}

### Secondary entry: Boot from USB via ESC ###
menuentry "Boot USB" {
    search --no-floppy --removable --file /boot/grub/grub.cfg --set=root
    configfile /grub/grub.cfg
}
```

</p>
</details>

#### (Optional) Save your configuration to a file:

```bash
make savedefconfig
cat defconfig
```

For SeaBIOS, your configuration might include:

```text
CONFIG_VENDOR_LENOVO=y
CONFIG_BOARD_LENOVO_T430S=y
```

For GRUB2, it might look like:

```text
CONFIG_VENDOR_LENOVO=y
CONFIG_BOARD_LENOVO_T430S=y
CONFIG_PAYLOAD_GRUB2=y
CONFIG_GRUB2_EXTRA_MODULES="cryptodisk nativedisk ehci ohci usb usbms usbserial_pl2303 usbserial_ftdi usbserial_usbdebug jpeg all_video hashsum regexp linux part_msdos part_gpt lvm luks gcry_md5 gcry_sha1 gcry_sha256 gcry_sha512 gcry_rsa gcry_rijndael gcry_des search search_fs_file search_fs_uuid configfile probe"
CONFIG_GRUB2_INCLUDE_RUNTIME_CONFIG_FILE=y
```

:::note
This may vary depending on your Coreboot source version. Do not worry if there are more or fewer lines.
:::


## Step 5: Build Coreboot

With everything set up, you can now build Coreboot:

```bash
make
```

If the build completes successfully, you will see a message like:

```text
Built lenovo/t430s (ThinkPad T430s)
```

The compiled ROM file will be located at `build/coreboot.rom`.

If you want to start fresh and remove all compiled files, run:

```bash
make distclean
```

This will reset the build environment so you can reconfigure and rebuild from scratch.

You now have a Coreboot ROM ready to flash to your device!