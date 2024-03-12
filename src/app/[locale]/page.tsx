import { buildPageLanguage } from "@/config/locale";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const l = await buildPageLanguage();
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 14 Ready.
        </p>
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
