import { Language } from "@/types/language";
import { getTranslations } from "next-intl/server";

export const locales = ["zh", "en"];
export const defaultLocale = "en";

export const languages: Array<Language> = [
  {
    code: "en-US",
    lang: "en",
    language: "English",
  },
  {
    code: "zh-CN",
    lang: "zh",
    language: "简体中文",
  },
];

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

export const buildSignUplanguage = async () => {
  const t = await getTranslations("SignUp");
  return {
    createAnAccount: t("createAnAccount"),
    inputHint: t("inputHint"),
    createAccount: t("createAccount"),
    orContinueWith: t("orContinueWith"),
  };
};

export const buildLoginlanguage = async () => {
  const t = await getTranslations("Login");
  return {
    login: t("login"),
    inputHint: t("inputHint"),
    orContinueWith: t("orContinueWith"),
  };
};

export const buildSiteHeaderlanguange = async () => {
  const t = await getTranslations("SiteHeader");
  return {
    signUp: t("signUp"),
    signIn: t("signIn"),
  };
};
