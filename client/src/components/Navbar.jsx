import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations"; // 🔥 Import global translations for multi-language support

// Inline SVG flags for language switcher
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
  const [theme, setTheme] = useState("light"); // 🌙 Current theme state
  const { language, setLanguage } = useLanguage(); // 🌐 Current language from context
  const t = translations[language]; // 📖 Load translations for selected language

  // 🔄 Apply/remove dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // 🌗 Toggle theme between light and dark
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="bg-primary/80 backdrop-blur text-text py-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Brand logo/text */}
        <div className="font-bold text-2xl tracking-wide">{t.brand}</div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-accent transition">{t.home.homeLink}</Link>
          <Link to="/about" className="hover:text-accent transition">{t.about.heading}</Link>
          <Link to="/contact" className="hover:text-accent transition">{t.contact.heading}</Link>
        </div>

        {/* Language selector & theme toggle */}
        <div className="flex items-center space-x-2">
          <button onClick={() => setLanguage("fi")} aria-label="Finnish" className="hover:scale-110 transition"><FlagFI /></button>
          <button onClick={() => setLanguage("sv")} aria-label="Swedish" className="hover:scale-110 transition"><FlagSE /></button>
          <button onClick={() => setLanguage("en")} aria-label="English" className="hover:scale-110 transition"><FlagGB /></button>
          <button onClick={toggleTheme} className="ml-2 bg-accent px-3 py-1 rounded-full shadow hover:scale-105 transition">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
