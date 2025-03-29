---
sidebar_position: 2
title: Pico-Pomona Clip Connection
slug: /libreboot/pico-pomona-connection/
tags: [libreboot, raspberry, pico]
---

# Pico-Pomona Clip Connection

This is the BIOS Chip with 8 pins (SOIC8 type) that you will find on your ThinkPad model.

Please note that in these specific models you will likely find two BIOS chips positioned adjacent to each other, both of which will need to be flashed. However, there's no need to worry as the procedure is relatively straightforward and will be explained in detail later in the guide.

**IMPORTANT:** Take note of pin 1 (indicated by a visible dot) and proceed to calculate subsequent pins anticlockwise.

![](/img/libreboot/soic8.jpg)

Here are the functions of each pin. You don't necessarily need to understand the purpose of each individual pin. Instead, you simply need to match the corresponding pin on your BIOS chip with the appropriate pin on your Raspberry Pico and connect them using Dupont cables.

<b>
- 1 CS
- 2 MISO
- <s>3 WP (this is NOT going to be used)</s>
- 4 GND
- 5 MOSI
- 6 CLK (this is actually SCK on your Raspberry Pico)
- <s>7 HOLD (this is NOT going to be used)</s>
- 8 VCC - 3V3 (this is actually 3V3 on your Raspberry Pico)
</b>

The below diagram shows the corresponding pins on the Pico board where the Dupont cables should be connected

![](/img/libreboot/serprog_pins.png)

Now clip your Pomona clip onto the BIOS chip and begin wiring the Dupont cables from pin 1.

This is the final result

![](/img/libreboot/connection.jpg)