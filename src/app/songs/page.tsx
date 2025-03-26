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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Meditation & Relaxation Music
            </h1>

            <MusicList />
        </div>
    );
}
