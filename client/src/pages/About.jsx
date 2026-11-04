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
          <p className="about-name">{t.portraitCaption}</p>
          <p className="lead">{t.content}</p>
        </div>
        <img className="about-image" src="/images/hero-speech-bubbles.webp"
          alt="" width="1122" height="1402" />
        <div className="about-experience">
          {t.experience.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-languages">
            <h2>{home.languagesTitle}</h2>
            <p>{home.languagesText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
