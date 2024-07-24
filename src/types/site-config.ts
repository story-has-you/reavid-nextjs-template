import { IconType } from "react-icons/lib";

export interface SiteConfig {
  name: string;
  description: string;
  domain: string;
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
