import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCourses />
    </>
  );
}