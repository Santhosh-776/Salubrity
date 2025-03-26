"use client";

import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
            {/* Hero Section */}
            <div className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-purple-600/10" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
                            About Salubrity
                        </h1>
                        <p className="text-xl text-gray-700">
                            Empowering your journey to wellness through
                            meditation, relaxation, and mindfulness.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-6 text-purple-900">
                                Our Mission
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                At Salubrity, we believe in the transformative
                                power of meditation and mindfulness. Our mission
                                is to provide accessible, high-quality resources
                                that help you find peace, reduce stress, and
                                improve your overall well-being.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We curate the best meditation music and guided
                                videos to support your journey towards a more
                                balanced and mindful life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-purple-600">
                                Quality
                            </h3>
                            <p className="text-gray-600">
                                We provide only the highest quality meditation
                                resources.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-purple-600">
                                Accessibility
                            </h3>
                            <p className="text-gray-600">
                                Making wellness resources available to everyone.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-purple-600">
                                Innovation
                            </h3>
                            <p className="text-gray-600">
                                Continuously improving and expanding our
                                offerings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-purple-900">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Begin your meditation practice today with our
                            curated collection of calming music and guided
                            videos.
                        </p>
                        <Link
                            href="/songs"
                            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium">
                            Get Started
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
}
