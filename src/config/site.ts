import { SiteConfig } from "@/types/site-config";
import { type Metadata, type Viewport } from "next";

export const siteConfig: SiteConfig = {
  title: "Re-NextJS-Template",
  description: "",
  url: process.env.NEXT_PUBLIC_BASE_URL!,
  useGoogleAnalytics: false,
  useGoogleAdsense: false,
  links: {
    twitter: "https://twitter.com/re_avid",
    github: "https://github.com/story-has-you/re-nextjs-template",
    bento: "https://bento.me/reavid",
  },
  keywords: ["Next.js", "Radix UI", "Tailwind CSS", "Shadcn UI"],
  creator: "ReAvid",
  products: [
    {
      name: "Re NextJS Template",
      description: "Re-NextJS-Template",
      url: "https://github.com/story-has-you/re-nextjs-template",
    },
    {
      name: "Blog",
      description: "Blog",
      url: "https://story-has-you.github.io/",
    },
    {
      name: "Debat Competitions",
      description: "ai debatcompetitions",
      url: "https://debatcompetitions.com/",
    },
    {
      name: "Summaries Books",
      description: "ai summariesbooks",
      url: "https://summariesbooks.com/",
    },
    {
      name: "Programming Tutorials",
      description: "programmingtutorials",
      url: "https://programmingtutorials.top/",
    },
  ],
};

export const buildMetadata = (): Metadata => {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    applicationName: siteConfig.title,
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
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.creator,
        url: siteConfig.links.github,
      },
    ],
    creator: siteConfig.creator,
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
