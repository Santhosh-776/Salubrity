"use client";

import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../utils/data/ebookData";
import BookReader from "./BookReader";

interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        imageLinks?: {
            thumbnail: string;
        };
        previewLink?: string;
    };
}

const BookList = () => {
    const [books, setBooks] = useState<GoogleBook[]>([]);
    const [selectedBook, setSelectedBook] = useState<GoogleBook | null>(null);

    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    const handleBookSelect = (book: GoogleBook) => {
        setSelectedBook(book);
    };

    return (
        <div className="relative">
            {selectedBook ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <BookReader
                            pdfUrl={selectedBook.volumeInfo.previewLink || ""}
                            title={selectedBook.volumeInfo.title}
                            author={
                                selectedBook.volumeInfo.authors?.join(", ") ||
                                "Unknown Author"
                            }
                            coverImage={
                                selectedBook.volumeInfo.imageLinks?.thumbnail ||
                                "/placeholder.jpg"
                            }
                        />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <div
                                key={book.id}
                                onClick={() => handleBookSelect(book)}
                                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks
                                                ?.thumbnail ||
                                            "/placeholder.jpg"
                                        }
                                        alt={book.volumeInfo.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <button className="px-6 py-2 bg-purple-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Read Now
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-purple-900">
                                        {book.volumeInfo.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {book.volumeInfo.authors?.join(", ")}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookList;
