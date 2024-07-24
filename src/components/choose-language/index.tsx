"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLang } from "@/config/atom";
import { Locale, i18n } from "@/server/locale";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ChooseLanguage({ className }: { className?: string }) {
  const pathName = usePathname();
  const params = useParams();
  const [langName] = useState<string>(i18n.languages.find((item) => item.lang === params.lang)?.language ?? i18n.defaultLocaleName);
  const [lang, setLang] = useLang();
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
    setLang(locale);
  };

  useEffect(() => {
    params.lang && setLang(params.lang as Locale);
  }, []);

  return (
    <div className={className}>
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
    </div>
  );
}
