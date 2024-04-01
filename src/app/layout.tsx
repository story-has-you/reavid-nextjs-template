import { ThemeProvider } from "@/components/theme-provider";
import { buildMetadata, buildViewport, siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { LayoutProps } from "@/types/layout";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = buildMetadata();
export const viewport = buildViewport();

export default function RootLayout({ children }: LayoutProps) {
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
