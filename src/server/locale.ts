import { siteConfig } from "@/config/site";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Pathnames } from "next-intl/routing";
import { NextRequest } from "next/server";

interface Language {
  code: string;
  lang: string;
  language: string;
}

const languages: Array<Language> = [
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

const dictionaries: Record<Locale, any> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  zh: () => import("../dictionaries/zh.json").then((module) => module.default),
};

const codes = languages.map((item) => item.code);
const defaultLocale = "en";
const defaultLocaleName = "English";

export const dictionary = async (locale: Locale, name: string) => {
  const dictionary = await getDictionary(locale);
  return dictionary[name];
};

export const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const { locales, defaultLocale } = i18n;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  return match(languages, locales, defaultLocale);
};

export const locales = languages.map((item) => item.lang);
export const i18n = {
  defaultLocale,
  defaultLocaleName,
  locales,
  codes,
  languages,
} as const;
export type Locale = (typeof i18n)["locales"][number];
export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const generateLanguageUrls = () => {
  return i18n.locales.reduce(
    (acc, lang) => {
      acc[lang] = `${siteConfig.url}/${lang}`;
      return acc;
    },
    {} as Record<string, string>,
  );
};