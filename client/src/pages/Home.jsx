import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import ContactInvitation from "../components/ContactInvitation";

export default function Home() {
  const { language } = useLanguage();
  const { home: t, nav } = translations[language];
  return (
    <>
      <section className="page-width home-hero">
        <div className="hero-copy">
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <Link to="/contact" className="button">{t.cta}</Link>
        </div>
        <img className="hero-image" src="/images/therapy-still-life.webp"
          alt="" width="1122" height="1402" fetchpriority="high" />
      </section>

      <section className="page-width section-space services-section" aria-labelledby="services-title">
        <div className="section-intro">
          <h2 id="services-title">{t.servicesTitle}</h2>
          <p>{t.servicesIntro}</p>
        </div>
        <div className="service-list">
          {t.services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="therapy-section">
        <div className="page-width therapy-inner">
          <img src="/images/communication-details.webp" alt="" width="1536" height="1024" loading="lazy" />
          <div className="therapy-copy">
            <h2>{t.therapyTitle}</h2>
            <p>{t.therapyText}</p>
            <h3>{t.languagesTitle}</h3>
            <p>{t.languagesText}</p>
            <Link to="/about" className="text-link">{nav.about}</Link>
          </div>
        </div>
      </section>

      <ContactInvitation />
    </>
  );
}
