import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import ContactInvitation from "./ContactInvitation";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Link to="/" aria-label={t.brand} className="footer-brand">
          <img src="/brand/yhdessa-logo-green.svg" alt="" width="317" height="106" loading="lazy" />
        </Link>
        <div className="footer-details">
          <p>{t.brand}</p>
          {!matchPath("/contact", pathname) && (
            <>
              <p><a className="text-link" href="mailto:puheterapiayhdessa@gmail.com">puheterapiayhdessa@gmail.com</a></p>
              <p><a className="text-link" href="tel:+358458471446">045 847 1446</a></p>
            </>
          )}
          <p>{t.footer.businessId} <span aria-hidden="true">·</span> © {new Date().getFullYear()}</p>
          <p className="footer-documents" lang="fi">
            <Link className="text-link" to="/tietosuojaseloste">{t.privacy.heading}</Link>
            <a className="text-link" href="/omavalvontasuunnitelma.pdf">Omavalvontasuunnitelma (PDF)</a>
          </p>
        </div>
        {(matchPath("/", pathname) || matchPath("/about", pathname)) && <ContactInvitation />}
        <div className="footer-kela">
          <img className="footer-kela-logo" src="/brand/kela-fpa.svg" alt="Kela" width="120" height="38" loading="lazy" />
          <p>{t.footer.kelaProvider}</p>
          <img className="footer-member" src="/brand/kuntoutusyrittajat-jasenyritys.svg" lang="fi"
            alt="Kuntoutusyrittäjät jäsenyritys" width="300" height="419" loading="lazy" />
        </div>
      </div>
    </footer>
  );
}
