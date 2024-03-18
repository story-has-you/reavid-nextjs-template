import { buttonVariants } from "@/components/ui/button";
import { buildHomeLanguage } from "@/config/locale";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export async function Home() {
  const l = await buildHomeLanguage();
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {l.title1} <br className="hidden sm:inline" />
          {l.title2}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">{l.subTitle}</p>
      </div>
      <div className="flex gap-4">
        <Link href={siteConfig.links.docs} target="_blank" className={buttonVariants()}>
          {l.documentation}
        </Link>
        <Link target="_blank" href={siteConfig.links.github} className={buttonVariants({ variant: "outline" })}>
          {l.github}
        </Link>
      </div>
    </section>
  );
}
