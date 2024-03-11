import { getTranslations } from "next-intl/server";

export const locales: Array<string> = ["zh", "en"];
export const defaultLocale: string = "en";

export const buildPageLanguage = async () => {
  const t = await getTranslations("Page");
  return {
    title: t("title"),
  };
};
