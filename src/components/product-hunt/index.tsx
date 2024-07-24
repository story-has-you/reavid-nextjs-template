import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProductHunt({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href={process.env.NEXT_PUBLIC_PRODUCT_HUNT!}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Product Hunt
      </Link>
    </div>
  );
}
