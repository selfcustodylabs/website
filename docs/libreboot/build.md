---
sidebar_position: 3
title: "Build Libreboot"
description: "Build a Libreboot ROM from source on Linux: install dependencies, clone the lbmk repository, and run a multi-threaded compile."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "build"]
tags: ["libreboot", "repository", "lbmk", "build"]
date: "2025-03-29"
---
# Build Libreboot

Libreboot is built with its own build system, lbmk, on a Linux computer: install git, set a git identity (lbmk refuses to run without one), clone lbmk from Codeberg and check out the release tag, then let lbmk install the rest of its dependencies for your distribution. The checkout matters because lbmk's default `master` branch is Libreboot's development branch, not the current release. This page prepares the build system; [build ROMs](/docs/libreboot/roms/) builds the image for your laptop. Commands are for Libreboot 26.10rev16 (4 November 2026).

## Step 1: Install git and set a git identity

Step 1 installs git and gives it a name and email. lbmk uses git to download and patch coreboot, and git refuses to commit patches without a name and email. Any values work; they never leave your machine.

```bash
sudo apt install git python-is-python3
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Step 2: Clone lbmk and check out the release {#step-2-clone-lbmk}

Step 2 downloads lbmk, the Libreboot build system, from Libreboot's Codeberg repository and checks out the tag of the 26.10rev16 release, so you build the released code rather than lbmk's development branch:

```bash
git clone https://codeberg.org/libreboot/lbmk.git
cd lbmk
git checkout 26.10rev16
git describe --tags
```

`git describe --tags` should print `26.10rev16`. Git also reports a "detached HEAD", which is normal after checking out a tag. If you cloned lbmk earlier, run `git fetch --tags` inside it first so the tag is there, then check it out the same way.

### Why check out a tag instead of building master?

lbmk's `master` branch is where Libreboot develops; each release series lives on a branch of its own, `26.10_branch` for Libreboot 26.10, into which Libreboot merges `master` when changes are ready for the release. Every 26.10 revision from 26.10rev4 onwards was tagged on that branch only. As of 8 November 2026 a fresh clone of `master` describes itself as `26.10rev3-158-gb2b6e2ec`, 158 commits past 26.10rev3, the last release tagged on it, and it is not 26.10rev16 either: for example, it no longer builds the 32-bit memtest86+ that the 26.10 releases include. The tag is exactly the released code, and its archives are named `libreboot-26.10rev16_...`, as the rest of this guide expects.

## Step 3: Install the build dependencies

Step 3 has lbmk install the packages your distribution needs, from the package list it keeps for that distribution in `config/dependencies/`. On Debian:

```bash
sudo ./mk dependencies debian
```

On any other distribution, replace `debian` with the name of its list. As of Libreboot 26.10rev16 (4 November 2026), lbmk has these:

| Distribution | Name |
|---|---|
| Debian | `debian` |
| Ubuntu, any release | `ubuntu` |
| Linux Mint | `mint` |
| Fedora 38, 40, 41, 42 or 43 | `fedora` and the version, such as `fedora43` |
| Arch Linux | `arch` |
| Gentoo | `gentoo` |
| Void Linux | `void` |

`ls config/dependencies` shows the lists in your copy of lbmk, so check there if yours is not in the table. It also shows a `ubuntu2404` list; use `ubuntu` instead, on 24.04 too. As of 26.10rev16 the `ubuntu2404` list leaves out three libraries flashprog needs (`libftdi1-dev`, `libgpiod-dev` and `libjaylink-dev`), and [building flashprog](/docs/libreboot/build-flashprog/) then stops with `The following features require libftdi1`. The `ubuntu` and `mint` lists are links to the `debian` list, which has them.

The lists leave out one thing the 26.10 releases need: the 32-bit C library headers. Since 26.10rev4, building any ThinkPad's images also compiles a 32-bit copy of memtest86+ (used on 32-bit boards such as the X60), and on a 64-bit computer that needs those headers, which no list installs as of 26.10rev16. Without them the build stops with `fatal error: limits.h: No such file or directory`. On Debian, Ubuntu and Linux Mint they come with `gcc-multilib`:

```bash
sudo apt install gcc-multilib
```

apt then asks to remove the ARM and MIPS cross compilers from lbmk's list, `gcc-arm-linux-gnueabi` and `g++-mipsel-linux-gnu` with the packages they came with, because they conflict with `gcc-multilib`. A ThinkPad build uses neither, so answer yes. Running `./mk dependencies` again later swaps them back and removes `gcc-multilib`, so install `gcc-multilib` again after any rerun.

On Arch Linux, [Libreboot's 26.10 release notes](https://libreboot.org/news/libreboot2610.html) name `lib32-glibc`, from the multilib repository.

## Step 4: Use every CPU core

Step 4 makes the build use every CPU core: lbmk builds on one thread by default, and setting `XBMK_THREADS` to the number of cores your computer has makes the build several times faster:

```bash
export XBMK_THREADS=$(nproc)
```

`nproc` prints the number of available cores, so this uses all of them. The setting lasts until you close the terminal.

When you build a ROM from source, lbmk downloads the vendor files your laptop needs (such as the Intel ME image, which it then cuts down with me_cleaner) and inserts them during the build. Pre-built release images from libreboot.org ship without them, which is why those need an extra `./mk inject` step that building from source does not.
