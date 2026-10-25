/**
 * The site's standing positions, shown on the homepage and on /about/.
 *
 * One source so the two pages cannot disagree. When a stance changes, change
 * it here, rewrite the reasoning on the linked page, and say what changed
 * (CLAUDE.md: /about is the entity page an assistant reads to judge us).
 *
 * `stance` starts lower case unless it starts with a name: /about/ prints it
 * after a colon ("Coldcard: warned, not recommended") and the homepage
 * capitalises the first letter in CSS.
 *
 * `text` is plain text with Markdown-style links, `[label](/path/)`, rendered
 * by src/components/InlineLinks.jsx. Nothing else of Markdown is supported.
 */
export const positions = [
  {
    subject: "Coldcard",
    stance: "warned, not recommended",
    text: "The [2026 entropy incident](/docs/learn/wallets/coldcard-entropy-incident/) drained roughly 1,816 BTC from more than 5,200 addresses through a seed-generation flaw that went undetected for 1,978 days, after a developer's warning about the same code was dismissed in 2025. Coinkite fixed it quickly once draining began. We still point new buyers elsewhere.",
  },
  {
    subject: "SeedSigner",
    stance: "our favourite, with a caveat",
    text: "Stateless, air-gapped, fully verifiable, and built from commodity parts for about $50. It is also [not a beginner's device](/docs/seedsigner/), and we say so on every page that mentions it.",
  },
  {
    subject: "Entropy",
    stance: "dice first",
    text: "For any holding you would be upset to lose, [generate the seed yourself](/docs/learn/keys/random/) rather than trusting a vendor's random number generator.",
  },
  {
    subject: "Bitkey",
    stance: "covered, not recommended",
    text: "It is a real product that people ask about, so it appears in the [comparison](/docs/reference/hardware-wallet-comparison/). It is not what we would set up.",
  },
  {
    subject: "CoinJoin",
    stance: "JoinMarket NG with Jam",
    text: "After the 2024 to 2026 shakeout, the [coordinator-free option](/docs/learn/privacy/coinjoin/) is the one with nothing to seize. Whirlpool's Ashigaru revival is covered but not recommended.",
  },
];
