import { Search } from "lucide-react";
import { Button } from "../ui/Buttons";
import { Section } from "../ui/Section";

export function Hero() {
  return (
    <Section className="bg-indigo-50/50 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
      <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
        Learn the skills that get you <span className="text-indigo-600">hired</span>.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
        Join thousands of learners mastering new skills with India's best mentors. 
        Curated courses, real projects, and career support.
      </p>

      {/* Course Search Bar */}
      <form className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-2xl border border-indigo-100 bg-white p-2 shadow-sm focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
        <div className="flex flex-1 items-center gap-3 px-2">
          <Search className="text-stone-400" size={20} />
          <input
            type="search"
            placeholder="What do you want to learn?"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-stone-400"
            aria-label="Search for courses"
          />
        </div>
        <Button type="submit" className="hidden sm:inline-flex">Search</Button>
      </form>
    </Section>
  );
}