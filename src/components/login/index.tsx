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
            {language.googleLoginButton}
          </Button>
        </div>
      </CardContent>
    </DialogContent>
  );
}
