"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Buttons";


const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Mentors", href: "/#mentors" },
    { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-indigo-100 bg-offwhite/90 backdrop-blur">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display text-2xl font-bold text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
                >
                    Raivatedu
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-stone-600 transition-colors hover:text-indigo-600 focus-visible:text-indigo-600"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button href="/courses">Browse Courses</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden rounded-lg p-2 text-stone-600 hover:bg-indigo-50 focus-visible:bg-indigo-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden border-t border-indigo-100 bg-offwhite px-4 pb-6 pt-2">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-base font-medium text-stone-600 hover:text-indigo-600"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button href="/courses" className="w-full">
                                Browse Courses
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}