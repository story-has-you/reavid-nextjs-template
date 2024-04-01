import { localeConfig } from "@/config/locale";

export async function FAQ() {
  const { faq } = await localeConfig.buildLanguages();
  return <div></div>;
}
