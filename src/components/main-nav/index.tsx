import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav({ language }: { language: any }) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={"/favicon.ico"} height={32} width={32} alt="ReAvid" />
        <span className="inline-block font-bold">{siteConfig.title}</span>
      </Link>
      <Link href="/" className={cn("flex items-center text-sm font-medium text-muted-foreground")}>
        {language.home}
      </Link>
    </div>
  );
}
