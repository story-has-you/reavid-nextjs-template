import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricing } from "@/config/site";

export function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-5">
        <Fonts.h2>Pricing</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</Fonts.bodyLarge>
      </div>
      <div className="flex flex-row items-end justify-center gap-6 w-full">
        {/* Free Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-1/3">
          <h2 className="text-lg font-semibold opacity-50">Free</h2>
          <p className="text-5xl font-bold">
            {pricing.free.price}
            <span className="text-sm opacity-50">/month</span>
          </p>
          <Button className="w-full">Get started for free</Button>
          <ul className="mt-5 space-y-5 text-start">
            {pricing.free.features.map((feature) => (
              <li key={feature} className="flex flex-row justify-start items-center">
                <Icons.check className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 bg-black text-white dark:bg-white dark:text-black w-1/3">
          <div className="flex flex-row w-full justify-between items-center">
            <h2 className="text-lg font-semibold opacity-50">Pro</h2>
            <Badge variant={"secondary"} className="text-primary">
              Most popular
            </Badge>
          </div>
          <p className="text-5xl font-bold">
            {pricing.pro.price}
            <span className="text-sm">/month</span>
          </p>
          <Button variant="outline" className="w-full bg-white text-black dark:bg-black dark:text-white">
            Sign up now
          </Button>
          <ul className="mt-5 space-y-5 text-start">
            {pricing.pro.features.map((feature) => (
              <li key={feature} className="flex flex-row justify-start items-center">
                <Icons.check className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Business Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-1/3">
          <h2 className="text-lg font-semibold opacity-50">Business</h2>
          <p className="text-5xl font-bold">
            {pricing.business.price}
            <span className="text-sm">/month</span>
          </p>
          <Button className="w-full">Sign up now</Button>
          <ul className="mt-5 space-y-5 text-start">
            {pricing.business.features.map((feature) => (
              <li key={feature} className="flex flex-row justify-start items-center">
                <Icons.check className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
