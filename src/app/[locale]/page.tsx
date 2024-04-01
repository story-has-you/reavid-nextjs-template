import { Form } from "@/components/form";
import { localeConfig } from "@/config/locale";

export default async function HomePage() {
  const { homePage, form, login } = await localeConfig.buildLanguages();

  return (
    <div className="block">
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">{homePage.title}</h1>
      <div className="mb-5 max-w-[628px] lg:mb-8">
        <h2 className="text-[#7c8aaa] text-xl">{homePage.description}</h2>
      </div>
      <Form language={form} loginLanguage={login} />
    </div>
  );
}
