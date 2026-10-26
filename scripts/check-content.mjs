#!/usr/bin/env node
/**
 * Content checks for docs/ and notes/: the rules in CLAUDE.md that used to be
 * manual.
 *
 * Errors fail the run (and the deploy). Warnings are printed with a count, so
 * a rewrite can drive them to zero; once a warning rule reaches zero it is
 * promoted to an error here so it cannot come back.
 *
 * Usage:
 *   node scripts/check-content.mjs            errors fail, warnings listed
 *   node scripts/check-content.mjs --summary  counts only
 *   node scripts/check-content.mjs --strict   warnings fail too
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import yaml from "js-yaml";

const ROOT = process.cwd();
const DOCS = join(ROOT, "docs");
const NOTES = join(ROOT, "notes");
const args = new Set(process.argv.slice(2));

/** Phrases that read as generated filler. Each is a regex and a reason. */
const BANNED = [
  [/\bby the end of this (page|guide|article)\b/i, "promise of learning instead of the answer"],
  [/\blet['’]s (dive|be honest|understand|explore|take a (closer )?look|get started|start|walk through|break)/i, "conversational filler"],
  [/\bdive (in|into|deeper)\b|\bdeep dive\b/i, "cliche"],
  [/\bdelv(e|es|ing)\b/i, "cliche"],
  [/\bhere['’]s (the thing|a mental model|a scenario|the deal|why this matters)\b/i, "conversational filler"],
  [/\bthink of it (this way|as|like)\b/i, "filler analogy lead-in"],
  [/\bready to\b/i, "call-to-action filler"],
  [/\bkey takeaways?\b/i, "summary boilerplate"],
  [/\bjourney\b/i, "cliche"],
  [/\bgame[- ]chang/i, "cliche"],
  [/\bpeace of mind\b/i, "cliche"],
  [/\bfort knox\b/i, "cliche"],
  [/\bunlock(s|ing)? (the|your) (power|full|potential|freedom)\b/i, "cliche"],
  [/\bseamless(ly)?\b/i, "marketing word"],
  [/\bleverag(e|es|ing)\b/i, "marketing word"],
  [/\bempower(s|ing|ment)?\b/i, "marketing word"],
  [/\bwhether you['’]re (a |an |new|just|looking)/i, "audience boilerplate"],
  [/\bit['’]s (important|worth) (to note|noting)\b|\bit is worth noting\b/i, "filler"],
  [/\bthis isn['’]t meant to scare you\b/i, "filler"],
  [/\bwelcome to\b/i, "greeting boilerplate"],
  [/\bcongratulations\b/i, "filler"],
  [/\bthe hard truth\b/i, "dramatic label"],
  [/\b(it['’]s|this is|that['’]s) not (just )?(a|an|about) [^.;\n]{1,60}[.;,] (it['’]s|this is|it is)\b/i, "'not X, it's Y' construction"],
];

const WHAT_YOULL = /^:::\w+\s+what you['’]ll (do|learn|achieve|need)/i;
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2B06}\u{2194}-\u{21FF}]/u;
// Built from its code point so this file never contains the character itself.
const EM_DASH = new RegExp(String.fromCharCode(0x2014));

function walk(dir, exts, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, exts, out);
    else if (exts.some((e) => name.endsWith(e))) out.push(full);
  }
  return out;
}

/** Same URL rule as scripts/generate-og-images.py (file path, slug ignored). */
function urlFor(file) {
  const parts = relative(DOCS, file).replace(/\.mdx?$/, "").split(sep);
  if (["index", "readme"].includes(parts.at(-1).toLowerCase())) parts.pop();
  return `/docs/${parts.join("/")}${parts.length ? "/" : ""}`;
}

/** Lines outside fenced code blocks, with their 1-based numbers. */
function proseLines(body) {
  const out = [];
  let fence = null;
  body.split("\n").forEach((line, i) => {
    const m = line.trim().match(/^(`{3,}|~{3,})/);
    if (m) {
      if (fence === null) fence = m[1][0];
      else if (fence === m[1][0]) fence = null;
      return;
    }
    if (fence === null) out.push([i + 1, line]);
  });
  return out;
}

/**
 * Warning rules that reached zero and became errors, so they cannot return.
 * When a rewrite drives another warning to zero, add it here.
 */
const PROMOTED = new Set([
  "what-youll-box", // Oct 2026: replaced by <GuideFacts /> and guide: frontmatter
  "emoji-sidebar", // Oct 2026: emoji leaked into breadcrumbs and their JSON-LD
  // Oct 2026: the content pass took all 97 docs to zero on these.
  "banned-phrase",
  "emoji-heading",
  "emoji-prose",
  "box-before-answer",
  "task-list",
]);

const errors = [];
const warnings = new Map();
const warn = (rule, msg) => {
  if (PROMOTED.has(rule)) {
    errors.push(`${msg} [${rule}]`);
    return;
  }
  if (!warnings.has(rule)) warnings.set(rule, []);
  warnings.get(rule).push(msg);
};

const manifest = JSON.parse(readFileSync(join(ROOT, "src/data/ogManifest.json"), "utf8"));
const docFiles = walk(DOCS, [".md", ".mdx"]).sort();
const noteFiles = existsSync(NOTES) ? walk(NOTES, [".md", ".mdx"]).sort() : [];
const seenUrls = new Set();

const DOC_KEYS = ["title", "description", "keywords", "tags", "sidebar_position", "date"];
// A note's title is its H1 (the theme renders it), and it has no sidebar or tags.
const NOTE_KEYS = ["title", "description", "date"];

for (const file of [...docFiles, ...noteFiles]) {
  const rel = relative(ROOT, file);
  const isNote = file.startsWith(NOTES + sep);
  const text = readFileSync(file, "utf8");
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) {
    errors.push(`${rel}: no frontmatter`);
    continue;
  }
  const fm = yaml.load(m[1]) ?? {};
  const fmLines = m[0].split("\n").length - 1;
  const body = text.slice(m[0].length);

  for (const key of isNote ? NOTE_KEYS : DOC_KEYS) {
    if (fm[key] === undefined) errors.push(`${rel}: frontmatter is missing "${key}"`);
  }
  if (isNote) {
    // The note's URL is /notes/<file name>/, which the OG generator derives from
    // the path. A slug or a date-prefixed file name would move it elsewhere.
    if (fm.slug !== undefined) errors.push(`${rel}: notes take their URL from the file name; remove "slug"`);
    if (/^\d{4}-\d{2}-\d{2}-/.test(file.split(sep).pop())) {
      errors.push(`${rel}: a dated file name puts the date in the URL; use the date: field`);
    }
    if (fm.tags !== undefined || fm.authors !== undefined) {
      errors.push(`${rel}: notes have no tags or authors (they would create thin tag and author pages)`);
    }
  }
  // date: is the day the page was first published, emitted as datePublished.
  // Quoted "YYYY-MM-DD", so YAML keeps it a string rather than a Date.
  if (fm.date !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(fm.date))) {
    errors.push(`${rel}: date must be a quoted "YYYY-MM-DD" (got ${JSON.stringify(fm.date)})`);
  }
  const title = String(fm.title ?? "");
  const desc = String(fm.description ?? "");
  if (title.length > 60) errors.push(`${rel}: title is ${title.length} chars (max 60)`);
  if (desc.length < 120 || desc.length > 160) {
    errors.push(`${rel}: description is ${desc.length} chars (want 120-160)`);
  }

  const url = isNote ? `/notes/${file.split(sep).pop().replace(/\.mdx?$/, "")}/` : urlFor(file);
  seenUrls.add(url);
  const card = manifest[url];
  if (!card) errors.push(`${rel}: no OG card in src/data/ogManifest.json for ${url} (run scripts/generate-og-images.py)`);
  else if (!existsSync(join(ROOT, "static", card))) errors.push(`${rel}: OG card ${card} is missing`);

  // Rule 7: the first thing after the H1 is the answer, not a box. A note's H1
  // is its frontmatter title, so its body starts straight after it.
  const lines = proseLines(body);
  const h1 = isNote ? -1 : lines.findIndex(([, l]) => /^# /.test(l));
  if (isNote && lines.some(([, l]) => /^# /.test(l))) errors.push(`${rel}: a note has no H1 in its body (the title is its H1)`);
  if (h1 >= 0 || isNote) {
    const next = lines.slice(h1 + 1).find(([, l]) => l.trim() !== "" && !/^import\s/.test(l.trim()));
    if (next && /^(:::|<(?!br))/.test(next[1].trim())) {
      warn("box-before-answer", `${rel}:${next[0] + fmLines}: ${next[1].trim().slice(0, 60)}`);
    }
  }

  for (const [n, line] of lines) {
    const at = `${rel}:${n + fmLines}`;
    if (EM_DASH.test(line)) errors.push(`${at}: em dash`);
    if (line.trim() === "<p>" || line.trim() === "</p>") {
      errors.push(`${at}: <p> wrapper line (breaks hydration around code blocks; see CLAUDE.md)`);
    }
    if (WHAT_YOULL.test(line.trim())) warn("what-youll-box", `${at}: ${line.trim()}`);
    // GFM task-list checkboxes render as unlabelled inputs (an accessibility
    // failure) and read as a form to tick; checklists are plain lists.
    if (/^\s*[-*] \[[ xX]\] /.test(line)) warn("task-list", `${at}: ${line.trim().slice(0, 60)}`);
    if (/^#{1,6} /.test(line) && EMOJI.test(line)) warn("emoji-heading", `${at}: ${line.trim()}`);
    else if (EMOJI.test(line)) warn("emoji-prose", `${at}`);
    for (const [re, why] of BANNED) {
      const hit = line.match(re);
      if (hit) warn("banned-phrase", `${at}: "${hit[0]}" (${why})`);
    }
  }
}

for (const url of Object.keys(manifest)) {
  if (!seenUrls.has(url)) errors.push(`src/data/ogManifest.json: ${url} has no doc or note (stale card)`);
}

// Every card has its band (the landing pages' thumbnails, written by the same
// generator run), and no band outlives its card.
{
  const bandOf = (card) => card.replace(/^\/img\/og\//, "").replace(/\.png$/, ".webp");
  const expected = new Set(Object.values(manifest).map(bandOf));
  const dir = join(ROOT, "static", "img", "og", "band");
  const present = new Set(existsSync(dir) ? readdirSync(dir) : []);
  for (const band of expected) {
    if (!present.has(band)) errors.push(`static/img/og/band/${band} is missing (run scripts/generate-og-images.py)`);
  }
  for (const band of present) {
    if (!expected.has(band)) errors.push(`static/img/og/band/${band} has no card (stale band)`);
  }
}

// Every worksheet has both PDFs (scripts/build-worksheets.mjs), and no PDF is
// left over from a sheet that no longer exists.
{
  const { worksheets } = await import(join(ROOT, "src/data/worksheets.js"));
  const expected = new Set(worksheets.flatMap(({ slug }) => [`${slug}-a4.pdf`, `${slug}-letter.pdf`]));
  const dir = join(ROOT, "static", "worksheets");
  const present = new Set(existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".pdf")) : []);
  for (const f of expected) {
    if (!present.has(f)) errors.push(`static/worksheets/${f} is missing (npm run build, then npm run worksheets)`);
  }
  for (const f of present) {
    if (!expected.has(f)) errors.push(`static/worksheets/${f} has no worksheet in src/data/worksheets.js`);
  }
}

// Em dashes outside docs too: CLAUDE.md bans them repo-wide.
for (const dir of ["src", "plugins", "scripts"]) {
  for (const file of walk(join(ROOT, dir), [".js", ".jsx", ".mjs", ".css", ".md", ".mdx", ".py", ".json"])) {
    readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      if (EM_DASH.test(line)) errors.push(`${relative(ROOT, file)}:${i + 1}: em dash`);
    });
  }
}

// Sidebar labels: no emoji (they leak into breadcrumbs and breadcrumb JSON-LD).
const sidebarSources = [join(ROOT, "sidebars.js"), ...walk(DOCS, ["_category_.json"])];
for (const file of sidebarSources) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (/label/.test(line) && EMOJI.test(line)) warn("emoji-sidebar", `${relative(ROOT, file)}:${i + 1}`);
  });
}

const total = [...warnings.values()].reduce((a, v) => a + v.length, 0);
if (!args.has("--summary")) {
  for (const [rule, list] of warnings) {
    console.log(`\nwarning: ${rule} (${list.length})`);
    for (const msg of list) console.log(`  ${msg}`);
  }
}
console.log(
  `\ncheck-content: ${docFiles.length} docs, ${noteFiles.length} notes, ${errors.length} error(s), ${total} warning(s)`,
);
for (const [rule, list] of warnings) console.log(`  ${rule}: ${list.length}`);
if (errors.length > 0) {
  console.error(`\n${errors.join("\n")}`);
  process.exit(1);
}
if (args.has("--strict") && total > 0) process.exit(1);
