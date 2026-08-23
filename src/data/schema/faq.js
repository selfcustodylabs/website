/**
 * FAQ Schema.org structured data for FAQ pages
 *
 * @module schema/faq
 */

/**
 * FAQ schemas keyed by URL path
 * Each schema contains an array of question/answer pairs
 */
export const faqSchemas = {
  "/docs/reference/faq/": {
    questions: [
      {
        question: "What happens if I lose my seed phrase?",
        answer:
          "If you lose your seed phrase and your hardware wallet breaks, your Bitcoin is lost forever. There is no recovery mechanism. This is why proper backup verification is critical before depositing funds.",
      },
      {
        question: "Can someone steal my Bitcoin if they know my public address?",
        answer:
          "No. Your public address is safe to share: it only allows people to send you Bitcoin. To spend Bitcoin, you need the private key, which is derived from your seed phrase.",
      },
      {
        question: "Do I need to run my own Bitcoin node?",
        answer:
          "Not required, but recommended for privacy. Without your own node, you must trust a third-party server to provide accurate blockchain data. Running a node lets you verify everything yourself.",
      },
      {
        question: "What is a passphrase (25th word)?",
        answer:
          "A passphrase is an optional extra word you add to your 24-word seed phrase. It creates a completely different wallet, providing plausible deniability and an extra layer of security. If you forget it, funds in the passphrase-protected wallet are unrecoverable.",
      },
      {
        question: "Which hardware wallet should I buy?",
        answer:
          "For beginners, we recommend the BitBox02 Nova or Trezor Safe 5 for their ease of use. For verifiable security, the Blockstream Jade Plus or Passport Prime paired with dice-roll entropy. Coldcard is not currently recommended following the 2026 entropy incident. Any of these is significantly safer than keeping Bitcoin on an exchange.",
      },
      {
        question: "Is it safe to buy a hardware wallet from Amazon?",
        answer:
          "We recommend buying directly from the manufacturer to avoid tampered devices. If you must buy elsewhere, verify the device authenticity using the manufacturer tools and check for signs of tampering before use.",
      },
      {
        question: "How much Bitcoin do I need before self-custody makes sense?",
        answer:
          "Any amount you would be upset to lose deserves proper self-custody. A hardware wallet costs around $80-150, which is worthwhile protection for holdings above $500-1000. For smaller amounts, a mobile software wallet is acceptable while learning.",
      },
      {
        question: "What is multisig and do I need it?",
        answer:
          "Multisig requires multiple keys to spend Bitcoin (e.g., 2-of-3 keys). It eliminates single points of failure but adds complexity. Recommended for holdings over $100,000 or users with elevated security concerns.",
      },
    ],
  },

  "/docs/reference/faq/lost-seed/": {
    questions: [
      {
        question: "Can I recover my Bitcoin if I lost my seed phrase?",
        answer:
          "If your seed phrase is lost and your hardware wallet is also lost, broken, or wiped, your Bitcoin is permanently inaccessible. There is no backdoor, no customer support, and no recovery service that can recover funds without the seed phrase. The only path to recovery is finding the original seed phrase backup or an unwiped device that still holds the keys.",
      },
      {
        question: "Why is seed phrase recovery mathematically impossible?",
        answer:
          "A 24-word BIP39 seed represents 256 bits of entropy. Brute-forcing it would require trying 2^256 combinations, more than the number of atoms in the observable universe. No amount of computing power, including quantum computers, can guess a properly generated seed phrase in any practical timeframe.",
      },
      {
        question: "Are seed phrase recovery services legitimate?",
        answer:
          "No. Any service claiming to recover a lost seed phrase from a hardware wallet, exchange, or address is a scam. Real recovery is mathematically impossible without the seed. Legitimate services only help with related issues such as guessing a forgotten passphrase that is partially remembered, or repairing damaged devices that still contain key material.",
      },
      {
        question: "What should I do right now to prevent losing my seed phrase?",
        answer:
          "Write your seed phrase on metal (not paper), store it in at least two geographically separated locations, perform a recovery test before depositing significant funds, and avoid storing it digitally in any form. Consider a 2-of-3 multisig setup if you cannot tolerate losing access to a single backup.",
      },
    ],
  },

  "/docs/reference/faq/recovery-scams/": {
    questions: [
      {
        question: "How do Bitcoin recovery scams work?",
        answer:
          "Scammers contact victims through search ads, social media, and forums claiming they can recover lost or stolen Bitcoin. They charge upfront fees, ask for sensitive information such as seed phrases or wallet files, then disappear or demand more payment. No legitimate service can recover Bitcoin from a lost seed phrase.",
      },
      {
        question: "Can a hacker really recover my stolen Bitcoin?",
        answer:
          "No. Once Bitcoin moves to an address controlled by a thief, only the thief's private key can move it again. No hacker, government agency, or recovery service can reverse a confirmed Bitcoin transaction or extract keys from an address.",
      },
      {
        question: "Are there any legitimate Bitcoin recovery services?",
        answer:
          "A small number of services help with narrow problems: guessing a forgotten passphrase you partially remember, brute-forcing weak passwords on encrypted wallet files, or repairing physically damaged devices that still contain keys. They never claim to recover funds from a lost seed phrase, and they work transparently with verifiable references.",
      },
      {
        question: "What should I do if I have been scammed by a recovery service?",
        answer:
          "Stop all communication with the scammer immediately, do not pay additional fees, document everything, and report the incident to your local cybercrime authority and the platform where you found the scammer. Do not engage a second 'recovery' service to recover funds lost to the first: these are also scams.",
      },
    ],
  },

  "/docs/reference/faq/recovery-troubleshooting/": {
    questions: [
      {
        question: "Why does my recovered wallet show a zero balance?",
        answer:
          "The most common cause is using the wrong derivation path or address type during recovery. Try restoring with the correct BIP44/49/84/86 path that matches your original wallet, and verify you are using the same script type (Legacy, Nested SegWit, Native SegWit, or Taproot). If you used a passphrase, you must enter the exact same passphrase to access the original wallet.",
      },
      {
        question: "Why does my recovered wallet show different addresses than expected?",
        answer:
          "Different wallets use different default derivation paths. Restoring a Trezor seed in Electrum or vice versa often produces addresses that look unfamiliar but are mathematically valid. Check the derivation path setting and try the standards your original wallet used.",
      },
      {
        question: "What if my recovery only finds some of my funds?",
        answer:
          "Your remaining funds may live on a different account index, derivation path, or under a passphrase. Check all standard derivation paths, increase the address gap limit beyond the default 20, and verify you have not used multiple passphrases on the same seed.",
      },
      {
        question: "When should I seek professional help with wallet recovery?",
        answer:
          "Seek expert help only after you have systematically checked derivation paths, address types, gap limits, and passphrases yourself. Use reputable open-source tools and avoid any service that asks for your full seed phrase. For multisig recovery, prefer the original wallet software and your own backups before contacting a third party.",
      },
    ],
  },

  // The four pages below carry no FAQ section on the page itself; these pairs
  // exist because a question-and-answer is the most directly retrievable shape
  // there is, and these are the queries assistants actually get asked about
  // this site's subject matter. Answers must stay in sync with the page.
  "/docs/reference/hardware-wallet-comparison/": {
    questions: [
      {
        question: "What is the best Bitcoin hardware wallet in 2026?",
        answer:
          "There is no single best device, and after the 2026 Coldcard entropy incident the practices matter more than the hardware. For beginners the Trezor Safe 5 ($169) or BitBox02 Nova (~$185) are the easiest to use safely. For verifiable security on a budget, the Blockstream Jade Plus ($149) offers QR air-gapping. SeedSigner is our favourite for people comfortable building their own device, though it is explicitly not for beginners. Whichever you pick, supply your own dice entropy at seed creation, add a passphrase, and use multisig across vendors for significant holdings.",
      },
      {
        question: "Is Coldcard still safe to use in 2026?",
        answer:
          "Self Custody Labs does not currently recommend Coldcard. A build-system error meant Coldcards generated seeds with a software pseudo-random generator instead of the hardware TRNG between March 2021 and July 2026, and roughly 1,816 BTC was drained from more than 5,200 addresses. Coinkite shipped fixes quickly once draining began, but it had dismissed a developer's warning about the same code in May 2025. Devices are safe to use with an externally generated or dice-generated seed, but we point new buyers elsewhere.",
      },
      {
        question: "Do I need a secure element in a hardware wallet?",
        answer:
          "Not necessarily. A secure element resists physical extraction of your seed if someone steals the device, which matters if physical theft is in your threat model. Devices without one, such as the Blockstream Jade Plus, use a blind oracle design instead and are fully open source and verifiable. The 2026 Coldcard incident is the reminder that a secure element does not help if the seed was weak to begin with.",
      },
      {
        question: "Should I use dice to generate my Bitcoin seed phrase?",
        answer:
          "Yes, for any holding you would be upset to lose. Every current hardware wallet supports mixing in your own dice rolls at seed creation. Coldcard owners who used dice entropy lost nothing in the 2026 incident, while owners who trusted the device default lost everything. Dice entropy removes your dependence on the vendor's random number generator being correct.",
      },
    ],
  },

  "/docs/learn/wallets/coldcard-entropy-incident/": {
    questions: [
      {
        question: "What was the 2026 Coldcard entropy incident?",
        answer:
          "From firmware v4.0.1 in March 2021, a linker error made Coldcard devices generate seed phrases using Yasmarang, a software pseudo-random generator meant as a fallback, instead of the hardware true random number generator. The generator was seeded from almost nothing: a chip ID recoverable from the USB serial number, a millisecond counter, and a clock register that read zero on Mk2 and Mk3 devices. Attackers began draining wallets on 30 July 2026, taking roughly 1,816 BTC (about $116M) from more than 5,200 addresses. The bug was undetected for 1,978 days.",
      },
      {
        question: "Is my Coldcard wallet affected by the entropy bug?",
        answer:
          "It depends on how and when the seed was created, not on the firmware running today. At critical risk: seeds generated on-device on Mk2 or Mk3 with firmware 4.0.1 to 4.1.9. At risk: seeds generated on-device on Mk4 or Mk5 before 5.6.0, or Q before 1.5.0Q. Not affected: seeds generated with 50 or more dice rolls, seeds imported from elsewhere, seeds generated before March 2021, seeds generated on fixed firmware, and TAPSIGNER, SATSCARD or OPENDIME devices.",
      },
      {
        question: "Does a BIP39 passphrase protect me from the Coldcard bug?",
        answer:
          "It helped but it is not a pass. Wallets with a strong, unique passphrase were not drained, because the attacker would have to brute-force the passphrase on top of the recovered seed. That barrier visibly saved people. Your foundation is still a weak seed, so migrate to a newly generated one anyway. The passphrase bought time, not safety.",
      },
      {
        question: "Were Coldcard signatures affected, or only seed generation?",
        answer:
          "Only seed generation. Coldcard uses deterministic nonces per RFC 6979 when signing, so transactions signed by an affected device leaked nothing about the private key. The flaw lived entirely in the path that created the seed.",
      },
    ],
  },

  "/docs/learn/privacy/coinjoin/": {
    questions: [
      {
        question: "What is a Bitcoin CoinJoin?",
        answer:
          "A CoinJoin is a single Bitcoin transaction in which several users combine their inputs and each receives an equal-sized output, so an outside observer cannot match inputs to outputs. Think of ten people each dropping an identical note into a hat, shaking it, and each taking one back out: everyone leaves with what they put in, but nobody watching can say which note went to whom.",
      },
      {
        question: "Does Whirlpool still work in 2026?",
        answer:
          "The original Whirlpool is dead and a revival exists under new management. US authorities seized Samourai Wallet's coordinator in April 2024 and every Whirlpool client stopped mixing the same day; Sparrow Wallet removed its integration shortly after. In June 2025 Ashigaru, an open-source fork run by anonymous maintainers, launched an independent Whirlpool coordinator reachable over Tor. Self Custody Labs covers it but does not recommend it, because it reintroduces the coordinator risk that caused the original failure.",
      },
      {
        question: "Which CoinJoin implementation should I use in 2026?",
        answer:
          "Self Custody Labs recommends JoinMarket NG with the Jam web interface. JoinMarket NG has no coordinator at all: it is a peer-to-peer market where takers pay a fee to mix on demand and makers earn those fees, so there is nothing to seize and nobody to subpoena. Jam turns what used to be a command-line tool into a point-and-click app that ships on most node-in-a-box platforms. It requires your own Bitcoin node, and per-round anonymity sets are typically 4 to 20 participants, so plan on several rounds.",
      },
      {
        question: "Is CoinJoin legal?",
        answer:
          "CoinJoin is a privacy technique, not an offence in itself, and financial privacy is a normal expectation in every other part of life. That said, the 2024 to 2026 period saw operators of custodial and coordinated mixing services prosecuted in the United States, and some exchanges flag deposits with CoinJoin history. Understand your own jurisdiction and the policies of any exchange you use before mixing.",
      },
    ],
  },

  "/docs/learn/wallets/multisig/": {
    questions: [
      {
        question: "What is a Bitcoin multisig wallet?",
        answer:
          "A multisig wallet requires more than one key to spend, written as M-of-N: M signatures out of N total keys. A 2-of-3 wallet has three keys and any two can authorise a spend, so losing one key does not lose the funds and stealing one key does not steal them. Each key normally lives on a separate hardware wallet in a separate location.",
      },
      {
        question: "Do I need multisig for my Bitcoin?",
        answer:
          "Not for everything. Multisig suits significant holdings you would be devastated to lose, long-term vault storage, business funds needing multiple approvals, and inheritance planning, and it assumes you have several secure storage locations. It is unnecessary for amounts under roughly $10,000, for daily spending funds, and for anyone still learning basic self-custody, where the added complexity is itself a risk of loss.",
      },
      {
        question: "What multisig configuration should I use?",
        answer:
          "2-of-3 is the most popular choice for individual self-custody: it tolerates the loss of any single key while requiring an attacker to compromise two. 3-of-5 suits high-value holdings and organizations. 2-of-2 gives shared control with no fault tolerance, so a single lost key is fatal. Use hardware wallets from different manufacturers so no single vendor's mistake can reach your funds.",
      },
      {
        question: "Does multisig protect against a hardware wallet vulnerability?",
        answer:
          "Yes, and the 2026 Coldcard entropy incident demonstrated it. Where one key in a 2-of-3 quorum was a weak Coldcard seed, the attacker still could not spend, because they needed a second signature. This is precisely the failure mode multisig exists for. The weak key should still be replaced, but the funds were never at risk.",
      },
    ],
  },
};

/**
 * Generate FAQPage schema JSON-LD for a given path
 *
 * @param {string} path - URL path to generate schema for
 * @returns {Object|null} JSON-LD FAQPage schema or null if not found
 */
export function generateFAQSchema(path) {
  const schema = faqSchemas[path];
  if (!schema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schema.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
