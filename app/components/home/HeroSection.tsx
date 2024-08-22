// app/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700">
                I'm a passionate web developer specializing in modern web technologies.
                Explore my work and projects below.
            </p>
        </section>
    );
};

export default HeroSection;