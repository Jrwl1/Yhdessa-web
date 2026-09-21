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
          <p>{t.experience}</p>
        </div>
        {/* Replace this reserved frame with the therapist's real portrait when supplied. */}
        <div className="portrait-placeholder">
          <img src="/brand/yhdessa_pink.png" alt="" width="1295" height="428" />
          <p>{t.portraitPending}</p>
        </div>
      </section>
      <section className="about-approach">
        <div className="page-width approach-inner">
          <h2>{home.therapyTitle}</h2>
          <div>
            <p>{t.approach}</p>
            <h3>{home.languagesTitle}</h3>
            <p>{t.guidance}</p>
            <p lang={language === "fi" ? "sv" : undefined}>{t.swedish}</p>
          </div>
        </div>
      </section>
      <ContactInvitation />
    </>
  );
}
