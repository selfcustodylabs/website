/**
 * structured-data: HowTo steps and FAQ entries read from the docs themselves.
 *
 * Until Oct 2026 these lived in hand-kept tables (src/data/schema/howTo.js and
 * faq.js) that repeated each page's steps and answers in other words, and drifted:
 * step links pointed at headings that had been renamed, and answers quoted prices
 * the page no longer showed. Structured data has to match what the page shows,
 * so it now comes from the page:
 *
 *   HowTo  every H2 of the form "Step N: ..." is a step; its text is the first
 *          paragraph (or list) under it, its url the heading's anchor.
 *          A guide that spans several pages (src/data/progressData.js) gets one
 *          step per page on its first page, from each page's title and
 *          description, unless that page has in-page steps of its own.
 *   FAQ    an H2 "Common questions" followed by H3 questions; each answer is the
 *          prose under the question.
 *
 * Written with createData and imported only by src/theme/DocItem/Layout, the
 * same pattern and reason as plugins/site-index. postBuild checks that every
 * step anchor exists in the built page, because a heading id computed here that
 * disagrees with the one Docusaurus rendered would be a dead link that no other
 * check sees (onBrokenAnchors does not read JSON-LD).
 *
 * @module plugins/structured-data
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import GithubSlugger from "github-slugger";

import { getAllGuides } from "../../src/data/progressData.js";

const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

const STEP = /^Step\s+(\d+)\s*[:.]\s*(.+)$/;
const FAQ_HEADING = /^(common|frequently asked) questions$/i;

/** Inline Markdown to plain text: what a reader sees, without the markup. */
function plain(md) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/(^|[^\w*])[*_]([^*_]+)[*_](?=[^\w*]|$)/g, "$1$2")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split "Title {#id}" into its text and explicit id, as Docusaurus does. */
function headingParts(raw) {
  const m = raw.match(/^(.*?)\s*\{#([\w-]+)\}\s*$/);
  return m ? { text: m[1], id: m[2] } : { text: raw, id: null };
}

/**
 * The doc body as blocks: headings with their anchor ids, and the prose blocks
 * between them. Fenced code, admonition markers, JSX lines, images and tables
 * are skipped, since none of them is an answer an assistant should quote.
 *
 * @param {string} body - Markdown without frontmatter
 */
function blocks(body) {
  const slugger = new GithubSlugger();
  const out = [];
  let fence = null;
  let para = [];
  const flush = () => {
    if (para.length) out.push({ type: "text", lines: para });
    para = [];
  };

  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    const f = trimmed.match(/^(`{3,}|~{3,})/);
    if (f) {
      flush();
      if (fence === null) {
        fence = f[1][0];
        out.push({ type: "code" });
      } else if (fence === f[1][0]) fence = null;
      continue;
    }
    if (fence !== null) continue;

    const h = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (h) {
      flush();
      const { text, id } = headingParts(h[2]);
      const shown = plain(text);
      // Same order of calls as the docs plugin, so duplicate titles get the
      // same -1, -2 suffixes; an explicit id is registered as used.
      const anchor = id ? slugger.slug(id, true) : slugger.slug(shown);
      out.push({ type: "heading", level: h[1].length, text: shown, anchor });
      continue;
    }
    if (trimmed === "" || /^(:::|<|!\[|\|)/.test(trimmed) || /^import\s/.test(trimmed)) {
      flush();
      continue;
    }
    para.push(trimmed);
  }
  flush();
  return out;
}

/** A prose block as one string: list items joined, sentences kept whole. */
function blockText(lines) {
  return plain(
    lines
      .map((l) => l.replace(/^([-*]|\d+\.)\s+/, ""))
      .map((l) => (/[.:;!?]$/.test(l) ? l : `${l};`))
      .join(" ")
      .replace(/;$/, "."),
  );
}

function inPageSteps(list) {
  const steps = [];
  list.forEach((b, i) => {
    if (b.type !== "heading" || b.level !== 2) return;
    const m = b.text.match(STEP);
    if (!m) return;
    // The first prose under the heading; a sentence ending in a colon
    // introduces a list, so the list comes with it. A code block ends the
    // run: the sentence that introduced it ("Run:") is dropped when there is
    // one before it, otherwise its colon becomes a full stop.
    const parts = [];
    for (const x of list.slice(i + 1)) {
      if (x.type !== "text") break;
      parts.push(blockText(x.lines));
      if (!parts.at(-1).endsWith(":")) break;
    }
    let text = parts.join(" ");
    if (text.endsWith(":")) {
      const cut = text.slice(0, -1).search(/[.!?]\s[^.!?]*$/);
      text = cut > 0 ? text.slice(0, cut + 1) : text.replace(/:$/, ".");
    }
    steps.push({ name: m[2], text: text || m[2], anchor: b.anchor });
  });
  return steps;
}

function faqEntries(list) {
  const start = list.findIndex((b) => b.type === "heading" && b.level === 2 && FAQ_HEADING.test(b.text));
  if (start < 0) return [];
  const entries = [];
  for (const b of list.slice(start + 1)) {
    if (b.type === "heading" && b.level <= 2) break;
    if (b.type === "heading" && b.level === 3) entries.push({ question: b.text, parts: [] });
    else if (b.type === "text" && entries.length) entries.at(-1).parts.push(blockText(b.lines));
  }
  return entries
    .filter((e) => e.parts.length)
    .map((e) => ({ question: e.question, answer: e.parts.join(" ") }));
}

export default function structuredDataPlugin(context) {
  let pages = {};

  return {
    name: "structured-data",

    async allContentLoaded({ allContent, actions }) {
      const version = allContent["docusaurus-plugin-content-docs"]?.default?.loadedVersions?.[0];
      if (!version) throw new Error("[structured-data] docs plugin content not found");
      const docs = version.docs.filter((d) => !d.draft && !d.unlisted);
      const byPermalink = new Map(docs.map((d) => [withSlash(d.permalink), d]));

      pages = {};
      for (const doc of docs) {
        const file = join(context.siteDir, doc.source.replace(/^@site\//, ""));
        const body = readFileSync(file, "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
        const list = blocks(body);
        const steps = inPageSteps(list);
        const faq = faqEntries(list);
        const entry = {};
        if (steps.length >= 2) entry.steps = steps.map((s) => ({ ...s, url: `${withSlash(doc.permalink)}#${s.anchor}` }));
        if (faq.length) entry.faq = faq;
        if (Object.keys(entry).length) pages[withSlash(doc.permalink)] = entry;
      }

      // Guides spread over several pages: one step per page, on the first page.
      for (const guide of Object.values(getAllGuides())) {
        const first = withSlash(guide.steps[0].path);
        if (pages[first]?.steps) continue;
        // The first page is the guide's overview and carries the HowTo itself,
        // so the steps are the pages after it.
        const steps = guide.steps.slice(1).map(({ path }) => {
          const doc = byPermalink.get(withSlash(path));
          if (!doc) throw new Error(`[structured-data] progressData step ${path} is not a doc`);
          return { name: doc.title, text: doc.description, url: withSlash(path) };
        });
        pages[first] = { ...pages[first], steps };
      }

      await actions.createData("structured-data.json", JSON.stringify(pages));
    },

    async postBuild({ outDir }) {
      const missing = [];
      for (const [permalink, { steps = [] }] of Object.entries(pages)) {
        for (const { url } of steps) {
          const [path, anchor] = url.split("#");
          if (!anchor) continue;
          const html = join(outDir, path, "index.html");
          if (!existsSync(html) || !readFileSync(html, "utf8").includes(`id="${anchor}"`)) {
            missing.push(`${permalink}: #${anchor}`);
          }
        }
      }
      if (missing.length) {
        throw new Error(`[structured-data] HowTo step anchors not found in the built page:\n  ${missing.join("\n  ")}`);
      }
    },
  };
}
