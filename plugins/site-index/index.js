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
 *   docs:     { [permalink]: { title, label, description, sidebar, order, guide, updated } }
 *   sidebars: { [sidebarId]: [{ label, link, items: [permalink] }] }
 *   notes:    [{ permalink, title, description, date }], newest first (field notes,
 *             from the blog plugin, for the homepage)
 *
 * Permalinks always end in a slash (trailingSlash: true), so they can be used
 * as links and as JSON-LD URLs as they are. `updated` is "YYYY-MM-DD" from git,
 * and only meaningful in a production build (the dev server fakes it).
 *
 * @module plugins/site-index
 */

const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

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
export default function siteIndexPlugin() {
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

      const docs = {};
      for (const doc of all) {
        docs[withSlash(doc.permalink)] = {
          title: doc.title,
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
        .map(({ metadata }) => ({
          permalink: withSlash(metadata.permalink),
          title: metadata.title,
          description: metadata.description ?? "",
          date: new Date(metadata.date).toISOString().slice(0, 10),
        }));

      await actions.createData("site-index.json", JSON.stringify({ docs, sidebars: groups, notes }));
    },
  };
}
