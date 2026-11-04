export const languages = ["fi", "sv", "en"];

const paths = {
  home: { fi: "/", sv: "/sv", en: "/en" },
  about: { fi: "/tietoa-minusta", sv: "/sv/om-mig", en: "/en/about" },
  contact: { fi: "/yhteystiedot", sv: "/sv/kontakt", en: "/en/contact" }
};

// Every public page in every language: the single source for routing, links, head tags and the sitemap.
export const routes = Object.entries(paths).flatMap(([page, byLanguage]) =>
  languages.map((lang) => ({ page, lang, path: byLanguage[lang] }))
);

export function pathFor(page, lang) {
  return paths[page][lang];
}

// Unknown paths get page null and the language of their prefix, so the not-found page speaks it.
export function matchRoute(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const route = routes.find((candidate) => candidate.path === path);
  if (route) return { page: route.page, lang: route.lang };
  const prefix = path.split("/")[1];
  return { page: null, lang: languages.includes(prefix) && prefix !== "fi" ? prefix : "fi" };
}
