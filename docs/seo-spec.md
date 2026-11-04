# Multilingual SEO and Cloudflare Pages hosting

Status: Approved 2026-10-31 (John approved all (R) decisions and removing `server/`)
Repository and baseline: `yhdessa-web` at `53f0364`; implemented on branch `seo/prerender`.
Source: three independent specs (Opus 5.5, GPT-6.1 Sol, GPT-6 Astra), merged 2026-10-31.

## Outcome and scope

Each of the three pages (Home, About, Contact) in each of the three languages (Finnish, Swedish, English) gets its own permanent URL and ships as complete HTML with its own language, title, description, canonical, language alternates, share tags and structured data. The site moves from Vercel to Cloudflare Pages. It is **not launched**: until a later launch step flips one build setting, every page carries `noindex` and the sitemap is not advertised.

In scope:
- URL-based language, real links between language versions, prerendered HTML for the nine pages.
- Head tags, structured data, `robots.txt`, `sitemap.xml`, a real 404, redirects for old paths.
- Cloudflare Pages build output (`_redirects`, `_headers`, `404.html`) and a reproducible build (committed lockfile).
- Build-time checks over the generated files.
- Removing the `/admin` placeholder and the unused `server/` Express/Mongo API.

Out of scope:
- Visual redesign or new pages; copy changes beyond the new SEO titles/descriptions.
- Domain cutover, DNS, mail, Search Console, Google Business Profile (see "Launch checklist", a later task).
- Ranking guarantees or keyword research with real search volumes.

## Decisions and context

Approved by John (2026-10-31):
- Hosting is Cloudflare Pages. Vercel Hobby was only a customer preview and will be removed after the move.
- Not launching yet: the site must stay out of search indexes until launch.
- Personal work.

Council recommendations, approved by John 2026-10-31 (R):
- **URLs, Finnish at the root, translated slugs, no trailing slash** (Opus; Astra and Sol preferred shared English slugs). The real domain is not live, so this is the cheapest moment to choose; the cost is two redirects.

  | Page | fi (x-default) | sv | en |
  |---|---|---|---|
  | Home | `/` | `/sv` | `/en` |
  | About | `/tietoa-minusta` | `/sv/om-mig` | `/en/about` |
  | Contact | `/yhteystiedot` | `/sv/kontakt` | `/en/contact` |

- **Language comes only from the URL.** Remove browser-language detection and the saved `yhdessa-language` preference (`client/src/context/LanguageContext.jsx:6-15`); never redirect by language. Google advises against automatic language redirects.
- **In-app navigation stays** (Opus, Sol; Astra proposed full page loads). One head-tag function serves both the prerender and client-side navigation, replacing the effect at `client/src/App.jsx:37-43`. This keeps the existing scroll/focus handling at `App.jsx:27-35`.
- **Structured data: `Organization` + `WebSite` + `Person`** (Sol, close to Astra). No `MedicalClinic`/`MedicalBusiness`/`LocalBusiness` until a publishable street address exists; Google's local features require one.
- **Remove `/admin`.** `client/src/pages/Admin.jsx` is a placeholder from the original scaffold: a login with hard-coded `admin`/`admin123` (line 12) checked in the browser, and behind it only a heading and a TODO. It edits nothing, and the credentials ship in the public JavaScript.

Repository facts the implementation must respect:
- Copy lives in `client/src/translations.js` per language, including brand names (`brand`, lines 52/114/176) and the business ID shown in the footer (`3506989-2`).
- Hard-coded internal paths: `App.jsx:57`, `ContactInvitation.jsx:11`, `Footer.jsx:14,19,27`, `Navbar.jsx:19,23-25`, `Home.jsx:22-23`. Language buttons: `Navbar.jsx:27-33`.
- `client/index.html` carries one static Finnish head and an OG image on `yhdessa-web.vercel.app`.
- `Footer.jsx:25` renders `new Date().getFullYear()`; this differs from prerendered HTML after New Year until the next build.
- Installed: React/React DOM 18.3.1, react-router-dom 6.30.6, Vite 4.5.14. `react-dom/server` and `StaticRouter` are available; no new dependencies are needed.
- `package-lock.json` is gitignored (`.gitignore:11`); builds are not reproducible.
- The ten service areas with course lists (`DESIGN.md`, client decisions 2026-10-31) are content inside `<details>`; their text must be present in the generated HTML.

## Amendment 2026-11-04 (integration with main)

- Swedish and English are hidden until Frida has reviewed them (client decision 2026-11-04). `languages` in `client/src/routes.js` lists the enabled languages; disabled languages get no pages, sitemap entries, alternates or switch links, and their paths return 404. The checks below that name nine pages apply to the enabled set; `scripts/seo.test.mjs` reads the enabled list and was also run with all three languages.
- The Finnish privacy notice `/tietosuojaseloste` (added on main 2026-11-02) is a fifth route that exists only in Finnish. It has no language alternates; the language switch links to the other language's home from it.
- `brand` is the untranslated official name in every language (client decision 2026-11-01), so `alternateName` lists only distinct names.
- Indexable builds keep `X-Robots-Tag: noindex` on the project's `*.pages.dev` addresses only (review finding), and the Pages build command runs `npm test` so the checks gate deploys.
- SEO descriptions no longer mention a reception (Frida has none under her current Kela contract, 2026-11-02); About descriptions follow her 2026-11-04 text.

## Acceptance and validation

Build settings: `SITE_URL` (absolute origin, no trailing slash, required) and `SITE_INDEXABLE` (`true` only at launch; anything else means not indexable). Checks run with `npm --prefix client run build` followed by a Node `node --test` script over `client/dist` (no new dependencies).

Routing and language
- AC-001: Each of the nine URLs above renders its page in its language on direct load, refresh and back/forward, regardless of any `yhdessa-language` value in localStorage or the browser's language. Check: dev server and preview with localStorage set to `sv` while loading `/`.
- AC-002: The FI/SV/EN controls are links to the same page in the other language, with `lang`/`hreflang` attributes and `aria-current` on the active language; the visible labels and screen-reader names from `DESIGN.md` stay as they are. Every internal link points to the current language's version.
- AC-003: `/about` and `/contact` redirect permanently (301/308) to `/tietoa-minusta` and `/yhteystiedot`. `/admin` no longer exists and returns 404 (R).

Prerendered HTML
- AC-004: The build writes `index.html`, `tietoa-minusta.html`, `yhteystiedot.html`, `sv.html`, `sv/om-mig.html`, `sv/kontakt.html`, `en.html`, `en/about.html`, `en/contact.html` and `404.html`. Each contains its own language's H1, body text (including all service and course text) and navigation, readable with JavaScript disabled.
- AC-005: Loading each page in a browser produces no React hydration warnings, including after a year change (the footer year is fixed at build time).
- AC-006: Exactly one H1 per page; the existing heading structure is kept.

Head tags (checked over all nine files)
- AC-007: `<html lang>` is `fi`/`sv`/`en`. Exactly one `<title>` and one meta description, unique across the nine pages, taken from `client/src/seoCopy.js` (kept apart from `translations.js` so concurrent copy edits do not conflict), not from body paragraphs as `App.jsx:24-25` did.
- AC-008: Exactly one canonical, equal to `SITE_URL` + the page's own path.
- AC-009: Four `link rel="alternate"` tags (`fi`, `sv`, `en`, `x-default` → Finnish) matching the route table, identical on all three language versions of a page.
- AC-010: OG and Twitter tags: title, description, `og:url` equal to the canonical, `og:site_name` (the language's brand), `og:type=website`, `og:locale` (`fi_FI`/`sv_FI`/`en_GB`) with alternates, `og:image` = `SITE_URL/brand/yhdessa-social.png` with 1200×630 and localized alt text, `twitter:card=summary_large_image`. No `vercel.app` reference remains anywhere in `dist`.
- AC-011: Client-side navigation updates title, description, canonical, alternates, OG title/description/url and `html lang` to the same values the prerender produced.

Indexing
- AC-012: With `SITE_INDEXABLE` unset or `false`: every HTML file has `<meta name="robots" content="noindex">`, `_headers` sends `X-Robots-Tag: noindex` for `/*`, and `robots.txt` allows crawling but has no `Sitemap:` line. With `SITE_INDEXABLE=true`: no noindex anywhere except `404.html`, and `robots.txt` names `SITE_URL/sitemap.xml`.
- AC-013: `sitemap.xml` lists exactly the nine canonical URLs, with no `lastmod`.
- AC-014: `404.html` is a standalone page (no hydration), always `noindex`, with no canonical or alternates, and links to the three home pages. Unknown paths such as `/nope` and `/sv/nope` return HTTP 404 with this page on Pages.

Structured data
- AC-015: Every page has one JSON-LD block that parses: an `Organization` (`@id` `SITE_URL/#practice`) with name, the other two brand names as `alternateName`, url, logo, telephone, email, the business ID, and `areaServed` Turku. Home adds a `WebSite` referencing it (name and alternate names; this matters because "Yhdessä" is a common word). About pages add a `Person` for Frida Lindström with a localized `jobTitle` and `worksFor` the practice. No address, hours, prices, ratings or reviews. Check: JSON parse in the test, then the Schema Markup Validator.

Hosting and build
- AC-016: `client/package-lock.json` is committed (remove it from `.gitignore`), and the Node version is pinned for the Pages build.
- AC-017: On a Cloudflare Pages preview deployment, `curl -sSI` shows: 200 for all nine URLs; redirects without trailing slash for `/sv/om-mig/`; 301/308 for `/about`; 404 for `/nope`; `x-robots-tag: noindex` on pages. Record which of these Pages does by itself (clean URLs, trailing slashes, 404 status, noindex on previews), because they are not yet verified against current Cloudflare docs.
- AC-018: After the customer has the Pages link, `vercel.json` is deleted from the repository. Its catch-all would serve the Finnish home HTML for `/tietoa-minusta` and break hydration.

## Execution considerations

Increments, each verifiable before the next:
1. Route table (page × language → path, plus a lookup from path), language from URL, localized links (AC-001–003, still a client-only app).
2. Prerender one page (Swedish About) end to end and inspect it without JavaScript (AC-004/005 for one page).
3. All nine pages + `404.html`, head tags, JSON-LD, sitemap, robots, `_redirects`, `_headers` (AC-004–015), with the `node --test` check.
4. Lockfile, Pages project, preview checks (AC-016/017). **John** creates the Cloudflare Pages project linked to the GitHub repo (build command `npm ci --prefix client && npm run build --prefix client`, output `client/dist`) and sets `SITE_URL` to the `pages.dev` address.
5. Send the customer the Pages link, then delete `vercel.json` and the Vercel project (AC-018; deleting the project is John's account action).

Approach (all three council members agree): a Vite SSR build of a server entry (`StaticRouter` + `renderToString`) into a temporary folder, then a Node prerender script that writes the files above into `client/dist` using Vite's built `index.html` as the template; `hydrateRoot` in `client/src/main.jsx` for prerendered pages. The `index.html` head becomes placeholders filled per page. Follow the Vite 4 prerender pattern (v4.vitejs.dev/guide/ssr.html).

Hydration hazards: anything that reads `localStorage`, `navigator`, `window` or the current date during render.

## Open decisions

None. `server/` (an unused Express/Mongo content API with an unauthenticated `PUT /api/content/:id`) was removed with its root scripts, the Vite `/api` proxy and the unused `axios` and `file:..` client dependencies.

Customer inputs (do not block implementation; drafts are used until approved):
- The nine titles and descriptions. Draft titles: `Puheterapia Turussa – Puheterapiapalvelut Yhdessä`, `Puheterapeutti Frida Lindström – Puheterapiapalvelut Yhdessä`, `Yhteystiedot – Puheterapiapalvelut Yhdessä`, and equivalents in Swedish (`Talterapi i Åbo`, `Talterapeut Frida Lindström`, `Kontakt`) and English (`Speech therapy in Turku`, `Speech therapist Frida Lindström`, `Contact`). Descriptions are drafted from existing copy only.
- About H1: change "Tietoa minusta" to "Puheterapeutti Frida Lindström"? Her name now appears only in the portrait caption.
- Whether the Swedish and English copy is professionally reviewed before launch.
- For launch: a publishable street address (enables `MedicalBusiness`), which municipalities "lähialueet" covers, and any professional listings for `sameAs`.

## Launch checklist (later task, not part of this spec)

Domain `puheterapiayhdessa.fi` added to Pages with DNS at Domainhotelli or moved to Cloudflare; `SITE_URL` set to the domain and `SITE_INDEXABLE=true`; Bulk Redirect from the `pages.dev` address and `www` to the apex; Search Console domain verification and sitemap submission; Google Business Profile as a service-area business; mail via a mail provider (not self-hosted).

Candidate search terms (unvalidated, check in Search Console after launch): puheterapia Turku, puheterapeutti Turku, lasten puheterapia Turku, ruotsinkielinen puheterapia Turku; talterapi Åbo, talterapeut Åbo, svenskspråkig talterapi Åbo.
