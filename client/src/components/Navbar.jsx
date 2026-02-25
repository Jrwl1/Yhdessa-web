import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const FlagFI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-6">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#003580" d="M180 0h120v480H180z" />
    <path fill="#003580" d="M0 180h640v120H0z" />
  </svg>
);
const FlagSE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-6">
    <path fill="#005cbf" d="M0 0h640v480H0z" />
    <path fill="#ffc720" d="M180 0h60v480h-60z" />
    <path fill="#ffc720" d="M0 210h640v60H0z" />
  </svg>
);
const FlagGB = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-6 h-6">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0l640 480m0-480L0 480" />
    <path fill="#c8102e" d="M0 0l640 480m0-480L0 480" stroke="#fff" strokeWidth="40" />
    <path fill="#c8102e" d="M270 0h100v480H270z" />
    <path fill="#c8102e" d="M0 190h640v100H0z" />
  </svg>
);

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm md:text-base transition ${
      isActive ? "bg-white text-slate-900 shadow" : "bg-white/45 text-slate-700 hover:bg-white/80"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-primary/75 py-3 text-text shadow-md backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 md:relative md:flex-row md:justify-center">
          <Link to="/" className="block">
            <img
              src="/brand/logo-ai-raw-crop.png"
              alt={t.brand}
              className="brand-wordmark h-[88px] w-auto max-w-[92vw] object-contain md:h-[96px]"
            />
          </Link>

          <div className="flex items-center gap-2 md:absolute md:right-0 md:top-3">
            <button onClick={() => setLanguage("fi")} aria-label="Finnish" className="rounded-full bg-white/70 p-1.5 transition hover:scale-110"><FlagFI /></button>
            <button onClick={() => setLanguage("sv")} aria-label="Swedish" className="rounded-full bg-white/70 p-1.5 transition hover:scale-110"><FlagSE /></button>
            <button onClick={() => setLanguage("en")} aria-label="English" className="rounded-full bg-white/70 p-1.5 transition hover:scale-110"><FlagGB /></button>
            <button onClick={toggleTheme} className="ml-1 rounded-full bg-accent px-3 py-1 text-sm text-white shadow transition hover:scale-105">
              {theme === "light" ? "🌙" : "☀"}
            </button>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 overflow-x-auto pb-1">
          <NavLink to="/" className={navClass}>
            {t.home.homeLink}
          </NavLink>
          <NavLink to="/about" className={navClass}>
            {t.about.heading}
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            {t.contact.heading}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
