/**
 * Dated advisories: incidents that change what someone holding bitcoin should
 * do now, not news. The first entry is the current one: it is the homepage
 * bulletin and, through docusaurus.config.js, the site-wide announcement bar.
 *
 * Retiring an advisory: remove it here and the bar goes with it. Adding one:
 * put it first and give it a new `id` (the bar's dismissal is remembered per
 * id, so a new id shows it again to everyone who closed the last one).
 *
 * `summary` is plain text. `bar` is the one-line HTML for the announcement bar,
 * whose links are raw strings the build's link checker never sees: check them
 * by hand after an edit.
 */
export const advisories = [
  {
    id: "coldcard_rng_2026",
    date: "2026-08-01",
    title: "Coldcard seeds made between March 2021 and July 2026 may be guessable",
    summary:
      "A firmware build error made Coldcard seeds guessable for 1,978 days. Between 30 July and 4 August 2026 attackers swept about 1,816 BTC from more than 5,200 addresses. Updating the firmware does not repair a seed that already exists: if a Coldcard generated yours in that window, move the funds to a new seed.",
    links: [
      { to: "/docs/learn/wallets/coldcard-entropy-incident/", label: "Am I affected?" },
      { to: "/docs/learn/keys/random/", label: "Make a seed with dice" },
      { to: "/docs/learn/keys/passphrase/", label: "Add a passphrase" },
    ],
    bar:
      '<span class="scl-advisory">Advisory · 1 Aug 2026</span><strong>Coldcard seeds made 2021 to 2026 may be guessable</strong>, and new firmware does <strong>not</strong> fix an existing seed. <a href="/docs/learn/wallets/coldcard-entropy-incident/">Am I affected?</a> · Make your own: <a href="/docs/learn/keys/random/">dice seed</a> and <a href="/docs/learn/keys/passphrase/">passphrase</a>.',
  },
];

export const currentAdvisory = advisories[0] ?? null;
