import React from "react";

const WhyThisApp = () => {
    return (
        <div className="mt-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                {/* Header section */}
                <div className="p-6 bg-gradient-to-r from-purple-700 to-purple-500">
                    <div className="flex items-center">
                        <span className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </span>
                        <h3 className="ml-3 text-2xl font-bold text-white">
                            Why Salubrity?
                        </h3>
                    </div>
                    <p className="mt-4 text-white text-lg leading-relaxed">
                        Salubrity is designed to help you improve your mental
                        well-being through the scientifically supported
                        techniques of binaural beats and subliminal audio. Our
                        app provides a convenient and effective way to
                        incorporate these powerful tools into your daily
                        routine.
                    </p>
                </div>

                {/* Binaural Beats Section */}
                <div className="p-6 border-b">
                    <div className="flex items-center">
                        <span className="text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828"
                                />
                            </svg>
                        </span>
                        <h4 className="ml-2 text-xl font-semibold text-purple-600">
                            Binaural Beats
                        </h4>
                    </div>

                    <div className="mt-4">
                        <h5 className="text-lg font-medium text-purple-500">
                            What are Binaural Beats?
                        </h5>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                            Binaural beats are an auditory illusion created when
                            two slightly different frequencies are played
                            separately in each ear. Your brain perceives a third
                            "beat" which is the mathematical difference between
                            these two frequencies. For example, if a 200 Hz tone
                            is played in one ear and a 210 Hz tone in the other,
                            the brain perceives a 10 Hz binaural beat.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-medium text-purple-500">
                            How Do They Work?
                        </h5>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                            Binaural beats are believed to work through a
                            process called "frequency following response," where
                            your brainwaves synchronize with the frequency of
                            the perceived beat. Different frequency ranges are
                            associated with different mental states:
                        </p>

                        <div className="mt-4 space-y-2">
                            {[
                                {
                                    range: "Delta (0.5-4 Hz)",
                                    effect: "Deep sleep, healing",
                                    color: "bg-indigo-500",
                                },
                                {
                                    range: "Theta (4-8 Hz)",
                                    effect: "Deep relaxation, meditation, creativity",
                                    color: "bg-blue-500",
                                },
                                {
                                    range: "Alpha (8-13 Hz)",
                                    effect: "Relaxed alertness, calm focus",
                                    color: "bg-teal-500",
                                },
                                {
                                    range: "Beta (13-30 Hz)",
                                    effect: "Active thinking, focus, alertness",
                                    color: "bg-amber-500",
                                },
                                {
                                    range: "Gamma (30+ Hz)",
                                    effect: "Higher mental activity, perception",
                                    color: "bg-orange-500",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start">
                                    <div
                                        className={`${item.color} h-3 w-3 rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                                    <p className="text-gray-800">
                                        <span className="font-semibold">
                                            {item.range}:
                                        </span>{" "}
                                        {item.effect}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subliminal Audio Section */}
                <div className="p-6 border-b">
                    <div className="flex items-center">
                        <span className="text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </span>
                        <h4 className="ml-2 text-xl font-semibold text-purple-600">
                            Subliminal Audio
                        </h4>
                    </div>

                    <div className="mt-4">
                        <h5 className="text-lg font-medium text-purple-500">
                            What is Subliminal Audio?
                        </h5>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                            Subliminal audio contains positive affirmations and
                            messages recorded at a volume level just below the
                            threshold of conscious hearing. While you may not
                            consciously hear these messages, research suggests
                            they can be processed by your subconscious mind.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-lg font-medium text-purple-500">
                            How Does It Work?
                        </h5>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                            Subliminal audio works by bypassing your conscious
                            mind and delivering positive suggestions directly to
                            your subconscious. Over time, these messages can
                            help reshape negative thought patterns and reinforce
                            positive behaviors and mindsets.
                        </p>
                    </div>
                </div>

                {/* Research Section */}
                <div className="p-6 border-b">
                    <div className="flex items-center">
                        <span className="text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        </span>
                        <h4 className="ml-2 text-xl font-semibold text-purple-600">
                            Research and Evidence
                        </h4>
                    </div>

                    <p className="mt-4 text-gray-700 font-medium leading-relaxed">
                        Scientific research on binaural beats and subliminal
                        audio has shown promising results:
                    </p>

                    <div className="mt-4 space-y-4">
                        {[
                            "A 2019 study published in Psychological Research found that binaural beats in the theta range (6 Hz) enhanced creative thinking.",
                            "Research in the International Journal of Psychophysiology demonstrated that binaural beats can influence attention and mood states.",
                            "A 2018 study in the Journal of Alternative and Complementary Medicine found that binaural beat therapy reduced anxiety levels in patients with mild anxiety disorders.",
                            "Meta-analyses have indicated that subliminal messages can have small but significant effects on behavior and attitudes.",
                            "A study at University College London found that subliminal audio exposure created neural activations similar to consciously heard messages, suggesting unconscious processing occurs.",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex">
                                <svg
                                    className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p className="ml-3 text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tips Section */}
                <div className="p-6">
                    <div className="flex items-center">
                        <span className="text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </span>
                        <h4 className="ml-2 text-xl font-semibold text-purple-600">
                            How to Get the Best Results
                        </h4>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            "Use high-quality headphones for binaural beats to ensure separate frequencies reach each ear",
                            "Practice consistently for at least 15-30 minutes daily",
                            "Find a quiet, comfortable space where you won't be disturbed",
                            "Combine with mindfulness or meditation for enhanced effects",
                            "Be patient - benefits often accumulate over time with regular use",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex">
                                <svg
                                    className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                                <p className="ml-3 text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyThisApp;
