/**
 * revision-history: the last few commits that touched each doc and field note,
 * shown under the page (src/components/RevisionHistory).
 *
 * Wired as `markdown.parseFrontMatter` in docusaurus.config.js rather than as a
 * plugin. A plugin can only publish data globally or through createData, and
 * either way every doc page would download every other page's history. Added
 * to the frontmatter at parse time, each page's history travels in that page's
 * own metadata chunk, and nowhere else.
 *
 * Reads `git log --follow`, so renames keep their history; the deploy workflow
 * checks out with fetch-depth: 0 so the log is complete in CI. Outside a git
 * checkout the history is simply absent.
 *
 * @module plugins/revision-history
 */

import { execFileSync } from "node:child_process";
import { relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../..", import.meta.url));

/** How many commits a page shows; the full log is one link away on GitHub. */
const LIMIT = 5;

/** Only published content: docs and field notes. */
const TRACKED = /^(docs|notes)\//;

// The docs plugin and the MDX loader both parse every file's frontmatter, so
// each file would otherwise be logged twice per build.
const cache = new Map();

/**
 * @param {string} filePath - absolute path of the Markdown file
 * @returns {{ hash: string, date: string, subject: string }[] | null}
 */
function historyOf(filePath) {
  const rel = relative(ROOT, filePath).split(sep).join("/");
  if (!TRACKED.test(rel)) return null;
  if (cache.has(rel)) return cache.get(rel);

  let log = "";
  try {
    log = execFileSync(
      "git",
      ["log", "--follow", "--no-merges", `-n${LIMIT}`, "--format=%H%x1f%cs%x1f%s", "--", rel],
      { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] },
    ).toString();
  } catch {
    log = "";
  }
  const entries = log
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [hash, date, subject] = line.split("\x1f");
      return { hash, date, subject };
    });
  cache.set(rel, entries);
  return entries;
}

/**
 * Docusaurus's own frontmatter parser, plus `revisions` (newest first) for
 * docs and notes that have any history.
 *
 * @param {import('@docusaurus/types').ParseFrontMatterParams & {
 *   defaultParseFrontMatter: import('@docusaurus/types').DefaultParseFrontMatter }} params
 */
export async function parseFrontMatter(params) {
  const result = await params.defaultParseFrontMatter(params);
  const revisions = historyOf(params.filePath);
  if (revisions && revisions.length > 0) result.frontMatter.revisions = revisions;
  return result;
}
