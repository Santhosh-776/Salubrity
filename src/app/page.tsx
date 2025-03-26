import Hero from "./Home/components/Hero";
import Features from "./Home/components/Features";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 pt-24">
            <Hero />
            <Features />
        </div>
    );
}
