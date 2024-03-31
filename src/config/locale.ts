import {
  Language,
  LoginLanguage,
  HeaderLanguage,
  MainNavLanguage,
  HomePageLanguage,
  SignupLanguage,
  Languages,
  FormLanguage,
} from "@/types/language";
import { getTranslations } from "next-intl/server";

class LocaleConfig {
  public static languages: Array<Language> = [
    {
      code: "en-US",
      lang: "en",
      language: "🇺🇸 English",
    },
    {
      code: "zh-CN",
      lang: "zh",
      language: "🇨🇳 简体中文",
    },
    {
      code: "es-ES",
      lang: "es",
      language: "🇪🇸 Español (España)",
    },
    {
      code: "fr-FR",
      lang: "fr",
      language: "🇫🇷 Français",
    },
    {
      code: "de-DE",
      lang: "de",
      language: "🇩🇪 Deutsch",
    },
    {
      code: "ja-JP",
      lang: "ja",
      language: "🇯🇵 日本語",
    },
    {
      code: "pt-BR",
      lang: "pt",
      language: "🇧🇷 Português (Brasil)",
    },
    {
      code: "ru-RU",
      lang: "ru",
      language: "🇷🇺 Русский",
    },
    {
      code: "ar-SA",
      lang: "ar",
      language: "🇸🇦 العربية (السعودية)",
    },
    {
      code: "it-IT",
      lang: "it",
      language: "🇮🇹 Italiano",
    },
    {
      code: "ko-KR",
      lang: "ko",
      language: "🇰🇷 한국어",
    },
    {
      code: "hi-IN",
      lang: "hi",
      language: "🇮🇳 हिन्दी",
    },
  ];

  public static locales = LocaleConfig.languages.map((item) => item.lang);
  public static codes = LocaleConfig.languages.map((item) => item.code);
  public static defaultLocale = "en";

  public buildLanguages = async (): Promise<Languages> => {
    const [homePage, mainNav, signUp, header, login, form] = await Promise.all([
      this.buildHomePageLanguage(),
      this.buildMainNavLanguage(),
      this.buildSignUpLanguage(),
      this.buildHeaderLanguage(),
      this.buildLoginLanguage(),
      this.buildFormLanguage(),
    ]);

    return {
      homePage,
      mainNav,
      signUp,
      header,
      login,
      form,
    };
  };

  private buildHomePageLanguage = async (): Promise<HomePageLanguage> => {
    const t = await getTranslations("HomePage");
    return {
      title: t("title"),
      description: t("description"),
    };
  };
  private buildMainNavLanguage = async (): Promise<MainNavLanguage> => {
    const t = await getTranslations("MainNav");
    return {
      home: t("home"),
    };
  };

  private buildSignUpLanguage = async (): Promise<SignupLanguage> => {
    const t = await getTranslations("Signup");
    return {
      cardTitle: t("cardTitle"),
      cardDescription: t("cardDescription"),
      firstNameLabel: t("firstNameLabel"),
      firstNamePlaceholder: t("firstNamePlaceholder"),
      lastNameLabel: t("lastNameLabel"),
      lastNamePlaceholder: t("lastNamePlaceholder"),
      emailLabel: t("emailLabel"),
      emailPlaceholder: t("emailPlaceholder"),
      passwordLabel: t("passwordLabel"),
      createAccountButton: t("createAccountButton"),
      gitHubSignupButton: t("gitHubSignupButton"),
      signinPrompt: t("signinPrompt"),
      signinLink: t("signinLink"),
    };
  };

  private buildHeaderLanguage = async (): Promise<HeaderLanguage> => {
    const t = await getTranslations("Header");
    return {
      login: t("login"),
      logout: t("logout"),
    };
  };

  private buildLoginLanguage = async (): Promise<LoginLanguage> => {
    const t = await getTranslations("Login");
    return {
      cardTitle: t("cardTitle"),
      cardDescription: t("cardDescription"),
      emailLabel: t("emailLabel"),
      emailPlaceholder: t("emailPlaceholder"),
      passwordLabel: t("passwordLabel"),
      forgotPasswordLink: t("forgotPasswordLink"),
      loginButton: t("loginButton"),
      googleLoginButton: t("googleLoginButton"),
      signupPrompt: t("signupPrompt"),
      signupLink: t("signupLink"),
    };
  };

  private buildFormLanguage = async (): Promise<FormLanguage> => {
    const t = await getTranslations("Form");
    return {
      generate: t("generate"),
    };
  };
}

export const localeConfig = new LocaleConfig();
export const languages = LocaleConfig.languages;
export const locales = LocaleConfig.locales;
export const codes = LocaleConfig.codes;
export const defaultLocale = LocaleConfig.defaultLocale;
