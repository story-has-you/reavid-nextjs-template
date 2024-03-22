"use client";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import { Auth } from "@/components/auth";
import { useState } from "react";
import { signInWithEmail } from "@/lib/supabase";
import { siteConfig } from "@/config/site";
import { type LoginLanguage } from "@/types/language";

interface Props {
  language: LoginLanguage;
}

export function Login({ language }: Props) {
  const [email, setEmail] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // 使用正则表达式来验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(e.target.value);
    setValid(isValidEmail);
  };

  const login = async () => {
    if (!email || !isValid) {
      return;
    }
    const data = await signInWithEmail(email, siteConfig.url);
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <DialogContent className="w-full max-w-md rounded-lg shadow-2xl shadow-gray-500 p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-2">{language.loginTitle}</CardTitle>
          <CardDescription>{language.inputHint}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-5 w-full">
            {/* <div className="space-y-2">
              <Input
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: isValid ? "black" : "red" }}
              />
            </div>
            <Button onClick={login} disabled={!isValid}>
              {language.loginButton}
            </Button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300" />
              <span className="flex-shrink mx-4 text-sm text-gray-400">{language.orContinueWith}</span>
              <div className="flex-grow border-t border-gray-300" />
            </div> */}
            <Auth />
          </div>
        </CardContent>
      </DialogContent>
    </div>
  );
}
