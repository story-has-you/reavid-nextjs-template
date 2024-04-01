import { localeConfig } from "@/config/locale";

export async function FAQ() {
  const { faq } = await localeConfig.buildLanguages();
  return (
    <div className="w-2/3 text-start">
      <h2 className="text-5xl font-medium mb-5 text-center">{faq.title}</h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
