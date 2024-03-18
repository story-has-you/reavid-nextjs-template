export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  useGoogleAnalytics: boolean;
  useGoogleAdsense: boolean;
  links: {
    twitter: string;
    github: string;
    docs: string;
  };
}
