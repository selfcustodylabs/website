---
sidebar_position: 3
title: "Coldcard vs Trezor vs Jade vs Passport: 2026 Compared"
description: "Compare Bitcoin hardware wallets after the 2026 Coldcard incident: Trezor Safe 7, BitBox02 Nova, Jade Plus, Passport Prime, Keystone, and more."
keywords: ["hardware wallet comparison", "coldcard", "trezor safe 7", "bitbox02 nova", "jade plus", "passport prime", "keystone", "bitcoin wallet 2026"]
tags: ["hardware wallet", "comparison", "coldcard", "trezor", "security"]
slug: /reference/hardware-wallet-comparison
---

<SectionBadge section="reference" />

# Hardware Wallet Comparison

Choosing a hardware wallet is one of the most important decisions in your self-custody journey. This guide compares the leading options as of **August 2026**, and it weighs them differently than most comparisons do, because 2026 changed what matters.

:::danger The Coldcard entropy incident changed this page
In July 2026, attackers drained ~$116M from wallets whose seeds were generated on Coldcard devices with a five-year-old firmware flaw. The devices were air-gapped and worked "perfectly": the seeds were simply guessable. Read [what happened and who's affected](/docs/learn/wallets/coldcard-entropy-incident/) before trusting any device's random number generator, including the ones we recommend.
:::

:::tip Quick Recommendation
- **Beginners**: BitBox02 Nova (Bitcoin-only) or Trezor Safe 5
- **Verifiable security**: Blockstream Jade Plus or Passport Prime, with [dice-roll entropy](/docs/learn/keys/random/)
- **Budget**: Blockstream Jade
- **DIY / stateless**: SeedSigner or Krux
- **Significant holdings**: [multisig](/docs/learn/wallets/multisig/) across vendors beats any single device
:::

**Jump to wallet:** [Trezor Safe 5](#trezor-safe-5) · [Trezor Safe 7](#trezor-safe-7) · [BitBox02 Nova](#bitbox02-nova) · [Jade & Jade Plus](#blockstream-jade--jade-plus) · [Passport Prime](#passport-prime) · [Keystone 3 Pro](#keystone-3-pro) · [SeedSigner & Krux](#seedsigner--krux-diy) · [Coldcard](#coldcard-mk5--q) · [Ledger](#ledger) · [Bitkey](#bitkey)

**Jump to section:** [How to Choose](#how-to-choose-practices-before-devices) · [Security Comparison](#security-architecture-comparison) · [Recommendations](#recommendations-by-use-case) · [Where to Buy](#where-to-buy)


## Quick Comparison Table

Prices are manufacturer list prices as of August 2026; check official stores for current figures.

<div class="fixed-width-table">

| Wallet | Price | Air-Gap | Open Source | Secure Element | User (Dice) Entropy | Best For |
|--------|-------|---------|-------------|----------------|---------------------|----------|
| **Trezor Safe 5** | $169 | ❌ No | ✅ Yes | ✅ EAL6+ | ✅ Yes | Beginners |
| **Trezor Safe 7** | $249 | ❌ No | ✅ Yes | ✅ Dual (incl. auditable TROPIC01) | ✅ Yes | Premium UX |
| **BitBox02 Nova** | ~$185 (€175) | ❌ No | ✅ Yes | ✅ EAL6+ | ✅ Yes | Simplicity + security |
| **Jade** | $79 | ✅ QR/camera opt. | ✅ Yes | ❌ Virtual (blind oracle) | ✅ Yes | Budget |
| **Jade Plus** | $149 | ✅ QR/camera | ✅ Yes | ❌ Virtual (blind oracle) | ✅ Yes | Verifiable security |
| **Passport Prime** | $556 | ✅ QR + QuantumLink | ✅ Yes | ✅ Yes | ✅ Yes | Premium air-gap |
| **Keystone 3 Pro** | $149 | ✅ QR only | ✅ Yes | ✅ 3 chips | ✅ Yes | QR air-gap value |
| **SeedSigner / Krux** | ~$50–80 (DIY) | ✅ Stateless QR | ✅ Yes | ❌ No (stateless) | ✅ Required | DIY verifiers |
| **Coldcard Mk5 / Q** | $189 / $289 | ✅ SD/QR (Q) | ⚠️ Source-visible | ✅ Dual | ✅ Yes | ⚠️ See incident |
| **Ledger (Flex/Stax/Nano)** | $79–399 | ❌ No | ❌ SE firmware closed | ✅ Yes | ❌ No | Not recommended |

</div>


## How to Choose: Practices Before Devices

The 2026 incident made one thing measurable: **the practices around a device protected people better than the device itself**. Coldcard owners who used dice entropy, a strong passphrase, or multisig lost nothing. Owners who trusted the device's defaults lost everything. So before comparing screens and chips, decide on your practices:

1. **Supply or verify your entropy.** Every device below now supports mixing in your own dice rolls at seed creation. Use it, or [generate the seed yourself](/docs/learn/keys/random/). This single habit removes the exact failure that cost Coldcard users $116M.
2. **Add a [passphrase](/docs/learn/keys/passphrase/)** for any balance you'd genuinely miss. It was the difference between drained and untouched in July 2026.
3. **Use [multisig](/docs/learn/wallets/multisig/) across vendors** for significant holdings, so no single vendor's mistake can reach your funds.

With those in place, the device choice is about verification ergonomics (screen, buttons, QR vs USB), supply-chain trust, and how the vendor has behaved when things went wrong.


## Detailed Comparisons

### Trezor Safe 5

**The beginner default**

| Aspect | Details |
|--------|---------|
| Price | $169 |
| Screen | 1.54" color, Gorilla Glass 3 |
| Connectivity | USB-C |
| Open Source | ✅ Firmware and hardware designs |
| Secure Element | ✅ EAL6+ (Optiga) |
| Dice entropy | ✅ Supported at setup |
| Bitcoin-only firmware | ✅ Available |

**Pros:** polished setup and documentation, great Sparrow integration, secure element with open firmware, active security team with a long disclosure track record.

**Cons:** no air-gap option (USB only), Trezor Suite nudges toward its own ecosystem, a shipping-provider breach disclosed in 2026 leaked customer shipping data (opt for pickup points where available).

**Best for:** first hardware wallet, amounts that don't yet justify multisig.

---

### Trezor Safe 7

**The flagship with an auditable secure element**

| Aspect | Details |
|--------|---------|
| Price | $249 |
| Screen | 2.5" color touchscreen |
| Connectivity | USB-C + encrypted Bluetooth |
| Open Source | ✅ Including the TROPIC01 secure element design |
| Secure Element | ✅ Dual: TROPIC01 (auditable) + EAL6+ Optiga |
| Dice entropy | ✅ Supported at setup |
| Bitcoin-only firmware | ✅ Available |

The Safe 7's TROPIC01 is the first secure element whose design can be independently audited; historically you had to choose between "secure element" and "no NDAs." After a year in which a silent firmware flaw cost users nine figures, auditability of the *whole* stack is no longer a purist's luxury.

**Pros:** auditable secure chip, big screen for address verification, quantum-resistant firmware signing, Bitcoin-only variant.

**Cons:** premium price, Bluetooth is a radio you may not want (it can stay off), still no QR air-gap mode.

**Best for:** users who want maximum transparency with mainstream polish.

---

### BitBox02 Nova

**Swiss minimalism, now with an EAL6+ chip**

| Aspect | Details |
|--------|---------|
| Price | ~$185 (€175) |
| Screen | Glass OLED with touch sliders |
| Connectivity | USB-C + Bluetooth (iPhone/iPad) |
| Open Source | ✅ Fully |
| Secure Element | ✅ EAL6+, dual-chip architecture |
| Dice entropy | ✅ Supported at setup |
| Bitcoin-only edition | ✅ Available |

**Pros:** the smoothest backup flow in the industry (microSD + optional wallet-app backup), dual-chip design where the open MCU checks the secure chip, Bitcoin-only edition, fast and transparent communication during the 2026 crisis, announced expanded audits afterward.

**Cons:** no air-gap mode, small screen means more scrolling to verify addresses, touch sliders divide opinion.

**Best for:** beginners and anyone who values a clean, fast workflow. The classic BitBox02 (€149) remains fine if Bluetooth doesn't matter to you.

---

### Blockstream Jade & Jade Plus

**The verifiable-security pick**

| Aspect | Details |
|--------|---------|
| Price | Jade $79 · Jade Plus $149 |
| Screen | Color LCD (Plus: larger, better camera) |
| Connectivity | USB, Bluetooth, camera for QR air-gap |
| Open Source | ✅ Fully |
| Secure Element | ❌ Virtual, "blind oracle" model |
| Dice entropy | ✅ Supported; multi-source entropy by default |
| Bitcoin-only | ✅ (Bitcoin + Liquid) |

Jade takes a different path on two fronts that both proved wise in 2026. Its **anti-exfiltration signing protocol** prevents a malicious device from leaking key material through signatures. And instead of one RNG, it **mixes multiple entropy sources**, a design Blockstream documented in detail within hours of the Coldcard news, alongside a concrete migration guide for affected users.

The trade-off: no hardware secure element. Jade's "blind oracle" splits the key protection with a Blockstream server (or your own self-hosted oracle) that rate-limits PIN guesses. It's a clever model, but you should understand it before relying on it.

**Pros:** true QR air-gap on a budget, anti-exfil signing, multi-source entropy, exemplary incident response, fully open source.

**Cons:** no hardware SE (oracle model requires understanding), camera workflow slower than USB.

**Best for:** security-focused users at any budget; the Plus's better camera makes it the nicer daily driver.

---

### Passport Prime

**The premium air-gapped flagship**

| Aspect | Details |
|--------|---------|
| Price | $556 |
| Screen | Large color touchscreen |
| Connectivity | QR codes + QuantumLink encrypted Bluetooth |
| Open Source | ✅ Fully (KeyOS, sandboxed apps) |
| Secure Element | ✅ Yes |
| Dice entropy | ✅ Supported; ships an entropy-testing app |
| Bitcoin-only | ✅ By design |

Foundation responded to the 2026 incident faster than almost anyone, confirming its entropy paths the same night, and then shipped an **entropy-testing app** so users can check the RNG's output distribution themselves. That's the post-2026 mindset: don't just claim good randomness, let the user probe it.

**Pros:** beautiful verification-first UX, US assembly, sandboxed app model, entropy self-testing, Bitcoin-only.

**Cons:** by far the most expensive option here; more device than most people need; the extra features (2FA, storage) widen the surface it's responsible for.

**Best for:** users who want air-gapped, verification-friendly hardware and are willing to pay for it.

---

### Keystone 3 Pro

**QR air-gap at a fair price**

| Aspect | Details |
|--------|---------|
| Price | $149 |
| Screen | 4" color touchscreen, fingerprint reader |
| Connectivity | QR codes + microSD only |
| Open Source | ✅ Fully |
| Secure Element | ✅ Three chips |
| Dice entropy | ✅ Supported at setup |
| Bitcoin-only firmware | ✅ Available |

**Pros:** true air-gap with a big screen for address verification, three secure elements, dice entropy at setup, excellent Sparrow multisig support, self-destruct on tamper.

**Cons:** multi-coin firmware by default (flash the Bitcoin-only build), company is younger than Trezor/Blockstream, battery to keep charged.

**Best for:** air-gapped workflows without the Passport price tag; a strong multisig quorum member.

---

### SeedSigner & Krux (DIY)

**Stateless signers you assemble yourself**

SeedSigner (Raspberry Pi Zero based, ~$50–80 in parts) and Krux (runs on ~$30–80 K210 devices) take the most radical position on the 2026 lesson: **the device never stores a seed at all**. You bring the seed to each signing session (typically as a QR code or by re-entering it), and the device forgets everything at power-off.

Because you generate the seed yourself ([dice + verification](/docs/learn/keys/random/)), there is no vendor RNG to trust. Because you assemble it from commodity parts, there's no wallet-specific supply chain to intercept. The price is convenience: every signing session takes longer, and safe seed storage is entirely on you.

**Best for:** technical users, multisig quorums, and anyone who reads this site's [DIY sections](/docs/learn/wallets/air-gapped-wallets/) with enthusiasm. If you built a coreboot laptop, you'll feel at home.

---

### Coldcard Mk5 & Q

**Not currently recommended**

:::warning Why Coldcard lost its recommendation
For years Coldcard was this site's "security maximalist" pick. Then the [entropy incident](/docs/learn/wallets/coldcard-entropy-incident/): a 2021 firmware bug silently replaced hardware randomness with a predictable software generator, ~$116M was stolen from 5,200+ wallets, and, decisively for us, a developer had **warned Coinkite about that exact code in May 2025 and was dismissed**. No compensation has been offered.

The current hardware (Mk5 $189, Q $289) is capable, the fixed firmware has been independently reviewed, and seeds generated with **dice rolls were never affected**. If you already own one: update firmware, [check whether your seed needs migration](/docs/learn/wallets/coldcard-entropy-incident/#am-i-affected), and generate any new seed with dice. But for new buyers, we don't recommend rewarding a vendor whose handling of a credible warning cost users nine figures, at least until a longer track record rebuilds that trust.
:::

---

### Ledger

**Popular, but closed where it counts**

Ledger's devices (Nano S Plus/X, Flex, Stax; $79–399) have strong secure elements and survived 2026 without an entropy incident; the company was quick to point to its certified TRNG. Our concerns are unchanged: the secure element firmware is **closed source**, the 2023 "Ledger Recover" service showed the firmware can extract seed material for sharding, and the 2020 customer-data breach exposed buyers to years of phishing. You cannot verify the parts that matter most, and 2026 demonstrated exactly how much silent trust that requires.

**Best for:** users locked into Ledger's multi-coin ecosystem. For Bitcoin self-custody, the open alternatives above are stronger choices.

---

### Bitkey

**A different trust model entirely**

Block's Bitkey ships as a 2-of-3 multisig by default (your phone + the device + a recovery server), with no user-visible seed phrase. It was untouched by the 2026 incident (by architecture, no single RNG failure can spend funds), and its incident-night communication was among the best. The trade-off is philosophical: you're inside Block's coordination model rather than holding a portable BIP39 seed. We prefer setups you can [reconstruct from standards](/docs/learn/keys/seed/), but Bitkey is a defensible pick for someone who will never roll dice or verify anything.


## Security Architecture Comparison

### Secure Elements

| Wallet | Secure Element | Notes |
|--------|---------------|-------|
| Trezor Safe 5 | 1× Optiga (EAL6+) | Open firmware around a certified chip |
| Trezor Safe 7 | TROPIC01 + Optiga | TROPIC01 is auditable, no NDA |
| BitBox02 Nova | 1× EAL6+ | Dual-chip: open MCU cross-checks SE |
| Passport Prime | ✅ Yes | Sandboxed KeyOS on top |
| Keystone 3 Pro | 3× chips | PCI-grade, self-destruct on tamper |
| Coldcard Mk5/Q | 2× (dual vendors) | SEs were *not* the 2026 failure; the firmware was |
| Jade / Jade Plus | Virtual (blind oracle) | Server rate-limits PIN guesses; self-hostable |
| SeedSigner / Krux | None | Stateless: nothing stored to protect |
| Ledger | 1× ST33 | Certified but closed firmware |

### Entropy: Who Lets You Verify?

The lesson of 2026 in one table. "Dice support" means the device can mix user-supplied rolls into seed generation; "verifiable" means you can independently check the result honors your input.

| Wallet | Dice support | How to verify |
|--------|-------------|---------------|
| SeedSigner / Krux | Required: you bring entropy | Re-derive on a second device; stateless by design |
| Jade / Jade Plus | ✅ + multi-source default | Open firmware; cross-check words against [manual derivation](/docs/learn/keys/random/) |
| Passport Prime | ✅ + entropy-testing app | On-device RNG probing + manual cross-check |
| Trezor Safe 5/7 | ✅ | Cross-check words against manual derivation |
| BitBox02 Nova | ✅ | Cross-check words against manual derivation |
| Keystone 3 Pro | ✅ | Cross-check words against manual derivation |
| Coldcard Mk5/Q | ✅ (dice path was never affected) | Cross-check words against manual derivation |
| Ledger | ❌ | Trust the certification |

**Whatever you buy:** a device could theoretically ignore your dice. The check that catches everything is re-deriving the seed from the same rolls independently; our [dice guide](/docs/learn/keys/random/) shows how.

### Track Record & Incident Response

New for 2026, and it earned its place: when the Coldcard news broke, response speed and honesty varied enormously.

| Vendor | 2026 crisis response | History |
|--------|---------------------|---------|
| Blockstream (Jade) | Same-night entropy documentation + migration guide | Clean |
| Foundation (Passport) | Same-night confirmation; entropy-testing app after | Clean |
| Block (Bitkey) | Same-night technical analysis | Clean |
| Trezor | Next-day statement, sustained follow-ups, discussing dice UX improvements | Shipping-provider data breach (3rd party, disclosed 2026); glitch attacks on older models, addressed via SE |
| BitBox | Next-day; announced expanded audits | Clean |
| Keystone | Confirmed unaffected | Clean |
| Coinkite (Coldcard) | Fast patch + advisory, but see [dismissed 2025 warning](/docs/learn/wallets/coldcard-entropy-incident/) | The incident itself |
| Ledger | Brief statement ~14h later | Recover controversy (2023), customer-data breach (2020) |


## Recommendations by Use Case

### 👶 First Hardware Wallet
**BitBox02 Nova (Bitcoin-only)** or **Trezor Safe 5**
Polished, open source, secure element, dice support when you're ready for it.

### 🔐 Verifiable Security
**Jade Plus** or **Passport Prime**, seeded with [dice](/docs/learn/keys/random/)
Air-gapped workflows from vendors that treat verification, including of their own randomness, as a feature.

### 💰 Budget
**Blockstream Jade** ($79)
Nothing else at this price is open source, air-gap capable, and backed by this response record.

### 🛠️ DIY / Maximum Verification
**SeedSigner** or **Krux**
Stateless, assembled from commodity parts, entropy fully in your hands.

### 🏆 Significant Holdings
**Multisig across vendors**, e.g. Jade Plus + Keystone 3 Pro + Trezor Safe 5
Three architectures, three supply chains, three firmware teams. July 2026 proved this isn't paranoia: multisig users with a weak Coldcard key lost nothing. See the [multisig guide](/docs/learn/wallets/multisig/).


## Where to Buy

Always buy directly from manufacturers:

| Wallet | Official Store |
|--------|---------------|
| Trezor | [trezor.io](https://trezor.io) |
| BitBox | [bitbox.swiss](https://bitbox.swiss) |
| Jade | [store.blockstream.com](https://store.blockstream.com) |
| Passport | [foundation.xyz](https://foundation.xyz) |
| Keystone | [keyst.one](https://keyst.one) |
| SeedSigner (parts list) | [seedsigner.com](https://seedsigner.com) |
| Krux (build guide) | [selfcustody.github.io/krux](https://selfcustody.github.io/krux/) |
| Coldcard | [coldcard.com](https://coldcard.com) |
| Ledger | [ledger.com](https://ledger.com) |

:::danger Never Buy from Third Parties
Amazon, eBay, and other resellers have been sources of tampered devices. Only buy directly from manufacturers or authorized resellers listed on their official websites. And regardless of vendor: initialize the device yourself; a "pre-configured" wallet or included seed card is always a scam.
:::


## Summary

There's no single "best" hardware wallet, but after 2026 there is a best *approach*: open hardware, entropy you supplied or verified, a passphrase, and multisig once the stakes are real.

| Priority | Best Choice |
|----------|-------------|
| Ease of use | BitBox02 Nova or Trezor Safe 5 |
| Verifiable security | Jade Plus or Passport Prime + dice |
| Value | Blockstream Jade |
| Full transparency | Trezor Safe 7 (auditable SE) or DIY |
| Air-gap + UX | Keystone 3 Pro |
| Significant holdings | Multi-vendor multisig |

For most users: start with a **BitBox02 Nova** or **Trezor Safe 5**, generate the seed with **your own dice entropy**, and graduate to **multisig** as your holdings grow.

<NextSteps 
  title="Ready to Set Up?"
  items={[
    { 
      label: "Next", 
      title: "Hardware Wallet Setup Guide", 
      href: "/docs/wallet-setup/hardware-wallet/", 
      description: "Step-by-step instructions for your first hardware wallet" 
    },
    { 
      label: "Context", 
      title: "The Coldcard Entropy Incident", 
      href: "/docs/learn/wallets/coldcard-entropy-incident/", 
      description: "The 2026 exploit that reshaped how this page ranks devices" 
    },
    { 
      label: "Advanced", 
      title: "Multisig Setup", 
      href: "/docs/learn/wallets/multisig/", 
      description: "Use multiple hardware wallets for maximum security" 
    }
  ]}
/>
