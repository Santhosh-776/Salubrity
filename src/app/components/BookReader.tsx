"use client";

import { useState } from "react";

interface BookReaderProps {
    pdfUrl: string;
    title: string;
    author: string;
    coverImage: string;
}

const BookReader = ({ pdfUrl, title, author, coverImage }: BookReaderProps) => {
    const [isReading, setIsReading] = useState(false);

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            {!isReading ? (
                <div
                    className="relative cursor-pointer"
                    onClick={() => setIsReading(true)}>
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-50 transition-all duration-300">
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-bold mb-2">{title}</h2>
                            <p className="text-lg">{author}</p>
                            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                Start Reading
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-[800px] flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-semibold text-purple-900">
                            {title}
                        </h2>
                        <button
                            onClick={() => setIsReading(false)}
                            className="text-gray-600 hover:text-purple-600 transition-colors">
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <iframe
                            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-full"
                            title={title}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookReader;
