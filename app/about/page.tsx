// app/about/page.tsx
import React from 'react';
import AboutMeSection from '@/app/components/abouts/AboutMeSection';
import ExperienceSection from '@/app/components/abouts/ExperienceSection';
import SkillsSection from "@/app/components/abouts/SkillsSection";

const AboutPage = async () => {
    const meResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/me`, {
        cache: 'no-store', // キャッシュを無効にして常に最新のデータを取得
    });
    if (!meResponse.ok) {
        throw new Error('Failed to fetch about me data');
    }
    const aboutMeData = await meResponse.json();

    const exResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/experiences`, {
        cache: 'no-store', // キャッシュを無効にして常に最新のデータを取得
    });
    if (!exResponse.ok) {
        throw new Error('Failed to fetch experiences data');
    }
    const experienceData = await exResponse.json();

    const skResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/skills`, {
        cache: 'no-store', // キャッシュを無効にして常に最新のデータを取得
    });
    if (!skResponse.ok) {
        throw new Error('Failed to fetch skills data');
    }
    const skillsData = await skResponse.json();

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <AboutMeSection
                name={aboutMeData.name}
                introduction={aboutMeData.introduction}
                hobbies={aboutMeData.hobbies}
            />
            <ExperienceSection experiences={experienceData} />
            <SkillsSection  skills={skillsData}/>
        </div>
    );
};

export default AboutPage;