import { buildMetadata, buildViewport, siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { LayoutProps } from "@/types/layout";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = buildMetadata();
export const viewport = buildViewport();

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
      {siteConfig.useGoogleAnalytics && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />}
    </html>
  );
}
