import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRoute } from "../context/LanguageContext";
import { languages, pathFor } from "../routes";
import translations from "../translations";

const languageNames = { fi: "Suomi", sv: "Svenska", en: "English" };

export default function Navbar() {
  const { page, lang: language } = useRoute();
  const t = translations[language];
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">{t.ui.skipToContent}</a>
      <div className="page-width header-inner">
        <Link to={pathFor("home", language)} className="brand-link" aria-label={t.brand}>
          <img src="/brand/yhdessa-logo-pink.svg" alt="" width="317" height="106" />
        </Link>
        <nav className="primary-nav" aria-label={t.ui.navigation}>
          <NavLink to={pathFor("home", language)} end>{t.nav.home}</NavLink>
          <NavLink to={pathFor("about", language)}>{t.nav.about}</NavLink>
          <NavLink to={pathFor("contact", language)}>{t.nav.contact}</NavLink>
        </nav>
        {languages.length > 1 && (
          <div className="language-switch" role="group" aria-label={t.ui.language}>
            {languages.map((code) => (
              // A page that exists in one language only (the privacy notice) switches to the other language's home.
              <Link key={code} to={(page && pathFor(page, code)) || pathFor("home", code)} lang={code} hrefLang={code}
                aria-current={language === code ? "true" : undefined}>
                {code.toUpperCase()}<span className="sr-only"> {languageNames[code]}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
