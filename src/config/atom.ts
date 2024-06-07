import { i18n } from "@/server/locale";
import { atom, useAtom } from "jotai";

const langAtom = atom<string>(i18n.defaultLocale);

export const useLang = () => useAtom(langAtom);
