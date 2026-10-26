# Prepare the NSD Firmware

> Clone the NSD repository and flash the firmware to your LILYGO device. Step-by-step instructions to prepare your Nostr Signing Device.

Source: https://selfcustodylabs.com/docs/nostr-signing-device/setup/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Flashing the signing device means downloading LNbits' nostr-signing-device code, copying its libraries into Arduino's, and uploading its `snsd.ino` sketch to the board from the Arduino IDE. When it works, the board shows the LNbits welcome screen.

## Step 1: Get the code and its libraries

Step 1 downloads the firmware and the libraries it needs:

```bash
git clone https://github.com/lnbits/nostr-signing-device.git
cd nostr-signing-device/libraries
cp -r . ~/Arduino/libraries
```

The `~/Arduino/libraries` folder should be empty if you have just installed Arduino.

## Step 2: Upload the firmware

Step 2 puts it on the board. Plug the device in by USB, then in the Arduino IDE:

1. Choose the device's serial port under `Tools`, `Port` (for example `/dev/ttyACM0`).
2. Open `snsd.ino` from the `nostr-signing-device/snsd/` folder with `File`, `Open`.
3. Click the Upload button, the right-facing arrow in the toolbar.

## Step 3: Check it started

Step 3 confirms it worked. If the upload finishes without errors, the display shows the LNbits welcome screen.

![The LILYGO T-Display board plugged in by USB, showing the LNbits logo on its screen](https://selfcustodylabs.com/img/nsd/nsd.webp)
