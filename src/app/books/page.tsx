"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BooksPage() {
    const router = useRouter();

    useEffect(() => {
        router.push("/books/local");
    }, [router]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin h-10 w-10 border-4 border-purple-500 rounded-full border-t-transparent"></div>
        </div>
    );
}
