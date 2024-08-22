// app/components/ProjectCard.tsx
import React from "react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    progress: number;
    projectId: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, progress, projectId }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* 進捗バー */}
            <div className="h-2 bg-gray-300 rounded-full mb-4">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Progress: {progress}%</p>

            <Link
                href={`/projects/${projectId}`}
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                View Project Details
            </Link>
        </div>
    );
};

export default ProjectCard;