import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { localeConfig } from "@/config/locale";

export async function FAQ() {
  const { faq } = await localeConfig.buildLanguages();
  return (
    <div>
      <h2 className="text-3xl text-center">{faq.title}</h2>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-lg">
              We accept all major credit cards, PayPal, and various other payment methods depending on your location.
              Please contact our support team for more information on accepted payment methods in your region.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">How does the pricing work for teams?</AccordionTrigger>
            <AccordionContent className="text-lg">
              Our pricing is per user, per month. This means you only pay for the number of team members you have on
              your account. Discounts are available for larger teams and annual subscriptions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">Can I change my plan later?</AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and
              reflected in your next billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">Is my data secure?</AccordionTrigger>
            <AccordionContent className="text-lg">
              Security is our top priority. We use state-of-the-art encryption and comply with the best industry
              practices to ensure that your data is stored securely and accessed only by authorized users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
