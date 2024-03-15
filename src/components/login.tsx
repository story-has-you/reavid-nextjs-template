import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { buildLoginlanguage } from "@/config/locale";
import { Icons } from "@/components/icons";

export async function Login() {
  const l = await buildLoginlanguage();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="w-full max-w-md rounded-lg bg-gray shadow-2xl shadow-gray-500 p-8">
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
            <Button className="flex items-center justify-center bg-white hover:bg-gray-200">
              <Icons.gitHub className="h-5 w-5" />
              <span className="ml-2 text-black">GitHub</span>
            </Button>
            <Button className="flex items-center justify-center bg-white hover:bg-gray-200">
              <Icons.google className="h-7 w-7" />
              <span className="ml-2 text-black">Google</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
