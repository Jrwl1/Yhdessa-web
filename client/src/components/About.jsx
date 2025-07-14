import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

/**
 * About page with large image and text block styled as a card
 */
export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-background text-text py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl p-8">
        <img
          src="https://via.placeholder.com/500x500"
          alt="Therapist"
          className="rounded-3xl shadow-lg w-full md:w-[500px] object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-primary mb-6">{t.heading}</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{t.content}</p>
        </div>
      </div>
    </div>
  );
}