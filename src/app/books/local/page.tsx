"use client";

import { useState } from "react";
import localBooksData from "@/utils/data/localBooksData";
import Link from "next/link";

export default function LocalBooksPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = localBooksData.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <main className="container mx-auto px-4 py-8 pt-24">
            <div className="flex flex-col gap-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">
                        Local Book Collection
                    </h1>

                    <div className="relative max-w-md">
                        <input
                            type="text"
                            placeholder="Search by title, author, or tag..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                            />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <Link
                            key={book.id}
                            href={`/books/local/${book.id}`}
                            className="block">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                                <div className="h-48 bg-gray-200">
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "/placeholder.jpg";
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                                        {book.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-2">
                                        by {book.author}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {book.tags
                                            .slice(0, 2)
                                            .map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {filteredBooks.length === 0 && (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-600">
                                No books found matching your search criteria.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
