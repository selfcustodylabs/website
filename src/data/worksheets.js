/**
 * The printable worksheets at /worksheets/, in the order the index lists them.
 *
 * Each sheet is a page at /worksheets/<slug>/ (src/pages/worksheets/<slug>.jsx)
 * and two PDFs, static/worksheets/<slug>-a4.pdf and <slug>-letter.pdf, printed
 * from the built page by scripts/build-worksheets.mjs. npm run check fails if a
 * sheet here is missing either PDF.
 *
 * Every sheet is a paper form: nothing is ever typed into the site. `warning`
 * is printed on the paper itself, because the paper is what ends up in a
 * drawer: what the filled-in sheet is, and how to keep or destroy it.
 *
 * @type {{
 *   slug: string,
 *   title: string,
 *   heading: string,
 *   label: string,
 *   description: string,
 *   use: string,
 *   guide: [string, string],
 *   warning?: string,
 * }[]}
 */
export const worksheets = [
  {
    slug: "dice-seed",
    title: "Dice Seed Worksheet: 24 Words from 256 Rolls",
    heading: "Dice seed worksheet",
    label: "Dice seed",
    description:
      "A printable grid for making a 24-word BIP39 seed with dice: 256 bit boxes in 24 rows, powers of two for each decimal, and a column for every word.",
    use: "Write one die result per box (1, 2 or 3 is a 0; 4, 5 or 6 is a 1), add up the powers of two above each 1 to get the row's number, and look the number up in the BIP39 word list. Row 24 waits for the checksum.",
    guide: ["/docs/learn/keys/random/", "Generate your own seed phrase with dice"],
    warning:
      "Filled in, this sheet is your seed phrase: anyone who sees it can take your bitcoin. Never photograph it. Once the words are on metal and checked against it, burn it.",
  },
  {
    slug: "diceware-passphrase",
    title: "Diceware Passphrase Worksheet",
    heading: "Diceware passphrase worksheet",
    label: "Diceware passphrase",
    description:
      "A printable sheet for a six-word BIP39 passphrase from the EFF word list: five dice per word, the word itself, its length, and a record of the test.",
    use: "Roll five dice per word, read them left to right, find that number in the EFF long word list, and write the word. Six words, no rerolls.",
    guide: ["/docs/learn/keys/passphrase/", "Make a passphrase with dice"],
    warning:
      "Filled in, this sheet is your passphrase. Never keep it in the same place as the seed phrase: a thief who finds both can spend everything.",
  },
  {
    slug: "multisig-record",
    title: "Multisig Record Sheet: Keys, Fingerprints, Places",
    heading: "Multisig record",
    label: "Multisig record",
    description:
      "A printable record for a 2-of-3 multisig: each key's device, fingerprint, firmware and storage place, and where every copy of the descriptor is kept.",
    use: "Fill in one block per key as you set the devices up, then the wallet details once Sparrow has built the multisig. It holds no secrets, but it says where your keys are.",
    guide: ["/docs/learn/wallets/multisig/hardware-setup/", "Multisig hardware setup"],
    warning:
      "No seed words or PINs on this sheet. It still says where every key is, so keep it apart from the seed backups.",
  },
  {
    slug: "backup-check",
    title: "Backup Verification Worksheet",
    heading: "Backup verification",
    label: "Backup check",
    description:
      "A printable sheet for testing a seed backup: what the wallet should show before the restore, what the restored wallet shows, and when to test again.",
    use: "Fill in the first half from the working wallet before you restore anything, the second half from the wallet restored from your written backup, and compare the two.",
    guide: ["/docs/wallet-setup/backup-verification/", "Verify your backup"],
    warning: "Addresses and fingerprints only. Never write seed words or the passphrase on this sheet.",
  },
  {
    slug: "before-you-deposit",
    title: "Before You Deposit: Printable Checklist",
    heading: "Before you deposit",
    label: "Before you deposit",
    description:
      "The checks to finish before moving bitcoin to a new hardware wallet, as a printable list: seed, tested backup, passphrase, address, device, test send.",
    use: "Tick each check as you finish it. If any box stays empty, do not deposit yet: waiting costs nothing.",
    guide: ["/docs/wallet-setup/before-you-deposit/", "Before you deposit"],
  },
  {
    slug: "inheritance-letter",
    title: "Bitcoin Inheritance Letter Template",
    heading: "Bitcoin inheritance instructions",
    label: "Inheritance letter",
    description:
      "A printable letter for your heirs: what they inherit, what they need, how to reach the funds with Sparrow, who to call, and where each key is kept.",
    use: "Fill it in by hand for a 2-of-3 multisig held with Sparrow, keep it with your estate documents, and walk your heir through it with a test amount.",
    guide: ["/docs/advanced/inheritance-planning/", "Inheritance planning"],
    warning:
      "Never write seed phrases, PINs or the passphrase in this letter. It tells your heirs where the keys are and how to use them, not what they are.",
  },
];

/** @param {string} slug */
export function getWorksheet(slug) {
  const sheet = worksheets.find((w) => w.slug === slug);
  if (!sheet) throw new Error(`[worksheets] no worksheet "${slug}" in src/data/worksheets.js`);
  return sheet;
}
