// app/components/abouts/ExperienceSection.tsx
import React from 'react';
import {Experience} from "@/app/types/db/core";

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>
            <div className="relative">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-8 flex items-start">
                        {/* タイムラインマーカー */}
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            {index < experiences.length - 1 && <div className="h-full w-px bg-blue-500"></div>}
                        </div>
                        {/* コンテンツ */}
                        <div className="ml-6">
                            <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">
                                    {exp.role} at {exp.company}
                                </h3>
                                <p className="text-gray-700 mt-2">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;