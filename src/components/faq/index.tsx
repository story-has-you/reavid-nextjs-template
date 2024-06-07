import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqLang: {
    title: string;
    description: string;
    faqs: FAQItem[];
  };
}

export function FAQ({ faqLang }: FAQProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center ">
        <Fonts.h2>{faqLang.title}</Fonts.h2>
      </div>
      <div className="w-4/5">
        <Accordion type="multiple">
          {faqLang.faqs.map((item, index) => (
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
