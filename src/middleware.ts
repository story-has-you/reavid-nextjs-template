import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/config/locale";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
