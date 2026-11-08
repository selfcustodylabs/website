---
sidebar_position: 2
title: "Build Your Own SeedSigner"
description: "Source the Raspberry Pi parts, verify and flash SeedSigner OS, and assemble an air-gapped Bitcoin signing device for about $50 in parts."
keywords: ["seedsigner build", "raspberry pi zero", "seedsigner os", "flash seedsigner", "verify gpg signature", "diy bitcoin wallet"]
tags: ["seedsigner", "diy", "hardware wallet", "guide"]
date: "2026-08-21"
---

# Build your own SeedSigner

Building a SeedSigner takes about $50 of parts (a Raspberry Pi Zero v1.3, a WaveShare 1.3-inch LCD HAT, a Pi Zero camera and a microSD card) and an hour or two: buy the parts, download SeedSigner OS and verify its signature, flash it to the card, assemble the device, and run a few checks before trusting it with funds. None of the steps is hard, but several reward care.

Building it yourself is the point, not a way to save money: generic parts mean there is no bitcoin-specific supply chain to intercept, and flashing software you verified yourself means there is no vendor to take on trust. If you buy a pre-assembled unit instead (such as a SeedSigner+ kit), you bring a supply chain back, so buy only from a reputable builder, and still flash and verify the OS image yourself.

## Step 1: Buy the parts

Step 1 buys the parts, about $40 to $70 in total at the prices below:

<div class="fixed-width-table">

| Part | Notes | Approx. price |
|------|-------|---------------|
| Raspberry Pi Zero v1.3 | The recommended board: it has **no WiFi or Bluetooth hardware at all** | $10-15 |
| WaveShare 1.3" LCD HAT | 240x240 screen with joystick and buttons | $15-20 |
| Pi Zero camera module (OV5647) | Must include a Zero-sized ribbon cable | $10-15 |
| MicroSD card (4GB+) | Any decent brand; the OS is tiny | $5-8 |
| Case (optional) | Community designs exist to 3D print, or buy one | $0-15 |

</div>

SeedSigner OS also runs on the Pi Zero W, Pi Zero 2 W, Pi 2B, Pi 3B, and Pi 4B. The Zero v1.3 remains our recommendation because its air gap is physical: there is no radio to switch off and nothing to misconfigure. If you use a board with WiFi/Bluetooth (like the faster Zero 2 W), understand that you are trusting software to keep the radios off; SeedSigner OS never enables them, but absent hardware beats disabled hardware. A Zero W or WH can have the physical air gap back: its wireless chip, between the processor and the camera connector, can be taken off the board, which cannot be undone. The video below shows one way, with a pair of small side cutters.

<video class="doc-video" controls preload="none" playsInline width="1280" height="720" poster="/img/seedsigner/pi-zero-wifi-removal.webp" src="/video/seedsigner/pi-zero-wifi-removal.mp4" aria-label="Hands take a Raspberry Pi Zero W out of its bag and lift the small wireless chip off the board with side cutters"></video>

The video is from Appendix A of Parman's [Raspberry Pi Zero guide](https://armantheparman.com/how-to-set-up-a-raspberry-pi-zero-air-gapped-with-electrum-desktop-wallet/).

Buy the parts from general electronics retailers (the official [seedsigner.com](https://seedsigner.com) site maintains a current parts list with links). Spreading purchases across ordinary retailers is exactly what makes the supply-chain story boring, which is what you want.

<div class="photo-pair">

![The back of a WaveShare 1.3-inch LCD HAT, printed with its name, "240x240 Pixel" and "ST7789 Controller", above the black 40-pin socket that presses onto the Pi's header](/img/seedsigner/lcd-hat-back.webp)

![The Pi camera module, printed "Raspberry Pi Camera Rev 1.3", with its lens in the middle of a small green board and the ribbon cable running from it to the Pi Zero behind](/img/seedsigner/camera-module.webp)

</div>

## Step 2: Download and verify SeedSigner OS

Step 2 downloads SeedSigner OS and checks it is the image the project signed. Never flash an image you have not verified: this is the one step where skipping ahead defeats the purpose of the whole device.

1. Download the latest release image from the official GitHub repository ([github.com/SeedSigner/seedsigner/releases](https://github.com/SeedSigner/seedsigner/releases), v0.8.7 as of October 2026). Pick the file matching your board, e.g. `seedsigner_os.0.8.7.pi0.img` for the Pi Zero v1.3.
2. Download the accompanying SHA256 hash file and its GPG signature from the same release page.
3. Import the SeedSigner release signing key and check its fingerprint against at least one independent source (the project website, a maintainer's profile):

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys <seedsigner-release-key-id>
gpg --fingerprint <seedsigner-release-key-id>
```

4. Verify the signature and the image hash:

```bash
gpg --verify seedsigner_os.0.8.7.sha256.sig seedsigner_os.0.8.7.sha256
sha256sum --check seedsigner_os.0.8.7.sha256 --ignore-missing
```

Both commands must succeed: a good signature from the key you checked, and an `OK` for your image file. If either fails, stop and re-download from the official repository.

SeedSigner OS builds are reproducible: with the project's build system you can compile the image from source on your own machine and get a byte-identical result. You do not have to go that far, but the fact that anyone can is what keeps the published images honest.

## Step 3: Flash the microSD card

Step 3 writes the verified image to the microSD card. Use any flashing tool you trust; with plain `dd` on Linux (double-check the target device name with `lsblk` first; `dd` overwrites without asking):

```bash
sudo dd if=seedsigner_os.0.8.7.pi0.img of=/dev/sdX bs=4M status=progress conv=fsync
```

Raspberry Pi Imager or balenaEtcher work too; if you use Raspberry Pi Imager, choose "Use custom image" and do not let it apply any OS customization.

## Step 4: Assemble the device

Step 4 puts the four parts together; no tools are needed unless your Pi Zero has no header:

<div class="photo-aside">
<div>

1. Connect the camera. Lift the retaining clip on the Pi Zero's camera connector, insert the ribbon cable with the contacts facing the board, and press the clip closed. The Zero's connector is smaller than a full-size Pi's, which is why the Zero-specific ribbon matters.
2. Seat the LCD HAT: press the WaveShare HAT onto the Pi's 40-pin GPIO header. If your Pi Zero came without a soldered header, you will need to solder one (or buy the "WH" variant with the header pre-installed).
3. Insert the flashed microSD card and close up the case if you have one.
4. Power it from any USB power source: a phone charger or a power bank is fine. SeedSigner has no battery and needs none; power off between sessions is the security model working as intended.

</div>

![The camera module and the Pi Zero WH laid flat and joined by the ribbon cable, which runs from the connector on the back of the camera board to the camera connector at the end of the Pi](/img/seedsigner/camera-connected.webp)

</div>

The build in these photos uses a Pi Zero WH, the Zero W with its header already soldered on, in a 3D-printed case. The Zero v1.3 has the same layout and goes together the same way.

<div class="photo-pair">

![A Pi Zero WH beside an orange 3D-printed case with the camera module lying in its bottom, joined to the Pi's camera connector by the narrow Zero-size ribbon cable](/img/seedsigner/camera-ribbon.webp)

![The Pi Zero WH seated in the case above the camera, its 40-pin header facing up for the screen HAT and the ribbon cable folded at the end of the case](/img/seedsigner/pi-in-case.webp)

</div>

<div class="photo-pair">

![The finished SeedSigner, powered off: the WaveShare HAT's square screen in the middle, the joystick on its left and the KEY1, KEY2 and KEY3 buttons on its right, filling the top of the case](/img/seedsigner/finished-top.webp)

![The end of the finished SeedSigner, with the red and grey microSD card pushed into its slot through an opening in the case](/img/seedsigner/finished-microsd.webp)

</div>

First boot takes under a minute and lands on the SeedSigner home screen. The device never needs, and never asks for, a network connection.

## Step 5: Check it before trusting it with funds

Step 5 tests the device with a throwaway seed before it guards real money:

- Power-cycle the device and confirm it remembers nothing: no seeds should survive a reboot.
- Generate a throwaway test seed, load it into a hot wallet, and run one full sign-and-broadcast cycle on a small amount you can afford to lose.
- Practice the full [usage workflow](/docs/seedsigner/using-seedsigner/), including restoring your backup, before trusting it with savings. The [backup verification guide](/docs/wallet-setup/backup-verification/) applies here in full.

