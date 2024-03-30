import { Icons } from "@/components/icons";
import { signIn } from "next-auth/react";
import React from "react";

export function Auth() {
  const loginGithub = async () => {
    signIn("github");
  };

  const loginGoogle = async () => {
    signIn("google");
  };
  return (
    <div className="flex flex-col space-y-5 w-full">
      <button className="flex items-center justify-center btn bg-black hover:bg-black" onClick={loginGithub}>
        <Icons.gitHub className="h-5 w-5 mr-2 text-white" />
        <span className="text-white">GitHub</span>
      </button>
      <button
        className="flex items-center justify-center bg-white hover:bg-gray-200 btn btn-neutral"
        onClick={loginGoogle}
      >
        <Icons.google className="h-5 w-5 mr-2" />
        <span className="text-black">Google</span>
      </button>
    </div>
  );
}
