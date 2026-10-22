import Link from "next/link";
import { Clock, BarChart } from "lucide-react";

export type Course = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  price: number;
  duration: string;
  level: string;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col rounded-2xl border border-indigo-100 bg-white p-6 transition-shadow hover:shadow-lg">
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
  );
}