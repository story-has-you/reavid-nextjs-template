import Link from "next/link";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function MainNav({ language }: { language: any }) {
  const { lang } = useParams();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={`${siteConfig.domain}/${lang}`} className="flex items-center space-x-2">
        <Image src="/favicon.ico" height={32} width={32} alt={siteConfig.name} />
        <span className="inline-block font-bold text-primary whitespace-nowrap">{language.title}</span>
      </Link>
    </div>
  );
}
