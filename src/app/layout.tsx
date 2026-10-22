import type { Metadata } from "next";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raivatedu — Learn from India's best mentors",
  description:
    "Browse curated courses, connect with expert mentors, and take the next step in your career. Raivatedu makes quality education accessible.",
  openGraph: {
    title: "Raivatedu — Learn from India's best mentors",
    description: "Curated courses, expert mentors, career-ready skills.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
