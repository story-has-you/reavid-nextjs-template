export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  useGoogleAnalytics: boolean;
  useGoogleAdsense: boolean;
  links: {
    twitter: string;
    github: string;
    docs: string;
  };
  keywords?: string[];
  creator?: string;
}
