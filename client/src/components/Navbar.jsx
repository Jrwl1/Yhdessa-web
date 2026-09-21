import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const languages = [
  { code: "fi", name: "Suomi" },
  { code: "sv", name: "Svenska" },
  { code: "en", name: "English" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">{t.ui.skipToContent}</a>
      <div className="page-width header-inner">
        <Link to="/" className="brand-link" aria-label={t.brand}>
          <img src="/brand/yhdessa_orange.png" alt="" width="1295" height="428" />
        </Link>
        <nav className="primary-nav" aria-label={t.ui.navigation}>
          <NavLink to="/" end>{t.nav.home}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>
        <div className="language-switch" role="group" aria-label={t.ui.language}>
          {languages.map(({ code, name }) => (
            <button key={code} type="button" lang={code} aria-label={name}
              aria-pressed={language === code} onClick={() => setLanguage(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
