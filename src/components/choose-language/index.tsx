"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { defaultLocale, languages } from "@/server/locale";
import { useParams, useRouter } from "next/navigation";

export function ChooseLanguage() {
  const params = useParams();
  const router = useRouter();
  const langName = languages.find((item) => item.lang === params.locale)?.language;
  if (!langName) {
    return defaultLocale;
  }

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
          {languages.map((item, index) => {
            return (
              <DropdownMenuItem onSelect={() => router.push(item.lang)} key={index}>
                {item.language}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
