import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import ContactInvitation from "../components/ContactInvitation";

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
        {/* Replace this reserved frame with the therapist's real portrait when supplied. */}
        <div className="portrait-placeholder">
          <img src="/brand/yhdessa-logo-green.svg" alt="" width="279" height="93" />
          <p>{t.portraitPending}</p>
        </div>
      </section>
      <section className="about-approach">
        <div className="page-width approach-inner">
          <h2>{home.therapyTitle}</h2>
          <div>
            <p>{home.therapyText}</p>
            <h3>{home.languagesTitle}</h3>
            <p>{home.languagesText}</p>
          </div>
        </div>
      </section>
      <ContactInvitation />
    </>
  );
}
