import CoursesContent from "@/components/courses/CoursesContent";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Browse Courses", // The layout template will make this "Browse Courses | Raivatedu"
  description: "Explore our curated catalog of courses in development, design, data science, and marketing.",
  openGraph: {
    title: "Browse Courses | Raivatedu",
    description: "Explore our curated catalog of courses in development, design, data science, and marketing.",
  },
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-stone-500">Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}