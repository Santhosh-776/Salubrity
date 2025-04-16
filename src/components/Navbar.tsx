"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/utils/data/headerLinks";
import Image from "next/image";
import { logo } from "@/utils/resources/logo";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    const isActive = (path: string) => {
        const active =
            path === "/" ? pathname === "/" : pathname.startsWith(path);
        return active
            ? "shadow-lg shadow-purple-600"
            : "text-gray-600 hover:text-purple-500 transition-colors";
    };

    return (
        <nav
            className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
                scrolled ? "glass-card shadow-lg py-3" : "bg-transparent py-5"
            }`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-3xl font-bold text-purple-600 flex items-center group">
                    <div className="relative overflow-hidden rounded-xl transform transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
                        {logo.alt}
                    </span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-8 text-lg font-medium">
                    {headerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${isActive(
                                link.href
                            )} relative px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:shadow-lg hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-105 shadow-md`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4 shadow-lg border border-purple-100 animate-float">
                    <div className="flex flex-col space-y-3">
                        {headerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`${
                                    pathname === link.href
                                        ? "text-purple-600 font-semibold"
                                        : "text-gray-600"
                                } p-3 rounded-lg hover:bg-purple-50 transition-colors`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
