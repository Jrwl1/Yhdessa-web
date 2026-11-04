import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export { routes } from './routes';
export { getHead, renderHead, siteConfig } from './seo';

// Used only by scripts/prerender.mjs at build time; never shipped to the browser.
export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
