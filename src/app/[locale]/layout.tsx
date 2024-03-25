import { LayoutProps } from "@/types/layout";

import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader {...languages} />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
