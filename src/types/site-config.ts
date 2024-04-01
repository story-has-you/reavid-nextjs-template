export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  useGoogleAnalytics: boolean;
  useGoogleAdsense: boolean;
  links: {
    twitter: string;
    github: string;
    bento: string;
  };
  keywords?: string[];
  creator?: string;
  products?: Product[];
}

export interface Product {
  name: string;
  description: string;
  url: string;
}
