// app/components/abouts/SkillsSection.tsx
import React from 'react';
import { FaCode, FaNodeJs, FaReact, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiStrapi } from 'react-icons/si';
import {Skill} from "@/app/types/db/core";

interface SkillsSectionProps {
    skills: Skill[];
}

const iconMap: { [key: string]: JSX.Element } = {
    FaCode: <FaCode />,
    FaNodeJs: <FaNodeJs />,
    FaReact: <FaReact />,
    FaDocker: <FaDocker />,
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaGitAlt: <FaGitAlt />,
    SiTypescript: <SiTypescript />,
    SiNextdotjs: <SiNextdotjs />,
    SiTailwindcss: <SiTailwindcss />,
    SiStrapi: <SiStrapi />,
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
                        >
                            <span className="text-blue-500 text-2xl">{iconMap[skill.icon]}</span>
                            <span className="text-lg font-medium">{skill.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SkillsSection;