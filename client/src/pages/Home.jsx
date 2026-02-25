import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

/**
 * Home page with premium hero image and Our Philosophy section
 */
export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;
  const serviceBlurbByLanguage = {
    fi: "Yksilöllistä ja tavoitteellista tukea.",
    sv: "Individuellt och målinriktat stöd.",
    en: "Individual and goal-oriented support."
  };
  const serviceBlurb = serviceBlurbByLanguage[language] || serviceBlurbByLanguage.en;

  return (
    <div className="bg-background text-text">
      {/* Hero Section with background image */}
      <section
        className="relative text-center text-white py-32 bg-cover bg-center rounded-b-3xl shadow-lg"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">{t.title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">{t.description}</p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-text px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transform transition"
          >
            {t.cta}
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section
     className="py-16 rounded-3xl mx-4 md:mx-0"
  style={{ backgroundColor: '#ECE6DE' }}
>
  <h2 className="text-4xl font-bold text-primary text-center mb-10">{t.servicesTitle}</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
    {t.services.map((service, index) => (
      <div key={index} className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center">
        <h3 className="text-2xl font-semibold mb-3 text-slate-800">{service}</h3>
        <p className="text-gray-600">{serviceBlurb}</p>
      </div>
    ))}
  </div>
</section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-primary mb-4">{t.philosophyTitle}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t.philosophyText}</p>
        </div>
        <img
          src="/philosophy.jpg"
          alt="Barn och talterapeut tillsammans"
          className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover object-center opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
        />
      </section>
    </div>
  );
}
