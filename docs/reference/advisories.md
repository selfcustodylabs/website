# Bitcoin Wallet Security Incidents, 2013 to 2026

> Every incident since 2013 in which a wallet flaw or vendor breach put self-custodied bitcoin at risk: what failed, who is affected and what to do.

Source: https://selfcustodylabs.com/docs/reference/advisories/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

These are the incidents, from 2013 to 2026, in which a flaw in wallet software, wallet firmware or a wallet maker's systems put self-custodied bitcoin at risk. Five of the eight come down to the same failure: a seed or key made from weak randomness. No update repairs a seed that already exists, so the remedy in each of those five is to move the funds to a new seed made properly, which is why this site recommends [making the seed with dice](https://selfcustodylabs.com/docs/learn/keys/random/). The table lists the incidents newest first; each has a section below with the dates and the source.

<div class="fixed-width-table">

| Disclosed | Incident | What failed | Who is affected | What to do |
|---|---|---|---|---|
| 1 Aug 2026 | [Coldcard entropy flaw](#what-was-the-coldcard-entropy-flaw) | Firmware seeded new wallets from a predictable software generator | Seeds a Coldcard generated without dice between March 2021 and July 2026 | Move the funds to a new seed |
| 5 Aug 2024 | [Dark Skippy](#what-is-dark-skippy) | Research: tampered firmware can leak a seed through two signatures | No known victims; any device running malicious firmware | Install firmware only from the maker; prefer anti-exfil signing |
| 14 Nov 2023 | [Randstorm](#what-was-randstorm) | Weak browser randomness in BitcoinJS-based wallets | Wallets generated in a web browser from 2011 to 2015 | Move the funds to a new wallet |
| 8 Aug 2023 | [Milk Sad](#what-was-milk-sad) | `bx seed` made seeds from 32 bits of clock time | Seeds made with Libbitcoin Explorer 3.x | Move the funds to a new seed |
| 11 May 2021 | [Cake Wallet](#what-went-wrong-with-cake-wallet-in-2021) | Bitcoin wallets made from insecure randomness | Bitcoin wallets created in Cake Wallet before 4.1.7 | Move the funds to a new wallet |
| 29 Jul 2020 | [Ledger customer data](#what-leaked-from-ledger-in-2020) | Ledger's shop and marketing database | About 1 million email addresses; names, postal addresses and phone numbers of 272,000 customers | Expect phishing; never type a seed phrase anywhere |
| 26 Dec 2018 | [Electrum phishing servers](#what-were-the-electrum-phishing-servers) | Malicious servers showed fake update messages | Electrum users who installed the fake update | Update only from electrum.org |
| 11 Aug 2013 | [Android random numbers](#what-was-the-2013-android-flaw) | Android's secure random number generator | Bitcoin wallets on Android at the time | Retire any key from that period |

</div>

## What was the Coldcard entropy flaw?

The Coldcard entropy flaw was a firmware build error, shipped in March 2021, that made Coldcard hardware wallets generate seeds from a predictable software generator instead of their hardware random number generator. Between 30 July and 4 August 2026 attackers swept about 1,816 BTC from more than 5,200 addresses. Seeds made with the Coldcard's dice option, and seeds imported into it, were not affected. The [Coldcard incident page](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) has the timeline, the affected firmware and the migration steps.

## What is Dark Skippy?

Dark Skippy is an attack, published on 5 August 2024 by Lloyd Fournier, Nick Farrow and Robin Linus, in which a signing device running malicious firmware hides its seed in the nonces of the signatures it makes, so that an attacker watching the blockchain can rebuild the seed from as few as two signatures. It needs firmware that has been tampered with, and the researchers reported no use in the wild. The researchers disclosed it privately to about 15 vendors in March 2024. The defences are firmware installed only from the maker and checked against its signing keys, a device nobody else can reach between uses, and anti-exfil signing, which some devices, the Blockstream Jade among them, already use to stop a device choosing its own nonces.

Source: [darkskippy.com](https://darkskippy.com/)

## What was Randstorm?

Randstorm is the name Unciphered gave, on 14 November 2023, to a set of weaknesses in the randomness of wallets generated in web browsers with BitcoinJS and the projects built on it, from 2011 to 2015. BitcoinJS used the JSBN library's `SecureRandom()` until March 2014, and combined with weak `Math.random()` implementations in the browsers of the time, the keys it made were weaker than intended. The effort to attack one varies: Unciphered says wallets generated in 2014 are much harder to break than those from 2012. Its advice is to move any funds in a wallet created that way to a new wallet made with trusted software.

Source: [Unciphered](https://www.unciphered.com/disclosure-of-vulnerable-bitcoin-wallet-library-2/)

## What was Milk Sad?

Milk Sad (CVE-2023-39910) was a flaw in the `bx seed` command of Libbitcoin Explorer 3.x, which generated seeds with the Mersenne Twister generator seeded from 32 bits of the system clock, so every seed it made was one of about 4.3 billion. Versions 3.0.0 to 3.6.0 are confirmed exploitable. Attackers drained about 29.65 BTC on 12 July 2023, and the researchers who disclosed the flaw on 8 August 2023 put the total stolen across coins at over $900,000. Any wallet whose seed came from `bx seed` should be treated as public.

Source: [milksad.info](https://milksad.info/disclosure.html)

## What went wrong with Cake Wallet in 2021?

Cake Wallet versions before 4.1.7, released in 2020 and 2021, created Bitcoin wallets from insecure randomness. The wallets have 12-word seeds in Electrum's format, not BIP39, and Cake Wallet's Monero wallets were not affected. The vendor told users on 11 May 2021 to move their funds to a wallet made with a fixed version. In February 2024 the Milk Sad researchers reported about 8,700 known affected wallets, some of which still held bitcoin more than two and a half years after the warning.

Source: [Milk Sad update 6](https://milksad.info/posts/research-update-6/)

## What leaked from Ledger in 2020?

On 29 July 2020 Ledger disclosed that an outsider had accessed its e-commerce and marketing database on 25 June 2020, exposing about 1 million email addresses and, Ledger said then, the names, postal addresses and phone numbers of 9,500 customers. On 20 December 2020 the data was posted publicly, and it held the names, postal addresses and phone numbers of 272,000 customers. No device, key or fund was touched, but the list has fed phishing emails and fake replacement devices sent to customers, and it tells criminals where hardware wallet owners live. If you bought from any wallet maker, assume your address may be known, never type a seed phrase into anything a message asks you to, and read [physical security](https://selfcustodylabs.com/docs/security/physical-security/).

Sources: [Ledger, July 2020](https://www.ledger.com/addressing-the-july-2020-e-commerce-and-marketing-data-breach), [CoinDesk, December 2020](https://www.coindesk.com/business/2020/12/21/why-ledger-kept-all-that-customer-data-in-the-first-place)

## What were the Electrum phishing servers?

In December 2018 attackers ran many public Electrum servers that answered a transaction broadcast with an error message telling the user to install an "update", which was malware that stole wallets. Electrum versions before 3.3.3 displayed those messages as they arrived; 3.3.3 fixed it, and the developers' advice was to ignore any server message about updates and download only from electrum.org. Malwarebytes estimated in April 2019 that the campaign had taken over 771 BTC. The lesson outlasts Electrum: install wallet software only from its official site and check the signature.

Sources: [Electrum issue 4968](https://github.com/spesmilo/electrum/issues/4968), [Malwarebytes](https://www.malwarebytes.com/blog/news/2019/04/electrum-bitcoin-wallets-under-siege)

## What was the 2013 Android flaw?

On 11 August 2013 the Bitcoin.org alert warned that the component Android used to generate secure random numbers had critical weaknesses, leaving wallet apps that generated keys on the phone open to theft; its incomplete list named Bitcoin Wallet, Blockchain.info, BitcoinSpinner and Mycelium. Apps where a company held the keys were not affected. The fixed apps created new keys and moved the funds to them. A key generated on Android before those updates should not hold bitcoin today.

Source: [Bitcoin.org alert](https://bitcoin.org/en/alert/2013-08-11-android)

## What do these incidents have in common?

Weak randomness is the largest single cause, and it is the one that cannot be fixed afterwards: a seed made weak stays weak whatever firmware runs later. A seed from your own [dice rolls](https://selfcustodylabs.com/docs/learn/keys/random/) does not depend on any generator, and a [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) adds a secret the device never chose. The rest are about trusting what you install and who knows you hold bitcoin: get wallet software and firmware only from the maker and check them, ignore any message asking for your seed phrase, and treat your name and address on a wallet maker's order list as information that may one day be public. The [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/) notes which devices accept dice rolls and use anti-exfil signing.
