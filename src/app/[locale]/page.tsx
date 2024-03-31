import { Form } from "@/components/form";
import { localeConfig } from "@/config/locale";

export default async function HomePage() {
  const { homePage, form, login } = await localeConfig.buildLanguages();

  return (
    <div className="block">
      <div className="mx-auto w-full px-5 mt-5">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{homePage.title}</h1>
          <div className="mb-5 max-w-[628px] lg:mb-8">
            <h2 className="text-[#7c8aaa] text-xl">{homePage.description}</h2>
          </div>
        </div>
      </div>
      <Form language={form} loginLanguage={login} />
    </div>
  );
}
