import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginLanguage } from "@/types/language";
import { DialogContent } from "@/components/ui/dialog";

export function Login({ language }: { language: LoginLanguage }) {
  return (
    <DialogContent>
      <CardHeader>
        <CardTitle className="text-2xl">{language.cardTitle}</CardTitle>
        <CardDescription>{language.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{language.emailLabel}</Label>
            <Input id="email" type="email" placeholder={language.emailPlaceholder} required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">{language.passwordLabel}</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                {language.forgotPasswordLink}
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            {language.loginButton}
          </Button>

          <Button variant="outline" className="w-full">
            {language.googleLoginButton}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {language.signupPrompt}
          {language.signupLink && (
            <Link href="#" className="underline">
              {language.signupLink}
            </Link>
          )}
        </div>
      </CardContent>
    </DialogContent>
  );
}
