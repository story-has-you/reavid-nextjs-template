import { buildMetadata, buildViewport, siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LayoutProps } from "@/types/layout";

export const metadata = buildMetadata();
export const viewport = buildViewport();

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`min-h-screen antialiased bg-reavid text-white ${fontSans.className}`}>
        <main className="flex-1">{children}</main>
      </body>
      {siteConfig.useGoogleAnalytics && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />}
    </html>
  );
}
