"use client";

import { Icons } from "@/components/icons";
import { languages, locales } from "@/config/locale";
import { type Language } from "@/types/language";
import { usePathname, useRouter } from "next/navigation";

export function ChooseLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  const handleOnSelect = (item: Language) => {
    if (!pathname) {
      return;
    }
    const locale = locales.find((locale) => pathname.startsWith(`/${locale}`));
    if (locale) {
      const path = pathname.substring(pathname.indexOf("/") + 3);
      router.push(`/${item.lang}${path}`);
      return;
    }
    router.push(`/${item.lang}${pathname}`);
  };

  const getLocale = () => {
    const locale = languages.find((item) => {
      const locale = locales.find((locale) => pathname.startsWith(`/${locale}`));
      if (item.lang === locale) {
        return item.language;
      }
      return null;
    });
    return locale?.language ?? "English";
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <button className="flex items-center space-x-2">
          <Icons.globe className="w-4 h-4 mr-1" />
          {getLocale()}
          <Icons.chevronDown className="w-4 h-4" />
        </button>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {languages.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => handleOnSelect(item)}>{item.language}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
