"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export interface Video {
    id: number;
    image: string;
    duration: number;
    video_files: {
        link: string;
    }[];
    user: {
        name: string;
    };
    title?: string;
}

export interface VideoPlayerProps {
    video: Video;
}

const VideoPlayer = ({ video }: VideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="glass-card rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl border border-purple-100">
            <div className="relative">
                {isPlaying ? (
                    <div className="aspect-video">
                        <ReactPlayer
                            url={video.video_files[0]?.link}
                            width="100%"
                            height="100%"
                            playing={isPlaying}
                            controls={showControls}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => setShowControls(false)}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: "nodownload",
                                        disablePictureInPicture: true,
                                    },
                                },
                            }}
                        />
                    </div>
                ) : (
                    <div
                        className="relative cursor-pointer overflow-hidden"
                        onClick={() => setIsPlaying(true)}>
                        <Image
                            width={640}
                            height={360}
                            src={video.image}
                            alt={video.title || `Video by ${video.user.name}`}
                            className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent opacity-70 flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-purple-600 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        {video.duration > 0 && (
                            <span className="absolute bottom-3 right-3 bg-purple-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {formatDuration(video.duration)}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold gradient-text line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-2">
                    {video.title || `Meditation Video ${video.id}`}
                </h2>
                <p className="text-sm text-gray-600">
                    {video.user.name
                        ? `By ${video.user.name}`
                        : "Relaxation & Wellness"}
                </p>
                {!isPlaying && (
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="mt-4 w-full py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium">
                        Watch Now
                    </button>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
