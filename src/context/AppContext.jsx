import { createContext, useState, useEffect } from "react";
import content from "../data/content"; 

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved ? saved : "en";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = content[language];

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage, t }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;