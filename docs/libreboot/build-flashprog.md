---
sidebar_position: 5
title: "Build Flashprog for Libreboot"
description: "Compile Flashprog from the Libreboot build system. Required tool for reading and writing BIOS chips during Libreboot installation."
keywords: ["flashprog", "libreboot", "BIOS flash", "lbmk", "compile"]
tags: ["libreboot", "flashprog", "build"]
---
# Build flashprog

flashprog is the program that reads and writes the flash chip through the Raspberry Pi Pico. It is a fork of flashrom, and lbmk builds the version Libreboot tests against. Build it from the `lbmk` directory:

```bash
./mk -b flashprog
```

lbmk downloads the flashprog source into `src/flashprog/default` and compiles it there (older lbmk versions used `src/flashprog`; `ls src/flashprog` shows which you have). Install it from that directory so that the plain `flashprog` used in the rest of this guide works:

```bash
cd src/flashprog/default
sudo make install
cd ../../..
```

Once the Pico has the serprog firmware on it ([build serprog](/docs/libreboot/raspberry-pico/build-serprog/)), check the two talk to each other, with the Pico plugged in but not yet clipped to anything:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M
```

Several lines starting `serprog:` followed by this means the Pico is working:

```text
No EEPROM/flash device found.
Note: flashprog can never write if the flash chip isn't found automatically.
```

"No flash device found" is expected here, because the clip is not on a chip yet. An error about `/dev/ttyACM0` instead means the Pico is on a different port; `sudo dmesg` shows which.
