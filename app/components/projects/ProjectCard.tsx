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
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 p-4 text-white">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                    href={`/users/${userID}/projects/${project.id.toString()}`}
                    className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    View Project Details
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
