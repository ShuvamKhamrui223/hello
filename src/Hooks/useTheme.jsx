import { useState, useEffect } from "react";

const useTheme = () => {
  const getTheme = () => {
    if (localStorage.getItem("site_theme"))
      return localStorage.getItem("site_theme");

    return window.matchMedia("prefers-color-scheme: dark").matches
      ? "dark"
      : "light";
  };
  const [theme, setTheme] = useState(getTheme);
  const currenttheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currenttheme);
    root.classList.add(theme);

    localStorage.setItem("site_theme", theme);
  }, [theme, currenttheme]);

  return [currenttheme, setTheme];
};

export default useTheme;
