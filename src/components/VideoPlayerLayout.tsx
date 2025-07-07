"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Video } from "./VideoPlayer";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerLayoutProps {
    videos: Video[];
    initialVideoId?: number;
}

const VideoPlayerLayout = ({
    videos,
    initialVideoId,
}: VideoPlayerLayoutProps) => {
    const [activeVideo, setActiveVideo] = useState<Video>(
        videos.find((v) => v.id === initialVideoId) || videos[0]
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const handleVideoSelect = (video: Video) => {
        setActiveVideo(video);
        setIsPlaying(true);
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Main video player */}
            <div className="lg:w-2/3">
                <div className="glass-card rounded-xl overflow-hidden shadow-xl border border-purple-100">
                    <div className="relative">
                        <div className="aspect-video">
                            {isMounted ? (
                                <ReactPlayer
                                    url={activeVideo.video_files[0]?.link}
                                    width="100%"
                                    height="100%"
                                    playing={isPlaying}
                                    controls={true}
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    onEnded={() => {
                                        setIsPlaying(false);
                                    }}
                                    config={{
                                        file: {
                                            forceVideo: true,
                                            attributes: {
                                                controlsList: "nodownload",
                                                disablePictureInPicture: true,
                                            },
                                        },
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                    <div className="animate-pulse flex flex-col items-center">
                                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-gray-500">
                                            Loading player...
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold gradient-text mb-3">
                            {activeVideo.title ||
                                `Meditation Video ${activeVideo.id}`}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {activeVideo.user.name
                                ? `By ${activeVideo.user.name}`
                                : "Relaxation & Wellness"}
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-medium shadow-md">
                                {isPlaying ? "Pause" : "Play"}
                            </button>
                            <div className="text-sm text-gray-500">
                                Watch this calming video to help you relax and
                                meditate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video sidebar */}
            <div className="lg:w-1/3">
                <div className="glass-card rounded-xl border border-purple-100 p-4 shadow-lg">
                    <h2 className="text-xl font-bold text-purple-900 mb-4 px-2">
                        Meditation Videos
                    </h2>
                    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => handleVideoSelect(video)}
                                className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                    activeVideo.id === video.id
                                        ? "bg-purple-100/70 scale-[0.98]"
                                        : "hover:bg-purple-50"
                                }`}>
                                <div className="relative w-40 min-w-32 h-22 rounded-md overflow-hidden">
                                    <Image
                                        width={160}
                                        height={90}
                                        src={video.image}
                                        alt={video.title || `Video thumbnail`}
                                        className="w-full h-full object-cover"
                                    />
                                    {video.duration > 0 && (
                                        <span className="absolute bottom-1 right-1 bg-black/70 text-white px-1 py-0.5 text-xs rounded">
                                            {formatDuration(video.duration)}
                                        </span>
                                    )}
                                    {activeVideo.id === video.id && (
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className={`font-medium line-clamp-2 text-sm ${
                                            activeVideo.id === video.id
                                                ? "text-purple-800"
                                                : "text-gray-800"
                                        }`}>
                                        {video.title ||
                                            `Meditation Video ${video.id}`}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {video.user.name
                                            ? `By ${video.user.name}`
                                            : "Relaxation & Wellness"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerLayout;
