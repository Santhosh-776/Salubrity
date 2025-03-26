"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/utils/data/headerLinks";
import Image from "next/image";
import { logo } from "@/utils/resources/logo";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/"
                ? "text-purple-600"
                : "text-gray-600 hover:text-purple-600";
        }
        return pathname.startsWith(path)
            ? "text-purple-600"
            : "text-gray-600 hover:text-purple-600";
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 h-24 flex items-center justify-center">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-bold text-purple-600 flex items-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                        />
                        <span className="text-4xl font-bold text-purple-600">
                            {logo.alt}
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-6 text-xl font-semibold">
                    {headerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${isActive(link.href)} cursor-pointer`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
