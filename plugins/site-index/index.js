/**
 * site-index: one data module describing every doc, for the pages that list
 * them (/, /learn/, /guides/).
 *
 * Captures the docs plugin's own metadata in allContentLoaded (the same hook
 * and the same reason as plugins/llms-txt: it is the only one handed other
 * plugins' content) and writes it with createData, so the landing pages import
 * it as `@generated/site-index/default/site-index.json`.
 *
 * Why createData and not setGlobalData: global data is bundled into every page
 * of the site. Only three pages need this, and a doc page should not download
 * the description of every other doc.
 *
 * Shape:
 *   docs:     { [permalink]: { title, name, lead, brief, eyebrow, plate, band, label,
 *               description, sidebar, order, guide, updated } }
 *   sidebars: { [sidebarId]: [{ label, link, items: [permalink] }] }
 *   notes:    [{ permalink, title, description, date, plate, band }], newest first
 *             (field notes, from the blog plugin, for the homepage)
 *   plates:   { "/" | "/learn/" | "/guides/": plate } for the landing covers
 *
 * What the lists show is read from the page, like plugins/structured-data, so
 * a listing cannot drift from what the page says:
 *   name     the page's H1 (sentence case, written for readers; `title` is the
 *            SEO title and stays in <title> and JSON-LD)
 *   lead     the first sentence of the opening answer (CLAUDE.md rule 7)
 *   brief    the lead cut at its first colon or semicolon when it runs long, for
 *            cards
 *   eyebrow, plate, band  as on the page's OG card: the section trail, the
 *            SHA-256 plate mark, and the card's right band from
 *            static/img/og/band/ (scripts/generate-og-images.py)
 *
 * Permalinks always end in a slash (trailingSlash: true), so they can be used
 * as links and as JSON-LD URLs as they are. `updated` is "YYYY-MM-DD" from git,
 * and only meaningful in a production build (the dev server fakes it).
 *
 * @module plugins/site-index
 */

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { blocks, plain } from "../structured-data/index.js";

const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

/** The OG card's plate mark: the first three bytes of SHA-256(url), in hex. */
const plateOf = (url) => createHash("sha256").update(url).digest("hex").slice(0, 6);

// Same labels and rule as breadcrumb() in scripts/generate-og-images.py, so a
// card on the site carries the eyebrow its share card does.
const SECTION_LABELS = {
  advanced: "Advanced",
  "bitcoin-node": "Bitcoin Node",
  coreboot: "Coreboot",
  learn: "Learn",
  libreboot: "Libreboot",
  "nostr-signing-device": "Nostr Signing Device",
  reference: "Reference",
  security: "Security",
  seedsigner: "SeedSigner",
  "wallet-setup": "Wallet Setup",
};

function eyebrowOf(url) {
  const parts = url.split("/").filter(Boolean).slice(1);
  if (parts.length === 0) return "Guides";
  const trail = [SECTION_LABELS[parts[0]] ?? parts[0].replace(/-/g, " ")];
  if (parts.length > 2) trail.push(parts[1].replace(/-/g, " "));
  return trail.join(" / ");
}

/**
 * The page's H1 and the first sentence of the paragraph under it.
 *
 * @param {string} source - the doc file, frontmatter included
 */
function opening(source) {
  const list = blocks(source.replace(/^---\n[\s\S]*?\n---\n/, ""));
  const h1 = list.findIndex((b) => b.type === "heading" && b.level === 1);
  if (h1 < 0) return { name: null, lead: null };
  const next = list.slice(h1 + 1).find((b) => b.type !== "code");
  const para = next?.type === "text" ? plain(next.lines.join(" ")) : "";
  const lead = para.split(/(?<=[.!?])\s+(?=[A-Z0-9"(])/)[0] || null;
  return { name: list[h1].text, lead };
}

/** A long lead cut at its first colon or semicolon, which is where the answer ends and the detail starts. */
function briefOf(lead) {
  if (!lead || lead.length <= 170) return lead;
  const cut = lead.search(/[:;]\s/);
  return cut >= 30 ? `${lead.slice(0, cut)}.` : lead;
}

/** The card's band image, from the OG manifest. Throws: a listed page must have a card. */
function bandOf(manifest, url) {
  const card = manifest[url];
  if (!card) throw new Error(`[site-index] no OG card for ${url}; run scripts/generate-og-images.py`);
  return card.replace(/^\/img\/og\//, "/img/og/band/").replace(/\.png$/, ".webp");
}

/**
 * Top-level groups of one resolved sidebar. A category becomes a group of its
 * link doc's children; a nested category contributes only its link doc (its
 * pages are the steps of one guide, listed on that guide's own page).
 * Top-level docs outside any category form a group with no label.
 *
 * @param {any[]} items - resolved sidebar items
 * @param {Map<string, string>} permalinkById
 */
function sidebarGroups(items, permalinkById) {
  const groups = [];
  let loose = null;

  const docOf = (item) => {
    if (item.type === "doc" || item.type === "ref") return permalinkById.get(item.id) ?? null;
    if (item.type === "category" && item.link?.type === "doc") return permalinkById.get(item.link.id) ?? null;
    return null;
  };

  for (const item of items ?? []) {
    if (item.type === "category") {
      const link = item.link?.type === "doc" ? permalinkById.get(item.link.id) ?? null : null;
      const pages = (item.items ?? []).map(docOf).filter(Boolean);
      groups.push({ label: item.label, link, items: pages });
    } else {
      const page = docOf(item);
      if (!page) continue;
      if (!loose) {
        loose = { label: null, link: null, items: [] };
        groups.push(loose);
      }
      loose.items.push(page);
    }
  }
  return groups;
}

/** Doc id to reading position across all sidebars, as plugins/llms-txt does it. */
function sidebarOrder(sidebars) {
  const order = new Map();
  const visit = (items) => {
    for (const item of items ?? []) {
      if (item.type === "doc" && !order.has(item.id)) order.set(item.id, order.size);
      else if (item.type === "category") {
        if (item.link?.type === "doc" && !order.has(item.link.id)) order.set(item.link.id, order.size);
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
export default function siteIndexPlugin(context) {
  return {
    name: "site-index",

    async allContentLoaded({ allContent, actions }) {
      const version = allContent["docusaurus-plugin-content-docs"]?.default?.loadedVersions?.[0];
      const all = (version?.docs ?? []).filter((doc) => !doc.draft && !doc.unlisted);
      if (all.length === 0) {
        throw new Error(
          "[site-index] no docs captured. The docs plugin content shape changed; " +
            "check loadedVersions[0].docs.",
        );
      }

      const sidebars = version.sidebars ?? {};
      const order = sidebarOrder(sidebars);
      const permalinkById = new Map(all.map((doc) => [doc.id, withSlash(doc.permalink)]));

      const manifest = JSON.parse(readFileSync(join(context.siteDir, "src/data/ogManifest.json"), "utf8"));

      const docs = {};
      for (const doc of all) {
        const url = withSlash(doc.permalink);
        const source = readFileSync(join(context.siteDir, doc.source.replace(/^@site\//, "")), "utf8");
        const { name, lead } = opening(source);
        docs[url] = {
          title: doc.title,
          name: name ?? doc.title,
          lead: lead ?? doc.description ?? "",
          brief: briefOf(lead) ?? doc.description ?? "",
          eyebrow: eyebrowOf(url),
          plate: plateOf(url),
          band: bandOf(manifest, url),
          label: doc.frontMatter?.sidebar_label ?? null,
          description: doc.description ?? "",
          sidebar: doc.sidebar ?? null,
          order: order.get(doc.id) ?? Number.MAX_SAFE_INTEGER,
          guide: doc.frontMatter?.guide ?? null,
          updated: doc.lastUpdatedAt ? new Date(doc.lastUpdatedAt).toISOString().slice(0, 10) : null,
        };
      }

      const groups = {};
      for (const [id, items] of Object.entries(sidebars)) groups[id] = sidebarGroups(items, permalinkById);

      const posts = allContent["docusaurus-plugin-content-blog"]?.default?.blogPosts ?? [];
      const notes = posts
        .filter((post) => !post.metadata.unlisted && !post.metadata.frontMatter?.draft)
        .map(({ metadata }) => {
          const url = withSlash(metadata.permalink);
          return {
            permalink: url,
            title: metadata.title,
            description: metadata.description ?? "",
            date: new Date(metadata.date).toISOString().slice(0, 10),
            plate: plateOf(url),
            band: bandOf(manifest, url),
          };
        });

      // The landing pages' own plate marks, for their covers.
      const plates = Object.fromEntries(["/", "/learn/", "/guides/"].map((route) => [route, plateOf(route)]));

      await actions.createData("site-index.json", JSON.stringify({ docs, sidebars: groups, notes, plates }));
    },
  };
}
