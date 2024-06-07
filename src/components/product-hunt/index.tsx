import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProductHunt({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="https://www.producthunt.com/posts/hotkey-cheatsheet?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hotkey&#0045;cheatsheet"
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Product Hunt
      </Link>
    </div>
  );
}
