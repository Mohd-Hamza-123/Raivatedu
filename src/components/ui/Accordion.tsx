"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  q: string;
  a: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-indigo-100 bg-white">
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-ink hover:bg-indigo-50/50 focus-visible:bg-indigo-50/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-stone-400 transition-transform motion-safe:duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-sm leading-relaxed text-stone-600">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}