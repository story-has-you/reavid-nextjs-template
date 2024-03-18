import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Home } from "@/components/home";
import { buildLoginlanguage, buildMainNavLanguage, buildSiteHeaderlanguange } from "@/config/locale";

export default async function HomePage() {
  const siteHeaderLanguange = await buildSiteHeaderlanguange();
  const loginLanguange = await buildLoginlanguage();
  const mainNavLanguage = await buildMainNavLanguage();
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader
          siteHeaderLanguange={siteHeaderLanguange}
          loginLanguange={loginLanguange}
          mainNavLanguage={mainNavLanguage}
        />
        <div className="flex-1">
          <Home />
        </div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
