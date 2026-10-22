import { Section } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/lib/data";

export function FeaturedCourses() {
  // Show only the first 3 courses on the home page
  const featuredCourses = courses.slice(0, 3);

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
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Section>
  );
}