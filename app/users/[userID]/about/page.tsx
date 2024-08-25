// app/about/page.tsx
import React from 'react';
import AboutMeSection from '@/app/components/abouts/AboutMeSection';
import ExperienceSection from '@/app/components/abouts/ExperienceSection';
import SkillsSection from "@/app/components/abouts/SkillsSection";

const AboutPage = async ({ params }: { params: { userID: string } }) => {
    const { userID } = params;

    const meResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${userID}/about/me`, {
        cache: 'no-store',
    });
    if (!meResponse.ok) throw new Error('Failed to fetch about me data');
    const aboutMeData = await meResponse.json();

    const exResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${userID}/about/experiences`, {
        cache: 'no-store',
    });
    if (!exResponse.ok) throw new Error('Failed to fetch experiences data');
    const experienceData = await exResponse.json();

    const skResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${userID}/about/skills`, {
        cache: 'no-store',
    });
    if (!skResponse.ok) throw new Error('Failed to fetch skills data');
    const skillsData = await skResponse.json();

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <AboutMeSection
                name={aboutMeData.name}
                introduction={aboutMeData.introduction}
                hobbies={aboutMeData.hobbies}
                userId={aboutMeData.userId}
            />
            <ExperienceSection experiences={experienceData} />

            {skillsData.map((skill: any) => (
                <section key={skill.id} className="mb-12">
                    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            {skill.category}
                        </h2>
                        <p className="text-base text-gray-600 mb-4">
                            {skill.description}
                        </p>
                        <SkillsSection skillID={skill.id} userID={userID} />
                    </div>
                </section>
            ))}
        </div>
    );
};

export default AboutPage;
