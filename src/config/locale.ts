import {
  Language,
  LoginLanguage,
  MainNavLanguage,
  PageLanguage as HomeLanguage,
  SignUplanguage,
  SiteHeaderlanguange,
} from "@/types/language";
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

export const buildHomeLanguage = async (): Promise<HomeLanguage> => {
  const t = await getTranslations("Home");
  return {
    title1: t("title1"),
    title2: t("title2"),
    subTitle: t("subTitle"),
    documentation: t("documentation"),
    github: t("github"),
  };
};
export const buildMainNavLanguage = async (): Promise<MainNavLanguage> => {
  const t = await getTranslations("MainNav");
  return {
    home: t("home"),
  };
};

export const buildSignUplanguage = async (): Promise<SignUplanguage> => {
  const t = await getTranslations("SignUp");
  return {
    createAnAccount: t("createAnAccount"),
    inputHint: t("inputHint"),
    createAccount: t("createAccount"),
    orContinueWith: t("orContinueWith"),
  };
};

export const buildLoginlanguage = async (): Promise<LoginLanguage> => {
  const t = await getTranslations("Login");
  return {
    loginTitle: t("loginTitle"),
    loginButton: t("loginBotton"),
    inputHint: t("inputHint"),
    orContinueWith: t("orContinueWith"),
  };
};

export const buildSiteHeaderlanguange = async (): Promise<SiteHeaderlanguange> => {
  const t = await getTranslations("SiteHeader");
  return {
    signUp: t("signUp"),
    signIn: t("signIn"),
    logout: t("logout"),
  };
};
