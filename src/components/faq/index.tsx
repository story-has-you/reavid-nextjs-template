import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { localeConfig } from "@/config/locale";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: `We accept all major credit cards, PayPal, and various other payment methods depending on your location.
    Please contact our support team for more information on accepted payment methods in your region.`,
  },
  {
    question: "How does the pricing work for teams?",
    answer: ` Our pricing is per user, per month. This means you only pay for the number of team members you have on
    your account. Discounts are available for larger teams and annual subscriptions.`,
  },
  {
    question: "Can I change my plan later?",
    answer: `Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and
    reflected in your next billing cycle.`,
  },
  {
    question: "Is my data secure?",
    answer: `Security is our top priority. We use state-of-the-art encryption and comply with the best industry
    practices to ensure that your data is stored securely and accessed only by authorized users.`,
  },
];

export async function FAQ() {
  const { faq } = await localeConfig.buildLanguages();
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Fonts.h2>{faq.title}</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">Here are some of the most frequently asked questions.</Fonts.bodyLarge>
      </div>
      <div>
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <div key={index}>
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <Fonts.h5>{item.question}</Fonts.h5>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <Fonts.bodyMedium className="text-start opacity-80">{item.answer}</Fonts.bodyMedium>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
