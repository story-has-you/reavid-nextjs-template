import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        {/* Logo and description */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <Image src="/favicon.ico" alt="Logo" width={12} height={12} />
          </div>
          <p className="max-w-xs text-gray-400">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and
            celebrate your successes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h5 className="font-bold mb-2">Product</h5>
            <ul>
              {siteConfig.products?.map((product) => {
                return (
                  <li key={product.name}>
                    <Link href={product.url} target="_blank" className="hover:underline opacity-50">
                      {product.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
