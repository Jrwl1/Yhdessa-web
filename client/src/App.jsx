import React, { useEffect, useRef } from 'react';
import { Link, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRoute } from './context/LanguageContext';
import { routes, pathFor } from './routes';
import { applyHead, getHead } from './seo';
import translations from './translations';

const pageComponents = { home: Home, about: About, contact: Contact };

export default function App() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const { page, lang } = useRoute();
  const t = translations[lang];
  const mainRef = useRef(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    window.scrollTo(0, 0);
    // Move focus after deliberate page navigation, preserving initial and history focus.
    if (navigationType !== 'POP') {
      mainRef.current?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname, navigationType]);

  // Prerendered pages already carry these tags; this keeps them right after in-app navigation.
  useEffect(() => {
    applyHead(getHead(page, lang), lang);
  }, [page, lang]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={mainRef} id="main-content" tabIndex={-1} className="flex-grow">
        <Routes>
          {routes.map(({ path, page: routePage }) => {
            const Page = pageComponents[routePage];
            return <Route key={path} path={path} element={<Page />} />;
          })}
          <Route path="*" element={
            <section className="page-width section-space">
              <h1>{t.notFound.heading}</h1>
              <Link to={pathFor('home', lang)} className="button mt-8">{t.nav.home}</Link>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
