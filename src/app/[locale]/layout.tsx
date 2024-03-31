import { LayoutProps } from "@/types/layout";

import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";
import { getServerUser } from "@/lib/utils";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  const user = await getServerUser();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <Header languages={languages} user={user} />
        {children}
        {/* <SiteFooter /> */}
      </div>
      <TailwindIndicator />
    </div>
  );
}
