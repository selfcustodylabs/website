---
sidebar_position: 3
title: "ESP32 Board Support Setup"
description: "Add ESP32 board support to Arduino IDE so you can compile and flash firmware for the LILYGO T-Display module used by the Nostr Signing Device."
keywords: ["ESP32", "arduino board manager", "LILYGO T-Display", "ESP32 URL", "board support"]
tags: ["ESP32", "arduino", "setup", "LILYGO"]
date: "2025-03-29"
---
# Setting up ESP32 board support

The T-Display is an ESP32 board, so the Arduino IDE needs Espressif's ESP32 board package before it can build for it: add the package's address in the preferences, install the package from the board manager, and select the board. The steps follow [Espressif's installation guide](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#before-installing).

## Step 1: Add the ESP32 board address

Step 1 tells the IDE where to find the package. Open the Arduino IDE, go to `File`, `Preferences`, and in the `Additional Boards Manager URLs` field add:

```bash
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

## Step 2: Install the ESP32 platform

Step 2 downloads it. Open `Tools`, `Board`, `Board Manager`, search for `esp32`, and install the result named esp32 by Espressif Systems. It takes a while.

## Step 3: Select the board

Step 3 chooses the target. Go to `Tools`, `Board`, `ESP32 Arduino` and select TTGO LoRa32-OLED, then restart the Arduino IDE.
