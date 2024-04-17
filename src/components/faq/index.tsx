import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import { localeConfig } from "@/server/locale";

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
