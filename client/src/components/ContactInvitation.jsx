import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { pathFor } from "../routes";
import translations from "../translations";

export default function ContactInvitation() {
  const { language } = useLanguage();
  const t = translations[language].home;
  return (
    <div className="footer-action">
      <Link to={pathFor("contact", language)} className="button">{t.cta}</Link>
    </div>
  );
}
