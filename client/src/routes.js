// Swedish and English stay hidden until Frida has reviewed them; add "sv" and "en" back here to re-enable
// their pages, links, language switch, alternates and sitemap entries. Order is the language switch order.
export const languages = ["fi"];

const paths = {
  home: { fi: "/", sv: "/sv", en: "/en" },
  about: { fi: "/tietoa-minusta", sv: "/sv/om-mig", en: "/en/about" },
  contact: { fi: "/yhteystiedot", sv: "/sv/kontakt", en: "/en/contact" },
  // Frida's privacy notice exists only in Finnish.
  privacy: { fi: "/tietosuojaseloste" }
};

// Every public page in every enabled language: the single source for routing, links, head tags and the sitemap.
export const routes = Object.entries(paths).flatMap(([page, byLanguage]) =>
  languages.filter((lang) => byLanguage[lang]).map((lang) => ({ page, lang, path: byLanguage[lang] }))
);

// The enabled languages a page exists in.
export function pageLanguages(page) {
  return languages.filter((lang) => paths[page][lang]);
}

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
