import React, { useEffect, useRef } from 'react';
import { Link, Routes, Route, matchPath, useLocation, useNavigationType } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import translations from './translations';

function AppContent() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const { language } = useLanguage();
  const t = translations[language];
  const mainRef = useRef(null);
  const previousPath = useRef(pathname);
  const isAdmin = Boolean(matchPath('/admin', pathname));
  const page = matchPath('/', pathname) ? t.home
    : matchPath('/about', pathname) ? t.about
    : matchPath('/contact', pathname) ? t.contact
    : t.notFound;
  const title = `${page.title || page.heading} | ${t.brand}`;
  const description = page.description || page.content || page.heading;

  useEffect(() => {
    if (previousPath.current === pathname) return;
    window.scrollTo(0, 0);
    // Move focus after deliberate page navigation, preserving initial and history focus.
    if (navigationType !== 'POP' && !isAdmin) {
      mainRef.current?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname, navigationType, isAdmin]);

  useEffect(() => {
    if (isAdmin) return;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [title, description, isAdmin]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={mainRef} id="main-content" tabIndex={-1} className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={
            <section className="page-width section-space">
              <h1>{t.notFound.heading}</h1>
              <Link to="/" className="button mt-8">{t.nav.home}</Link>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
