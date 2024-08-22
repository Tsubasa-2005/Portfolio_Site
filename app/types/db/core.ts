import exp from "node:constants";

export interface Project {
    id: number;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
}

export interface AboutMeSectionProps {
    name: string;
    introduction: string;
    hobbies: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export interface Skill {
    name: string;
    icon: string;
    url: string;
}