# Dedicated Bitcoin Computer Guide

> Build a dedicated Bitcoin computer for secure transactions. Learn why using a regular computer is dangerous and how to protect your Bitcoin.

Source: https://selfcustodylabs.com/docs/advanced/bitcoin-computer/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A dedicated Bitcoin computer is a laptop used for nothing but bitcoin: it runs your wallet software, builds and broadcasts transactions, and never browses the web, opens email or installs anything else. Keeping wallet software off your everyday machine means malware picked up from websites, downloads and attachments cannot watch your balance or swap the addresses you paste. It still connects to the internet, unlike an [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/), and the signing stays on your hardware wallet. Setting one up takes one to two hours on a second-hand ThinkPad.

Time: 1-2 hours. Cost: $50-150 (used laptop) or $0 (repurpose old computer). Level: Beginner to intermediate. Updated: 26 Oct 2026. You need: Spare laptop or desktop, USB drive.

[Hardware wallets](https://selfcustodylabs.com/docs/learn/wallets/hardware-wallets/) and [why privacy matters](https://selfcustodylabs.com/docs/learn/privacy/why-privacy-matters/) are useful background.

## Why not use your everyday computer?

An everyday computer is exposed to websites, downloads, email attachments, browser extensions and all the software you install, and a hardware wallet protects the keys but not everything else. Malware on that computer can:

<div class="fixed-width-table">

| Risk | What it leads to |
|------|--------|
| Reading your balances | The attacker learns how much you hold, and may target you |
| Changing the clipboard | Addresses you paste are swapped for the attacker's |
| Watching your activity | The attacker learns when you transact |

</div>

A hardware wallet's screen still protects each payment, as long as you check the address on it. A dedicated computer removes these risks at the source and keeps your bitcoin activity apart from the rest of your digital life, which is worth it once the amounts justify a second machine.

## What are the steps?

<div class="fixed-width-table">

| Step | What you do |
|------|----------------|
| 1. [Choose the hardware](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/choice/) | Pick a laptop, ideally one Libreboot supports |
| 2. [Set it up](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/setup/) | Libreboot, Linux Mint, full-disk encryption and Tor |

</div>

For the most protection, sign on an [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/), which never connects at all. For the firmware, see [Libreboot](https://selfcustodylabs.com/docs/libreboot/), the most open option for supported ThinkPads, or [coreboot](https://selfcustodylabs.com/docs/coreboot/), which supports more models.
