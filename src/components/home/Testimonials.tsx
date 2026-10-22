import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section className="bg-indigo-50/50 border-y border-indigo-50">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink">Student success stories</h2>
        <p className="mx-auto mt-2 max-w-2xl text-stone-600">
          Hear from learners who transformed their careers with Raivatedu.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-indigo-100">
            <div>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-stone-600">"{testimonial.text}"</p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-indigo-50 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{testimonial.name}</p>
                <p className="text-xs text-stone-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}