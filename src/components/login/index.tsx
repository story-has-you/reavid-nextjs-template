import Link from "next/link";
import { LoginLanguage } from "@/types/language";
import { Auth } from "@/components/auth";

export function Login({ language }: { language: LoginLanguage }) {
  return (
    <div className="w-full flex justify-center">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-5">{language.cardTitle}</h3>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {language.emailLabel}
            </div>
            <label className="input input-bordered flex items-center gap-2 rounded-md">
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {language.passwordLabel}
              </div>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                {language.forgotPasswordLink}
              </Link>
            </div>
            <label className="input input-bordered flex items-center gap-2 rounded-md">
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <button type="submit" className="btn btn-neutral w-full mb-2 rounded-md">
            {language.loginButton}
          </button>

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
