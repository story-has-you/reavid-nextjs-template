import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn, getServerUser } from "@/lib/utils";
import { Locale, dictionary } from "@/server/locale";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

export default async function PageLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
  const [user, header, login, mainNav] = await Promise.all([getServerUser(), dictionary(lang, "Header"), dictionary(lang, "Login"), dictionary(lang, "MainNav")]);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1">
            <div className="w-full flex flex-col items-center gap-20">
              <Header header={header} login={login} mainMav={mainNav} user={user} />
              <div className="w-full">{children}</div>
            </div>
            <div className="w-full">
              <Footer />
            </div>
            <TailwindIndicator />
          </main>
        </ThemeProvider>
      </body>
      {siteConfig.useGoogleAnalytics && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />}
    </html>
  );
}
