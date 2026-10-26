---
sidebar_position: 4
title: "Coldcard Entropy Incident: What Happened, Who's Affected"
description: "The 2026 Coldcard entropy flaw explained: which devices and firmware are affected, how $116M was stolen, and how to migrate your funds safely."
keywords: ["coldcard hack", "coldcard entropy", "coldcard vulnerability", "coldcard rng flaw", "hardware wallet security", "seed generation", "bitcoin"]
tags: ["hardware wallet", "security", "entropy", "bitcoin"]
---

# The Coldcard entropy incident

Between 30 July and 4 August 2026, attackers drained roughly **1,816 BTC (about $116 million at the time) from more than 5,200 Bitcoin addresses**, all holding seeds generated on Coldcard hardware wallets. None of the devices were connected to the internet, stolen or infected: a firmware build error, present since March 2021, had made Coldcards generate seeds from a predictable software generator instead of their hardware random number generator, so the attackers could guess them. If a Coldcard generated your seed between March 2021 and July 2026 without dice, move your funds to a new seed; updating the firmware does not fix a seed that already exists.

It is the largest hardware wallet exploit in Bitcoin's history. This page explains what happened, how to tell whether you are affected, and what to do.

:::danger If a Coldcard generated your seed between March 2021 and July 2026
Treat that seed as compromised and move your funds to a new wallet. Updating the firmware does not fix a seed that was generated weak. See [am I affected?](#am-i-affected) and [how to migrate](#how-to-migrate-safely).
:::

## What happened, and when? {#what-happened}

<div class="fixed-width-table">

| Date | Event |
|------|-------|
| 1 March 2021 | Firmware 4.0.1 ships with the entropy bug |
| May 2025 | Developer James O'Beirne raises concerns about the random number code with Coinkite; the report is dismissed |
| 30 July 2026, 01:31 UTC | First attack wave: about 594 BTC (about $38 million) drained from about 500 addresses in 25 minutes |
| 30 July to 4 August 2026 | Three more waves follow |
| 31 July 2026 | Coinkite ships fixed firmware for all models |
| 1 August 2026 | Coinkite publishes its security advisory |
| 4 August 2026 | TRM Labs tallies about 1,816 BTC (about $116 million) stolen from more than 5,200 addresses |
| 14 August 2026 | Galaxy Research publishes its own count: 1,778 BTC (about $112 million) |

</div>

The bug went undetected for 1,978 days. As of mid-August 2026 the attackers had not been identified and most of the stolen funds sat unmoved in their addresses. Coinkite apologised and shipped fixes quickly once the draining began; as of October 2026 it has announced no compensation, and the dismissed 2025 warning remains the most damaging fact of the affair.

## What went wrong in the firmware? {#what-went-wrong}

When a Coldcard generated a new seed, it was supposed to mix output from its **hardware true random number generator (TRNG)**, a circuit that harvests physical noise, into the seed material. A build and link error meant the firmware's `rng_get()` function resolved to MicroPython's default software pseudo-random generator, Yasmarang, instead. A safety check that should have stopped the build tested whether a configuration setting was defined rather than whether it was switched on, so it passed while the setting was off.

As the researchers at Wizardsardine put it, code meant to mix physical noise with a software generator was actually mixing two software generators. The software generator was seeded from almost nothing: a chip ID (largely recoverable from the device's USB serial number), a millisecond counter, and a real-time clock register that read zero on Mk2 and Mk3 devices.

The result, in numbers:

<div class="fixed-width-table">

| Device | Intended strength | Effective strength | Cost to brute-force one seed |
|--------|-----------------|--------------------------|------------------------------|
| Mk2, Mk3 | 128 bits or more | About 40 bits by Coinkite's preliminary estimate; 22 to 32 bits by independent analyses | Seconds to about 50 minutes on one consumer GPU, at the independent estimates |
| Mk4, Mk5, Q | 128 bits or more | About 72 bits by Coinkite's estimate; nearer 52 bits by independent analysis | Years of GPU time: weakened, not trivially broken |

</div>

A 22-bit space is about 4.2 million possibilities. The attacker precomputed candidate seeds, derived their addresses, watched the blockchain for matches, and swept everything in four automated waves. That is why air-gapping did not matter: the attack never touched the devices. When a key is guessable, the blockchain itself is the attack surface.

Mk4, Mk5 and Q devices kept far more entropy because values from their secure elements were mixed in. Neither 72 nor 52 bits is acceptable for a device promising 128, which is why the advisory tells all affected users to migrate, but the confirmed thefts hit seeds generated on Mk2 and Mk3.

### Why did nobody catch it for five years?

The firmware was open source the entire time. Statistical randomness tests existed, but they ran against the simulator on a development machine, which used the developer's computer's randomness, not the chip's. Code reviewers confirmed the right function *existed*, but not which implementation the build actually linked. And in May 2025, when a respected Bitcoin developer questioned exactly this code path, the concern was waved off. Open source is necessary for verifiability; this incident proved it is not sufficient.

## Am I affected? {#am-i-affected}

Your exposure depends on how and when your seed was created, not on which firmware the device runs today.

<div class="fixed-width-table">

| Your situation | Status |
|----------------|--------|
| Seed generated on the device, Mk2 or Mk3, firmware 4.0.1 to 4.1.9 | **Critical: move the funds now** |
| Seed generated on the device, Mk4 or Mk5 before 5.6.0 (Edge before 6.6.0X), or Q before 1.5.0Q (Edge before 6.6.0QX) | **At risk: move the funds** |
| Seed generated on the device before March 2021 (firmware 3.x or earlier) | Not affected by this bug |
| Seed generated with 50 or more dice rolls (Coldcard's dice feature) | Safe: the dice bypassed the broken generator |
| Seed generated elsewhere and imported into the Coldcard | Safe: the device never generated it |
| Seed generated on fixed firmware (Mk2 and Mk3 4.2.0 or later, Mk4 and Mk5 5.6.0 or later, Q 1.5.0Q or later, or the matching Edge versions) | Not affected |
| TAPSIGNER, SATSCARD, OPENDIME | Not affected: a different generation path |

</div>

Two nuances matter:

- A BIP39 passphrase helped, but it is not a pass. Wallets protected by a strong, unique passphrase were not drained. The attacker would need to brute-force the passphrase on top of the seed. It's an independent barrier, and it visibly saved people. But your foundation is still a weak seed, so migrate anyway; the passphrase bought you time, not safety.
- Multisig contained the damage. If one key in a 2-of-3 quorum was a weak Coldcard seed, the attacker still couldn't spend. This is exactly the failure mode multisig exists for. Replace the weak key at your convenience, but do replace it.

Signing was never affected: Coldcards use deterministic nonces (RFC 6979), so transactions signed by an affected device leaked nothing. The flaw lived entirely in seed *generation*.

## How do you migrate safely? {#how-to-migrate-safely}

If your seed falls in a critical or at-risk row above, move your funds to a new wallet. Do it calmly and in this order, because rushed migrations cause their own losses:

1. Update the firmware first (Mk2 and Mk3 4.2.0 or later, Mk4 and Mk5 5.6.0 or later, Q 1.5.0Q or later), verifying the download per Coinkite's instructions. Never generate a replacement seed on vulnerable firmware.
2. Generate the new seed with your own entropy. Use [dice rolls](/docs/learn/keys/random/), either the device's dice-roll feature (99 rolls for 256-bit entropy) or the fully manual process. After this incident, "trust the device's RNG" should be a fallback, not a default.
3. Back up the new seed on metal and [verify the backup](/docs/wallet-setup/backup-verification/) before moving anything.
4. Send a small test amount to the new wallet and confirm you can spend from it.
5. Move the rest, largest amounts last, using your own node if you have one. Don't consolidate everything into one giant transaction if privacy matters to you. See [UTXO management](/docs/learn/privacy/utxo-management/).
6. Keep the old backup until the migration is confirmed and settled. An emptied wallet's seed can be destroyed later; a destroyed seed with funds still on it cannot.

If the amounts at stake are significant, consider landing the funds in a [multisig setup](/docs/learn/wallets/multisig/) rather than another single-signature wallet. This incident is the strongest argument for it to date.

## What does the incident teach? {#what-this-incident-teaches}

**Entropy is a trust point.** Every "your keys are generated securely inside the device" claim rests on an RNG you cannot see working. It failed silently here for five years, on a device marketed to and trusted by the most security-conscious users in Bitcoin. The fix is not a better brand; it's [supplying entropy yourself](/docs/learn/keys/random/) and verifying what you can.

**Air-gap protects against exfiltration, not weak keys.** An air gap stops malware from reaching your device and your key from leaking out. It does nothing if the key was predictable the moment it was born. Victims' devices worked exactly as designed, offline, in safes, while their funds were swept remotely.

**Open source is necessary, not sufficient.** The bug sat in public code for over five years. What matters alongside source availability: reproducible builds, independent review of what the build *actually links*, how a vendor treats researcher warnings, and how it responds when things go wrong.

**Defense in depth works.** Every layer that operated independently of the broken RNG (dice entropy, passphrases, multisig) held. Nobody who used all three lost anything. Layer your security so that one silent failure is never enough.

For the fairness ledger: Coinkite shipped fixes within a day of the exploit, published a detailed advisory, and has since had independent reviewers validate the fixed RNG path. That's a competent crisis response, to a crisis a heeded warning could have prevented fourteen months earlier. Whether you continue using the brand is your call; our current device guidance is in the [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/).

## Common questions

### What was the 2026 Coldcard entropy incident?

From firmware 4.0.1 in March 2021, a build and link error made Coldcard devices generate seed phrases with Yasmarang, a software pseudo-random generator, instead of the hardware random number generator. The generator was seeded from almost nothing: a chip ID recoverable from the USB serial number, a millisecond counter, and a clock register that read zero on Mk2 and Mk3 devices. Attackers began draining wallets on 30 July 2026 and took roughly 1,816 BTC (about $116 million) from more than 5,200 addresses. The bug went undetected for 1,978 days.

### Is your Coldcard wallet affected by the entropy bug?

It depends on how and when the seed was created, not on the firmware the device runs today. At critical risk: seeds generated on a Mk2 or Mk3 with firmware 4.0.1 to 4.1.9. At risk: seeds generated on a Mk4 or Mk5 before 5.6.0, or a Q before 1.5.0Q. Not affected: seeds generated with 50 or more dice rolls, seeds imported from elsewhere, seeds generated before March 2021 or on fixed firmware, and TAPSIGNER, SATSCARD and OPENDIME devices.

### Does a BIP39 passphrase protect you from the Coldcard bug?

It helped, but it is not a pass. Wallets with a strong, unique passphrase were not drained, because the attacker would have to brute-force the passphrase on top of the recovered seed. The foundation is still a weak seed, so move to a newly generated one anyway: the passphrase bought time, not safety.

### Were Coldcard signatures affected, or only seed generation?

Only seed generation. Coldcard signs with deterministic nonces as specified in RFC 6979, so transactions signed by an affected device leaked nothing about the private key. The flaw lived entirely in the code that created the seed.

## Sources {#sources}

- [Coinkite security advisory](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/): affected versions and required actions
- [Coinkite technical backgrounder](https://blog.coinkite.com/entropy-technical-backgrounder/): the vendor's own root-cause analysis
- [Wizardsardine: technical autopsy of an entropy failure](https://wizardsardine.com/blog/coldcard-vuln-deep-dive/): independent analysis, entropy math
- [TRM Labs: inside the $116M Coldcard hack](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack): on-chain analysis of the attack waves

Figures on this page are as of mid-August 2026 and may be revised as investigations continue.


