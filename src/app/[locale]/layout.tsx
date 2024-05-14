import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getServerUser } from "@/lib/utils";
import { Locale, dictionary } from "@/server/locale";

export default async function PageLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
  }) {

  const [user, header, login] = await Promise.all([getServerUser(), dictionary(locale, "Header"), dictionary(locale, "Login")]);

  return (
    <div>
      <div className="absolute w-full flex flex-col">
        <div className="mx-auto w-full">
          <div className="mx-auto flex flex-col items-center gap-20">
            <Header header={header} login={login} user={user} />
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
