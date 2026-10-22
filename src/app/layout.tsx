import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true, 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true, 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raivatedu.vercel.app"), // Placeholder URL for OG images
  title: {
    default: "Raivatedu — Learn from India's best mentors",
    template: "%s | Raivatedu", // This automatically appends "| Raivatedu" to child pages
  },
  description:
    "Browse curated courses, connect with expert mentors, and take the next step in your career. Raivatedu makes quality education accessible.",
  openGraph: {
    title: "Raivatedu — Learn from India's best mentors",
    description: "Curated courses, expert mentors, career-ready skills.",
    siteName: "Raivatedu",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* ADD THIS SKIP LINK */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}