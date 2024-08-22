// app/page.tsx
import React from "react";
import { projects } from "@/SampleData/data";
import HeroSection from "@/app/components/home/HeroSection";
import ProjectsGrid from "@/app/components/home/ProjectsGrid";

export default function Home() {
    const ongoingProjects = projects.filter((project) => project.progress < 100);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <HeroSection />
            <ProjectsGrid projects={ongoingProjects} />
        </main>
    );
}