import { LayoutProps } from "@/types/layout";
import { buildLoginlanguage, buildMainNavLanguage, buildSiteHeaderlanguange } from "@/config/locale";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const buildLanguages = async () => {
  const [siteHeaderLanguange, loginLanguange, mainNavLanguage] = await Promise.all([
    buildSiteHeaderlanguange(),
    buildLoginlanguage(),
    buildMainNavLanguage(),
  ]);
  return { siteHeaderLanguange, loginLanguange, mainNavLanguage };
};
export default async function PageLayout({ children }: LayoutProps) {
  const { siteHeaderLanguange, loginLanguange, mainNavLanguage } = await buildLanguages();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader
          siteHeaderLanguange={siteHeaderLanguange}
          loginLanguange={loginLanguange}
          mainNavLanguage={mainNavLanguage}
        />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
