import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Oauth() {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <Button className="flex items-center justify-center bg-white hover:bg-gray-200">
        <Icons.gitHub className="h-5 w-5 mr-2" />
        <span className="text-black">GitHub</span>
      </Button>
      <Button className="flex items-center justify-center bg-white hover:bg-gray-200">
        <Icons.google className="h-5 w-5 mr-2" />
        <span className="text-black">Google</span>
      </Button>
    </div>
  );
}
