import { siteConfig } from "@/config/site";
import Script from "next/script";

export default function Plausible() {
  return <Script defer data-domain={siteConfig.domain} src={process.env.NEXT_PUBLIC_PLAUSIBLE} />;
}
