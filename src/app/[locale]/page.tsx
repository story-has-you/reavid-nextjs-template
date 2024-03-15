import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Home } from "@/components/home";

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Home />
        </div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  );
}
