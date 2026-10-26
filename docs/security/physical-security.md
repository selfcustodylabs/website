# Physical Security for Bitcoin Holders

> Protect your Bitcoin from real-world threats. Home security, backup storage, travel considerations, and defense against physical attacks.

Source: https://selfcustodylabs.com/docs/security/physical-security/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Physical security is protecting your bitcoin, and yourself, from threats in the real world: burglary, fire, theft of a backup, and someone forcing you to hand over your coins. Cryptography cannot help against a person who threatens you until you transfer the funds, the so-called "$5 wrench attack", and kidnappings aimed at bitcoin holders, such as the January 2025 abduction of Ledger co-founder David Balland in France, show it is not theoretical. The defences, in order, are not letting anyone know you are worth targeting, secure storage spread across places, and a setup that you cannot empty alone under duress.

## How do you avoid becoming a target?

The best physical security is never being identified as worth attacking.

| Avoid | Examples |
|---|---|
| Advertising | Bitcoin clothing, stickers on a laptop or car, hardware wallets on display, branded packaging on deliveries (ask for plain boxes) |
| Discussing | Mentioning that you own bitcoin to acquaintances, at meetups or under your real name online; "I don't own any" is an acceptable answer |
| Displaying | Checking your balance in public, wallet apps on your home screen, bitcoin tabs open where others can see |

## What home security makes sense?

For significant holdings, ordinary home security matters:

- Barriers: good locks on every entrance, reinforced door frames (kicked doors break at the frame, not the lock), window locks or film, motion-activated outside lights, and no bushes hiding doors and windows.
- Monitoring: visible cameras, a monitored alarm, smart locks that tell you when doors open, and neighbours who look out for each other.
- Storage: a fire-rated safe bolted down, somewhere other than the main bedroom (the first place burglars search), some ordinary valuables a burglar can take instead, and nothing irreplaceable stored only at home.

## Where should seed backups be kept?

The seed backup is the most sensitive object you own.

| Location | Strengths | Weaknesses |
|----------|------|------|
| A safe at home | Accessible, under your control | A known location; fire and flood |
| A bank safe deposit box | Secure and fire-protected | Bank hours and rules; not private from the bank |
| Buried or hidden | Very hard to find | You may forget where; damp and corrosion |
| A trusted relative's home | Another location | Needs trust, and depends on their security |
| Several locations | Survives losing one | More places that could be found |

Keep backups on metal, since paper burns; keep two or three copies in different places, in different cities if you can; use tamper-evident bags so you would know if one were opened; and keep a secure record of where each one is. A single backup, a paper-only backup, a bank box as the only copy, a backup loose in a drawer and a hiding place you might forget are all ways to lose everything.

## How can you prepare for coercion?

### A decoy wallet

A [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) lets one seed phrase open two wallets: without the passphrase it opens a decoy holding a small, believable amount; with it, the real wallet. Under threat you reveal only the decoy, and the attacker cannot tell the passphrase wallet exists.

**Warning: A decoy only works if the attacker believes it**
It fails if the attacker knows about passphrases and suspects one, if the decoy's balance is implausible, or if they have researched you first. Never put your life at risk for it.

### Multisig

With [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/), you genuinely cannot spend alone: the other keys are in other places, or with other people. That is not a bluff, and it makes you a less attractive target.

### Timelocks

Some setups delay transactions, so that funds are not available immediately even under coercion, which buys time. They are more complex to set up.

## How should you travel with bitcoin?

Carry only what you need, keep a separate travel wallet away from your main holdings, advertise nothing, and know the local laws, which vary.

For a hardware wallet, there are three options: leave it at home, take an empty device and create a wallet at your destination if needed, or take a loaded device, which you need for spending but which raises the risk. If you take one, keep it in your hand luggage, know how to explain it at security, consider keeping only a small amount on it, and memorise the PIN rather than writing it down.

At borders, some countries require crypto holdings to be declared and some can compel you to unlock devices; research before you travel. A hotel safe is better than nothing but not secure, so do not leave devices unattended in the room.

## What do you do if something happens?

| Event | What to do |
|---|---|
| Your home is burgled | Check whether a backup was touched; if so, move the funds to a new wallet straight away; report it to the police; improve your security |
| You are physically threatened | Comply if you must, since no amount of bitcoin is worth injury; give up the decoy wallet if you have one; report it when safe; move the remaining funds to a new setup |
| A seed backup is stolen | Move the funds immediately while you still have the device, to a new wallet with a new seed, and work out what else was exposed |
| A hardware wallet is stolen | The PIN and its limited attempts give you time; restore from your backup onto a new device and move the funds to a new seed, treating the old one as compromised |

## How much is enough?

Security that fits your real threat, does not take over your life, can be kept up consistently and still lets you use your bitcoin is right. Security that exceeds your risk, causes constant stress, or is so complex you lock yourself out is paranoia, and it has its own risks. Most people need basic discretion, a hardware wallet, backups in more than one place and ordinary home security; few need elaborate decoys or professional protection. The aim is to be a harder target than the alternatives, not to be invulnerable. Match the effort to your [threat model](https://selfcustodylabs.com/docs/learn/fundamentals/threat-models/).
