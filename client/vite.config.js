
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, ssrBuild }) => {
  // Absolute origin used in canonical, hreflang, share and sitemap URLs. Builds must say where the site lives.
  const rawSiteUrl = process.env.SITE_URL || (command === 'serve' ? 'http://localhost:5173' : '');
  if (!rawSiteUrl) {
    throw new Error('Set SITE_URL for builds, e.g. SITE_URL=https://yhdessa.pages.dev npm run build');
  }
  let parsed;
  try {
    parsed = new URL(rawSiteUrl);
  } catch {
    parsed = null;
  }
  // Only a bare http(s) origin works: anything else makes canonical and sitemap URLs relative or wrong.
  if (!parsed || !['http:', 'https:'].includes(parsed.protocol) || parsed.pathname !== '/'
    || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error(`SITE_URL must be an http(s) origin such as https://yhdessa.pages.dev, got "${rawSiteUrl}"`);
  }
  const siteUrl = parsed.origin;
  return {
    plugins: [react()],
    define: {
      __SITE_URL__: JSON.stringify(siteUrl),
      // Only an explicit "true" lets search engines index the site; everything else is the pre-launch noindex.
      __SITE_INDEXABLE__: JSON.stringify(process.env.SITE_INDEXABLE === 'true'),
      __BUILD_YEAR__: JSON.stringify(new Date().getFullYear())
    },
    // .mjs so Node loads the server bundle as an ES module without "type": "module" in package.json.
    build: ssrBuild ? { rollupOptions: { output: { entryFileNames: '[name].mjs' } } } : {},
    server: { port: 5173 }
  };
});
