/**
 * llms-txt: machine-readable mirrors of the docs corpus.
 *
 * Emits three things into the build output, for AI agents and assistants that
 * fetch pages directly rather than through a search index:
 *
 *   /llms.txt                  curated index, grouped by sidebar
 *   /llms-full.txt             the whole corpus in one file
 *   /docs/<path>.md            per-page Markdown mirror beside each index.html
 *
 * Why Markdown mirrors: an assistant reading the HTML pays roughly 5x the
 * tokens for the same words. The source is already Markdown, so the mirror
 * costs one normalization pass.
 *
 * ROUTES COME FROM DOCUSAURUS, NEVER FROM THE FILE PATH.
 * scripts/generate-og-images.py derives URLs from file path and ignores the
 * `slug:` frontmatter, which only works because the 36 docs declaring a slug
 * happen to match their path today. Do not repeat that here. This plugin reads
 * `permalink` out of the docs plugin's own loaded metadata, so slug, id,
 * index.md and README.md are all handled by Docusaurus itself, and then it
 * asserts every permalink against the built `routesPaths`. A drifted route is
 * a hard build failure, not a silent fallback.
 *
 * @module plugins/llms-txt
 */

const fs = require("node:fs/promises");
const path = require("node:path");

const SITE_URL = "https://selfcustodylabs.com";

/**
 * Navigation and presentation chrome. The whole JSX block is dropped: it
 * carries no prose, and its props are link lists already covered by llms.txt.
 */
const DROP_COMPONENTS = [
  "ProgressIndicator",
  "NextSteps",
  "SectionBadge",
  "RelatedArticles",
  "FeaturedImage",
];

/** Layout wrappers around real content. Tags go, the content inside stays. */
const UNWRAP_COMPONENTS = ["Grid", "Tabs", "TabItem"];

/**
 * Sidebar id to display heading for llms.txt sections. Keys must match the
 * sidebar ids in sidebars.js. An unmapped sidebar is a hard error rather than
 * a fallback heading, so adding a tenth sidebar cannot silently produce an
 * index section called "undefined".
 */
const SIDEBAR_LABELS = {
  learn: "Learn: Bitcoin Fundamentals",
  walletSetup: "Wallet Setup",
  security: "Security",
  advanced: "Advanced",
  reference: "Reference",
  bitcoinNode: "Run a Bitcoin Node",
  seedSigner: "SeedSigner",
  nostrSigningDevice: "Nostr Signing Device",
  libreboot: "Libreboot",
  coreboot: "Coreboot",
};

/** Order sections appear in llms.txt: fundamentals first, hardware builds last. */
const SIDEBAR_ORDER = [
  "learn",
  "walletSetup",
  "security",
  "reference",
  "advanced",
  "bitcoinNode",
  "seedSigner",
  "nostrSigningDevice",
  "libreboot",
  "coreboot",
];

const ADMONITION_LABELS = {
  note: "Note",
  tip: "Tip",
  info: "Info",
  warning: "Warning",
  danger: "Danger",
  caution: "Caution",
};

/** A URL always ends in exactly one slash, so routes compare reliably. */
function withSlash(url) {
  return url.endsWith("/") ? url : `${url}/`;
}

/**
 * Convert a doc's raw Markdown source into standalone Markdown.
 *
 * Everything inside a fenced code block is copied verbatim. That is not a nicety:
 * several docs contain Python that starts with `import hashlib,sys`, which a
 * naive import-stripping pass would eat.
 *
 * @param {string} raw - file contents including frontmatter
 * @param {string} permalink - the doc's route, used as the base for relative links
 * @returns {string} normalized Markdown
 */
function normalize(raw, permalink) {
  const lines = raw.split("\n");
  let i = 0;

  // Frontmatter is metadata, and the provenance header replaces it.
  if (lines[0] !== undefined && lines[0].trim() === "---") {
    i = 1;
    while (i < lines.length && lines[i].trim() !== "---") i += 1;
    i += 1;
  }

  // Relative links in the source are URL-relative and extension-less, so they
  // resolve against the page URL the way a browser resolves them. Every page
  // URL carries a trailing slash (trailingSlash: true), so the base does too.
  const base = `${SITE_URL}${withSlash(permalink)}`;

  const out = [];
  let fence = null;
  let dropping = null;

  // Content nested in a layout wrapper is indented to sit under its JSX. Once
  // the wrapper is gone that indentation is a bug, not formatting: four spaces
  // in Markdown means "code block", which silently turned the derivation-path
  // tab headings into preformatted text. Buffer each wrapper region and shift
  // it back by its own minimum indent, which drops the wrapper's offset while
  // preserving any nesting inside it.
  let unwrapDepth = 0;
  let buffer = null;

  const emit = (value) => (buffer === null ? out : buffer).push(value);

  const flushBuffer = () => {
    if (buffer === null) return;
    const indents = buffer
      .filter((line) => line.trim() !== "")
      .map((line) => line.match(/^ */)[0].length);
    const shift = indents.length > 0 ? Math.min(...indents) : 0;
    for (const line of buffer) out.push(shift > 0 ? line.slice(shift) : line);
    buffer = null;
  };

  const UNWRAP_PATTERN = UNWRAP_COMPONENTS.join("|");

  for (; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (fence === null) {
        fence = marker;
      } else if (fence === marker) {
        fence = null;
      }
      emit(line);
      continue;
    }
    if (fence !== null) {
      emit(line);
      continue;
    }

    // Inside a multi-line self-closing component block: swallow to its `/>`.
    if (dropping !== null) {
      if (trimmed.endsWith("/>") || trimmed === `</${dropping}>`) dropping = null;
      continue;
    }

    const openMatch = trimmed.match(/^<([A-Z][A-Za-z0-9]*)/);
    if (openMatch && DROP_COMPONENTS.includes(openMatch[1])) {
      if (!trimmed.endsWith("/>") && !trimmed.endsWith(`</${openMatch[1]}>`)) {
        dropping = openMatch[1];
      }
      continue;
    }

    // ESM imports only. `from` keeps Python `import hashlib,sys` safe even in
    // the unlikely case it appears outside a fence.
    if (/^import\s+.+\s+from\s+/.test(trimmed)) continue;

    // Track wrapper nesting from the untouched line, before the tags are removed.
    const openTags = (line.match(new RegExp(`<(?:${UNWRAP_PATTERN})\\b[^>]*>`, "g")) ?? []).filter(
      (tag) => !tag.endsWith("/>"),
    ).length;
    const closeTags = (line.match(new RegExp(`</(?:${UNWRAP_PATTERN})>`, "g")) ?? []).length;
    const depthBefore = unwrapDepth;
    unwrapDepth = Math.max(0, unwrapDepth + openTags - closeTags);

    let text = line;

    // Layout wrappers: keep the content, surface a TabItem's label as a heading
    // so the tab's meaning survives losing its tab.
    text = text.replace(
      /<TabItem\b[^>]*\blabel=["']([^"']*)["'][^>]*>/g,
      (_m, label) => `**${label}**\n`,
    );
    for (const name of UNWRAP_COMPONENTS) {
      text = text.replace(new RegExp(`</?${name}\\b[^>]*/?>`, "g"), "");
    }

    // Admonitions carry the safety-critical content on pages like keys/seed.
    // Flatten, never drop.
    const admonitionOpen = text.match(/^:::(\w+)[ \t]*(.*)$/);
    if (admonitionOpen) {
      const [, type, title] = admonitionOpen;
      const label = ADMONITION_LABELS[type] ?? type;
      emit(title.trim() ? `**${label}: ${title.trim()}**` : `**${label}**`);
      continue;
    }
    if (/^:::\s*$/.test(text)) continue;

    // A file read on its own has no base URL, so every link must be absolute.
    // Markdown links first, then src/href on the raw HTML the docs mix in:
    // an <img src="/img/..."> is unreachable from a standalone .md otherwise.
    text = text.replace(/\]\((\/[^)]*)\)/g, (_m, href) => `](${SITE_URL}${href})`);
    text = text.replace(/\]\((\.{1,2}\/[^)]*)\)/g, (_m, href) => {
      try {
        return `](${new URL(href, base).href})`;
      } catch {
        return `](${href})`;
      }
    });
    text = text.replace(
      /\b(src|href)=(["'])(\/[^"']*)\2/g,
      (_m, attr, quote, href) => `${attr}=${quote}${SITE_URL}${href}${quote}`,
    );

    if (depthBefore === 0 && unwrapDepth > 0) {
      // Opening line of a region: emit it at its own level, buffer what follows.
      if (text.trim() !== "") out.push(text.trim());
      buffer = [];
      continue;
    }

    emit(text);

    if (depthBefore > 0 && unwrapDepth === 0) flushBuffer();
  }

  flushBuffer();

  return `${out.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/**
 * Fail the build if normalization left anything that only renders inside MDX.
 * Cheaper to catch here than to discover an assistant quoting `<NextSteps`.
 *
 * @param {string} markdown - normalized output
 * @param {string} permalink - route, for the error message
 */
function assertClean(markdown, permalink) {
  const problems = [];
  const outsideFences = markdown
    .split(/^(?:`{3,}|~{3,}).*$/m)
    .filter((_chunk, index) => index % 2 === 0)
    .join("\n");

  if (/<[A-Z][A-Za-z0-9]*/.test(outsideFences)) problems.push("residual JSX component tag");
  if (/^:::/m.test(outsideFences)) problems.push("residual admonition marker");
  if (/\]\(\.{0,2}\//.test(outsideFences.replace(/\]\(https?:\/\//g, "](")))
    problems.push("unresolved relative or root-relative link");
  if (/^---\s*$/m.test(outsideFences.split("\n").slice(0, 3).join("\n")))
    problems.push("frontmatter not stripped");

  if (problems.length > 0) {
    throw new Error(
      `[llms-txt] ${permalink} failed normalization: ${problems.join(", ")}. ` +
        "Fix the normalizer in plugins/llms-txt/index.js rather than relaxing this check.",
    );
  }
}

/**
 * Walk the resolved sidebar trees and return doc id to reading-order index.
 *
 * Docusaurus hands back docs sorted by internal id, which puts
 * "fundamentals/choosing-your-path" above the "fundamentals" index that
 * introduces it. llms.txt exists to convey structure, so it follows the
 * sidebars instead.
 *
 * @param {Record<string, any[]>} sidebars - resolved sidebars, autogenerated already expanded
 * @returns {Map<string, number>} doc id to position
 */
function buildSidebarOrder(sidebars) {
  const order = new Map();
  let position = 0;

  const visit = (items) => {
    for (const item of items ?? []) {
      if (item.type === "doc" && !order.has(item.id)) {
        order.set(item.id, position);
        position += 1;
      } else if (item.type === "category") {
        // A category's own index page should lead the pages it contains.
        if (item.link?.type === "doc" && !order.has(item.link.id)) {
          order.set(item.link.id, position);
          position += 1;
        }
        visit(item.items);
      }
    }
  };

  for (const items of Object.values(sidebars)) visit(items);
  return order;
}

/**
 * @returns {import('@docusaurus/types').Plugin}
 */
module.exports = function llmsTxtPlugin(context) {
  /** @type {any[]} */
  let docs = [];
  /** @type {Record<string, any[]>} */
  let sidebars = {};

  return {
    name: "llms-txt",

    // postBuild does not receive allContent, and contentLoaded only ever sees
    // this plugin's own (empty) content. allContentLoaded is the one hook that is
    // handed every other plugin output, so capture the docs metadata here.
    async allContentLoaded({ allContent }) {
      const docsPlugin = allContent["docusaurus-plugin-content-docs"];
      const instance = docsPlugin?.default;
      const version = instance?.loadedVersions?.[0];
      docs = (version?.docs ?? []).filter((doc) => !doc.draft && !doc.unlisted);
      sidebars = version?.sidebars ?? {};
    },

    async postBuild({ outDir, routesPaths }) {
      if (docs.length === 0) {
        throw new Error(
          "[llms-txt] no docs were captured in contentLoaded. The docs plugin " +
            "content shape changed; check loadedVersions[0].docs.",
        );
      }

      const knownRoutes = new Set(routesPaths.map(withSlash));
      const drifted = docs.filter((doc) => !knownRoutes.has(withSlash(doc.permalink)));
      if (drifted.length > 0) {
        throw new Error(
          `[llms-txt] ${drifted.length} doc permalink(s) are not built routes: ` +
            `${drifted.map((d) => d.permalink).join(", ")}. ` +
            "This is the slug-drift failure mode; do not paper over it.",
        );
      }

      const entries = [];

      for (const doc of docs) {
        const sourcePath = path.join(
          context.siteDir,
          doc.source.replace(/^@site\//, ""),
        );
        const raw = await fs.readFile(sourcePath, "utf8");
        const body = normalize(raw, doc.permalink);
        assertClean(body, doc.permalink);

        const canonical = `${SITE_URL}${withSlash(doc.permalink)}`;
        const updated = doc.lastUpdatedAt
          ? new Date(doc.lastUpdatedAt).toISOString().slice(0, 10)
          : null;

        // Provenance travels with the file: a mirror gets read far from the
        // site that produced it.
        const header = [
          `# ${doc.title}`,
          "",
          `> ${doc.description ?? ""}`,
          "",
          `Source: ${canonical}`,
          updated ? `Last updated: ${updated}` : null,
          "Publisher: Self Custody Labs (https://selfcustodylabs.com)",
          "",
          "---",
          "",
          "",
        ]
          .filter((l) => l !== null)
          .join("\n");

        // The body opens with its own H1; the provenance header supplies one.
        const withoutDuplicateH1 = body.replace(/^#\s+.*\n+/, "");
        const markdown = `${header}${withoutDuplicateH1}`;

        // Mirror lives at <route>.md, the convention agents probe for.
        const mirrorPath = path.join(
          outDir,
          `${doc.permalink.replace(/^\//, "").replace(/\/$/, "")}.md`,
        );
        await fs.mkdir(path.dirname(mirrorPath), { recursive: true });
        await fs.writeFile(mirrorPath, markdown, "utf8");

        entries.push({
          id: doc.id,
          sidebar: doc.sidebar,
          title: doc.title,
          description: doc.description ?? "",
          mirrorUrl: `${SITE_URL}${doc.permalink}.md`,
          markdown,
        });
      }

      const sidebarOrder = buildSidebarOrder(sidebars);
      const lastPlace = Number.MAX_SAFE_INTEGER;
      entries.sort(
        (a, b) => (sidebarOrder.get(a.id) ?? lastPlace) - (sidebarOrder.get(b.id) ?? lastPlace),
      );

      const unmapped = [...new Set(entries.map((e) => e.sidebar))].filter(
        (id) => id && !SIDEBAR_LABELS[id],
      );
      if (unmapped.length > 0) {
        throw new Error(
          `[llms-txt] sidebar(s) with no heading in SIDEBAR_LABELS: ${unmapped.join(", ")}. ` +
            "Add them to plugins/llms-txt/index.js.",
        );
      }

      const intro = [
        "# Self Custody Labs",
        "",
        "> Independent, vendor-neutral guides to Bitcoin self-custody: cold storage,",
        "> hardware wallets, seed phrases, multisig, running your own node, and privacy.",
        "> No affiliate links and no sponsored placement. Every page below is also",
        "> available as Markdown by appending .md to its URL.",
        "",
        `Site: ${SITE_URL}`,
        `Full corpus in one file: ${SITE_URL}/llms-full.txt`,
        `Generated: ${new Date().toISOString().slice(0, 10)}`,
        "",
        "",
      ].join("\n");

      const sections = [];
      const seen = new Set();
      const ordered = [
        ...SIDEBAR_ORDER,
        ...[...new Set(entries.map((e) => e.sidebar))].filter(
          (id) => id && !SIDEBAR_ORDER.includes(id),
        ),
      ];

      for (const sidebarId of ordered) {
        const inSection = entries.filter((e) => e.sidebar === sidebarId);
        if (inSection.length === 0) continue;
        inSection.forEach((e) => seen.add(e));
        sections.push(
          `## ${SIDEBAR_LABELS[sidebarId]}`,
          "",
          ...inSection.map(
            (e) => `- [${e.title}](${e.mirrorUrl})${e.description ? `: ${e.description}` : ""}`,
          ),
          "",
        );
      }

      const orphans = entries.filter((e) => !seen.has(e));
      if (orphans.length > 0) {
        sections.push(
          "## Other",
          "",
          ...orphans.map(
            (e) => `- [${e.title}](${e.mirrorUrl})${e.description ? `: ${e.description}` : ""}`,
          ),
          "",
        );
      }

      await fs.writeFile(
        path.join(outDir, "llms.txt"),
        `${intro}${sections.join("\n")}`,
        "utf8",
      );

      await fs.writeFile(
        path.join(outDir, "llms-full.txt"),
        `${intro}${entries.map((e) => e.markdown).join("\n\n---\n\n")}\n`,
        "utf8",
      );

      // Source file to canonical URL, for scripts/indexnow-submit.mjs. Written
      // beside the repo rather than into outDir so it is not published, and
      // written here so the deploy workflow never has to re-derive a route from
      // a file path, which is the drift bug this plugin exists to avoid.
      const urlMap = Object.fromEntries(
        docs.map((doc) => [
          doc.source.replace(/^@site\//, ""),
          `${SITE_URL}${withSlash(doc.permalink)}`,
        ]),
      );
      await fs.writeFile(
        path.join(context.siteDir, ".indexnow-urls.json"),
        `${JSON.stringify(urlMap, null, 2)}\n`,
        "utf8",
      );

      console.log(
        `[llms-txt] wrote llms.txt, llms-full.txt and ${entries.length} Markdown mirrors`,
      );
    },
  };
};
