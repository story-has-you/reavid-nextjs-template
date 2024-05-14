import { FAQ } from "@/components/faq";
import { Fonts } from "@/components/fonts";
import { Pricing } from "@/components/pricing";
import { PromptForm } from "@/components/prompt-form";
import { dictionary } from "@/server/locale";
import { Locale } from "node_modules/next/dist/compiled/@vercel/og/satori";

export default async function HomePage({params: {locale}}: {params: {locale: Locale}}) {

  const [homePage, form, login] = await Promise.all([dictionary(locale, "HomePage"), dictionary(locale, "Form"), dictionary(locale, "Login")]);


  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-5">
        <Fonts.h1>{homePage.title}</Fonts.h1>
        <Fonts.bodyLarge className="opacity-50">{homePage.description}</Fonts.bodyLarge>
      </div>

      <PromptForm language={form} loginLanguage={login} />
      <div className="mt-20 flex flex-col gap-32 w-2/3">
        <Pricing />
        <FAQ params={{ locale }} />
      </div>
    </div>
  );
}
