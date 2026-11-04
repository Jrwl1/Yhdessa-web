import translations from "./translations";
import seoCopy from "./seoCopy";
import { languages, pathFor } from "./routes";

// Set at build time from SITE_URL and SITE_INDEXABLE (see vite.config.js).
export const siteConfig = { siteUrl: __SITE_URL__, indexable: __SITE_INDEXABLE__ };

const ogLocales = { fi: "fi_FI", sv: "sv_FI", en: "en_GB" };
const contact = { telephone: "+358458471446", email: "puheterapiayhdessa@gmail.com", businessId: "3506989-2" };

// The head tags one page owns, as plain { tag, attrs, text } records. The prerender turns them into HTML;
// the browser applies the same records on client-side navigation, so both always match.
export function getHead(page, lang, { siteUrl, indexable } = siteConfig) {
  const t = translations[lang];
  const head = [];
  const meta = (attrs) => head.push({ tag: "meta", attrs });

  if (!page) {
    head.push({ tag: "title", text: `${t.notFound.heading} – ${t.brand}` });
    meta({ name: "robots", content: "noindex" });
    return head;
  }

  const copy = seoCopy[lang][page];
  const url = siteUrl + pathFor(page, lang);
  const image = `${siteUrl}/brand/yhdessa-social.png`;

  head.push({ tag: "title", text: copy.title });
  meta({ name: "description", content: copy.description });
  if (!indexable) meta({ name: "robots", content: "noindex" });
  head.push({ tag: "link", attrs: { rel: "canonical", href: url } });
  for (const code of languages) {
    head.push({ tag: "link", attrs: { rel: "alternate", hreflang: code, href: siteUrl + pathFor(page, code) } });
  }
  head.push({ tag: "link", attrs: { rel: "alternate", hreflang: "x-default", href: siteUrl + pathFor(page, "fi") } });

  meta({ property: "og:type", content: "website" });
  meta({ property: "og:site_name", content: t.brand });
  meta({ property: "og:title", content: copy.title });
  meta({ property: "og:description", content: copy.description });
  meta({ property: "og:url", content: url });
  meta({ property: "og:locale", content: ogLocales[lang] });
  for (const code of languages.filter((other) => other !== lang)) {
    meta({ property: "og:locale:alternate", content: ogLocales[code] });
  }
  meta({ property: "og:image", content: image });
  meta({ property: "og:image:width", content: "1200" });
  meta({ property: "og:image:height", content: "630" });
  meta({ property: "og:image:alt", content: seoCopy[lang].imageAlt });
  meta({ name: "twitter:card", content: "summary_large_image" });
  meta({ name: "twitter:title", content: copy.title });
  meta({ name: "twitter:description", content: copy.description });
  meta({ name: "twitter:image", content: image });
  meta({ name: "twitter:image:alt", content: seoCopy[lang].imageAlt });

  head.push({
    tag: "script",
    attrs: { type: "application/ld+json" },
    text: JSON.stringify(structuredData(page, lang, siteUrl))
  });
  return head;
}

function structuredData(page, lang, siteUrl) {
  const practiceId = `${siteUrl}/#practice`;
  const graph = [{
    "@type": "Organization",
    "@id": practiceId,
    name: translations.fi.brand,
    alternateName: languages.filter((code) => code !== "fi").map((code) => translations[code].brand),
    url: `${siteUrl}/`,
    logo: `${siteUrl}/brand/yhdessa-touch.png`,
    telephone: contact.telephone,
    email: contact.email,
    identifier: { "@type": "PropertyValue", propertyID: "Y-tunnus", value: contact.businessId },
    areaServed: { "@type": "City", name: "Turku" },
    knowsLanguage: ["fi", "sv"]
  }];
  if (page === "home") {
    graph.push({
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: translations[lang].brand,
      alternateName: ["Yhdessä", ...languages.filter((code) => code !== lang).map((code) => translations[code].brand)],
      inLanguage: lang,
      publisher: { "@id": practiceId }
    });
  }
  if (page === "about") {
    graph.push({
      "@type": "Person",
      "@id": `${siteUrl}/#frida`,
      name: "Frida Lindström",
      jobTitle: seoCopy[lang].personJobTitle,
      worksFor: { "@id": practiceId }
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const escapeHtml = (value) => String(value)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderHead(head) {
  return head.map(({ tag, attrs = {}, text }) => {
    const attributes = Object.entries({ ...attrs, "data-seo": "" })
      .map(([name, value]) => (value === "" ? ` ${name}` : ` ${name}="${escapeHtml(value)}"`)).join("");
    if (tag === "meta" || tag === "link") return `<${tag}${attributes}>`;
    // JSON-LD must not contain a literal "</script>"; < keeps the JSON valid.
    const body = tag === "script" ? text.replace(/</g, "\\u003c") : escapeHtml(text);
    return `<${tag}${attributes}>${body}</${tag}>`;
  }).join("\n  ");
}

export function applyHead(head, lang) {
  document.documentElement.lang = lang;
  document.head.querySelectorAll("[data-seo]").forEach((element) => element.remove());
  for (const { tag, attrs = {}, text } of head) {
    const element = document.createElement(tag);
    for (const [name, value] of Object.entries(attrs)) element.setAttribute(name, value);
    element.setAttribute("data-seo", "");
    if (text !== undefined) element.textContent = text;
    document.head.appendChild(element);
  }
}
