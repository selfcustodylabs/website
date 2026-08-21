---
sidebar_position: 4
title: "Coldcard Entropy Incident: What Happened, Who's Affected"
description: "The 2026 Coldcard entropy flaw explained: which devices and firmware are affected, how $116M was stolen, and how to migrate your funds safely."
keywords: ["coldcard hack", "coldcard entropy", "coldcard vulnerability", "coldcard rng flaw", "hardware wallet security", "seed generation", "bitcoin"]
tags: ["hardware wallet", "security", "entropy", "bitcoin"]
---

# The Coldcard Entropy Incident

Between July 30 and August 4, 2026, attackers drained roughly **1,816 BTC (about $116 million at the time) from more than 5,200 Bitcoin addresses**. Every victim had generated their wallet seed on a Coldcard hardware wallet. None of the devices were ever connected to the internet, none were physically stolen, and no malware was involved. The attackers simply guessed the seeds, because for over five years, a firmware bug made those seeds guessable.

It is the largest hardware wallet exploit in Bitcoin's history, and it rewrites some assumptions about what makes a signing device "safe." This page explains what happened, how to know whether you're affected, and exactly what to do about it.

:::danger If you generated a seed on a Coldcard between March 2021 and July 2026
Treat that seed as compromised and **migrate your funds to a new wallet**. Updating firmware does **not** fix a seed that was already generated weak. Jump to [Am I affected?](#am-i-affected) and [How to migrate](#how-to-migrate-safely).
:::


## What Happened

<div class="fixed-width-table">

| Date | Event |
|------|-------|
| March 1, 2021 | Firmware v4.0.1 ships with the entropy bug (Mk2/Mk3) |
| May 2025 | Developer James O'Beirne raises concerns about the RNG code with Coinkite; the report is dismissed |
| July 30, 2026, 01:31 UTC | First attack wave: ~594 BTC (~$38M) drained from ~500 addresses in 25 minutes |
| July 30 – Aug 4, 2026 | Three more waves follow |
| July 31, 2026 | Coinkite ships fixed firmware for all models |
| August 1, 2026 | Coinkite publishes its security advisory |
| August 4, 2026 | TRM Labs tallies ~1,816 BTC (~$116M) stolen from 5,200+ addresses |

</div>

The bug went undetected for **1,978 days**. The attackers remain unidentified as of August 2026, and most of the stolen funds sit unmoved in attacker-controlled addresses. Coinkite apologized and released fixes quickly once the draining began, but has not offered compensation, and the dismissed 2025 warning remains the most damaging fact of the whole affair.


## What Went Wrong

When a Coldcard generated a new seed, it was supposed to mix output from its **hardware true random number generator (TRNG)**, a chip that harvests physical noise, into the seed material. Due to a build-system error (a linker resolving a function name to the wrong implementation), the seed path silently called a **software pseudo-random generator** instead: an algorithm called Yasmarang, intended as a fallback for devices with no hardware RNG at all.

As the researchers at Wizardsardine put it: the code meant to mix physical noise with a software generator was actually *mixing two software generators*. The software generator was seeded from almost nothing: a chip ID (largely recoverable from the device's USB serial number), a millisecond counter, and a real-time clock register that on Mk2/Mk3 devices read zero.

The result, in numbers:

<div class="fixed-width-table">

| Device | Promised entropy | Actual effective entropy | Cost to brute-force one seed |
|--------|-----------------|--------------------------|------------------------------|
| Mk2 / Mk3 | 128+ bits | ~22–32 bits | Seconds to ~50 minutes on one consumer GPU |
| Mk4 / Mk5 / Q | 128+ bits | ~52–72 bits | Years of GPU time (weakened, not trivially broken) |

</div>

A 22-bit space is about 4.5 million possibilities. An attacker precomputed candidate seeds, derived their addresses, watched the blockchain for matches, and swept everything in four automated waves. That's why **air-gapping didn't matter**: the attack never touched the devices. When a key is guessable, the blockchain itself is the attack surface.

Mk4, Mk5, and Q devices kept substantially more entropy because their secure element contributed additional randomness. Coinkite's advisory put the figure at about 72 bits; independent analysis estimated the practically searchable space nearer 52 bits. Neither number is acceptable for a device promising 128+, which is why the advisory tells *all* affected users to migrate, but the confirmed thefts hit Mk2/Mk3-generated seeds.

### Why nobody caught it for five years

The firmware was open source the entire time. Statistical randomness tests existed, but they ran against the simulator on a development machine, which used the developer's computer's randomness, not the chip's. Code reviewers confirmed the right function *existed*, but not which implementation the build actually linked. And in May 2025, when a respected Bitcoin developer questioned exactly this code path, the concern was waved off. Open source is necessary for verifiability; this incident proved it is not sufficient.


## Am I Affected?

Your exposure depends on **how and when your seed was created**, not on which firmware the device runs today.

<div class="fixed-width-table">

| Your situation | Status |
|----------------|--------|
| Seed generated on-device, Mk2/Mk3, firmware 4.0.1–4.1.9 | 🔴 **Critical: migrate immediately** |
| Seed generated on-device, Mk4/Mk5 before 5.6.0, or Q before 1.5.0Q | 🟠 **At risk: migrate** |
| Seed generated on-device before March 2021 (firmware 3.x or earlier) | 🟢 Not affected by this bug |
| Seed generated **with dice rolls** (Coldcard's dice feature, 50+ rolls) | 🟢 Safe: dice input bypassed the broken generator |
| Seed generated elsewhere and **imported** into the Coldcard | 🟢 Safe: the device never generated it |
| Seed generated on fixed firmware (Mk3 4.2.0+, Mk4/Mk5 5.6.0+, Q 1.5.0Q+) | 🟢 Not affected |
| TAPSIGNER, SATSCARD, OPENDIME | 🟢 Not affected (different generation path) |

</div>

Two important nuances:

- **A BIP39 passphrase helped, but is not a pass.** Wallets protected by a strong, unique passphrase were not drained. The attacker would need to brute-force the passphrase on top of the seed. It's an independent barrier, and it visibly saved people. But your foundation is still a weak seed, so migrate anyway; the passphrase bought you time, not safety.
- **Multisig contained the damage.** If one key in a 2-of-3 quorum was a weak Coldcard seed, the attacker still couldn't spend. This is exactly the failure mode multisig exists for. Replace the weak key at your convenience, but do replace it.

Signing was never affected: Coldcards use deterministic nonces (RFC 6979), so transactions signed by an affected device leaked nothing. The flaw lived entirely in seed *generation*.


## How to Migrate Safely

If your seed falls in a red or orange row above, move your funds to a fresh wallet. Do it calmly and in this order, because rushed migrations cause their own losses:

1. **Update the firmware first** (Mk3: 4.2.0+, Mk4/Mk5: 5.6.0+, Q: 1.5.0Q+), verifying the download per Coinkite's instructions. Never generate a replacement seed on vulnerable firmware.
2. **Generate the new seed with your own entropy.** Use [dice rolls](/docs/learn/keys/random/), either the device's dice-roll feature (99 rolls for 256-bit entropy) or the fully manual process. After this incident, "trust the device's RNG" should be a fallback, not a default.
3. **Back up the new seed on metal and [verify the backup](/docs/wallet-setup/backup-verification/)** before moving anything.
4. **Send a small test amount** to the new wallet and confirm you can spend from it.
5. **Move the rest**, largest amounts last, using your own node if you have one. Don't consolidate everything into one giant transaction if privacy matters to you. See [UTXO management](/docs/learn/privacy/utxo-management/).
6. **Keep the old backup** until the migration is confirmed and settled. An emptied wallet's seed can be destroyed later; a destroyed seed with funds still on it cannot.

If the amounts at stake are significant, consider landing the funds in a [multisig setup](/docs/learn/wallets/multisig/) rather than another single-signature wallet. This incident is the strongest argument for it to date.


## What This Incident Teaches

**Entropy is a trust point.** Every "your keys are generated securely inside the device" claim rests on an RNG you cannot see working. It failed silently here for five years, on a device marketed to and trusted by the most security-conscious users in Bitcoin. The fix is not a better brand; it's [supplying entropy yourself](/docs/learn/keys/random/) and verifying what you can.

**Air-gap protects against exfiltration, not weak keys.** An air gap stops malware from reaching your device and your key from leaking out. It does nothing if the key was predictable the moment it was born. Victims' devices worked exactly as designed, offline, in safes, while their funds were swept remotely.

**Open source is necessary, not sufficient.** The bug sat in public code for over five years. What matters alongside source availability: reproducible builds, independent review of what the build *actually links*, how a vendor treats researcher warnings, and how it responds when things go wrong.

**Defense in depth works.** Every layer that operated independently of the broken RNG (dice entropy, passphrases, multisig) held. Nobody who used all three lost anything. Layer your security so that one silent failure is never enough.

For the fairness ledger: Coinkite shipped fixes within a day of the exploit, published a detailed advisory, and has since had independent reviewers validate the fixed RNG path. That's a competent crisis response, to a crisis a heeded warning could have prevented fourteen months earlier. Whether you continue using the brand is your call; our current device guidance is in the [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/).


## Sources

- [Coinkite security advisory](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/): affected versions and required actions
- [Coinkite technical backgrounder](https://blog.coinkite.com/entropy-technical-backgrounder/): the vendor's own root-cause analysis
- [Wizardsardine: technical autopsy of an entropy failure](https://wizardsardine.com/blog/coldcard-vuln-deep-dive/): independent deep dive, entropy math
- [TRM Labs: inside the $116M Coldcard hack](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack): on-chain analysis of the attack waves

*Figures on this page are as of early August 2026 and may be revised as investigations continue.*

<NextSteps
  title="Act on the Lessons"
  items={[
    {
      label: "Do This",
      title: "Generate Your Own Seed with Dice",
      href: "/docs/learn/keys/random/",
      description: "Remove the RNG trust point entirely: verifiable entropy from physical dice"
    },
    {
      label: "Compare",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Our post-incident device guidance, updated for the 2026 lineup"
    },
    {
      label: "Level Up",
      title: "Multisig Wallets",
      href: "/docs/learn/wallets/multisig/",
      description: "The structural defense that contained this incident for those who had it"
    }
  ]}
/>
