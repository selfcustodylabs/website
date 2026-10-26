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
// The Coldcard advisory of 1 August 2026 was retired on 26 October 2026; its
// canonical page is /docs/learn/wallets/coldcard-entropy-incident/.
export const advisories = [];

export const currentAdvisory = advisories[0] ?? null;
