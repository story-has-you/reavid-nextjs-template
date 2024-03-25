import {
  Language,
  LoginLanguage,
  SiteHeaderLanguage,
  MainNavLanguage,
  HomeLanguage,
  SignUpLanguage,
  Languages,
} from "@/types/language";
import { getTranslations } from "next-intl/server";

class LocaleConfig {
  public static languages: Array<Language> = [
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

  public static locales = ["zh", "en"];
  public static defaultLocale = "en";

  public buildLanguages = async (): Promise<Languages> => {
    const [homeLanguage, mainNavLanguage, signUplanguage, siteHeaderlanguange, loginLanguage] = await Promise.all([
      this.buildHomeLanguage(),
      this.buildMainNavLanguage(),
      this.buildSignUpLanguage(),
      this.buildSiteHeaderLanguage(),
      this.buildLoginLanguage(),
    ]);

    return {
      home: homeLanguage,
      mainNav: mainNavLanguage,
      signUp: signUplanguage,
      siteHeader: siteHeaderlanguange,
      login: loginLanguage,
    };
  };

  private buildHomeLanguage = async (): Promise<HomeLanguage> => {
    const t = await getTranslations("Home");
    return {
      title1: t("title1"),
      title2: t("title2"),
      subTitle: t("subTitle"),
      documentation: t("documentation"),
      github: t("github"),
    };
  };
  private buildMainNavLanguage = async (): Promise<MainNavLanguage> => {
    const t = await getTranslations("MainNav");
    return {
      home: t("home"),
    };
  };

  private buildSignUpLanguage = async (): Promise<SignUpLanguage> => {
    const t = await getTranslations("SignUp");
    return {
      createAnAccount: t("createAnAccount"),
      inputHint: t("inputHint"),
      createAccount: t("createAccount"),
      orContinueWith: t("orContinueWith"),
    };
  };

  private buildSiteHeaderLanguage = async (): Promise<SiteHeaderLanguage> => {
    const t = await getTranslations("SiteHeader");
    return {
      login: t("login"),
      logout: t("logout"),
    };
  };

  private buildLoginLanguage = async (): Promise<LoginLanguage> => {
    const t = await getTranslations("Login");
    return {
      loginTitle: t("loginTitle"),
      loginButton: t("loginBotton"),
      inputHint: t("inputHint"),
      orContinueWith: t("orContinueWith"),
    };
  };
}

export const localeConfig = new LocaleConfig();
export const languages = LocaleConfig.languages;
export const locales = LocaleConfig.locales;
export const defaultLocale = LocaleConfig.defaultLocale;
