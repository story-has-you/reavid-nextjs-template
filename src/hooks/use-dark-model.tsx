"use client";

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const listener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
    };
  }, []);

  return isDarkMode;
};
