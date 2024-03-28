import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignupLanguage } from "@/types/language";

export function Signup({ language }: { language: SignupLanguage }) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">{language.cardTitle}</CardTitle>
        <CardDescription>{language.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">{language.firstNameLabel}</Label>
              <Input id="first-name" placeholder={language.firstNamePlaceholder} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">{language.lastNameLabel}</Label>
              <Input id="last-name" placeholder={language.lastNamePlaceholder} required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">{language.emailLabel}</Label>
            <Input id="email" type="email" placeholder={language.emailPlaceholder} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{language.passwordLabel}</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            {language.createAccountButton}
          </Button>
          <Button variant="outline" className="w-full">
            {language.gitHubSignupButton}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {language.signinPrompt}
          <Link href="#" className="underline">
            {language.signinLink}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
