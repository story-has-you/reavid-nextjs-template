import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Links</h6>
        {siteConfig.links.bento && (
          <Link href={siteConfig.links.bento} target="_blank" rel="noopener noreferrer" className="link link-hover">
            Bento
          </Link>
        )}
        {siteConfig.links.github && (
          <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="link link-hover">
            Github
          </Link>
        )}
        {siteConfig.links.twitter && (
          <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="link link-hover">
            Twitter
          </Link>
        )}
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
