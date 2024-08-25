"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CreateProjectsRow } from "@/lib/infra/rdb/projects_sql";

interface ProjectCardProps {
    project: CreateProjectsRow;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { userID } = useParams();

    return (
        <div
            key={project.id.toString()}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
            <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"/>
                <div className="absolute bottom-0 p-4 text-white">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-800 text-base leading-relaxed mb-6">
                    {project.description}
                </p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">進捗</span>
                    <span className="text-sm font-semibold text-gray-700">
                        {project.progress === 100 ? "Completed" : `${project.progress}%`}
                    </span>
                </div>
                {project.progress < 100 ? (
                    <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                        <div
                            className="h-full rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${project.progress}%`,
                                background: `linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)`,
                            }}
                        ></div>
                    </div>
                ) : (
                    <div className="text-green-600 text-sm font-semibold">Project Completed!</div>
                )}
                <Link
                    href={`/users/${userID}/projects/${project.id.toString()}`}
                    className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    View Project Details
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
