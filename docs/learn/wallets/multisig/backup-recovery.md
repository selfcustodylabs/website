# Multisig Backup & Recovery

> How to properly backup your multisig wallet and recover it if needed. Critical information for protecting your bitcoin long-term.

Source: https://selfcustodylabs.com/docs/learn/wallets/multisig/backup-recovery/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A 2-of-3 multisig is recoverable from any two of its three seed phrases plus the wallet descriptor, so the backup plan is: each seed phrase on metal in its own location, never stored with its own device, and a copy of the descriptor with every seed. Then rehearse the recovery before the wallet holds anything significant: restore a device from its seed, rebuild the wallet in Sparrow from the descriptor alone, and sign a test transaction. The same complexity that protects a multisig loses it if the backups are wrong.

## What do you have to back up?

<div class="fixed-width-table">

| Item | Copies | What it is for |
|------|--------|---------|
| Seed phrase 1 | 1, on metal | Restores key 1 |
| Seed phrase 2 | 1, on metal | Restores key 2 |
| Seed phrase 3 | 1, on metal | Restores key 3 |
| Wallet descriptor | 3 or more | Rebuilds the multisig from its keys |
| Device PINs | 3 | Unlock the hardware wallets |

</div>

**Danger: Back up the wallet descriptor as carefully as the seeds**
Recovery usually means rebuilding the wallet from two of the three seeds. Two seeds do not reveal the third key's xpub, so without the descriptor, which contains it, the wallet cannot be rebuilt.

## What is in the wallet descriptor?

A **wallet descriptor** is the text that defines a multisig wallet:

```text
wsh(sortedmulti(2,
  [73c5da0a/48h/0h/0h/2h]xpub6...ABC,
  [8f3a2b1c/48h/0h/0h/2h]xpub6...DEF,
  [a2c4e6f8/48h/0h/0h/2h]xpub6...GHI
))#checksum
```

| Part | Meaning |
|---|---|
| `wsh` | Native segwit script type |
| `sortedmulti(2, ...)` | Two signatures needed, with the keys sorted |
| `[73c5da0a/48h/0h/0h/2h]` | Each key's master fingerprint and derivation path |
| `xpub...` | Each signer's extended public key |
| `#checksum` | A check that the descriptor was copied correctly |

The seed phrases alone do not say which keys belong together, how many signatures are needed, which paths were used or which script type. With all three seeds and those facts you could rebuild the wallet; with two seeds, the descriptor is the only place the third key's xpub exists. It cannot spend anything, but it reveals the wallet's balance and history to whoever reads it, so store it as privately as the seeds.

## Where should the backups be kept?

Four rules:

1. Never store two seed phrases together.
2. Never store a seed phrase with its own device.
3. Store a copy of the descriptor with each seed backup.
4. Use different buildings, and ideally different cities.

A layout that follows them, the same as in [hardware setup](https://selfcustodylabs.com/docs/learn/wallets/multisig/hardware-setup/#step-5-back-up-each-seed-on-metal-in-separate-places):

| | Device kept at | Seed backup kept at |
|---|---|---|
| Key 1 | Home safe | Bank safe deposit box |
| Key 2 | Home, separately from key 1 | A trusted family member's home |
| Key 3 | Another city: a second property or an office | A third location, such as a second deposit box |

A descriptor copy goes with each seed backup. A burglary at home finds two PIN-protected devices but no seed; losing any one seed location costs one key, which a 2-of-3 wallet survives; and any two seed locations, with their descriptor copies, are enough to recover.

## How do you make the backups?

### Seed phrases on metal

Metal survives the fires, floods and fading that destroy paper. For each seed: after confirming it restores its device, stamp or engrave it onto a metal plate, read the plate back letter by letter against the seed, and store it in its own location. One wrong letter is a wrong seed.

### The wallet descriptor

In Sparrow, open the `Settings` tab, click the QR code icon at the top right, click `Save PDF...` and print several copies. The PDF holds the descriptor as a QR code for recovery, every xpub as text, and the fingerprints and derivation paths. Print on acid-free paper and keep one copy with each seed backup. An encrypted copy on a USB stick in a safe is a reasonable extra.

## What do you do if something is lost?

### One device is lost or broken

If device 2 is lost but you have its seed backup: buy a new hardware wallet, restore seed 2 onto it, register the multisig on it, and check its addresses match the other devices. The wallet never stopped working, since two keys remained. Moving the funds to a fresh multisig afterwards is optional.

### One seed backup is lost

If seed backup 1 is destroyed but device 1 still works, the wallet still spends, but key 1 now exists only on one device. Act promptly: use device 1 and one other device to move the funds to a new multisig with three new seeds, and back those up properly.

### One device is stolen

If device 3 is stolen, the thief has one key and needs two. Use devices 1 and 2 to move the funds to a new multisig straight away, before the thief can try for another key; the stolen device is then worthless.

### Every device is destroyed

If all three devices are gone but you have two seed backups and the descriptor:

1. Get two new hardware wallets.
2. Restore seed 1 onto one and seed 2 onto the other.
3. In Sparrow, create a new wallet and import the descriptor, by scanning the QR code on the PDF (the scan icon next to the wallet name) or with `File`, `Import Wallet`.
4. Check that the fingerprints match your records and that the expected addresses and balance appear.
5. Sign a small test transaction with the two restored devices.
6. Then move everything to a new multisig with three new seeds on three new devices, and back that up.

## How do you test the recovery before relying on it?

Run these before depositing a significant amount:

1. Single device: wipe device 1, restore seed 1 onto it, register the multisig again, and check the fingerprint and addresses match. Sign a small test transaction.
2. Whole wallet: delete the wallet from Sparrow, import it again from the descriptor alone, check the addresses and balance, and sign a transaction with the devices.
3. Disaster: pretend every device is lost. Using only two seed backups and the descriptor, restore onto other devices, import the descriptor, and sign and broadcast a transaction.

If all three work, the backup plan works.

## Recovery checklist

- Each seed phrase is on metal, in its own location, not with its device, and has passed a restore test.
- The descriptor is exported as a PDF with a QR code, printed, stored with each seed backup, and has passed an import test.
- Every device has its own PIN, recorded away from the seeds, and has the multisig registered.
- Addresses have been checked on every device.
- Each device's fingerprint is recorded, the locations of everything are written down, and someone you trust knows where to find that record.

## How does multisig affect inheritance?

Your heirs need to know the multisig exists, to reach two of the three seed backups and the descriptor, and to have instructions for recovering it. You can do this yourself, with written instructions held by a lawyer or in a safe place; through a collaborative custody service (Unchained, Casa and Nunchuk offer inheritance features and help heirs recover); or by giving one key to a trusted person or lawyer, who can then help your heirs without being able to spend alone. [Inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/) covers the options in detail.

## What mistakes do people make with multisig backups?

| Mistake | What goes wrong | What to do instead |
|---|---|---|
| Storing seeds digitally | Screenshots, cloud storage and email can be breached | Metal only for seed phrases |
| Keeping all backups in one place | One fire, flood or theft takes everything | Spread them across locations |
| No descriptor backup | Two seeds cannot rebuild the wallet | Printed copies with each seed |
| Never testing recovery | The backup fails when it is needed | Rehearse recovery before depositing |
| Forgetting PINs | A device has to be restored from its seed before you can sign | Write PINs down, away from the seeds |
