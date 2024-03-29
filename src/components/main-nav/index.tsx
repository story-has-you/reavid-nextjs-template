import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MainNavLanguage } from "@/types/language";

interface Props {
  language: MainNavLanguage;
}

export function MainNav({ language }: Props) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.title}</span>
      </Link>
      <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
        {language.home}
      </Link>
    </div>
  );
}
