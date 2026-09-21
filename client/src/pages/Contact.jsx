import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Contact() {
  const { language } = useLanguage();
  const { contact: t, home } = translations[language];
  return (
    <section className="page-width contact-page section-space">
      <div className="contact-copy">
        <h1>{t.heading}</h1>
        <p className="lead">{t.description}</p>
        <div className="contact-languages">
          <h2>{home.languagesTitle}</h2>
          <p>{home.languagesText}</p>
        </div>
        <img className="contact-image" src="/images/communication-details.webp" alt=""
          width="1536" height="1024" loading="lazy" />
      </div>
      <dl className="contact-details">
        <dt>{t.emailLabel}</dt>
        <dd><a className="text-link" href="mailto:puheterapiayhdessa@gmail.com">puheterapiayhdessa@gmail.com</a></dd>
        <dt>{t.phoneLabel}</dt>
        <dd><a className="text-link" href="tel:+358458471446">045 847 1446</a></dd>
      </dl>
    </section>
  );
}
