---
sidebar_position: 3
title: ESP32 Boards Support
slug: /nostr-signing-device/arduino-esp32-support
tags: [nostr, nsd, signing device, arduino, esp32]
---

# Setting Up ESP32 Board Support 

These steps are based on the [here](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#before-installing)

### Add ESP32 Board URL

- Open Arduino IDE Application
- Go to `File → Preferences`.
- In the `Additional Boards Manager` URLs field, add the following link:

```bash
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

### Install the ESP32 Platform

- Open `Tools → Board → Board Manager`.
- In the search bar, type `esp32`.
- Click on the **ESP32 platform**, then click the Install button in the bottom-right corner.
- The installation may take some time as it downloads all necessary files.

### Select the Correct Board

Once installed, go to `Tools → Board → ESP32` Arduino and select **TTGO LoRa32-OLED**.

### Restart Arduino IDE

Now your ESP32 board is ready to use