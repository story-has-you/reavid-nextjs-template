"use client";

import { Icons } from "@/components/icons";
import { defaultLocale, languages, locales } from "@/config/locale";
import { useParams, useRouter } from "next/navigation";

export function ChooseLanguage() {
  const params = useParams();
  const router = useRouter();
  const langName = languages.find((item) => item.lang === params.locale)?.language;
  if (!langName) {
    return defaultLocale;
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">
        <button className="flex items-center space-x-2">
          {langName}
          <Icons.chevronDown className="w-4 h-4" />
        </button>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52">
        {languages.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => router.push(item.lang)}>{item.language}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
