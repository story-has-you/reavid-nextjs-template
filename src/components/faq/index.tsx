import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { localeConfig } from "@/config/locale";

export async function FAQ() {
  const { faq } = await localeConfig.buildLanguages();
  return (
    <div>
      <h2 className="text-3xl text-center">{faq.title}</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-lg">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
