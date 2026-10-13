import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const { home: t } = translations[language];
  return (
    <>
      <section className="hero-section">
        <div className="page-width home-hero">
        <div className="hero-copy">
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <Link to="/contact" className="button">{t.cta}</Link>
        </div>
        <img className="hero-image" src="/images/therapy-still-life.webp"
          alt="" width="1122" height="1402" fetchpriority="high" />
        </div>
      </section>

      <section className="services-surface" aria-labelledby="services-title">
        <div className="page-width section-space services-section">
          <div className="section-intro">
            <h2 id="services-title">{t.servicesTitle}</h2>
          </div>
          <div className="service-list">
            {t.services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
