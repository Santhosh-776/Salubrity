"use client";

import { useState, useRef } from "react";

interface PDFViewerProps {
    pdfPath: string;
    title: string;
}

const PDFViewer = ({ pdfPath, title }: PDFViewerProps) => {
    const [loading, setLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch((err) => {
                console.error(
                    `Error attempting to enable fullscreen: ${err.message}`
                );
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={`flex flex-col items-center w-full max-w-6xl mx-auto ${
                isFullscreen
                    ? "fixed inset-0 z-50 bg-white p-4 rounded-none"
                    : "bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8"
            }`}>
            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button
                    onClick={toggleFullscreen}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2">
                    {isFullscreen ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                            </svg>
                            Exit Fullscreen
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                            </svg>
                            Fullscreen
                        </>
                    )}
                </button>
            </div>

            <div className="w-full relative">
                {loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-white/5 backdrop-blur-sm rounded-xl">
                        <div className="loader animate-spin h-10 w-10 border-4 border-purple-500 rounded-full border-t-transparent"></div>
                    </div>
                )}

                <iframe
                    ref={iframeRef}
                    src={pdfPath}
                    className={`w-full rounded-xl border border-gray-200 ${
                        isFullscreen ? "h-[calc(100vh-80px)]" : "h-[80vh]"
                    }`}
                    onLoad={() => setLoading(false)}
                    title={`${title} PDF Viewer`}
                />
            </div>
        </div>
    );
};

export default PDFViewer;
