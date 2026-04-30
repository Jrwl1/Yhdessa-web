import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="bg-background text-text">
      <section
        className="relative isolate min-h-[560px] overflow-hidden rounded-b-[1.5rem] bg-cover bg-center px-5 py-28 text-white shadow-lg md:min-h-[620px] md:px-8"
        style={{ backgroundImage: "url('/images/speech-therapy-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-5xl items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight drop-shadow md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed drop-shadow md:text-xl">
              {t.description}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 font-semibold text-slate-950 shadow transition hover:bg-orange-400"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-4 mt-0 rounded-[1.5rem] bg-[#ECE6DE] px-5 py-16 md:mx-0 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-primary">{t.servicesTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{t.servicesIntro}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-[0_10px_24px_rgba(15,43,77,0.12)]"
              >
                <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <h2 className="text-4xl font-bold text-primary">{t.therapyTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">{t.therapyText}</p>

          <div className="mt-8 border-l-4 border-accent pl-5">
            <h3 className="text-2xl font-semibold text-slate-900">{t.locationsTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700">{t.locationsText}</p>
          </div>
        </div>

        <img
          src="/images/therapy-materials.webp"
          alt=""
          className="h-full min-h-[340px] w-full rounded-2xl object-cover shadow-lg"
        />
      </section>

      <section className="bg-primary px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <img
            src="/images/therapy-planning.webp"
            alt=""
            className="min-h-[320px] w-full rounded-2xl object-cover shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold">{t.paymentTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">{t.paymentText}</p>

            <div className="mt-8 border-l-4 border-accent pl-5">
              <h3 className="text-2xl font-semibold">{t.languagesTitle}</h3>
              <p className="mt-3 leading-relaxed text-white/90">{t.languagesText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-white p-8 text-center shadow-[0_10px_24px_rgba(15,43,77,0.10)] md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-primary">{t.finalCtaTitle}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">{t.finalCtaText}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-7 py-3 font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            {t.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
