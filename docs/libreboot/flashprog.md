---
sidebar_position: 5
title: Build Flashprog
slug: /libreboot/build-flashprog/
tags: [libreboot, flashprog, bios]
---

# Build Flashprog

To build and install Flashprog, follow these steps

Into `~/lbmk` directory, execute the following command to update trees by installing Flashprog directory:

```bash
./update trees -b flashprog

```
Navigate into the directory and install Flashprog

```bash
cd src/flashprog
sudo make install
```

Once installation is completed, Flashprog will be accessible system-wide by typing flashprog on your terminal

To verify if your Raspberry Pi Pico is ready for use, execute the following command:

```bash
sudo flashprog -p serprog:dev=/dev/ttyACM0,spispeed=16M
```

If the output consists of several lines beginning with `serprog: ...` and concludes with

```text
No EEPROM/flash device found
Note: flashrom can never write if the flash chip isn't found automatically
```

It indicates that the Raspberry Pi Pico is in proper working condition and ready to be utilized.