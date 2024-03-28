import { LayoutProps } from "@/types/layout";

import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";
import { SiteFooter } from "@/components/site-footer";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader {...languages} />
        {children}
        {/* <SiteFooter /> */}
      </div>
      <TailwindIndicator />
    </div>
  );
}
