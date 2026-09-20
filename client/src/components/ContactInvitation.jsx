import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function ContactInvitation() {
  const { language } = useLanguage();
  const t = translations[language].home;
  return (
    <section className="contact-invitation">
      <div className="page-width invitation-inner">
        <div>
          <h2>{t.finalCtaTitle}</h2>
          <p>{t.finalCtaText}</p>
        </div>
        <Link to="/contact" className="button button-mustard">{t.cta}</Link>
      </div>
    </section>
  );
}
