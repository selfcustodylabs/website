---
sidebar_position: 3
title: Build Coreboot
slug: /coreboot/build/
tags: [coreboot, build, bios]
---

# Build Coreboot

Now we will walk through building Coreboot from scratch. We will first install the required tools, then download Coreboot’s source code, build its toolchain, configure it for your mainboard, and finally compile it into a ROM file you can flash.


## Step 1: Install tools and libraries needed for coreboot

Coreboot needs several development tools and libraries to compile successfully.
The packages you need depend on your Linux distribution. Run the command that matches your system:

Debian-based distros (e.g., Ubuntu, Linux Mint):

```bash
sudo apt install -y python-is-python3 bison build-essential curl flex git gnat libncurses-dev libssl-dev zlib1g-dev pkgconf
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


## Step 4: Configure the Build for your Motherboard

We will now configure Coreboot for the Lenovo ThinkPad T430s.
The configuration menu lets you choose the correct mainboard, ROM chip size, and payload.

Run the configuration menu:

```bash
make menuconfig
```

In the menu, set:

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

Now select a payload. A payload is the small program Coreboot loads after initializing the hardware.

We will use **SeaBIOS** in this example:

```text
Payload  --->
    Payload to add (SeaBIOS)
    SeaBIOS version (1.16.3)
< Exit >
< Exit >
< Yes >
```

(Optional) Save your configuration to a file:

```bash
make savedefconfig
cat defconfig
```

You should see something similar to:

```text
CONFIG_VENDOR_LENOVO=y
CONFIG_BOARD_LENOVO_T430S=y
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