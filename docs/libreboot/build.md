---
sidebar_position: 3
title: "Build Libreboot"
description: "Build a Libreboot ROM from source on Linux: install dependencies, clone the lbmk repository, and run a multi-threaded compile."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "build"]
tags: ["libreboot", "repository", "lbmk", "build"]
date: "2025-03-29"
---
# Build Libreboot

Libreboot is built with its own build system, lbmk, on a Linux computer: install git, set a git identity (lbmk refuses to run without one), clone lbmk from Codeberg, and let it install the rest of its dependencies for your distribution. This page prepares the build system; [build ROMs](/docs/libreboot/roms/) builds the image for your laptop. Commands are for Libreboot 26.10 (October 2026).

## Step 1: Install git and set a git identity

Step 1 installs git and gives it a name and email. lbmk uses git to download and patch coreboot, and git refuses to commit patches without a name and email. Any values work; they never leave your machine.

```bash
sudo apt install git python-is-python3
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Step 2: Clone lbmk

Step 2 downloads lbmk, the Libreboot build system, from Libreboot's Codeberg repository and moves into its directory:

```bash
git clone https://codeberg.org/libreboot/lbmk.git
cd lbmk
```

## Step 3: Install the build dependencies

Step 3 has lbmk install the packages your distribution needs, from the package list it keeps for that distribution in `config/dependencies/`. On Debian:

```bash
sudo ./mk dependencies debian
```

On any other distribution, replace `debian` with the name of its list. As of Libreboot 26.10rev16 (4 November 2026), lbmk has these:

| Distribution | Name |
|---|---|
| Debian | `debian` |
| Ubuntu 24.04 | `ubuntu2404` |
| Other Ubuntu releases | `ubuntu` |
| Linux Mint | `mint` |
| Fedora 38, 40, 41, 42 or 43 | `fedora` and the version, such as `fedora43` |
| Arch Linux | `arch` |
| Gentoo | `gentoo` |
| Void Linux | `void` |

`ls config/dependencies` shows the lists in your copy of lbmk, so check there if yours is not in the table.

## Step 4: Use every CPU core

Step 4 makes the build use every CPU core: lbmk builds on one thread by default, and setting `XBMK_THREADS` to the number of cores your computer has makes the build several times faster:

```bash
export XBMK_THREADS=$(nproc)
```

`nproc` prints the number of available cores, so this uses all of them. The setting lasts until you close the terminal.

When you build a ROM from source, lbmk downloads the vendor files your laptop needs (such as the Intel ME image, which it then cuts down with me_cleaner) and inserts them during the build. Pre-built release images from libreboot.org ship without them, which is why those need an extra `./mk inject` step that building from source does not.
