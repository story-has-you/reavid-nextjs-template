"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { languages, locales } from "@/config/locale";
import { Language } from "@/types/language";
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center space-x-2" variant="outline">
          <Icons.globe className="w-4 h-4 mr-1" />
          {getLocale()}
          <Icons.chevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {languages.map((item, index) => {
            return (
              <DropdownMenuItem onSelect={() => handleOnSelect(item)} key={index}>
                {item.language}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
