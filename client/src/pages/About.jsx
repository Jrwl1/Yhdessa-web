import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function About() {
  const { language } = useLanguage();
  const { about: t, home } = translations[language];
  return (
    <>
      <section className="page-width about-intro section-space">
        <div className="about-copy">
          <h1>{t.heading}</h1>
          <p className="lead">{t.content}</p>
        </div>
        <figure className="therapist-portrait">
          <img
            src="/images/frida-portrait.webp"
            alt={t.portraitAlt}
            width="1122"
            height="1402"
          />
          <figcaption>{t.portraitCaption}</figcaption>
        </figure>
        <div className="about-experience">
          {t.experience.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className="about-approach">
        <div className="page-width approach-inner">
          <h2>{home.therapyTitle}</h2>
          <div>
            <p>{t.approach}</p>
            <h3>{home.languagesTitle}</h3>
            <p>{home.languagesText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
