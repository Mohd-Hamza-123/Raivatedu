import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <Section>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">Popular categories</h2>
          <p className="mt-2 text-stone-600">Explore the most in-demand skills.</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/courses?category=${cat.name.toLowerCase()}`}
            className="group flex flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 motion-safe:transition-transform motion-safe:hover:-translate-y-1"
          >
            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
            <span className="text-sm font-semibold text-ink text-center">{cat.name}</span>
            <span className="mt-1 text-xs text-stone-500">{cat.count} courses</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}