// Checks the built site in client/dist against docs/seo-spec.md. Build first with the same settings:
//   SITE_URL=http://localhost:4173 npm run build && SITE_URL=http://localhost:4173 npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");
const indexable = process.env.SITE_INDEXABLE === "true";
assert.ok(siteUrl, "Set SITE_URL to the value used for the build");

// The URL table from the spec, written out independently of src/routes.js. Only which languages are
// enabled comes from there, so hiding or restoring a language needs no test change.
const { languages: enabled } = await import("../src/routes.js");
const allPages = {
  home: { fi: "/", sv: "/sv", en: "/en" },
  about: { fi: "/tietoa-minusta", sv: "/sv/om-mig", en: "/en/about" },
  contact: { fi: "/yhteystiedot", sv: "/sv/kontakt", en: "/en/contact" },
  privacy: { fi: "/tietosuojaseloste" }
};
const pages = Object.fromEntries(Object.entries(allPages).map(([page, byLang]) =>
  [page, Object.fromEntries(Object.entries(byLang).filter(([lang]) => enabled.includes(lang)))]));
const all = Object.entries(pages).flatMap(([page, byLang]) =>
  Object.entries(byLang).map(([lang, url]) => ({ page, lang, url })));

const ogLocales = { fi: "fi_FI", sv: "sv_FI", en: "en_GB" };
const { default: translations } = await import("../src/translations.js");
// How React's server renderer escapes text.
const reactEscape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

const fileFor = (url) => (url === "/" ? "index.html" : `${url.slice(1)}.html`);
const read = (file) => fs.readFileSync(path.join(distDir, file), "utf8");
const count = (html, pattern) => (html.match(pattern) || []).length;
const attr = (html, pattern) => html.match(pattern)?.[1];
const jsonLd = (html) => JSON.parse(attr(html, /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/));

for (const { page, lang, url } of all) {
  test(`${url}: complete ${lang} HTML with its own head tags`, () => {
    const html = read(fileFor(url));
    const canonical = siteUrl + url;

    assert.match(html, new RegExp(`<html lang="${lang}">`));
    assert.equal(count(html, /<title[ >]/g), 1);
    assert.equal(count(html, /<meta name="description"/g), 1);
    assert.equal(count(html, /<h1[ >]/g), 1);
    assert.equal(count(html, /<script type="module"/g), 1, "app script present for hydration");

    assert.equal(count(html, /rel="canonical"/g), 1);
    assert.equal(attr(html, /rel="canonical" href="([^"]+)"/), canonical);
    assert.equal(attr(html, /property="og:url" content="([^"]+)"/), canonical);

    const versions = Object.keys(pages[page]);
    const alternates = Object.fromEntries(
      [...html.matchAll(/rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    assert.deepEqual(alternates, versions.length > 1 ? {
      ...Object.fromEntries(versions.map((code) => [code, siteUrl + pages[page][code]])),
      "x-default": siteUrl + pages[page].fi
    } : {});

    assert.equal(html.includes('name="robots" content="noindex"'), !indexable);

    // Share tags (AC-010).
    const property = (name) => attr(html, new RegExp(`property="${name}" content="([^"]*)"`));
    assert.ok(property("og:site_name"));
    assert.equal(property("og:locale"), ogLocales[lang]);
    assert.deepEqual(
      [...html.matchAll(/property="og:locale:alternate" content="([^"]+)"/g)].map((m) => m[1]).sort(),
      versions.filter((code) => code !== lang).map((code) => ogLocales[code]).sort());
    assert.equal(property("og:image"), `${siteUrl}/brand/yhdessa-social.png`);
    assert.ok(property("og:image:alt"));
    assert.equal(attr(html, /name="twitter:card" content="([^"]+)"/), "summary_large_image");

    // Structured data (AC-015): only facts already on the site.
    const graph = jsonLd(html)["@graph"];
    const byType = Object.fromEntries(graph.map((node) => [node["@type"], node]));
    const practice = byType.Organization;
    assert.equal(practice["@id"], `${siteUrl}/#practice`);
    assert.equal(practice.telephone, "+358458471446");
    assert.equal(practice.email, "puheterapiayhdessa@gmail.com");
    assert.equal(practice.identifier?.value, "3506989-2");
    assert.equal(practice.areaServed?.name, "Turku");
    assert.equal(byType.WebSite?.publisher?.["@id"], page === "home" ? practice["@id"] : undefined);
    assert.equal(byType.Person?.worksFor?.["@id"], page === "about" ? practice["@id"] : undefined);
    if (page === "about") assert.ok(byType.Person.jobTitle);
    assert.ok(!JSON.stringify(graph).includes("address"), "no invented address");

    // Internal links stay in the page's language (AC-002); the language switch points at this page's versions.
    const body = html.slice(html.indexOf("<body"));
    // The Finnish-only privacy notice and files such as the PDF are linked from every language.
    const ownLanguage = new Set([...Object.values(pages).map((byLang) => byLang[lang]), pages.privacy.fi]);
    for (const [tag, href] of body.matchAll(/<a [^>]*href="(\/[^"#]*)"[^>]*>/g)) {
      if (/hrefLang="/.test(tag) || /\.[a-z]+$/.test(href)) continue;
      assert.ok(ownLanguage.has(href), `${url} links to ${href}, outside ${lang}`);
    }
    const switchLinks = Object.fromEntries(
      [...body.matchAll(/<a lang="([a-z]+)" hrefLang="[a-z]+"[^>]*href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    assert.deepEqual(switchLinks, enabled.length > 1
      ? Object.fromEntries(enabled.map((code) => [code, pages[page][code] ?? pages.home[code]]))
      : {});
  });
}

test("titles, descriptions and H1s differ between pages", () => {
  for (const pattern of [/<title[^>]*>([^<]+)</, /<meta name="description" content="([^"]+)"/]) {
    const values = all.map(({ url }) => attr(read(fileFor(url)), pattern));
    assert.equal(new Set(values).size, all.length);
  }
  for (const byLang of Object.values(pages)) {
    const headings = Object.values(byLang).map((url) => attr(read(fileFor(url)), /<h1[^>]*>([^<]+)</));
    assert.equal(new Set(headings).size, headings.length, `one H1 per language: ${headings}`);
  }
});

test("every service title and course name is in the home HTML for every language", () => {
  // Expectations come from the copy itself: this checks that prerendering keeps all of it, not the copy.
  for (const [lang, url] of Object.entries(pages.home)) {
    const html = read(fileFor(url));
    for (const service of translations[lang].home.services) {
      assert.ok(html.includes(`<summary>${reactEscape(service.title)}</summary>`), `${url} is missing ${service.title}`);
      for (const course of service.courses) {
        assert.ok(html.includes(`>${reactEscape(course.name)}</li>`), `${url} is missing ${course.name}`);
      }
    }
  }
});

test("404.html is standalone, noindex and links to the home page", () => {
  const html = read("404.html");
  assert.match(html, /name="robots" content="noindex"/);
  assert.equal(count(html, /<script type="module"/g), 0);
  assert.equal(count(html, /rel="canonical"|rel="alternate"/g), 0);
  assert.match(html, /href="\/"/);
});

test("hidden languages produce no pages", () => {
  for (const [page, byLang] of Object.entries(allPages)) {
    for (const [lang, url] of Object.entries(byLang)) {
      if (!enabled.includes(lang)) assert.ok(!fs.existsSync(path.join(distDir, fileFor(url))), `${page} ${url} was built`);
    }
  }
});

test("sitemap lists exactly the canonical URLs", () => {
  const locs = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  assert.deepEqual(locs, all.map(({ url }) => siteUrl + url).sort());
  assert.doesNotMatch(read("sitemap.xml"), /lastmod/);
});

test("robots.txt and _headers follow the indexing setting", () => {
  const robots = read("robots.txt");
  assert.match(robots, /^User-agent: \*\nAllow: \//);
  assert.equal(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), indexable);
  const headersFile = path.join(distDir, "_headers");
  if (indexable) assert.ok(!fs.existsSync(headersFile));
  else assert.match(fs.readFileSync(headersFile, "utf8"), /^\/\*\n {2}X-Robots-Tag: noindex/);
});

test("old paths redirect permanently and /admin is gone", () => {
  const redirects = read("_redirects");
  assert.match(redirects, /^\/about \/tietoa-minusta 301$/m);
  assert.match(redirects, /^\/contact \/yhteystiedot 301$/m);
  assert.ok(!fs.existsSync(path.join(distDir, "admin.html")));
});

test("no file in the build points at the old Vercel host or contains the admin login", () => {
  const files = fs.readdirSync(distDir, { recursive: true })
    .filter((file) => /\.(html|js|css|txt|xml|webmanifest)$/.test(file) || path.basename(file).startsWith("_"));
  for (const file of files) {
    const text = fs.readFileSync(path.join(distDir, file), "utf8");
    assert.ok(!text.includes("vercel.app"), `${file} mentions vercel.app`);
    assert.ok(!text.includes("admin123"), `${file} contains the old admin password`);
  }
});
