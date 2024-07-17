import { getLocale, locales, pathnames } from "@/server/locale";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix: "as-needed",
  localeDetection: false,
});

export function middleware(req: NextRequest) {
  // Call the existing middleware from next-intl
  const response = intlMiddleware(req);

  // Get the locale from the request
  const locale = getLocale(req);

  if (locale) {
    response.cookies.set("x-locale", locale);
  }

  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots|sitemap|ads).*)"],
};
