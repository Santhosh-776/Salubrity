"use client";

import { useState } from "react";
import VideoPlayerLayout from "../../components/VideoPlayerLayout";
import videoData from "@/utils/data/videoData";

export default function VideosPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-24 pb-16">
            <div className="container mx-auto px-4 py-12">
                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-xl border border-purple-100 max-w-6xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                        Meditation & Relaxation Videos
                    </h1>
                    <p className="text-center mb-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover calming videos to help you relax and find inner
                        peace
                    </p>
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for meditation videos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-4 pl-12 pr-4 text-lg glass-card rounded-full border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all 
                                duration-300 shadow-md text-purple-800"
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
                </div>

                {filteredVideos.length > 0 ? (
                    <div className="mx-auto max-w-7xl">
                        <VideoPlayerLayout
                            videos={filteredVideos.map((video) => ({
                                id: video.id,
                                title: video.title,
                                image: video.thumbnail,
                                duration: 0,
                                video_files: [{ link: video.url }],
                                user: { name: "" },
                            }))}
                        />
                    </div>
                ) : (
                    <div className="glass-card text-center p-10 rounded-xl shadow-md mx-4 animate-float mt-8">
                        <svg
                            className="w-16 h-16 text-purple-300 mx-auto mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <p className="text-xl text-purple-800">
                            No videos found matching{" "}
                            <span className="font-semibold gradient-text">
                                {searchQuery}
                            </span>
                        </p>
                        <p className="mt-2 text-purple-600">
                            Try a different search term
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
