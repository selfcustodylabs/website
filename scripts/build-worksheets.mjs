#!/usr/bin/env node
/**
 * Print every worksheet page to A4 and US Letter PDFs.
 *
 * Usage (after `npm run build`):
 *   node scripts/build-worksheets.mjs        or   npm run worksheets
 *
 * The PDFs are the built pages themselves, printed by headless Chromium, so the
 * paper version cannot drift from the page: src/components/worksheet holds the
 * one design for both. Each page is printed from a copy with its scripts
 * removed (the server-rendered HTML is complete, and hydrating a copy at
 * another path would render the 404 page) and a one-line @page rule added for
 * the paper size. Chromium's own scriptEnabled=false switch makes headless
 * printing silently write nothing, hence the copy. Output goes to static/worksheets/<slug>-a4.pdf and -letter.pdf and is
 * committed, like the OG cards; npm run check fails if one is missing.
 *
 * Reruns are quiet in git: Chromium stamps the time into every PDF and numbers
 * its accessibility tags differently each run, so a new file that differs from
 * the committed one only in those is discarded and the committed file kept.
 *
 * Chromium comes from $CHROMIUM, or the first of chromium, chromium-browser,
 * google-chrome on PATH.
 */

import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const ROOT = process.cwd();
const BUILD = join(ROOT, "build");
const OUT = join(ROOT, "static", "worksheets");
const PAPERS = { a4: "A4", letter: "letter" };

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

function chromium() {
  if (process.env.CHROMIUM) return process.env.CHROMIUM;
  for (const name of ["chromium", "chromium-browser", "google-chrome"]) {
    try {
      execFileSync("which", [name], { stdio: "ignore" });
      return name;
    } catch {
      // try the next one
    }
  }
  throw new Error("[worksheets] no Chromium found; set CHROMIUM to its path");
}

/**
 * The PDF without what changes on every run: the creation and modification
 * stamps, and the accessibility tags' element ids and the table-header
 * references to them, which Chromium numbers from DOM nodes and which shift
 * between runs of the same page.
 */
const withoutStamps = (buf) =>
  buf
    .toString("latin1")
    .replace(/\/(CreationDate|ModDate|Producer) \([^)]*\)/g, "/$1 ()")
    .replace(/\(node\d+\)/g, "(node)");

const { worksheets } = await import(join(ROOT, "src/data/worksheets.js"));

for (const { slug } of worksheets) {
  if (!existsSync(join(BUILD, "worksheets", slug, "index.html"))) {
    throw new Error(`[worksheets] build/worksheets/${slug}/ is missing; run npm run build first`);
  }
}

const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  let file = join(BUILD, path);
  if (existsSync(join(file, "index.html"))) file = join(file, "index.html");
  if (!file.startsWith(BUILD) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = chromium();
const run = promisify(execFile);
mkdirSync(OUT, { recursive: true });
let written = 0;
let kept = 0;

try {
  for (const { slug } of worksheets) {
    const page = readFileSync(join(BUILD, "worksheets", slug, "index.html"), "utf8");
    for (const [suffix, size] of Object.entries(PAPERS)) {
      const printPath = join(BUILD, "worksheets", slug, `__print-${suffix}.html`);
      const printable = page
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
        .replace(/<link\b[^>]*rel="(?:preload|prefetch|modulepreload)"[^>]*>/g, "")
        .replace("</head>", `<style>@page{size:${size};margin:12mm 14mm}</style></head>`);
      writeFileSync(printPath, printable);
      const target = join(OUT, `${slug}-${suffix}.pdf`);
      const fresh = `${target}.new`;
      try {
        // Async on purpose: the page is served by this same process, so a
        // blocking call would stop the server answering Chromium.
        await run(
          browser,
          [
            "--headless",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--virtual-time-budget=5000",
            `--print-to-pdf=${fresh}`,
            `${base}/worksheets/${slug}/__print-${suffix}.html`,
          ],
          { timeout: 60_000 },
        );
      } finally {
        rmSync(printPath, { force: true });
      }
      const next = readFileSync(fresh);
      if (existsSync(target) && withoutStamps(readFileSync(target)) === withoutStamps(next)) {
        rmSync(fresh);
        kept += 1;
      } else {
        writeFileSync(target, next);
        rmSync(fresh);
        written += 1;
      }
    }
  }
} finally {
  server.close();
}

console.log(`[worksheets] ${written} PDF(s) written, ${kept} unchanged, in static/worksheets/`);
