import { IconType } from "react-icons/lib";

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  useGoogleAnalytics: boolean;
  useGoogleAdsense: boolean;
  links: FooterLink[];
  keywords?: string[];
  creator?: string;
  products?: Product[];
  author: {
    name: string;
    github: string;
    twitter: string;
  };
}

export interface Product {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
  icon: IconType;
}
