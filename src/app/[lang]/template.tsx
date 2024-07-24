import GoogleAdSense from "@/components/google-adsense";

/**
 * GoogleAdSense 不要直接放到layout里面，要放到template，不然用切换页面时广告不会自动刷新的
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      {process.env.NEXT_PUBLIC_PUB && <GoogleAdSense pubId={process.env.NEXT_PUBLIC_PUB} />}
    </div>
  );
}
