# Build Libreboot

> Build a Libreboot ROM from source on Linux: install dependencies, clone the lbmk repository, and run a multi-threaded compile.

Source: https://selfcustodylabs.com/docs/libreboot/build/
Last updated: 2026-07-14
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Building Libreboot and the rom for your ThinkPad

## Install Dependencies

Before installing Libreboot, let's gather the necessary dependencies.

```bash
sudo apt install git python-is-python3
```

You will need to set user.name and user.email before proceeding further; otherwise, you won't be able to proceed. If you prefer, you can simply fill them with random values.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Enable Multi-threaded Build Mode

Libreboot’s build system uses a single thread by default, but you can change this to use multiple threads. For example, you can run:

```bash
export XBMK_THREADS=$(nproc)
```

This command will make Libreboot's build system use 4 threads, speeding up the build process.

## Build Libreboot

Clone the Libreboot repository

```bash
git clone https://codeberg.org/libreboot/lbmk.git
```

Navigate to the libreboot directory

```bash
cd lbmk
```

Download the necessary dependencies. Depending on your distribution, choose the appropriate command:

```bash
sudo ./mk dependencies arch
sudo ./mk dependencies ubuntu
sudo ./mk dependencies debian
sudo ./mk dependencies fedora
```
