import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="mt-12 rounded-t-2xl bg-secondary/80 py-6 text-text shadow-inner backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src="/brand/badge-64.png"
            alt={t.brand}
            className="h-8 w-8 rounded-full border border-white/70"
          />
          <div>
            <p className="font-semibold text-slate-800">{t.brand}</p>
            <p className="text-slate-600">© {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="text-center text-slate-600 md:text-right">
          <p>{t.footer.businessId}</p>
          <p>{t.footer.contactPending}</p>
        </div>
      </div>
    </footer>
  );
}
