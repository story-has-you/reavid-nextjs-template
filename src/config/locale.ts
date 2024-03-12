import { getTranslations } from "next-intl/server";

export const locales = ["zh", "en"];
export const defaultLocale = "en";

export const buildPageLanguage = async () => {
  const t = await getTranslations("Page");
  return {
    documentation: t("documentation"),
    github: t("github"),
  };
};
export const buildMainNavLanguage = async () => {
  const t = await getTranslations("MainNav");
  return {
    home: t("home"),
  };
};
