import { buildPageLanguage } from "@/config/locale";

export default async () => {
  const l = await buildPageLanguage();
  return <main>{l.title}</main>;
};
