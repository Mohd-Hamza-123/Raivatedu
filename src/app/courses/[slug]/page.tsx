import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CourseDetails } from "@/components/courses/CourseDetails";
import { courses } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};


export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return { title: "Course Not Found — Raivatedu" };
  }

  return {
    title: `${course.title} — Raivatedu`,
    description: course.summary,
    openGraph: {
      title: `${course.title} — Raivatedu`,
      description: course.summary,
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetails course={course} />;
}