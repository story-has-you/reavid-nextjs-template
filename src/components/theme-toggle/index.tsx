"use client";

import { Icons } from "@/components/icons";
import * as React from "react";

import { themeChange } from "theme-change";

export function ThemeToggle() {
  React.useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <label className="swap swap-rotate" data-toggle-theme="dark,cupcake" data-act-class="ACTIVECLASS">
      <input type="checkbox" />
      <Icons.sun data-set-theme="cupcake" className="swap-on fill-current w-5 h-5" />
      <Icons.moon data-set-theme="dark" className="swap-off fill-current w-5 h-5" />
    </label>
  );
}
