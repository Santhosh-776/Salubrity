"use client";

import { useState } from "react";
import { audioTracks, AudioTrack } from "@/utils/data/audioData";
import MusicPlayer from "../../../components/MusicPlayer";

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
        <div className="relative max-w-7xl mx-auto">
            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for meditation sounds..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-4 pl-12 pr-4 glass-card text-lg rounded-full border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300 shadow-md text-purple-800"
                    />
                    <svg
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-purple-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            {filteredSongs.length === 0 ? (
                <div className="glass-card text-center p-10 rounded-xl shadow-md mx-4 animate-float">
                    <svg
                        className="w-16 h-16 text-purple-300 mx-auto mb-4"
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
                    <p className="text-xl text-purple-800">
                        No sounds found matching{" "}
                        <span className="font-semibold gradient-text">
                            "{searchQuery}"
                        </span>
                    </p>
                    <p className="mt-2 text-purple-600">
                        Try a different search term
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {filteredSongs.map((song: AudioTrack, index: number) => (
                        <div
                            key={song.id}
                            onClick={() => handleSongSelect(song, index)}
                            className="glass-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 hover:shadow-xl border border-purple-100">
                            <div className="p-6 flex items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-300/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 text-purple-600"
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
                                <div>
                                    <h3 className="text-xl font-bold gradient-text mb-1">
                                        {song.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {song.artist}
                                    </p>
                                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                            Play Now
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

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
