Yhdessä-web

A multilingual company website for a family friend: a speech therapy practice in Turku (Finnish, Swedish, English).

Tech stack: React, Vite, Tailwind CSS. No backend: the build produces static HTML for every page and language.

Develop:
  npm install --prefix client
  npm run dev --prefix client

Build and check (SITE_URL is required; SITE_INDEXABLE=true only at launch):
  SITE_URL=https://example.pages.dev npm run build --prefix client
  SITE_URL=https://example.pages.dev npm test --prefix client

The build writes complete HTML per page and language, 404.html, sitemap.xml, robots.txt and the
Cloudflare Pages files _redirects and _headers into client/dist. See docs/seo-spec.md.

Hosting: Cloudflare Pages. Build command
`npm ci --prefix client && npm run build --prefix client && npm test --prefix client` (the checks fail the deploy),
output directory `client/dist`, environment variable SITE_URL. Node version is in .node-version.
vercel.json stays only until the customer preview has moved to Pages. Do not merge this setup to
main before then: Vercel has no SITE_URL, so its build fails and the customer preview stops updating.
