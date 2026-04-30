import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-background px-6 py-16 text-text">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,43,77,0.12)] md:grid-cols-[0.95fr_1.05fr] md:p-8">
        <img
          src="/images/therapy-room-placeholder.webp"
          alt=""
          className="h-full min-h-[340px] w-full rounded-2xl object-cover"
        />
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-primary md:text-5xl">{t.heading}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 md:text-xl">{t.content}</p>
        </div>
      </div>
    </div>
  );
}
