"use client";

import { useState } from "react";
import { audioTracks, AudioTrack } from "@/utils/data/audioData";
import MusicList from "./components/MusicList";

export default function SongsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // const filteredTracks = audioTracks.filter(
    //     (track: AudioTrack) =>
    //         track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         track.artist.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-24 pb-16">
            <div className="container mx-auto px-4 py-12">
                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-xl border border-purple-100 max-w-6xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                        Meditation & Relaxation Music
                    </h1>
                    <p className="text-center mb-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        Find peace and tranquility with our curated collection
                        of calming meditation tracks to help you relax and
                        focus.
                    </p>
                </div>
                <MusicList />
            </div>
        </div>
    );
}
