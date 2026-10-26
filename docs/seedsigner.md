# SeedSigner: Our Favourite Bitcoin Signing Device

> Why SeedSigner is the Self Custody Labs favourite signing solution: stateless, air-gapped, fully verifiable, and built by you from commodity parts.

Source: https://selfcustodylabs.com/docs/seedsigner/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

SeedSigner is a Bitcoin signing device you build yourself from about $50 of off-the-shelf Raspberry Pi parts. It is the Self Custody Labs favourite signing solution, and this section explains why, how to [build one](https://selfcustodylabs.com/docs/seedsigner/build-guide/), and how to [use it](https://selfcustodylabs.com/docs/seedsigner/using-seedsigner/).

Time: 1-2 hours build, plus practice. Cost: $50-80 in parts. Level: Intermediate to advanced. Updated: 26 Oct 2026. You need: comfort with basic command-line verification and DIY assembly.

**Warning: Not for everyone**
Our favourite does not mean our recommendation for most people. SeedSigner adds layers of complication that a beginner should not take on: you assemble the hardware, verify and flash the software, and manage your seed backup entirely on your own. If you are setting up self-custody for the first time, start with the [hardware wallet setup guide](https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/) and a device from our [comparison page](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/). Come back when the workflow below sounds appealing rather than intimidating.

## Why is SeedSigner our favourite?

The [2026 Coldcard entropy incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) reshaped how this site evaluates signing devices: what matters is not what a vendor promises, but what you can verify yourself. SeedSigner is the most complete answer to that standard we know of.

**Stateless by design.** SeedSigner never stores your seed. The seed exists in RAM only during a signing session and vanishes at power-off. There is no flash memory to extract, no PIN to brute-force, and nothing for a thief to find on the device.

**No vendor RNG to trust.** You supply the entropy yourself, typically with [dice rolls](https://selfcustodylabs.com/docs/learn/keys/random/), and you can re-derive the resulting seed independently to prove the device honored your input. The exact failure that cost Coldcard users $116M is structurally impossible: there is no vendor seed generation to silently go wrong.

**No wallet-specific supply chain.** A hardware wallet ships to you from one vendor and can be intercepted or backdoored in transit. SeedSigner is assembled from generic Raspberry Pi components that were never labeled "bitcoin device" anywhere in their supply chain, running software you verify and flash yourself.

**Fully open and community-built.** Every line of code is open source, the project is maintained by a community rather than a company with a sales target, and releases are signed so you can verify what you flash. The current release (v0.8.7, July 2026) supports taproot, multisig, message signing, and 22 languages.

**True QR air gap.** The device communicates with your wallet software exclusively through QR codes in both directions. No USB, no Bluetooth, no SD card shuffling. The recommended Raspberry Pi Zero v1.3 has no WiFi or Bluetooth hardware at all.

## What are the trade-offs?

Each is the other side of a strength:

| Trade-off | What it means for you |
|-----------|----------------------|
| No secure element | The device runs a general-purpose Linux stack; its security comes from statelessness and the air gap, not a hardened chip |
| You are the backup | The device stores nothing, so your [seed backup](https://selfcustodylabs.com/docs/learn/keys/seed/) (steel plate, SeedQR) is the single thing keeping your funds recoverable |
| Slower sessions | Loading the seed and scanning animated QR codes takes minutes, not seconds; this is a vault workflow, not a daily spender |
| Camera exposure | The SeedQR workflow puts your seed in front of a camera; do it in a private space away from windows, webcams, and phones |
| DIY responsibility | A mistake in verification or assembly is yours to catch; nobody ships you a warranty |

For a deeper look at how SeedSigner compares to a full air-gapped computer, see [air-gapped wallets](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/).

## Where does SeedSigner fit best?

- **As a multisig key.** SeedSigner is an outstanding quorum member in a [multisig setup](https://selfcustodylabs.com/docs/learn/wallets/multisig/): a key with no vendor, no supply chain, and no stored state diversifies beautifully against your other devices.
- **As the vault for patient savings.** The slow, deliberate workflow is a feature when you sign a few times a year.
- **As a learning instrument.** Nothing teaches how Bitcoin signing actually works like holding the entire process in your own hands.

Ready? Start with the [build guide](https://selfcustodylabs.com/docs/seedsigner/build-guide/).
