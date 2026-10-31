import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const { home: t, nav, about } = translations[language];
  const [intro, ...contract] = t.description.split(/(?<=\.)\s+/);
  const half = Math.ceil(t.services.length / 2);
  const serviceColumns = [t.services.slice(0, half), t.services.slice(half)];
  return (
    <>
      <section className="hero-section">
        <div className="page-width home-hero">
        <div className="hero-copy">
          <h1>{t.title}</h1>
          <p>{intro}</p>
          <p className="hero-note">{contract.join(" ")}</p>
          <p className="hero-note">{t.languagesText}</p>
          <div className="hero-actions">
            <Link to="/contact" className="button">{t.cta}</Link>
            <Link to="/about" className="text-link">{nav.about}</Link>
          </div>
        </div>
        <figure className="hero-figure">
          <img src="/images/frida-portrait.webp" alt=""
            width="1122" height="1402" fetchpriority="high" />
          <figcaption>{about.portraitCaption}</figcaption>
        </figure>
        </div>
      </section>

      <section className="services-surface" aria-labelledby="services-title">
        <div className="page-width section-space services-section">
          <div className="section-intro">
            <h2 id="services-title">{t.servicesTitle}</h2>
          </div>
          <div className="service-columns">
            {serviceColumns.map((column) => (
              <ul key={column[0].title} className="service-list" role="list">
                {column.map((service) => (
                  <li key={service.title}>
                    <details>
                      <summary>{service.title}</summary>
                      <p className="course-label">{t.coursesLabel}</p>
                      <ul className="course-list" role="list">
                        {service.courses.map((course) => (
                          <li key={course.name} lang={course.lang}>{course.name}</li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
