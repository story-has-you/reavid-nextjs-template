import { LayoutProps } from "@/types/layout";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getServerUser } from "@/lib/utils";
import { localeConfig } from "@/server/locale";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  const user = await getServerUser();
  return (
    <div>
      <div className="absolute w-full flex flex-col">
        <div className="mx-auto w-full">
          <div className="mx-auto flex flex-col items-center gap-20">
            <Header languages={languages} user={user} />
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
