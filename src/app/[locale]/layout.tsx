import { LayoutProps } from "@/types/layout";

import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Pricing } from "@/components/pricing";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";
import { getServerUser } from "@/lib/utils";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  const user = await getServerUser();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <div className="mx-auto w-full">
          <div className="mx-auto flex flex-col w-full items-center gap-20">
            <Header languages={languages} user={user} />
            {children}
            <div className="flex flex-col w-2/3 gap-40">
              <FAQ />
              <Pricing />
            </div>
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
