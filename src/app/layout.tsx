import { buildMetadata } from "@/config/site";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = buildMetadata();

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={fontSans.variable}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />
    </html>
  );
}
