# Coreboot Hardware Requirements

> What you need to install Coreboot on a ThinkPad: a supported model, a Linux machine and, for external flashing, a Raspberry Pi Pico plus a clip or pogo pins.

Source: https://selfcustodylabs.com/docs/coreboot/requirements/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

To install coreboot you need a supported laptop, a Linux system to run the tools, the coreboot source and flashrom, the program that reads and writes flash chips. Flashing internally also needs CHIPSEC and, possibly, a USB stick to downgrade the BIOS; flashing externally needs an SPI programmer such as a Raspberry Pi Pico, with a Pomona clip or a pogo-pin adapter depending on the chip.

## What do you need to flash internally?

Internal flashing works on these Ivy Bridge ThinkPads:

<div class="fixed-width-table">

|Model|
|-|
|X230|
|X230T|
|T430|
|T430s|
|T530|
|W530|

</div>

You also need CHIPSEC, a security tool that checks whether the BIOS can be flashed internally, and possibly a USB stick, to boot Lenovo's BIOS updater if you need to [downgrade](https://selfcustodylabs.com/docs/coreboot/internal/downgrading-bios/).

## What do you need to flash externally?

An SPI programmer, such as a Raspberry Pi Pico, wired with jumper cables to a Pomona clip for chips in an 8-pin SOIC package, or to a pogo-pin adapter for WSON chips, which a clip cannot grip.

<div className="photo-pair">

![A Raspberry Pi Pico wired with six coloured Dupont cables to a blue Pomona SOIC-8 test clip, the setup for chips in an 8-pin SOIC package](https://selfcustodylabs.com/img/libreboot/connection.webp)

![The same Raspberry Pi Pico wired instead to a pogo-pin adapter, used for WSON chips that a clip cannot grip](https://selfcustodylabs.com/img/coreboot/connection.webp)

</div>
