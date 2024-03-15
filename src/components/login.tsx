import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildLoginlanguage } from "@/config/locale";
import { siteConfig } from "@/config/site";

export async function Login() {
  const l = await buildLoginlanguage();
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
            <h2 className="text-2xl font-bold mb-2">{l.createAnAccount}</h2>
            <p className="text-sm text-gray-600">{l.inputHint}</p>
          </div>
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
        </div>
      </div>
    </div>
  );
}
