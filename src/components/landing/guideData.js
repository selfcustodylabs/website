/**
 * What the landing pages say about a guide beyond its siteIndex entry: how many
 * pages it runs over, its steps and what it needs, all read from data the
 * guide's own pages keep (progressData, the `## Step N:` headings, `guide.needs`).
 */
import { getProgressData } from "@site/src/data/progressData";

/** Page count of a guide that runs over several pages, on its first page; else null. */
export function pageCount(permalink) {
  const progress = getProgressData(permalink);
  return progress?.current === 1 ? progress.total : null;
}

/**
 * A guide's steps: its pages when it runs over several (progressData, without
 * the opening "Overview" page), else the page's own `## Step N:` headings.
 *
 * @param {object} page - a siteIndex entry
 * @returns {string[]}
 */
export function guideSteps(page) {
  const progress = getProgressData(page.permalink);
  if (progress?.current === 1)
    return progress.steps.map((s) => s.title).filter((t) => t !== "Overview");
  return page.steps ?? [];
}

/**
 * `guide.needs` as a list: "Casino dice, an offline computer, and a metal
 * plate" becomes three items, each starting with a capital.
 *
 * @param {object} [guide] - the `guide` frontmatter block
 * @returns {string[]}
 */
export function needsOf(guide) {
  if (!guide?.needs) return [];
  return String(guide.needs)
    .replace(/\.$/, "")
    .split(/,\s*(?:and\s+)?/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1));
}
