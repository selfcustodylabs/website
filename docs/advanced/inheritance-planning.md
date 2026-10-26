---
sidebar_position: 5
title: "Bitcoin Inheritance Planning: Pass Bitcoin to Heirs"
description: "Plan Bitcoin inheritance for your heirs. Approaches from sealed instructions to family multisig, plus how to write recovery instructions."
keywords: ["bitcoin inheritance", "bitcoin estate planning", "pass bitcoin to heirs", "bitcoin death planning", "crypto inheritance", "bitcoin will", "bitcoin trust"]
tags: ["inheritance", "estate planning", "security", "advanced", "multisig"]
---

# Bitcoin inheritance planning

Bitcoin has no beneficiary forms, no account a court can order opened and no password reset, so bitcoin whose owner dies without a plan is lost for good. An inheritance plan gives your heirs what they need to recover it (the keys, or enough of them, plus written instructions) without making it easier for anyone to steal while you are alive. For significant holdings, the best balance is a 2-of-3 multisig in which an heir holds one key from the start; for smaller amounts, a passphrase-protected seed with the two parts stored apart, or a sealed letter, can be enough. Whatever you choose, write instructions a non-technical person can follow, test the plan with your heir, and review it every year.

## Why is bitcoin inheritance different?

| Traditional assets | Bitcoin |
|-------------------|---------|
| Banks verify the heir's identity | Only the keys prove ownership |
| Courts can order access | No authority can recover keys |
| Forgotten passwords can be reset | A lost seed phrase is lost for good |
| Institutions keep records | Only you know what you hold and where the keys are |

The underlying tension is that security needs secrecy, because the fewer people who can reach your keys the safer they are, while inheritance needs sharing, because someone must be able to reach them after you are gone. Every approach is a balance between the two.

## Which approach suits you?

| Approach | Best for | Strengths | Weaknesses |
|----------|----------|------------|----------------|
| A sealed letter | Small amounts, high trust | Simple; heirs need no technical knowledge | A single point of failure; whoever finds it can take the bitcoin |
| A lawyer or executor | Moderate amounts, an existing estate plan | Fits existing planning; can include conditions | Trusts a third party; probate takes months or years; the lawyer may not understand bitcoin security |
| Split shares (SLIP39) | Moderate to significant amounts, technical heirs | No single person or place holds everything; survives losing a share | Recombining needs technical understanding; not every wallet supports it |
| Multisig, with an heir holding a key | Significant amounts, long-term planning | No single point of failure; heirs recover without rebuilding anything; you spend normally meanwhile | Complex to set up; needs several hardware wallets; every holder must keep the descriptor |
| Collaborative custody (Unchained, Casa) | Very large holdings | A professional holds one key and helps heirs recover | Fees; the company could fail; less privacy |

:::warning Never split a seed phrase by giving people different words
Giving words 1 to 12 to one person and 13 to 24 to another adds no redundancy, since losing either half loses the bitcoin, and it weakens the seed: half of a 12-word seed leaves only about 62 bits to guess, within reach of a determined attacker. Use SLIP39 shares or multisig instead.
:::

## How does a family multisig work?

A family multisig is a 2-of-3 multisig wallet in which you hold one key, an heir holds a second, and the third is kept in a vault or by a lawyer.

<div class="doc-diagram">

![An inheritance 2-of-3 multisig: you hold key 1 for daily use, your heir keeps key 2, and key 3 sits in a vault or with an attorney; while you live you spend with key 1 plus another, and after your death the heir recovers everything with keys 2 and 3](/img/diagrams/advanced/inheritance-multisig.svg)

</div>

While you are alive, you spend with key 1 plus key 2 or key 3. After your death, your heir uses keys 2 and 3. Nobody, including the heir, can spend alone.

## Step 1: Set up the multisig

Step 1 builds the wallet. Follow the [multisig guide](/docs/learn/wallets/multisig/) to create a 2-of-3 multisig, assigning the keys with inheritance in mind: key 1 on your own device (a Jade Plus, for example), key 2 on a device your heir keeps (a Trezor Safe 5, say), and key 3 on a backup device (such as a Keystone 3 Pro) in secure storage.

## Step 2: Let each key holder back up their own seed

Step 2 keeps each seed with its holder. Each holder backs up their own seed phrase; you do not need to know theirs, and they do not need to know yours.

| Key | Held by | Seed stored |
|-----|---------|-------------|
| Key 1 | You | Your secure location |
| Key 2 | Your main heir | Their secure location |
| Key 3 | Backup | A safe deposit box or with your lawyer |

## Step 3: Give every key holder the wallet descriptor

Step 3 makes the wallet recoverable from any two keys.

:::danger Every key holder needs a copy of the wallet descriptor
Recovering with two of the three seeds is impossible without it, because the third key's xpub is recorded in the descriptor and nowhere else.
:::

The **wallet descriptor** (also called the wallet configuration or multisig file) records every key's xpub, the 2-of-3 rule, the derivation paths and the address format. In Sparrow, export it as a PDF from the wallet's `Settings` tab, and store copies with each hardware wallet's backup, with your estate documents and with your instructions.

## Step 4: Write instructions your heirs can follow

Step 4 writes down what to do, for someone who may know nothing about bitcoin. For example:

```markdown
## Bitcoin inheritance instructions

### What you are inheriting
A 2-of-3 multisig bitcoin wallet. Any two of its three keys can move the funds.

### What you need
1. Two of the hardware wallets, or their seed phrases
2. The wallet descriptor (attached, or kept at ___)
3. Sparrow Wallet (https://sparrowwallet.com)

### How to reach the funds
1. Download Sparrow Wallet and check its signature
2. Choose File, Import Wallet, and load the wallet descriptor
3. Connect the first hardware wallet and check Sparrow recognises it
4. Connect the second hardware wallet
5. You can now see the balance and send transactions

### Contacts
- Lawyer: [name, phone]
- Technical helper, if needed: [name, phone]
- Where key 3 is: [details]

### If something goes wrong
- Never give seed phrases to "recovery services": they are scams
- Contact [trusted technical person] before doing anything
- Bitcoin cannot be "hacked": if the seeds are safe, the funds are safe
```

## Step 5: Test the plan

Step 5 proves it works before anyone depends on it:

1. Spend a small amount with keys 1 and 2, then 1 and 3, then 2 and 3.
2. Have your heir restore their key on a fresh device.
3. Check that every holder's copy of the descriptor produces the same addresses.
4. Walk your heir through the whole recovery with a test amount.

## Step 6: Record where everything is

Step 6 writes down who holds what, kept with the estate documents:

| Item | Where | Who knows |
|------|----------|-----------|
| Key 1 device | Your home | You |
| Key 1 seed | Your secure location | Only you |
| Key 2 device | With your heir | Your heir |
| Key 2 seed | Your heir's secure location | Only your heir |
| Key 3 device | The backup location | You, and your executor |
| Key 3 seed | Kept separately from the key 3 device | You, and your executor |
| Wallet descriptor | Several places | Every key holder |
| Instructions | With the estate documents | Your executor |

## What if you use a single-signature wallet?

### A seed phrase and a passphrase, stored apart

Store the seed phrase in one secure place, put a strong [passphrase](/docs/learn/keys/passphrase/) on the wallet, and store the passphrase somewhere else, for example with your lawyer. Leave instructions explaining that both are needed. Neither place alone gives access, though the plan still depends on both surviving and being found.

### An automated check-in service

Some services send pre-written messages if you stop checking in for a set time. They need nobody to know in advance, but they depend on the service continuing to exist, and the message should only say where to find the instructions, never contain a seed phrase or passphrase.

### SLIP39 shares

Some wallets, including Trezor's, can split a backup into SLIP39 shares, any set number of which rebuild the wallet. A 3-of-5 split might give shares to your main heir, a second heir, your lawyer, a safe deposit box and a trusted friend; any three recover it. Not every wallet supports SLIP39, and recovery is more complex.

## What mistakes lose an inheritance?

| Mistake | Why it matters | What to do instead |
|---|---|---|
| "I'll set it up later" | The most common failure: death does not wait | Set up a basic plan now, and improve it later |
| Keeping seeds and instructions together | Whoever finds both can take everything | Store them apart |
| Assuming heirs will work it out | They may never find the wallet, fall for scams or give up | Write clear instructions |
| Forgetting the multisig descriptor | Two seeds cannot rebuild the wallet without it | Store it with every seed |
| Never testing | An untested plan is a guess | Walk through it with your heirs |
| A single point of failure | One lost document, place or person ends the plan | Build in redundancy |
| Over-engineering | Heirs cannot carry out a plan they do not understand | Match the complexity to their skills |
| Trusting recovery services | They are scams aimed at grieving families | Warn your heirs explicitly |

## What legal steps should you take?

This is general information, not legal advice; consult an estate lawyer who knows digital assets in your jurisdiction.

- Mention your bitcoin in your will, even though the keys are handled separately, so that its existence and your wishes are documented. For example: "I own bitcoin. Instructions for accessing it are stored separately and have been provided to [person or place]. I direct that it pass to [beneficiary]."
- Consider a trust, which can keep the estate private, set conditions on distribution and manage the transition.
- Keep tax records: purchase dates and prices, which wallets you control, and any taxable events, which can save your heirs money and disputes.
- If your heirs live in other countries, the laws differ, and where keys are stored can have legal consequences; take advice in each jurisdiction.

## How often should you review the plan?

Once a year, check that you can still reach every key, that the backups still work, that contacts for your lawyer, heirs and executor are current, that the instructions are still accurate, and whether the wallet software has changed. Update the plan after a large change in value, marriage, divorce, a birth or death, a move abroad, a change of lawyer or executor, a hardware wallet reaching the end of its life, or any security concern.

## What should you do today?

If nothing else, take these five steps; they take about half an hour:

1. Write down which wallets hold your bitcoin.
2. Check that your seed phrase backups exist and are readable.
3. Tell one trusted person that you own bitcoin and where the instructions are.
4. Write basic instructions for reaching it.
5. Store the instructions separately from the seed phrases.

The best plan is one that actually gets set up, that your heirs can carry out, that does not weaken your security, and that you review.
