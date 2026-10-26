---
sidebar_position: 0
sidebar_label: "Overview"
title: "Prepare a Raspberry Pi Pico for Libreboot Flashing"
description: "Set up a Raspberry Pi Pico H as an SPI programmer for flashing Libreboot: build the serprog firmware and wire the Pico to your laptop's BIOS chip."
keywords: ["libreboot", "raspberry pi pico", "serprog", "spi programmer", "flashing", "self custody"]
tags: ["libreboot", "raspberry", "pico", "serprog"]
slug: /libreboot/raspberry-pico
---

# Prepare your Raspberry Pi Pico

To flash Libreboot externally you need an SPI programmer, and a Raspberry Pi Pico H running the open-source serprog firmware is the cheapest reliable one: about $5, and the programmer Libreboot itself recommends. Getting it ready takes two steps: build serprog and copy it onto the Pico, then wire the Pico to a SOIC-8 clip for your laptop's flash chip.

## What are the steps?

1. [Build serprog](/docs/libreboot/raspberry-pico/build-serprog/): compile serprog and copy it onto the Pico
2. [Connect the Pico](/docs/libreboot/raspberry-pico/connection/): wire the Pico to the clip, pin for pin
