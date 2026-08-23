# Prepare the NSD Firmware

> Clone the NSD repository and flash the firmware to your LILYGO device. Step-by-step instructions to prepare your Nostr Signing Device.

Source: https://selfcustodylabs.com/docs/nostr-signing-device/setup/
Last updated: 2026-04-14
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

## Clone the GitHub repository:

Open a terminal and run:

```bash
git clone https://github.com/lnbits/nostr-signing-device.git
```

## Copy Required Libraries

Navigate to the `libraries` folder:

```bash
cd nostr-signing-device/libraries
```

Copy all the files in this folder and paste them into the `Arduino/libraries` directory (which should be empty if you just installed Arduino).

```bash
cp -r . ~/Arduino/libraries
```

## Connect Your Nostr Signing Device (NSD)

Plug in your device via USB.

## Upload the Firmware Using Arduino IDE

- Open Arduino IDE.
- Go to `Tools → Port` and select the correct serial port (e.g., `/dev/ttyACM0`).
- Click `File → Open`, then select `snsd.ino` from the `nostr-signing-device/snsd/` folder.
- Click the Upload button (right-facing arrow in the toolbar).

## Verify Installation

If the upload completes without errors, your NSD is ready! You should see the LNbits welcome screen on the display.

![Nsd](https://selfcustodylabs.com/img/nsd/nsd.webp)
