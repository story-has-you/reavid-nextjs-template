import { buildMetadata, buildViewport } from "@/config/site";
import { i18n } from "@/server/locale";
import "@/styles/globals.css";

export const metadata = buildMetadata();
export const viewport = buildViewport();

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
