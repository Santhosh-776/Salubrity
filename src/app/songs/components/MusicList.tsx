"use client";

import { useState } from "react";
import { audioTracks, AudioTrack } from "@/utils/data/audioData";
import MusicPlayer from "../../components/MusicPlayer";

export default function MusicList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSong, setSelectedSong] = useState<AudioTrack | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredSongs = audioTracks.filter(
        (song: AudioTrack) =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSongSelect = (song: AudioTrack, index: number) => {
        setSelectedSong(song);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % filteredSongs.length;
        setCurrentIndex(nextIndex);
        setSelectedSong(filteredSongs[nextIndex]);
    };

    const handlePrevious = () => {
        const prevIndex =
            (currentIndex - 1 + filteredSongs.length) % filteredSongs.length;
        setCurrentIndex(prevIndex);
        setSelectedSong(filteredSongs[prevIndex]);
    };

    const handleClose = () => {
        setSelectedSong(null);
    };

    return (
        <div className="relative">
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search songs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 pl-12 pr-4 text-lg border-2 border-purple-200 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300 shadow-lg"
                />
                <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSongs.map((song: AudioTrack, index: number) => (
                    <div
                        key={song.id}
                        onClick={() => handleSongSelect(song, index)}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-purple-100 
                                transition-shadow duration-300 cursor-pointer group flex items-center justify-around">
                        <div className="w-20 h-6 mb-8 rounded-full bg-purple-100 flex items-center justify-center">
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
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-purple-900 mb-1">
                                {song.title}
                            </h3>
                            <p className="text-gray-600">{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSong && (
                <MusicPlayer
                    currentSong={selectedSong}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    onClose={handleClose}
                />
            )}
        </div>
    );
}
