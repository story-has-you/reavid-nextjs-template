import { GoogleAdsense } from "@/components/google-adsense";
import { siteConfig } from "@/config/site";
import { LayoutProps } from "@/types/layout";

/**
 * GoogleAdsense 不要直接放到layout里面，要放到template，不然用切换页面时广告不会自动刷新的
 */
export default function Template({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
      {siteConfig.useGoogleAdsense && <GoogleAdsense pubId={process.env.NEXT_PUBLIC_PUB!} />}
    </div>
  );
}
