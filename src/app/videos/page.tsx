"use client";

import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import videoData from "@/utils/data/videoData";

export default function VideosPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
                        Meditation & Relaxation Videos
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Discover calming videos to help you relax and find inner
                        peace
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for meditation videos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-4 pl-12 pr-4 text-lg border-2 border-purple-200 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all 
                            duration-300 shadow-lg text-purple-500"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video) => (
                        <VideoPlayer
                            key={video.id}
                            video={{
                                ...video,
                                image: video.thumbnail,
                                duration: 0,
                                video_files: [{ link: video.url }],
                                user: { name: "" },
                            }}
                        />
                    ))}
                </div>

                {filteredVideos.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No videos found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
