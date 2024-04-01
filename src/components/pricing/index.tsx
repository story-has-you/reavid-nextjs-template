import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div className="bg-white p-4 rounded-lg justify-center flex w-full">
      <div className="w-2/3 flex flex-row items-end justify-center gap-6">
        {/* Free Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-full">
          <h2 className="text-lg font-semibold opacity-50">Free</h2>
          <p className="text-5xl font-bold">
            $0<span className="text-sm opacity-50">/month</span>
          </p>
          <Button className="w-full">Get started for free</Button>
          <ul className="mt-4 space-y-2 text-start">
            <li>Up to 5 project members</li>
            <li>Unlimited tasks and projects</li>
            <li>2 GB storage</li>
            <li>Integrations</li>
            <li>Basic support</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-full bg-black text-white">
          <div className="flex flex-row w-full justify-between items-center">
            <h2 className="text-lg font-semibold opacity-50">Pro</h2>
            <div className="badge badge-primary badge-outline mr-10">Most popular</div>
          </div>
          <p className="text-5xl font-bold">
            $9<span className="text-sm">/month</span>
          </p>
          <Button className="w-full bg-white text-black">Sign up now</Button>
          <ul className="mt-4 space-y-2 text-start">
            <li>Up to 50 project members</li>
            <li>Unlimited tasks and projects</li>
            <li>50 GB storage</li>
            <li>Integrations</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
            <li>Export capabilities</li>
          </ul>
        </div>

        {/* Business Plan */}
        <div className="flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-full">
          <h2 className="text-lg font-semibold opacity-50">Business</h2>
          <p className="text-5xl font-bold">
            $19<span className="text-sm">/month</span>
          </p>
          <Button className="w-full">Sign up now</Button>
          <ul className="mt-4 space-y-2 text-start">
            <li>Unlimited project members</li>
            <li>Unlimited tasks and projects</li>
            <li>200 GB storage</li>
            <li>Integrations</li>
            <li>Dedicated account manager</li>
            <li>Custom fields</li>
            <li>Advanced analytics</li>
            <li>Export capabilities</li>
            <li>API access</li>
            <li>Advanced security features</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
