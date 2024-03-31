import Link from "next/link";
import { LoginLanguage } from "@/types/language";
import { Auth } from "@/components/auth";

export function Login({ language }: { language: LoginLanguage }) {
  return (
    <div className="w-full flex justify-center">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-5 text-black">{language.cardTitle}</h3>
        <div className="grid gap-4">
          <Auth />
        </div>
        <div className="mt-4 text-center text-sm">
          {language.signupPrompt}
          {language.signupLink && (
            <Link href="#" className="underline">
              {language.signupLink}
            </Link>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </div>
  );
}
