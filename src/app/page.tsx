import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Mentors } from "@/components/home/Mentors";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import Button from "@/components/ui/Button";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Mentors />
      <Stats />
      <Testimonials />
      <FAQ />
      
      {/* Footer CTA */}
      <section className="bg-indigo-700 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to future-proof your career?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Join 15,000+ learners building the skills top companies are hiring for right now.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/courses" variant="secondary" className="w-full sm:w-auto">
              Browse all courses
            </Button>
            <Button href="/courses" variant="ghost" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 active:bg-white/20">
              Talk to an advisor
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}