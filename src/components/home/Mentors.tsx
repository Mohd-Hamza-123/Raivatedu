import { Section } from "@/components/ui/Section";
import { mentors } from "@/lib/data";

export function Mentors() {
  return (
    <Section id="mentors">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink">Learn from industry experts</h2>
        <p className="mx-auto mt-2 max-w-2xl text-stone-600">
          Our mentors don't just teach theory; they share real-world experience from top tech companies.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="flex flex-col items-center rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-700">
              {mentor.initials}
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{mentor.name}</h3>
            <p className="text-sm font-medium text-indigo-600">{mentor.role}</p>
            <p className="mt-2 text-xs text-stone-500">Teaches {mentor.subject}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}