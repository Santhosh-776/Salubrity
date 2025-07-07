"use client";

import { useState, useRef, useEffect } from "react";
import { audioTracks } from "@/utils/data/audioData";

interface MusicPlayerProps {
    currentSong: (typeof audioTracks)[0];
    onNext: () => void;
    onPrevious: () => void;
    onClose: () => void;
}

export default function MusicPlayer({
    currentSong,
    onNext,
    onPrevious,
}: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("loadedmetadata", () => {
                setDuration(audioRef.current?.duration || 0);
            });

            audioRef.current.addEventListener("timeupdate", () => {
                setCurrentTime(audioRef.current?.currentTime || 0);
            });

            audioRef.current.addEventListener("ended", () => {
                setIsPlaying(false);
                onNext();
            });
        }
    }, [onNext]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const togglePlayer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed bottom-0 right-0 left-0 z-40 transition-transform duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0" : "translate-y-[calc(100%-64px)]"
            }`}>
            {/* Mini player (visible when collapsed) */}
            <div
                className="glass-card backdrop-blur-lg border-t border-purple-100 shadow-lg cursor-pointer"
                onClick={() => !isOpen && setIsOpen(true)}>
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                            </svg>
                        </div>
                        <div className="truncate">
                            <p className="font-semibold text-purple-900 text-sm">
                                {currentSong.title}
                            </p>
                            <p className="text-xs text-gray-500">
                                {currentSong.artist}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePlay();
                            }}
                            className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 hover:bg-purple-200 transition-colors">
                            {isPlaying ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePlayer();
                            }}
                            className="text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 transition-transform duration-300 ${
                                    isOpen ? "" : "rotate-180"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Full player */}
            <div className="glass-card backdrop-blur-lg border-t border-purple-100 shadow-xl">
                <div className="container mx-auto p-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Cover art */}
                        <div className="md:w-1/3">
                            <div className="w-60 h-60 rounded-2xl glass-card border border-purple-100 overflow-hidden shadow-lg mx-auto animate-float">
                                <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-purple-300/30 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-24 w-24 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="md:w-2/3 w-full flex flex-col">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold gradient-text mb-2">
                                    {currentSong.title}
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    {currentSong.artist}
                                </p>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-8 space-y-2">
                                <div className="w-full h-1 bg-purple-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                                        style={{
                                            width: `${
                                                (currentTime / duration) * 100
                                            }%`,
                                        }}></div>
                                </div>

                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>

                                <input
                                    type="range"
                                    min="0"
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleTimeChange}
                                    className="w-full h-2 opacity-0 absolute cursor-pointer"
                                />
                            </div>

                            {/* Controls */}
                            <div className="flex justify-center items-center space-x-8 mb-8">
                                <button
                                    onClick={onPrevious}
                                    className="p-3 hover:bg-purple-50 rounded-full transition-colors">
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
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={togglePlay}
                                    className="p-5 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 transition-colors transform hover:scale-105 shadow-md">
                                    {isPlaying ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
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
                                    )}
                                </button>

                                <button
                                    onClick={onNext}
                                    className="p-3 hover:bg-purple-50 rounded-full transition-colors">
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
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={currentSong.url}
            />
        </div>
    );
}
