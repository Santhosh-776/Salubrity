import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-600/20 z-0" />
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
                        Welcome to Salubrity
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Your journey to wellness starts here. Discover
                        meditation, relaxation, and inner peace.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/songs"
                            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium inline-flex items-center">
                            Listen to Music
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/videos"
                            className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-300 font-medium inline-flex items-center">
                            Watch Videos
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
