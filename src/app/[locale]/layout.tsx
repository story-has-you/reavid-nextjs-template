import { LayoutProps } from "@/types/layout";

import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { localeConfig } from "@/config/locale";
import { Footer } from "@/components/footer";

export default async function PageLayout({ children }: LayoutProps) {
  const languages = await localeConfig.buildLanguages();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <Header {...languages} />
        {children}
        {/* <SiteFooter /> */}
      </div>
      <TailwindIndicator />
    </div>
  );
}
