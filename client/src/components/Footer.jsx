import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Link to="/" aria-label={t.brand} className="footer-brand">
          <img src="/brand/yhdessa-logo-cream.svg" alt="" width="201" height="67" loading="lazy" />
        </Link>
        <div className="footer-details">
          <p>{t.brand}</p>
          <p>{t.footer.businessId} <span aria-hidden="true">·</span> © {new Date().getFullYear()}</p>
        </div>
        <Link to="/contact" className="text-link">{t.nav.contact}</Link>
      </div>
    </footer>
  );
}
