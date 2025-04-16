"use client";

import React from "react";

interface BookDetailsProps {
    title: string;
    author: string;
    description: string;
    coverImage: string;
    tags: string[];
}

const BookDetails = ({
    title,
    author,
    description,
    coverImage,
    tags,
}: BookDetailsProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <div className="aspect-[2/3] overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={coverImage}
                        alt={`${title} cover`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "/placeholder.jpg";
                        }}
                    />
                </div>
            </div>

            <div className="md:w-2/3">
                <h1 className="text-3xl font-bold gradient-text mb-2">
                    {title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">by {author}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-sm bg-purple-100 text-purple-800 py-1 px-3 rounded-full inline-block">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
