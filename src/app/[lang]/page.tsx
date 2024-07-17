import { FAQ } from "@/components/faq";
import { Fonts } from "@/components/fonts";
import { Pricing } from "@/components/pricing";
import { PromptForm } from "@/components/prompt-form";
import { siteConfig } from "@/config/site";
import { Locale, dictionary, generateLanguageUrls } from "@/server/locale";

export async function generateMetadata({ params }: { params: { slug: string; lang: Locale } }) {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.url + `/${params.lang}`,
      languages: {
        "x-default": `${siteConfig.url}`,
        ...generateLanguageUrls(),
      },
    },
  };
}

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
  const [homePage, form, login, faq] = await Promise.all([dictionary(lang, "HomePage"), dictionary(lang, "Form"), dictionary(lang, "Login"), dictionary(lang, "FAQ")]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-5">
        <Fonts.h1>{homePage.title}</Fonts.h1>
        <Fonts.bodyLarge className="opacity-50">{homePage.description}</Fonts.bodyLarge>
      </div>

      <PromptForm language={form} loginLanguage={login} />
      <div className="mt-20 flex flex-col gap-32 w-2/3">
        <Pricing />
        <FAQ faqLang={faq} />
      </div>
    </div>
  );
}
