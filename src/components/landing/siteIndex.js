/**
 * Read access to the site index written by plugins/site-index. Imported only by
 * the pages that list docs, so the data lands in their chunk and nowhere else.
 */
import index from "@generated/site-index/default/site-index.json";

export const docs = index.docs;
export const sidebars = index.sidebars;

/** Field notes, newest first, as the blog plugin orders them. */
export const notes = index.notes;

/**
 * One doc by permalink. Throws rather than rendering a hole: a landing page
 * that names a moved or deleted doc should fail the build.
 *
 * @param {string} permalink - with trailing slash, e.g. "/docs/learn/keys/random/"
 */
export function getDoc(permalink) {
  const doc = docs[permalink];
  if (!doc) throw new Error(`[site-index] no doc at ${permalink}; was it moved?`);
  return { permalink, ...doc };
}

/** Every doc with a `guide:` facts block, in sidebar reading order. */
export function allGuides() {
  return Object.entries(docs)
    .filter(([, doc]) => doc.guide)
    .map(([permalink, doc]) => ({ permalink, ...doc }))
    .sort((a, b) => a.order - b.order);
}

/** Newest git date across all docs, "YYYY-MM-DD", or null in the dev server. */
export function lastChange() {
  let newest = null;
  for (const doc of Object.values(docs)) {
    if (doc.updated && (!newest || doc.updated > newest)) newest = doc.updated;
  }
  return newest;
}

/**
 * Absolute URL for JSON-LD.
 *
 * @param {string} path
 */
export const absolute = (path) => `https://selfcustodylabs.com${path}`;
