import { SiteConfig } from "@/types/site-config";
import { type Viewport, type Metadata } from "next";

export const siteConfig: SiteConfig = {
  name: "Re-NextJS-Template",
  description: "",
  url: process.env.NEXT_PUBLIC_BASE_URL!,
  useGoogleAnalytics: false,
  useGoogleAdsense: false,
  links: {
    twitter: "https://twitter.com/re_avid",
    github: "https://github.com/story-has-you/re-nextjs-template",
    docs: "https://ui.shadcn.com",
  },
};

export const buildMetadata = (): Metadata => {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.url,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    other: {
      "google-adsense-account": process.env.NEXT_PUBLIC_PUB!,
    },
  };
};

export const buildViewport = (): Viewport => {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  };
};
