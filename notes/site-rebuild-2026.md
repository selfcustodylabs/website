# What changed in the October 2026 rebuild

> In October 2026 we rebuilt the site: every guide rewritten and dated, a design that matches our diagrams, private search, and lighter pages that load faster.

Source: https://selfcustodylabs.com/notes/site-rebuild-2026/
Published: 2026-10-26
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

In October 2026 we rebuilt Self Custody Labs: how it looks, how it is built, and the text of every guide. No page moved, so every link to the site still works. This note lists what changed.

## What changed in the guides?

All 97 pages were edited for facts and for voice.

On facts, claims that go out of date now carry the date they were checked: prices, firmware versions, release numbers and recommendations. Pages that had drifted were corrected. The firmware pages, for example, said Libreboot removes the Intel Management Engine; on the ThinkPads they cover it neutralises it, which is different, and the Libreboot guide now follows the current release.

On voice, the pages had collected filler: boxes listing what you were about to learn, summary sections that repeated the page, emoji in headings, and bold at the start of every bullet. That is gone, and the build now fails if it comes back. Each page opens with the answer to the question in its title, and its headings are the questions people ask.

Hands-on guides now show a facts line under the opening paragraph: time, cost, difficulty and when the guide last changed, plus the date we last re-checked it against current sources where we have. A guide is marked verified only when we have done it on real hardware.

## What does the site look like now?

The design follows our own diagrams and preview cards: dark paper, hairline rules, monospaced labels, amber only for the thing being explained, and photographs of the actual hardware. Pages print cleanly, with every collapsed section opened, so the dice and multisig guides can be worked from on paper, away from a computer.

## Are the pages faster?

Yes. Search now uses Pagefind, which loads a few small pieces of the index for each search instead of one 3.4 MB file, and your query never leaves the browser. The site's fonts now load, from this domain, photographs are resized and stripped of camera metadata, and the interface libraries the old homepage needed are gone.

## What did not change?

The [positions on the about page](https://selfcustodylabs.com/about/) are the same, and so is the independence: no affiliate links, no sponsors, and no money from the companies we write about. These field notes are new: dated posts about changes like this one, with an [RSS feed](https://selfcustodylabs.com/notes/rss.xml).
