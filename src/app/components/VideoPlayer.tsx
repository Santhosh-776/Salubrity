"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

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
        <div className="bg-white shadow-lg rounded-xl overflow-hidden group">
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
                        className="relative cursor-pointer"
                        onClick={() => setIsPlaying(true)}>
                        <img
                            src={video.image}
                            alt={`Video by ${video.user.name}`}
                            className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-purple-600"
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
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                            {formatDuration(video.duration)}
                        </span>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-purple-900">
                    Video by {video.user.name}
                </h2>
            </div>
        </div>
    );
};

export default VideoPlayer;
