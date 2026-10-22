import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}