---
sidebar_position: 2
title: "Arduino IDE Setup for NSD"
description: "Install and configure Arduino IDE to flash your Nostr Signing Device. Download the legacy version and set up ESP32 board support."
keywords: ["arduino IDE", "ESP32 setup", "NSD flash", "LILYGO arduino", "board manager"]
tags: ["arduino", "setup", "ESP32", "firmware"]
---
# Arduino setup

The signing device's firmware is built and uploaded with the Arduino IDE. This guide uses the legacy Arduino IDE 1.8.19 on Linux: download it, extract it, run its install script, and add it to your panel.

## Step 1: Download the Arduino IDE

Step 1 gets the installer. From the [Arduino website](https://www.arduino.cc/en/software/), download the [legacy Arduino IDE 1.8.19](https://downloads.arduino.cc/arduino-1.8.19-linux64.tar.xz).

## Step 2: Extract and install it

Step 2 unpacks and installs it. In a terminal:

```bash
tar -xvf arduino-1.8.19-linux64.tar.xz
cd arduino-1.8.19
sudo sh install.sh
```

The script ends with:

```bash
Adding desktop shortcut, menu item and file associations for Arduino IDE...
.
.
done!
```

## Step 3: Add it to your panel

Step 3 makes it easy to open. On Linux Mint, open the menu, type `Arduino`, right-click the Arduino icon and choose `Add to Panel`.
