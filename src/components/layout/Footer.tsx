import Link from "next/link";
import { Link as LinkIcon, Share2, MessageCircle, Globe } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Browse Courses", href: "/courses" },
      { label: "Mentors", href: "/#mentors" },
      { label: "Student Reviews", href: "/#testimonials" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socials = [
  { label: "Twitter", icon: Share2, href: "https://twitter.com" },
  { label: "LinkedIn", icon: Globe, href: "https://linkedin.com" },
  { label: "Instagram", icon: MessageCircle, href: "https://instagram.com" },
  { label: "GitHub", icon: LinkIcon, href: "https://github.com" },
];

const currentYear = new Date().getFullYear();

export function Footer() {


  return (
    <footer className="border-t border-indigo-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          
          {/* Brand Column */}
          <div className="max-w-sm">
            <Link href="/" className="font-display text-2xl font-bold text-indigo-700">
              Raivatedu
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Empowering learners across India with curated courses, expert mentors, 
              and career-ready skills. Learn today, lead tomorrow.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-colors hover:bg-indigo-100 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-bold text-ink uppercase tracking-wider">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-600 hover:text-indigo-600 focus-visible:text-indigo-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-indigo-50 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-stone-500">
            &copy; {currentYear} Raivatedu Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-stone-500 md:mt-0">
            Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}