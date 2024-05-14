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
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  zh: () => import("../../dictionaries/zh.json").then((module) => module.default),
};

const locales = languages.map((item) => item.lang);
const codes = languages.map((item) => item.code);
const defaultLocale = "en";

export const dictionary = async (locale: Locale, name: string) => {
  const dictionary = await getDictionary(locale);
  return dictionary[name];
};
export const i18n = {
  defaultLocale: defaultLocale,
  locales: locales,
  codes: codes,
  languages: languages,
} as const;
export type Locale = (typeof i18n)["locales"][number];
export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
