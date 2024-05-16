"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useLocalStorage from "@/hooks/use-localstore";
import { Locale, i18n } from "@/server/locale";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function ChooseLanguage() {
  const pathName = usePathname();
  const params = useParams();
  const defaultLocale = params.locale ?? i18n.defaultLocale;
  const [langName] = useState<string>(i18n.languages.find((item) => item.lang === params.locale)?.language ?? i18n.defaultLocaleName);
  const [locale, setLocale] = useLocalStorage<string | string[]>("locale", defaultLocale);

  const redirectedPathName = useCallback(
    (locale: Locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    },
    [pathName],
  );

  const handleLocaleChange = (locale: Locale) => {
    setLocale(locale);
  };

  useEffect(() => {
    setLocale(defaultLocale);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center space-x-2" variant="outline">
          <Icons.globe className="w-4 h-4 mr-1" />
          {langName}
          <Icons.chevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {i18n.languages.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={redirectedPathName(item.lang)} onClick={() => handleLocaleChange(item.lang)}>
                {item.language}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
