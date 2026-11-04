import React, { createContext, useContext, useEffect, useState } from "react";

// Swedish and English stay hidden until Frida has reviewed them; add them back here to re-enable.
export const languages = [
  { code: "fi", name: "Suomi" },
];
const enabledCodes = languages.map(({ code }) => code);

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem("yhdessa-language");
      if (enabledCodes.includes(savedLanguage)) return savedLanguage;
      const browserLanguages = navigator.languages ?? [navigator.language];
      const prefersSwedish = browserLanguages.some((code) => code?.toLowerCase().startsWith("sv"));
      return prefersSwedish && enabledCodes.includes("sv") ? "sv" : "fi";
    } catch {
      return "fi";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("yhdessa-language", language);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
