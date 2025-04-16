"use client";

import { useEffect, useState } from "react";
import localBooksData, { LocalBook } from "@/utils/data/localBooksData";
import PDFViewer from "@/components/PDFViewer";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function LocalBookPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const [book, setBook] = useState<LocalBook | null>(null);
    const [prevBookId, setPrevBookId] = useState<string | null>(null);
    const [nextBookId, setNextBookId] = useState<string | null>(null);

    useEffect(() => {
        const currentBookIndex = localBooksData.findIndex(
            (book) => book.id === id
        );

        if (currentBookIndex !== -1) {
            // Set current book
            setBook(localBooksData[currentBookIndex]);

            // Set previous book
            if (currentBookIndex > 0) {
                setPrevBookId(localBooksData[currentBookIndex - 1].id);
            } else {
                setPrevBookId(null);
            }

            // Set next book
            if (currentBookIndex < localBooksData.length - 1) {
                setNextBookId(localBooksData[currentBookIndex + 1].id);
            } else {
                setNextBookId(null);
            }
        }
    }, [id]);

    const navigateToBook = (bookId: string) => {
        router.push(`/books/local/${bookId}`);
    };

    // Add keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" && prevBookId) {
                navigateToBook(prevBookId);
            } else if (e.key === "ArrowRight" && nextBookId) {
                navigateToBook(nextBookId);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [prevBookId, nextBookId]);

    if (!book) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin h-10 w-10 border-4 border-purple-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-8 pt-24">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <Link
                        href="/books/local"
                        className="text-purple-600 hover:text-purple-800 flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Books
                    </Link>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() =>
                                prevBookId && navigateToBook(prevBookId)
                            }
                            disabled={!prevBookId}
                            className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
                                prevBookId
                                    ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                            title="Previous Book (Left Arrow Key)">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            Previous Book
                        </button>

                        <button
                            onClick={() =>
                                nextBookId && navigateToBook(nextBookId)
                            }
                            disabled={!nextBookId}
                            className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
                                nextBookId
                                    ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                            title="Next Book (Right Arrow Key)">
                            Next Book
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        <div className="ml-2 text-xs text-gray-500 hidden md:block">
                            Use ← → keys to navigate between books
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 lg:w-1/4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src={book.coverImage}
                                alt={`${book.title} cover`}
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        "/placeholder.jpg";
                                }}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-bold">
                                    {book.title}
                                </h1>
                                <p className="text-gray-600 mb-2">
                                    by {book.author}
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {book.pageCount} pages • Published{" "}
                                    {new Date(
                                        book.publishedDate
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    {book.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {book.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4">
                        <PDFViewer
                            pdfPath={book.pdfPath}
                            title={book.title}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
