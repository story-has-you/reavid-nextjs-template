import Script from "next/script";

interface Props {
  pubId: string;
}

export function GoogleAdsense({ pubId }: Props) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
