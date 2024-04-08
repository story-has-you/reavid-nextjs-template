import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const links = siteConfig.links;
  return (
    <div className="mx-auto flex flex-row items-center pb-2">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon && React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};

const FooterProducts = () => {
  const products = siteConfig.products;
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {products?.map((product, index) => {
        return (
          <span key={product.href}>
            <Link href={product.href} target="_blank">
              {product.name}
            </Link>
            {index !== products.length - 1 ? (
              <>
                <span>{" • "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })}
    </div>
  );
};

export function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();
  const author = siteConfig.author;
  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <FooterLinks />
        <FooterProducts />
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link href={author.twitter || author.github} target="_blank">
            {author.name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
