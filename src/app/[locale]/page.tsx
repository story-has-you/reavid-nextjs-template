import { FAQ } from "@/components/faq";
import { Fonts } from "@/components/fonts";
import { Pricing } from "@/components/pricing";
import { PromptForm } from "@/components/prompt-form";
import { localeConfig } from "@/config/locale";

export default async function HomePage() {
  const { homePage, form, login } = await localeConfig.buildLanguages();

  return (
    <div className="flex flex-col items-center w-2/3">
      <div className="flex flex-col gap-5">
        <Fonts.h1>{homePage.title}</Fonts.h1>
        <Fonts.bodyLarge className="opacity-50">{homePage.description}</Fonts.bodyLarge>
      </div>

      <PromptForm language={form} loginLanguage={login} />
      <div className="mt-20 flex flex-col gap-32 w-full">
        <Pricing />
        <FAQ />
      </div>
    </div>
  );
}
