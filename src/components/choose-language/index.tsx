"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Locale, i18n } from "@/server/locale";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function ChooseLanguage() {
  const pathName = usePathname();
  const params = useParams();
  const langName = i18n.languages.find((item) => item.lang === params.locale)?.language ?? i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
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
            <DropdownMenuItem key={index}>
              <Link href={redirectedPathName(item.lang)}>{item.language}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
