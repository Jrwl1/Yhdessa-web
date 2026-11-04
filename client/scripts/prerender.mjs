// Turns the client build into one complete HTML file per page and language, plus the
// Cloudflare Pages files (404.html, _redirects, _headers) and robots.txt / sitemap.xml.
// Runs after `vite build` and `vite build --ssr`; see the "build" script in package.json.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const clientDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(clientDir, "dist");
const ssrDir = path.join(clientDir, "dist-ssr");

const { render, routes, getHead, renderHead, siteConfig } =
  await import(pathToFileURL(path.join(ssrDir, "entry-server.mjs")).href);
const { siteUrl, indexable } = siteConfig;

// This script owns these Cloudflare files; a hand-written copy in public/ would be silently replaced.
for (const owned of ["_headers", "_redirects"]) {
  const handWritten = await fs.stat(path.join(clientDir, "public", owned)).catch(() => null);
  if (handWritten) throw new Error(`public/${owned} exists; add its rules to scripts/prerender.mjs instead`);
}

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");
for (const marker of ['<html lang="fi">', "<!--seo-head-->", "<!--app-html-->"]) {
  if (!template.includes(marker)) throw new Error(`index.html template is missing ${marker}`);
}

function renderPage(url, page, lang) {
  // Function replacements so "$" in rendered text is never read as a replacement pattern.
  return template
    .replace('<html lang="fi">', () => `<html lang="${lang}">`)
    .replace("<!--seo-head-->", () => renderHead(getHead(page, lang)))
    .replace("<!--app-html-->", () => render(url));
}

async function write(file, contents) {
  const target = path.join(distDir, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, contents);
}

// "/" -> index.html, "/sv/om-mig" -> sv/om-mig.html: Pages serves both at the extensionless URL.
for (const { path: url, page, lang } of routes) {
  await write(url === "/" ? "index.html" : `${url.slice(1)}.html`, renderPage(url, page, lang));
}

// Standalone 404 without the app script: any unknown URL can show it without a hydration mismatch.
const notFound = renderPage("/404", null, "fi")
  .replace(/<script type="module"[^>]*><\/script>\s*/g, "")
  .replace(/<link rel="modulepreload"[^>]*>\s*/g, "");
await write("404.html", notFound);

await write("sitemap.xml", [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(({ path: url }) => `  <url><loc>${siteUrl}${url}</loc></url>`),
  "</urlset>",
  ""
].join("\n"));

// Crawling stays allowed so search engines can read the noindex; the sitemap is only advertised at launch.
await write("robots.txt", `User-agent: *\nAllow: /\n${indexable ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`);

await write("_redirects", "/about /tietoa-minusta 301\n/contact /yhteystiedot 301\n");

// Before launch every address is noindex. After launch only the project's own *.pages.dev addresses are,
// so they never compete with the real domain (Cloudflare adds noindex itself only on preview deployments).
await write("_headers", indexable
  ? "https://:project.pages.dev/*\n  X-Robots-Tag: noindex\n"
  : "/*\n  X-Robots-Tag: noindex\n");

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages and 404.html for ${siteUrl} (${indexable ? "indexable" : "noindex"})`);
