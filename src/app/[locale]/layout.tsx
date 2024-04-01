import { LayoutProps } from "@/types/layout";

import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";
import { getServerUser } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  const user = await getServerUser();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <div className="mx-auto w-full">
          <div className="mx-auto flex flex-col items-center text-center gap-10">
            <Header languages={languages} user={user} />
            {children}
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
