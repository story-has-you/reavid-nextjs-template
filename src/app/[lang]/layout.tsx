import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getServerUser } from "@/lib/utils";
import { Locale, dictionary } from "@/server/locale";

export default async function PageLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
  const [user, header, login, mainNav] = await Promise.all([getServerUser(), dictionary(lang, "Header"), dictionary(lang, "Login"), dictionary(lang, "MainNav")]);

  return (
    <div>
      <div className="absolute w-full flex flex-col">
        <div className="mx-auto w-full">
          <div className="mx-auto flex flex-col items-center gap-20">
            <Header header={header} login={login} mainMav={mainNav} user={user} />
            {children}
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
