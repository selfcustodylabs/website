#!/usr/bin/env node
/**
 * Submit changed doc URLs to IndexNow.
 *
 * Bing's index is the retrieval layer behind ChatGPT search and Copilot, so a
 * page Bing has not crawled cannot be cited by either of them no matter how
 * well it answers the question. IndexNow turns "crawled eventually" into
 * "crawled within a day".
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs <changed-file> [...]
 *   node scripts/indexnow-submit.mjs --dry-run <changed-file> [...]
 *
 * Paths are repo-relative, as `git diff --name-only` prints them. Anything with
 * no entry in .indexnow-urls.json is skipped: that map is written by
 * plugins/llms-txt from Docusaurus's own route table, so a path that is missing
 * from it is a file that does not correspond to a published page (a deleted
 * doc, or one excluded from the build).
 *
 * Only changed URLs are ever submitted. Resubmitting an unchanged corpus on
 * every push is what gets a key rate-limited.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const HOST = "selfcustodylabs.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const URL_MAP_PATH = path.join(REPO_ROOT, ".indexnow-urls.json");

/** IndexNow accepts at most 10,000 URLs per request. */
const MAX_URLS = 10000;

/**
 * Confirm the key file is still served at the root and still holds the key.
 *
 * This is the check that matters. If the file goes missing or its URL moves,
 * IndexNow does not start rejecting submissions: it keeps returning 202,
 * "received, validation pending", forever, and the pages quietly stop reaching
 * Bing fast while every deploy stays green. That is the same shape as the
 * favicon ?v= bump and the robots.txt Disallow trap, both of which cost this
 * site months. So verify it deterministically rather than inferring it from a
 * status code that cannot tell the two cases apart.
 *
 * @param {string} key - the IndexNow key
 * @returns {Promise<boolean>} true when the file is present and correct
 */
async function verifyKeyFile(key) {
  const keyUrl = `https://${HOST}/${key}.txt`;
  try {
    const response = await fetch(keyUrl);
    if (!response.ok) {
      console.warn(`[indexnow] key file ${keyUrl} returned HTTP ${response.status}.`);
      console.warn("[indexnow] Bing cannot validate ownership, so submissions will be ignored.");
      console.warn("[indexnow] The key file URL must never move. See CLAUDE.md.");
      return false;
    }
    const body = (await response.text()).trim();
    if (body !== key) {
      // Truncate: a key is ~32 chars, but whatever is actually being served
      // could be an entire document, and it does not belong in a build log.
      const shown = body.length > 48 ? `${body.slice(0, 48)}... (${body.length} chars)` : body;
      console.warn(`[indexnow] key file ${keyUrl} holds "${shown}" but INDEXNOW_KEY is "${key}".`);
      console.warn("[indexnow] These must match or Bing rejects the submission.");
      return false;
    }
    console.log(`[indexnow] key file verified at ${keyUrl}`);
    return true;
  } catch (error) {
    console.warn(`[indexnow] could not fetch ${keyUrl}: ${error.message}`);
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const changed = args.filter((arg) => arg !== "--dry-run");

  if (changed.length === 0) {
    console.log("[indexnow] no changed files passed, nothing to submit");
    return;
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key && !dryRun) {
    throw new Error("[indexnow] INDEXNOW_KEY is not set");
  }

  let urlMap;
  try {
    urlMap = JSON.parse(await readFile(URL_MAP_PATH, "utf8"));
  } catch (error) {
    throw new Error(
      `[indexnow] cannot read ${URL_MAP_PATH}: ${error.message}. ` +
        "It is written by plugins/llms-txt during the build, so run the build first.",
    );
  }

  const urls = [...new Set(changed.map((file) => urlMap[file]).filter(Boolean))];

  const unmapped = changed.filter((file) => !urlMap[file]);
  if (unmapped.length > 0) {
    console.log(`[indexnow] skipped ${unmapped.length} path(s) with no published route:`);
    for (const file of unmapped) console.log(`  ${file}`);
  }

  if (urls.length === 0) {
    console.log("[indexnow] no published URLs changed, nothing to submit");
    return;
  }

  if (urls.length > MAX_URLS) {
    throw new Error(`[indexnow] ${urls.length} URLs exceeds the ${MAX_URLS} per-request limit`);
  }

  if (key && !(await verifyKeyFile(key))) {
    // Non-zero so the step shows as failed in the Actions UI. The step is
    // continue-on-error, so the deploy itself still succeeds: the pages are
    // already published and this only affects how fast Bing hears about them.
    process.exitCode = 1;
    return;
  }

  console.log(`[indexnow] submitting ${urls.length} URL(s):`);
  for (const url of urls) console.log(`  ${url}`);

  if (dryRun) {
    console.log("[indexnow] dry run, not sending");
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList: urls,
    }),
  });

  // 200 means the key was validated and the URLs are queued. 202 means only
  // that the request was received; the endpoint returns it for an invalid key
  // too, so it is not by itself evidence that anything worked.
  if (response.status === 200) {
    console.log("[indexnow] accepted and key validated (HTTP 200)");
    return;
  }
  if (response.status === 202) {
    console.log("[indexnow] received, key validation pending (HTTP 202)");
    console.log("[indexnow] expected on a new key; if it persists, check Bing Webmaster Tools.");
    return;
  }

  // A failed ping must not fail a deploy that already succeeded: the pages are
  // live and Bing will reach them on its normal crawl regardless.
  console.warn(
    `[indexnow] submission rejected (HTTP ${response.status}): ${await response.text()}`,
  );
}

main().catch((error) => {
  console.warn(error.message);
});
