"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return isDarkMode;
};
