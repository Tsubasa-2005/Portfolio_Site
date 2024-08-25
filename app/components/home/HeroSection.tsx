// app/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700">
                The following projects are currently underway.
            </p>
        </section>
    );
};

export default HeroSection;