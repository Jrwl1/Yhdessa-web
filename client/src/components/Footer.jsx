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
          <img src="/brand/yhdessa_pink.png" alt="" width="1295" height="428" loading="lazy" />
        </Link>
        <div className="footer-details">
          <p>{t.brand}</p>
          <p><a className="text-link" href="mailto:puheterapiayhdessa@gmail.com">puheterapiayhdessa@gmail.com</a></p>
          <p><a className="text-link" href="tel:+358458471446">045 847 1446</a></p>
          <p>{t.footer.businessId} <span aria-hidden="true">·</span> © {new Date().getFullYear()}</p>
        </div>
        <Link to="/contact" className="text-link">{t.nav.contact}</Link>
      </div>
    </footer>
  );
}
