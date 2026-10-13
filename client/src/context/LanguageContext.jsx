import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem("yhdessa-language");
      return ["fi", "sv", "en"].includes(savedLanguage) ? savedLanguage : "fi";
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
