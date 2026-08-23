# Prepare a Raspberry Pi Pico for Libreboot Flashing

> Set up a Raspberry Pi Pico H as an SPI programmer for flashing Libreboot: build the serprog firmware and wire the Pico to your laptop's BIOS chip.

Source: https://selfcustodylabs.com/docs/libreboot/raspberry-pico/
Last updated: 2026-08-02
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

To flash Libreboot externally you need an SPI programmer. A Raspberry Pi Pico H, loaded with the open-source `serprog` firmware, is one of the cheapest and most reliable options.

This section walks through getting the Pico ready: building and flashing the serprog firmware, then connecting it to the SOIC8 BIOS chip on your laptop.

## In this section

- **[Build Serprog](https://selfcustodylabs.com/docs/libreboot/raspberry-pico/build-serprog)**: compile and flash serprog onto the Pico
- **[Wire the Connection](https://selfcustodylabs.com/docs/libreboot/raspberry-pico/connection)**: connect the Pico to your laptop's BIOS chip with a SOIC8 clip
