import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/config/site";
import { Locale, dictionary } from "@/server/locale";

export async function FAQ({ params: { lang } }: { params: { lang: Locale } }) {
  const faq = await dictionary(lang, "FAQ");

  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center">
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
