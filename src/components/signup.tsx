import * as React from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { buildSignUplanguage } from "@/config/locale";
import { Icons } from "@/components/icons";
import { DialogContent } from "@/components/ui/dialog";
import Oauth from "@/components/oauth";

export async function Signup() {
  const l = await buildSignUplanguage();
  return (
    <div className="flex flex-col justify-center items-center">
      <DialogContent className="w-full max-w-md rounded-lg shadow-2xl shadow-gray-500 p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-2">{l.createAnAccount}</CardTitle>
          <CardDescription>{l.inputHint}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-5 w-full">
            <Input placeholder="name@example.com" type="email" />
            <Button>{l.createAccount}</Button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300" />
              <span className="flex-shrink mx-4 text-sm text-gray-400">{l.orContinueWith}</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <Oauth />
          </form>
        </CardContent>
      </DialogContent>
    </div>
  );
}
