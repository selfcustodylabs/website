# Advanced Bitcoin Security: Multisig & Air-Gapped Setups

> Advanced Bitcoin self-custody: 2-of-3 multisig setup, inheritance planning for heirs, air-gapped signing computers, and open-source firmware guides.

Source: https://selfcustodylabs.com/docs/advanced/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

The advanced guides address specific threats that a single, well-kept hardware wallet does not: multisig removes single points of failure, inheritance planning makes sure your bitcoin outlives you, an air-gapped computer signs and generates seeds with no network at all, a dedicated bitcoin computer keeps wallet software away from your everyday browsing, and open-source firmware replaces the code that runs before the operating system. Most people do not need them; they assume you already have a working hardware wallet, a tested backup and the basics from [Learn](https://selfcustodylabs.com/docs/learn/) and [wallet setup](https://selfcustodylabs.com/docs/wallet-setup/). Match them to your [threat model](https://selfcustodylabs.com/docs/learn/fundamentals/threat-models/).

## Which advanced setup protects against what?

| Setup | Protects against | Effort | Who needs it |
|-------|------------------|------------|--------------|
| [Multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) | Single points of failure, a compromised device | High | Large holdings, inheritance plans |
| [Inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/) | Your bitcoin being lost when you die | Medium | Anyone with bitcoin to pass on |
| [Air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/) | Network attacks and malware reaching your keys | Medium | Dice seed generation, offline signing |
| [Bitcoin computer](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/) | Compromise through everyday devices | Medium | Privacy-minded users |
| [Libreboot](https://selfcustodylabs.com/docs/libreboot/) or [coreboot](https://selfcustodylabs.com/docs/coreboot/) | Proprietary firmware, including Intel's Management Engine | Very high | The highest security requirements |

## What does each guide involve?

| Guide | Time | Cost | What it covers |
|---|---|---|---|
| [Multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) | 4-8 hours | About $200-750 | Choosing a quorum, preparing three hardware wallets, building the wallet in Sparrow, backup and recovery |
| [Inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/) | 2-4 hours | Varies | Why bitcoin inheritance differs, approaches from simple to multisig, legal points, common mistakes |
| [Air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/) | 2-4 hours | $50-200, or free with an old laptop | Choosing hardware, removing network cards, Libreboot, an encrypted Linux install, offline software |
| [Bitcoin computer](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/) | 1-2 hours | $50-150, or free with repurposed hardware | A computer used only for bitcoin; unlike an air-gapped one it connects, to run a node or broadcast |
| [Libreboot](https://selfcustodylabs.com/docs/libreboot/) | 3-5 hours | $15-30 of flashing hardware | Open-source firmware on supported ThinkPads, with the Intel ME stripped and disabled |
| [Coreboot](https://selfcustodylabs.com/docs/coreboot/) | 2-4 hours | $0-30 | Open-source firmware on more machines, with some proprietary code retained |

## In what order should you build them?

| Stage | Steps |
|---|---|
| 1. Foundation | A [hardware wallet](https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/), a [verified backup](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/), [your own node](https://selfcustodylabs.com/docs/bitcoin-node/) |
| 2. Stronger security | A [dedicated bitcoin computer](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/), [operational and physical security](https://selfcustodylabs.com/docs/security/), [inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/) |
| 3. Advanced protection | An [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/), a [seed made with dice](https://selfcustodylabs.com/docs/learn/keys/random/) |
| 4. Maximum security | [Multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/), [open firmware](https://selfcustodylabs.com/docs/libreboot/) |

If you want to remove single points of failure, start with a 2-of-3 [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/). If you want your family to inherit your bitcoin, start with [inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/). To generate your own seed securely, combine an [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/) with the [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/).

## Common questions

### Is multisig worth the complexity?

For life-changing amounts, yes: removing single points of failure is worth the extra work. For smaller amounts, a well-kept single-signature setup is enough.

### Can you use an old laptop as an air-gapped computer?

Yes; old laptops are ideal. Remove the Wi-Fi and Bluetooth cards rather than only disabling them in software. See [removing the network hardware](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/#step-1-remove-the-network-hardware).

### Do you need open-source firmware?

Most people do not: a good hardware wallet used well is strong security. Open firmware suits extreme threat models and people who want to be able to inspect everything. Open source is not a guarantee, though: in the 2026 Coldcard incident the bug sat in public code for five years. Openness makes verification possible; someone still has to do it.

### Should you choose a secure element or open source?

You no longer have to choose. Secure elements resist physical extraction and open source allows auditing, and the Trezor Safe 7 pairs open firmware with an auditable secure element, while the BitBox02 Nova and Passport Prime combine certified chips with fully open code. See the [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/).
