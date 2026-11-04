import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRoute } from "../context/LanguageContext";
import { pathFor } from "../routes";
import translations from "../translations";

const languages = [
  { code: "fi", name: "Suomi" },
  { code: "sv", name: "Svenska" },
  { code: "en", name: "English" },
];

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
        <div className="language-switch" role="group" aria-label={t.ui.language}>
          {languages.map(({ code, name }) => (
            <Link key={code} to={pathFor(page ?? "home", code)} lang={code} hrefLang={code}
              aria-current={language === code ? "true" : undefined}>
              {code.toUpperCase()}<span className="sr-only"> {name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
