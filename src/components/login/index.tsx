import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import { LoginLanguage } from "@/types/language";
import { signIn } from "next-auth/react";

export function Login({ language }: { language: LoginLanguage }) {
  return (
    <DialogContent>
      <CardHeader>
        <CardTitle className="text-2xl">{language.cardTitle}</CardTitle>
        <CardDescription>{language.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
            <Icons.google className="w-4 h-4 mr-2" />
            {language.googleLoginButton}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => signIn("github")}>
            <Icons.gitHub className="w-4 h-4 mr-2" />
            {language.githubLoginButton}
          </Button>
        </div>
      </CardContent>
    </DialogContent>
  );
}
