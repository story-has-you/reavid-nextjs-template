import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/config/fonts";
import { buildMetadata, buildViewport, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { i18n } from "@/server/locale";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = buildMetadata();
export const viewport = buildViewport();


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
      {siteConfig.useGoogleAnalytics && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />}
    </html>
  );
}
