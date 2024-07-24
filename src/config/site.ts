import { SiteConfig } from "@/types/site-config";
import { type Metadata, type Viewport } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiJuejin } from "react-icons/si";

export const siteConfig: SiteConfig = {
  name: "reavid-nextjs-template",
  description: "",
  domain: "",
  links: [
    { name: "email", href: "mailto:fangxi.inori@gmail.com", icon: IoMdMail },
    { name: "twitter", href: "https://twitter.com/reavid", icon: FaTwitter },
    { name: "github", href: "https://github.com/story-has-you", icon: FaGithub },
    { name: "juejin", href: "https://juejin.cn/user/817692381029800", icon: SiJuejin },
  ],
  keywords: ["Next.js", "Radix UI", "Tailwind CSS", "Shadcn UI"],
  creator: "ReAvid",
  author: {
    name: "ReAvid",
    github: "https://github.com/story-has-you",
    twitter: "https://twitter.com/reavid",
  },
  products: [
    {
      name: "Re NextJS Template",
      href: "https://github.com/story-has-you/reavid-nextjs-template",
    },
    {
      name: "Blog",
      href: "https://story-has-you.github.io/",
    },
    {
      name: "Debat Competitions",
      href: "https://debatcompetitions.com/",
    },
    {
      name: "Summaries Books",
      href: "https://summariesbooks.com/",
    },
    {
      name: "Programming Tutorials",
      href: "https://programmingtutorials.top/",
    },
  ],
};

export const buildMetadata = (): Metadata => {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: siteConfig.domain,
    },
    icons: {
      icon: "/icon.svg",
    },
    other: {
      "google-adsense-account": process.env.NEXT_PUBLIC_PUB!,
    },
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.creator,
        url: siteConfig.author.github,
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

/**
 * 订阅页面的数据以及权益
 */
export const pricing = {
  free: {
    price: "$0",
    features: ["Up to 50 project members", "Unlimited tasks and projects", "50 GB storage", "Integrations", "Priority support"],
  },
  pro: {
    price: "$15",
    features: ["Up to 50 project members", "Unlimited tasks and projects", "50 GB storage", "Integrations", "Priority support", "Advanced analytics", "Export capabilities"],
  },

  business: {
    price: "$25",
    features: [
      "Unlimited project members",
      "Unlimited tasks and projects",
      "500 GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
};
