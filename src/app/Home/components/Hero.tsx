import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 z-10">
                        <div className="glass-card p-10 rounded-3xl border border-purple-100 shadow-xl">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 leading-tight">
                                Find Your Inner Peace with Salubrity
                            </h1>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Your journey to wellness starts here. Discover
                                meditation, relaxation techniques, and resources
                                for balanced living.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/songs"
                                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-medium inline-flex items-center transform hover:scale-105 shadow-md">
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
                                    className="px-8 py-3 glass-card text-purple-600 border border-purple-200 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium inline-flex items-center hover:shadow-md">
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
                                <Link
                                    href="/books"
                                    className="px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium inline-flex items-center hover:shadow-md">
                                    Explore Books
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

                    <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                        <div className="relative h-[400px] w-full max-w-[500px] mx-auto animate-float">
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-500/20 to-purple-300/20 rounded-full filter blur-3xl"></div>
                            <div className="glass-card relative h-full w-full rounded-3xl overflow-hidden border border-purple-100 shadow-xl">
                                <Image
                                    src="/meditation.jpg"
                                    alt="Person meditating"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
