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
          "No. Your public address is safe to share—it only allows people to send you Bitcoin. To spend Bitcoin, you need the private key, which is derived from your seed phrase.",
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
          "For beginners, we recommend Trezor Safe 3 or BitBox02 for their ease of use. For maximum security, Coldcard is preferred by serious Bitcoiners. All reputable hardware wallets are significantly safer than keeping Bitcoin on an exchange.",
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
          "A 24-word BIP39 seed represents 256 bits of entropy. Brute-forcing it would require trying 2^256 combinations — more than the number of atoms in the observable universe. No amount of computing power, including quantum computers, can guess a properly generated seed phrase in any practical timeframe.",
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
          "Stop all communication with the scammer immediately, do not pay additional fees, document everything, and report the incident to your local cybercrime authority and the platform where you found the scammer. Do not engage a second 'recovery' service to recover funds lost to the first — these are also scams.",
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
