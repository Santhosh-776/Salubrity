"use client";

import BookList from "../components/BookList";

export default function BooksPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Wellness & Meditation Books
            </h1>
            <BookList />
        </div>
    );
}
