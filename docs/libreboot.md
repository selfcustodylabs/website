# Libreboot Installation Guide

> Install Libreboot on a ThinkPad with a Raspberry Pi Pico: open-source coreboot firmware that strips and disables Intel's ME on your Bitcoin computer.

Source: https://selfcustodylabs.com/docs/libreboot/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Libreboot is free, open-source boot firmware for computers, built on coreboot, that replaces the laptop's proprietary BIOS or UEFI. This guide installs it on a Lenovo ThinkPad (the X230, T420, T430, T440p, T480s, T530 or W530) using a Raspberry Pi Pico as an external programmer: build Libreboot and the Pico's firmware from source, clip the Pico onto the laptop's flash chip, back up the original firmware, and write the new image. It takes three to five hours and about $15 to $30 of parts, and gives a [Bitcoin computer](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/) or [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/) firmware whose source you can read.

![A ThinkPad T480s booting Libreboot: the purple GRUB menu with the leaping-deer logo on screen](https://selfcustodylabs.com/img/libreboot/t480s.webp)

Time: 3-5 hours. Cost: $15-30 (Raspberry Pi Pico + SOIC8 clip + jumper wires). Level: Advanced. Reviewed: 26 Oct 2026. Updated: 26 Oct 2026. You need: A supported ThinkPad, a Raspberry Pi Pico H, a Pomona SOIC-8 clip, jumper wires.

## What does Libreboot change, and what doesn't it?

Libreboot replaces the vendor firmware that starts the computer with open-source code, and it reduces, but does not eliminate, Intel's proprietary code. Since 2022 it follows what it calls a binary blob reduction policy: a board gets the vendor code it cannot boot without, and nothing more.

| | Lenovo firmware | Libreboot |
|---|---|---|
| Firmware source | Closed | Open (coreboot, plus Libreboot's build system) |
| Intel Management Engine (ME) | Fully enabled | Cut down with me_cleaner and disabled; it cannot be removed entirely on these machines |
| Intel Boot Guard (T480s) | Enforced: only Lenovo-signed firmware runs | Disabled with deguard |
| Other vendor code | Built in | Only what the board needs to boot, such as CPU microcode and memory set-up code on some models |
| Boot menu | Lenovo's | EDK2 (UEFI), with SeaBIOS and GRUB available |

The **Intel Management Engine** is a separate processor inside Intel chipsets, running its own closed firmware with access to memory and the network, that operates independently of the operating system. On every ThinkPad in this guide the CPU will not run without part of its firmware, so Libreboot cannot remove it. It uses me_cleaner to strip the ME firmware to the minimum needed to start the machine and to switch it off after that. The ME is removed completely only on older boards such as the ThinkPad X200 and T400. None of the laptops here use AMD processors, so AMD's equivalent (the PSP) does not arise.

What this buys a Bitcoin computer is firmware you can audit and rebuild yourself, a much smaller body of closed code running before your operating system, and no vendor update channel that could change it underneath you. It does not make the hardware free of all closed code, and Libreboot's own documentation says so.

## Which laptops does this guide cover?

As of Libreboot 26.10 (October 2026):

| Laptop | Libreboot target | Flash chips | Notes |
|---|---|---|---|
| ThinkPad X230 | `lenovo_thinkpad_x230_12mb` | Two (4 MB and 8 MB) | Chips are under the palm rest |
| ThinkPad T420 | `lenovo_thinkpad_t420_8mb` | One (8 MB) | Full disassembly needed |
| ThinkPad T430 | `lenovo_thinkpad_t430_12mb` | Two (4 MB and 8 MB) | Full disassembly needed |
| ThinkPad T440p | `lenovo_thinkpad_t440p_12mb` | Two (4 MB and 8 MB) | Chips reachable from the back |
| ThinkPad T480s | `lenovo_thinkpad_t480s_16mb` | One (16 MB), plus a separate Thunderbolt chip | Update Lenovo's firmware first; see [requirements](https://selfcustodylabs.com/docs/libreboot/requirements/) |
| ThinkPad T530 | `lenovo_thinkpad_t530_12mb` | Two (4 MB and 8 MB) | Needs the chip-select workaround in [connection](https://selfcustodylabs.com/docs/libreboot/raspberry-pico/connection/) |
| ThinkPad W530 | `lenovo_thinkpad_w530_12mb` | Two (4 MB and 8 MB) | As the T530 |

The T480s is the most capable: NVMe storage and up to 24 GB of memory. The T480, T580, X280 and X220 are also supported by Libreboot, with similar steps; check [libreboot.org](https://libreboot.org/docs/install/) for their specifics.

## What changed in Libreboot 26.10?

Libreboot 26.10 "Ominous Olive", released on 15 October 2026, made EDK2, an open-source UEFI implementation, the default payload on most boards, with SeaBIOS and GRUB still available. Board targets now carry the vendor's name (`lenovo_thinkpad_t480s_16mb` rather than `t480s_16mb`), and image names start with `uefi_` or `bios_`. The build and ROM pages of this guide use the 26.10 names. If you are updating a machine flashed with an older release, see [update Libreboot](https://selfcustodylabs.com/docs/libreboot/update-bios/).

## What are the steps?

| Step | Page | What you do |
|---|---|---|
| 1 | [Requirements](https://selfcustodylabs.com/docs/libreboot/requirements/) | Get the laptop, a Raspberry Pi Pico H, a SOIC-8 clip and cables |
| 2 | [Build Libreboot](https://selfcustodylabs.com/docs/libreboot/build/) | Install dependencies and get the build system |
| 3 | [Build ROMs](https://selfcustodylabs.com/docs/libreboot/roms/) | Build the firmware image for your laptop |
| 4 | [Build flashprog](https://selfcustodylabs.com/docs/libreboot/build-flashprog/) | Build the program that reads and writes the chip |
| 5 | [Build serprog](https://selfcustodylabs.com/docs/libreboot/raspberry-pico/build-serprog/) | Turn the Pico into an SPI programmer |
| 6 | [Connect the Pico](https://selfcustodylabs.com/docs/libreboot/raspberry-pico/connection/) | Wire the Pico to the clip and the clip to the chip |
| 7 | [Flash the BIOS](https://selfcustodylabs.com/docs/libreboot/flashing-bios/) | Back up the original firmware, then write Libreboot |

Help is available in the #libreboot channel on Libera IRC. If your laptop is not supported by Libreboot, the [coreboot guide](https://selfcustodylabs.com/docs/coreboot/) covers a route that supports more devices, at the cost of more vendor code.
