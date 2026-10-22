import Link from "next/link";
import { Clock, BarChart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { courses } from "@/lib/data";
import { Button } from "../ui/Buttons";

export function FeaturedCourses() {
  return (
    <Section className="bg-white border-y border-indigo-50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">Featured courses</h2>
          <p className="mt-2 text-stone-600">Hand-picked programs to accelerate your career.</p>
        </div>
        <Button href="/courses" variant="ghost">View all courses</Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="flex flex-col rounded-2xl border border-indigo-100 bg-offwhite p-6 transition-shadow hover:shadow-lg"
          >
            <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 w-fit">
              {course.category}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-ink">
              <Link href={`/courses/${course.slug}`} className="hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                {course.title}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm text-stone-600 line-clamp-2">
              {course.summary}
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-stone-500">
              <div className="flex items-center gap-1">
                <Clock size={14} /> {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <BarChart size={14} /> {course.level}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-indigo-50 pt-4">
              <span className="font-display font-bold text-ink">₹{course.price.toLocaleString("en-IN")}</span>
              <Link href={`/courses/${course.slug}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}