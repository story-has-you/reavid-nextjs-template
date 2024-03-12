import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buildMainNavLanguage } from "@/config/locale";

export async function MainNav() {
  const l = await buildMainNavLanguage();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <Link href="/" className={cn("flex items-center text-sm font-medium text-muted-foreground")}>
        {l.home}
      </Link>
    </div>
  );
}
