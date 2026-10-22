import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-ink">Frequently asked questions</h2>
          <p className="mt-2 text-stone-600">Everything you need to know before starting your journey.</p>
        </div>
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}