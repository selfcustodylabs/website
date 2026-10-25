#!/usr/bin/env node
/**
 * SEO snapshot of a production build.
 *
 * Walks build/ and records, for every page that is not a client redirect, the
 * fields a search engine or an assistant reads first: title, description,
 * canonical, robots directives, og:image and the JSON-LD @types. Redirect
 * pages are listed separately with their target, and the sitemap URL set is
 * recorded so an accidental URL drop shows up as a diff.
 *
 * Usage:
 *   node scripts/seo-snapshot.mjs                 print snapshot JSON to stdout
 *   node scripts/seo-snapshot.mjs --write FILE    write snapshot to FILE
 *   node scripts/seo-snapshot.mjs --compare FILE  diff the current build against FILE,
 *                                                 exit 1 if anything changed
 *
 * A diff is not automatically a failure of the change being made: titles and
 * descriptions are supposed to change during a content pass. It is a list of
 * everything that changed, to be read and accepted deliberately, after which
 * the baseline is rewritten with --write.
 */

import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const BUILD = join(process.cwd(), "build");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name === "index.html" || name === "404.html") out.push(full);
  }
  return out;
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/** All attribute maps of <meta>/<link> tags in the head. */
function tags(html, tag) {
  const out = [];
  const re = new RegExp(`<${tag}\\b([^>]*)>`, "gi");
  let m;
  while ((m = re.exec(html))) {
    const attrs = {};
    const are = /([a-zA-Z:-]+)\s*=\s*"([^"]*)"/g;
    let a;
    while ((a = are.exec(m[1]))) attrs[a[1].toLowerCase()] = decode(a[2]);
    out.push(attrs);
  }
  return out;
}

function jsonLdTypes(html) {
  const types = [];
  const ids = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = Array.isArray(data) ? data : data["@graph"] ? data["@graph"] : [data];
      for (const n of nodes) {
        const t = Array.isArray(n["@type"]) ? n["@type"].join("+") : n["@type"];
        types.push(t);
        if (n["@id"] && /Organization/.test(t)) ids.push(n["@id"]);
      }
    } catch {
      types.push("INVALID_JSON");
    }
  }
  return { types: types.sort(), organizationIds: [...new Set(ids)].sort() };
}

function snapshot() {
  if (!existsSync(BUILD)) {
    console.error("build/ not found: run the production build first");
    process.exit(2);
  }
  const pages = {};
  const redirects = {};
  for (const file of walk(BUILD)) {
    const html = readFileSync(file, "utf8");
    let route = "/" + relative(BUILD, file).split(sep).join("/");
    route = route.replace(/index\.html$/, "");
    const metas = tags(html, "meta");
    const refresh = metas.find((a) => (a["http-equiv"] || "").toLowerCase() === "refresh");
    if (refresh) {
      redirects[route] = (refresh.content || "").replace(/^\s*\d+;\s*url=/i, "");
      continue;
    }
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
    const byName = (n) => metas.filter((a) => a.name === n).map((a) => a.content);
    const byProp = (p) => metas.filter((a) => a.property === p).map((a) => a.content);
    const links = tags(html, "link");
    const canonical = links.find((a) => a.rel === "canonical");
    const ld = jsonLdTypes(html);
    pages[route] = {
      title: title ? decode(title.trim()) : null,
      description: byName("description").at(-1) ?? null,
      canonical: canonical ? canonical.href : null,
      robots: byName("robots"),
      ogImage: byProp("og:image").at(-1) ?? null,
      jsonLd: ld.types,
      organizationIds: ld.organizationIds,
    };
  }
  let sitemap = [];
  const sm = join(BUILD, "sitemap.xml");
  if (existsSync(sm)) {
    sitemap = [...readFileSync(sm, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  }
  const sortObj = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
  return { pages: sortObj(pages), redirects: sortObj(redirects), sitemap };
}

function compare(base, cur) {
  const lines = [];
  const keys = new Set([...Object.keys(base.pages), ...Object.keys(cur.pages)]);
  for (const k of [...keys].sort()) {
    const a = base.pages[k];
    const b = cur.pages[k];
    if (!a) { lines.push(`+ page ${k}`); continue; }
    if (!b) { lines.push(`- page ${k}`); continue; }
    for (const f of Object.keys({ ...a, ...b })) {
      const x = JSON.stringify(a[f]);
      const y = JSON.stringify(b[f]);
      if (x !== y) lines.push(`~ ${k} ${f}\n    was: ${x}\n    now: ${y}`);
    }
  }
  const rk = new Set([...Object.keys(base.redirects), ...Object.keys(cur.redirects)]);
  for (const k of [...rk].sort()) {
    if (base.redirects[k] !== cur.redirects[k]) {
      lines.push(`~ redirect ${k}: ${base.redirects[k] ?? "(none)"} -> ${cur.redirects[k] ?? "(none)"}`);
    }
  }
  const sa = new Set(base.sitemap);
  const sb = new Set(cur.sitemap);
  for (const u of base.sitemap) if (!sb.has(u)) lines.push(`- sitemap ${u}`);
  for (const u of cur.sitemap) if (!sa.has(u)) lines.push(`+ sitemap ${u}`);
  return lines;
}

const args = process.argv.slice(2);
const cur = snapshot();
if (args[0] === "--write") {
  writeFileSync(args[1], JSON.stringify(cur, null, 2) + "\n");
  console.log(`wrote ${args[1]}: ${Object.keys(cur.pages).length} pages, ` +
    `${Object.keys(cur.redirects).length} redirects, ${cur.sitemap.length} sitemap URLs`);
} else if (args[0] === "--compare") {
  const base = JSON.parse(readFileSync(args[1], "utf8"));
  const diff = compare(base, cur);
  if (diff.length === 0) {
    console.log("seo snapshot: no changes");
  } else {
    console.log(diff.join("\n"));
    console.log(`\nseo snapshot: ${diff.length} change(s)`);
    process.exit(1);
  }
} else {
  process.stdout.write(JSON.stringify(cur, null, 2) + "\n");
}
