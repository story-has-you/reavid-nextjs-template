import { buildMetadata } from "@/config/site";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";

export const metadata = buildMetadata();

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
