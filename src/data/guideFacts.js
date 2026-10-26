/**
 * The facts line of a hands-on guide, from its `guide:` frontmatter:
 *
 *   guide:
 *     time: "2-4 hours"
 *     cost: "$30-80"
 *     level: "Intermediate"
 *     needs: "Casino dice, an offline computer, a metal plate"
 *     reviewed: "2026-10-25"          # sources re-checked on this date
 *     verified:                       # done end to end on real hardware
 *       date: "2026-10-12"
 *       on: "Jade Plus, firmware 1.0.36"
 *
 * `reviewed` and `verified` are claims a reader relies on: set them only when
 * they are true, and never `verified` for desk research. "Updated" comes from
 * git and is always shown.
 *
 * Shared by src/components/GuideFacts.js (the page) and plugins/llms-txt (the
 * Markdown mirror), so both say the same thing.
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * "24 Aug 2026", formatted by hand in UTC: a locale formatter can differ between
 * Node and the browser (e.g. "Sep" vs "Sept"), which breaks hydration.
 *
 * @param {number|string|undefined} value - milliseconds, or "YYYY-MM-DD"
 * @returns {string|null}
 */
export function formatDate(value) {
  if (value === undefined || value === null || value === "") return null;
  const d =
    typeof value === "number"
      ? new Date(value)
      : new Date(`${String(value).slice(0, 10)}T00:00:00Z`);
  const year = d.getUTCFullYear();
  if (Number.isNaN(d.getTime()) || year < 2020 || year > 2100) return null;
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${year}`;
}

/**
 * @param {object} [guide] - the `guide` frontmatter block
 * @param {number} [lastUpdatedAt] - from doc metadata, milliseconds
 * @returns {{facts: Array<[string, string]>, needs: string|null}}
 */
export function guideFacts(guide = {}, lastUpdatedAt) {
  const facts = [];
  if (guide.time) facts.push(["Time", String(guide.time)]);
  if (guide.cost) facts.push(["Cost", String(guide.cost)]);
  if (guide.level) facts.push(["Level", String(guide.level)]);
  const verified = guide.verified && formatDate(guide.verified.date);
  const reviewed = formatDate(guide.reviewed);
  if (verified)
    facts.push(["Verified", guide.verified.on ? `${verified}, ${guide.verified.on}` : verified]);
  else if (reviewed) facts.push(["Reviewed", reviewed]);
  const updated = formatDate(lastUpdatedAt);
  if (updated) facts.push(["Updated", updated]);
  return { facts, needs: guide.needs ? String(guide.needs) : null };
}

/**
 * The same facts as one plain sentence, for the Markdown mirrors.
 *
 * @param {object} [guide]
 * @param {number} [lastUpdatedAt]
 * @returns {string}
 */
export function guideFactsSentence(guide, lastUpdatedAt) {
  const { facts, needs } = guideFacts(guide, lastUpdatedAt);
  const parts = facts.map(([k, v]) => `${k}: ${v}.`);
  if (needs) parts.push(`You need: ${needs.replace(/\.$/, "")}.`);
  return parts.join(" ");
}
