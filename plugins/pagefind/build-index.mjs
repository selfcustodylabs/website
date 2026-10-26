/**
 * Builds the Pagefind index. Run by plugins/pagefind/index.js as a child
 * process, because Pagefind is an ES-module-only package and Docusaurus loads
 * plugins through jiti, which turns imports into require() calls that such a
 * package refuses.
 *
 * Input (stdin, JSON): { outDir: string, routes: string[] }
 * Output: <outDir>/pagefind/
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import * as pagefind from "pagefind";

const { outDir, routes } = JSON.parse(readFileSync(0, "utf8"));

const { index, errors } = await pagefind.createIndex({
  rootSelector: "article",
  excludeSelectors: [".theme-doc-breadcrumbs", ".theme-doc-toc-mobile", ".theme-doc-footer", "nav"],
  forceLanguage: "en",
});
if (!index) throw new Error(`could not create index: ${errors.join("; ")}`);

for (const route of routes) {
  const file = join(outDir, route, "index.html");
  if (!existsSync(file)) throw new Error(`route ${route} has no built page at ${file}`);
  const res = await index.addHTMLFile({ url: route, content: readFileSync(file, "utf8") });
  if (res.errors.length > 0) throw new Error(`${route}: ${res.errors.join("; ")}`);
}

const written = await index.writeFiles({ outputPath: join(outDir, "pagefind") });
if (written.errors.length > 0) throw new Error(`could not write index: ${written.errors.join("; ")}`);
await pagefind.close();
console.log(`[pagefind] indexed ${routes.length} pages into /pagefind/`);
