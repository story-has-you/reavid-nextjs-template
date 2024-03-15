import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      <div className="flex-1 bg-black text-white flex flex-col justify-between p-8">
        <div>
          <h1 className="text-2xl font-bold mt-2">{siteConfig.name}</h1>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md rounded-lg bg-gray shadow-2xl shadow-gray-500 p-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Create an account</h2>
            <p className="text-sm text-gray-600">Enter your email below to create your account</p>
          </div>
          <form className="flex flex-col space-y-5 w-full">
            <Input placeholder="name@example.com" type="email" />
            <Button>Create Account</Button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300" />
              <span className="flex-shrink mx-4 text-sm text-gray-400">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <Button className="flex items-center justify-center bg-white hover:bg-gray-100">
              <Icons.gitHub className="h-5 w-5" />
              <span className="ml-2 text-black">GitHub</span>
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By clicking continue, you agree to our
            <Link className="text-blue-500" href="#">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-blue-500" href="#">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
