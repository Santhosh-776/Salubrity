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
    onClose,
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
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div
            className={`fixed right-0 top-0  bg-white shadow-xl border-l border-purple-100 transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <button
                onClick={togglePlayer}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-l-lg shadow-lg border border-r-0 border-purple-100 hover:bg-purple-50 transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-purple-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
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

            <div className="w-96  p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6 pt-7">
                    <h2 className="text-xl font-semibold text-purple-600">
                        Now Playing
                    </h2>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-64 h-64 mb-8 rounded-full bg-purple-100 flex items-center justify-center">
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

                    <h3 className="text-2xl font-bold text-purple-900 mb-2">
                        {currentSong.title}
                    </h3>
                    <p className="text-gray-600 mb-8">{currentSong.artist}</p>

                    <div className="w-full space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">
                                {formatTime(currentTime)}
                            </span>
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleTimeChange}
                                className="flex-1 h-1 bg-purple-200 rounded-full appearance-none cursor-pointer"
                            />
                            <span className="text-sm text-gray-500">
                                {formatTime(duration)}
                            </span>
                        </div>

                        <div className="flex justify-center items-center space-x-6">
                            <button
                                onClick={onPrevious}
                                className="p-3 hover:bg-purple-50 rounded-full transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
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
                                className="p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                {isPlaying ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
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
                                        className="h-8 w-8"
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
                                    className="h-6 w-6 text-purple-600"
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

                <audio
                    ref={audioRef}
                    src={currentSong.url}
                />
            </div>
        </div>
    );
}
