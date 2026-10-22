"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/lib/data";

function CoursesContent() {
  const searchParams = useSearchParams();
  
  // Get current filters from URL
  const categoryParam = searchParams.get("category");
  const levelParam = searchParams.get("level");
  const sortParam = searchParams.get("sort") || "newest";

  // Extract unique categories and levels for the filter dropdowns
  const categories = Array.from(new Set(courses.map((c) => c.category)));
  const levels = Array.from(new Set(courses.map((c) => c.level)));

  // Filter and sort the courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by category
    if (categoryParam && categoryParam !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    // Filter by level
    if (levelParam && levelParam !== "All") {
      result = result.filter((c) => c.level === levelParam);
    }

    // Sort
    if (sortParam === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortParam === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryParam, levelParam, sortParam]);

  return (
    <Section>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-ink">Explore our courses</h1>
        <p className="mt-2 text-lg text-stone-600">
          Find the perfect program to advance your skills and career.
        </p>
      </div>

      <CourseFilters 
        categories={categories} 
        levels={levels} 
        onSortChange={() => {}} // Optional: handle sort side-effects here if needed
      />

      {/* Empty State */}
      {filteredCourses.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-indigo-50 p-4 text-indigo-400 mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-ink">No courses found</h3>
          <p className="mt-2 text-stone-500">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </Section>
  );
}


export default CoursesContent;