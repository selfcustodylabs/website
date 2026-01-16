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
