# Build Your Own SeedSigner

> Source the Raspberry Pi parts, verify and flash SeedSigner OS, and assemble an air-gapped Bitcoin signing device for about $50 in parts.

Source: https://selfcustodylabs.com/docs/seedsigner/build-guide/
Last updated: 2026-08-21
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

This guide takes you from a parts list to a working, verified SeedSigner. Budget an hour or two the first time; none of the steps are hard, but several reward care.

**Tip: Why build it yourself**
The build is not a cost-saving compromise; it is the point. Generic parts mean there is no bitcoin-specific supply chain to intercept, and flashing software you verified yourself means there is no vendor you have to believe. If you would rather buy a pre-assembled unit (such as a SeedSigner+ kit), you are re-introducing a supply chain; buy only from a reputable builder, and still flash and verify the OS image yourself.

## Parts List

<div class="fixed-width-table">

| Part | Notes | Approx. price |
|------|-------|---------------|
| Raspberry Pi Zero v1.3 | The recommended board: it has **no WiFi or Bluetooth hardware at all** | $10-15 |
| WaveShare 1.3" LCD HAT | 240x240 screen with joystick and buttons | $15-20 |
| Pi Zero camera module (OV5647) | Must include a Zero-sized ribbon cable | $10-15 |
| MicroSD card (4GB+) | Any decent brand; the OS is tiny | $5-8 |
| Case (optional) | Community designs exist to 3D print, or buy one | $0-15 |

</div>

**On the board choice:** SeedSigner OS also runs on the Pi Zero W, Pi Zero 2 W, Pi 2B, Pi 3B, and Pi 4B. The Zero v1.3 remains our recommendation because its air gap is physical: there is no radio to switch off and nothing to misconfigure. If you use a board with WiFi/Bluetooth (like the faster Zero 2 W), understand that you are trusting software to keep the radios off; SeedSigner OS never enables them, but absent hardware beats disabled hardware.

**Sourcing:** buy parts from general electronics retailers (the official [seedsigner.com](https://seedsigner.com) site maintains a current parts list with links). Spreading purchases across ordinary retailers is exactly what makes the supply-chain story boring, which is what you want.

## Download and Verify SeedSigner OS

Never flash an image you have not verified. This is the one step where skipping ahead defeats the purpose of the whole device.

1. Download the latest release image from the official GitHub repository ([github.com/SeedSigner/seedsigner/releases](https://github.com/SeedSigner/seedsigner/releases), v0.8.7 as of August 2026). Pick the file matching your board, e.g. `seedsigner_os.0.8.7.pi0.img` for the Pi Zero v1.3.
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

**Info: Reproducible builds**
SeedSigner OS builds are reproducible: with the project's build system you can compile the image from source on your own machine and get a byte-identical result. You do not have to go that far, but the fact that anyone can is what keeps the published images honest.

## Flash the MicroSD Card

Use any flashing tool you trust. With plain `dd` on Linux (double-check the target device name with `lsblk` first; `dd` overwrites without asking):

```bash
sudo dd if=seedsigner_os.0.8.7.pi0.img of=/dev/sdX bs=4M status=progress conv=fsync
```

Raspberry Pi Imager or balenaEtcher work too; if you use Raspberry Pi Imager, choose "Use custom image" and do not let it apply any OS customization.

## Assemble the Device

1. **Connect the camera.** Lift the retaining clip on the Pi Zero's camera connector, insert the ribbon cable with the contacts facing the board, and press the clip closed. The Zero's connector is smaller than a full-size Pi's, which is why the Zero-specific ribbon matters.
2. **Seat the LCD HAT.** Press the WaveShare HAT onto the Pi's 40-pin GPIO header. If your Pi Zero came without a soldered header, you will need to solder one (or buy the "WH" variant with the header pre-installed).
3. **Insert the flashed microSD card** and close up the case if you have one.
4. **Power it** from any USB power source: a phone charger or a power bank is fine. SeedSigner has no battery and needs none; power off between sessions is the security model working as intended.

First boot takes under a minute and lands on the SeedSigner home screen. The device never needs, and never asks for, a network connection.

## Sanity Checks Before Real Funds

- Power-cycle the device and confirm it remembers nothing: no seeds should survive a reboot.
- Generate a throwaway test seed, load it into a hot wallet, and run one full sign-and-broadcast cycle on a small amount you can afford to lose.
- Practice the full [usage workflow](https://selfcustodylabs.com/docs/seedsigner/using-seedsigner/), including restoring your backup, before trusting it with savings. The [backup verification guide](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) applies here in full.
