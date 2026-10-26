# Assess Your Threat Model

> Determine what level of Bitcoin security you actually need. Match your setup to your real risks. Not everyone needs maximum security, but some people do.

Source: https://selfcustodylabs.com/docs/learn/fundamentals/threat-models/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A threat model is your answer to three questions: what you are protecting, who you are protecting it from, and how much effort you will put into the defence. For most people the answer is a hardware wallet with a tested backup, because the attackers they face are opportunistic: phishing, malware and failing exchanges. A passphrase and your own node suit someone who could be singled out; multisig with keys in separate places suits life-changing amounts and anyone who could face physical threats. Too little security loses bitcoin to an attacker, and too much loses it to a setup its owner cannot recover.

## What is a threat model?

A threat model is a short, honest assessment of what you hold, who might want it and what you are willing to do to keep it. The three answers decide the setup:

1. What you are protecting: how much bitcoin you hold now and expect to hold, and how much your privacy matters.
2. Who you are protecting it from: anyone from a phishing campaign sent to millions of addresses to someone who has decided they want your coins in particular.
3. What you will do about it: the time, money and ongoing attention you can give the setup.

When an answer changes, the model changes. Someone holding a few hundred dollars who tells nobody needs a very different setup from someone holding a large share of their net worth who posts about bitcoin under their own name.

## What kinds of attacker are there?

Most readers fit one of four levels. The table is the summary; each level is explained below it.

<div class="fixed-width-table">

| Level | Attacker | Typical defence |
|-------|----------|-----------------|
| 1. Opportunistic | Phishing, malware, exchange hacks | Hardware wallet and a tested backup |
| 2. Targeted, online | Someone who knows you hold bitcoin and will spend effort on you | Add a passphrase, your own node, coin control and silence about your holdings |
| 3. Physical | Criminals willing to use force or threats | Multisig with keys in separate places |
| 4. State-level | Governments and intelligence agencies | Beyond what a website can cover |

</div>

### Level 1: opportunistic attackers

An opportunistic attacker is not after you in particular. They run automated phishing campaigns, spread malware across millions of machines and pick through the wreckage of exchange hacks, and they move on as soon as a target takes effort.

The defence is a hardware wallet, which keeps keys away from the malware on your computer; a tested backup, which covers a lost or broken device; keeping bitcoin off exchanges; and never typing, pasting or photographing the seed phrase. Most bitcoin holders are at this level, and a hardware wallet with a tested backup is most of what they need.

### Level 2: targeted online attackers

A targeted attacker knows you hold bitcoin and has decided you are worth hours or days of effort. They research you, try to talk your phone carrier into moving your number to their SIM card (a SIM swap) so they can take over your accounts, and send phishing messages built from real details of your life.

The defence adds discipline to the level 1 setup:

- A [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) on top of the seed phrase, so that a found or photographed seed phrase is not enough to spend.
- Your [own node](https://selfcustodylabs.com/docs/bitcoin-node/), so balance checks and transactions do not pass through third-party servers that can tie your addresses to your IP address.
- [UTXO management](https://selfcustodylabs.com/docs/learn/privacy/utxo-management/) and coin control, so your transaction history does not map out your holdings.
- Not discussing your holdings. Every person who knows what you own is a possible leak.

### Level 3: physical threats

A physical attacker is willing to come to your door: a burglar who guessed right, someone tipped off by a person you trusted, or the "five-dollar wrench attack", in which perfect cryptography meets a threat of violence. The attacker does not need to hack anything, only to make you unlock the wallet yourself.

The defence is a setup that even you cannot empty in one sitting under duress. [Multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) does this because spending needs several keys, and keys stored in separate places cannot all be taken in one raid on your home. Backups spread across locations make it harder still. A small decoy wallet with a plausible balance, protected by a different passphrase, gives you something to hand over. At this level, not being publicly associated with bitcoin is essential, because public association is how attackers choose their targets.

### Level 4: state-level threats

A state-level attacker has legal power to compel you, surveillance resources to watch you and the means to seize any device you own. In some jurisdictions refusing to disclose a passphrase is itself a crime. The right defence depends on which state, under which laws and for what reason, so it is beyond what this site, or any static document, can responsibly cover. If this is your threat model, you need legal counsel and operational security advice from people who do this professionally.

## How much security does your amount need?

The amount at stake is the starting point, and the other factors below refine it. Plan for what the holdings may become, not only what they are today: a setup that suits a small amount should still make sense if it grows.

<div class="fixed-width-table">

| Amount | What we recommend |
|--------|--------------------|
| Under $1,000 | A software wallet is acceptable while you learn |
| $1,000 to $10,000 | A hardware wallet |
| $10,000 to $100,000 | A hardware wallet, with a passphrase |
| $100,000 to $1,000,000 | Multisig, strongly recommended |
| Over $1,000,000 | Multisig, and consider a professional security review |

</div>

Three other factors move you up or down a row:

| Factor | Lower risk | Higher risk |
|---|---|---|
| Who knows you hold bitcoin | Nobody | You post about it publicly, or you are a public figure |
| Where you live | A stable country with working property rights | Capital controls, an authoritarian government or an active conflict |
| Your technical comfort | Comfortable restoring a wallet from scratch | Unsure how your own backup works |

The last factor caps everything else: do not run security you do not understand. A setup you cannot recover is a risk, not a protection.

## Which setup fits your profile?

Four profiles cover most readers, each loosely matching one of the threat levels. Costs are hardware only, as of October 2026.

<div class="fixed-width-table">

| Profile | Fits | Core setup | Cost | Complexity |
|---------|------|------------|----------------|------------|
| A. Casual holder | Small amounts, learning, low profile | Hardware wallet and a tested backup | About $80 to $170 | Low |
| B. Serious holder | Savings you would miss, privacy matters | Hardware wallet, dice-generated seed, passphrase, own node | $200 to $400 | Medium |
| C. High-value holder | Significant holdings, some public exposure | 2-of-3 multisig across vendors and locations, node over Tor | $500 to $1,000 or more | High |
| D. Maximum security | Very large holdings, public figures, hostile jurisdictions | 3-of-5 multisig, air-gapped signing, legal and estate planning | $2,000 or more, plus professional services | Very high |

</div>

### Profile A: casual holder

Profile A fits someone holding a small amount, still learning and not publicly linked to bitcoin. The setup is one hardware wallet (a Trezor, BitBox02 or Jade is fine at this level; see the [comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/)), the seed phrase written on paper or stamped in metal, and one test restore to prove the backup works. A passphrase is optional here and often adds more risk of locking yourself out than it removes; your own node is useful but not required. It takes an afternoon.

### Profile B: serious holder

Profile B fits someone holding savings they would be upset to lose, who cares about privacy and whose friends may know they are interested in bitcoin. The setup is a bitcoin-only hardware wallet such as the BitBox02 Nova (Bitcoin-only edition) or the Jade Plus; a seed made with [your own dice rolls](https://selfcustodylabs.com/docs/learn/keys/random/) rather than the device's random number generator alone, which the [2026 Coldcard incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) showed is worth doing; a metal backup, because paper is too fragile for this amount; a [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/); your [own node](https://selfcustodylabs.com/docs/bitcoin-node/); and coin control on every spend. CoinJoin is optional. Plan on a weekend of careful work.

### Profile C: high-value holder

Profile C fits someone with significant holdings who is at least partly known to hold bitcoin and has reason to expect targeted attacks. The setup is a 2-of-3 [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) built from hardware wallets by different manufacturers, so that one vendor's flaw cannot take everything, with the keys in different places so that one fire or burglary cannot reach them all. Metal backups are stored separately, the node runs over [Tor](https://selfcustodylabs.com/docs/bitcoin-node/tor/), very few people know what you hold, and [CoinJoin](https://selfcustodylabs.com/docs/learn/privacy/coinjoin/) is part of the setup rather than an extra. Expect it to take real, ongoing commitment.

### Profile D: maximum security

Profile D fits very large holdings, public figures and anyone in a hostile jurisdiction. The setup moves to a 3-of-5 multisig, signs on air-gapped devices, considers open-source firmware such as [Libreboot](https://selfcustodylabs.com/docs/libreboot/) for the signing computers, and spreads keys across jurisdictions so that no single legal system can reach them all. A professional security review is worth paying for, and [inheritance planning](https://selfcustodylabs.com/docs/advanced/inheritance-planning/) is essential. Collaborative custody services such as Unchained and Casa, which hold one key of a multisig for you, are worth considering for part of the holdings.

## What mistakes do people make at this stage?

| Mistake | What it looks like | What to do instead |
|---|---|---|
| Over-engineering a small amount | A 3-of-5 multisig across three countries for $500 of bitcoin | Start simple and add layers as the holdings grow; every moving part is something that can fail |
| Under-engineering a large amount | $500,000 on one hardware wallet with the seed phrase in a desk drawer | Multisig with keys in separate places; at this amount it is no longer optional |
| Security theatre | Faraday bags and exotic hardware, with the seed phrase saved to iCloud | Get the basics right first, because the basics are what attackers go after |
| Complexity beyond competence | A multisig its owner could not restore from scratch | Rehearse a full recovery on paper before funding the setup |

The last mistake matters most. The day you need to recover is likely to be stressful and rushed, so if you cannot walk through a recovery now, the setup is a risk rather than a protection.

## When should you reassess your setup?

Reassess when your holdings grow significantly, when more people learn what you hold, when your country's situation changes, when your own skills grow, and after any security incident or close call. Most people move along the same path in the same order: a hardware wallet first, then a passphrase once the device is familiar, then their own node, then multisig when the amount justifies it, with privacy measures added along the way. Most people should not go all the way to the end of it.

To act on this page:

1. Pick the profile that matches your situation today, not the one that sounds most impressive.
2. Compare your current setup with that profile and note every gap.
3. Close the gaps one at a time, cheapest and highest-impact first, testing each change end to end before the next.
4. Put a reminder in your calendar to reassess in six months.
