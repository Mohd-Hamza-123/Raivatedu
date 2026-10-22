import Link from "next/link";
import { Clock, BarChart, Star, CheckCircle2 } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import  Button  from "@/components/ui/Button";

export function CourseDetails({ course }: { course: any }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      {/* Breadcrumbs / Back link */}
      <Link href="/courses" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 mb-6 inline-block">
        ← Back to courses
      </Link>

      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        {/* LEFT COLUMN: Main Content */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {course.category}
            </span>
            <span className="text-sm font-medium text-stone-500">{course.level}</span>
          </div>

          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {course.summary} This comprehensive program is designed to take you from beginner to job-ready through hands-on projects and expert mentorship.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-indigo-50 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
              <Clock size={18} className="text-indigo-500" /> {course.duration}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
              <BarChart size={18} className="text-indigo-500" /> {course.level}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
              <Star size={18} className="text-yellow-500 fill-yellow-500" /> 4.8 (120 reviews)
            </div>
          </div>

          {/* Syllabus */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Course Syllabus</h2>
            <Accordion items={course.syllabus || []} />
          </div>

          {/* Instructor */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Your Instructor</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6 rounded-2xl border border-indigo-100 bg-white p-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700">
                {course.instructor?.initials || "RA"}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{course.instructor?.name || "Raivatedu Expert"}</h3>
                <p className="text-sm font-medium text-indigo-600">{course.instructor?.role || "Industry Professional"}</p>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {course.instructor?.bio || "An experienced professional dedicated to helping you master new skills."}
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Student Reviews</h2>
            <div className="space-y-4">
              {(course.reviews || []).map((review: any, i: number) => (
                <div key={i} className="rounded-2xl border border-indigo-100 bg-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-ink">{review.name}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} fill={j < review.rating ? "currentColor" : "none"} className={j >= review.rating ? "text-stone-300" : ""} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-stone-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Enroll Card */}
        <div className="relative">
          <div className="sticky top-28 rounded-2xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-100/50">
            <h3 className="font-display text-lg font-bold text-ink mb-2">Enroll in this course</h3>
            <p className="text-3xl font-display font-bold text-ink mb-6">
              ₹{course.price?.toLocaleString("en-IN")}
            </p>
            
            <Button className="w-full mb-4" type="button">Enroll Now</Button>
            <p className="text-xs text-center text-stone-500 mb-6">30-day money-back guarantee</p>

            <div className="space-y-3 text-sm text-stone-600 border-t border-indigo-50 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Full lifetime access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Live doubt-clearing sessions
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Certificate of completion
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500" /> Placement assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}