import React from "react";
import Link from "next/link";
import { CreateProjectsRow } from "@/lib/infra/rdb/projects_sql";
import { format } from "date-fns";

const ProjectCard: React.FC<CreateProjectsRow> = ({ id, description, progress, title, createdAt, updatedAt }) => {
    const formattedCreatedAt = createdAt ? format(new Date(createdAt), 'yyyy/MM/dd') : 'N/A';
    const formattedUpdatedAt = updatedAt ? format(new Date(updatedAt), 'yyyy/MM/dd') : 'N/A';

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            <div className="h-2 bg-gray-300 rounded-full mb-4">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Progress: {progress}%</p>

            <div className="text-sm text-gray-500 mb-4">
                <p>Created: {formattedCreatedAt}</p>
                <p>Last Updated: {formattedUpdatedAt}</p>
            </div>

            <Link
                href={`/projects/${id}`}
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                View Project Details
            </Link>
        </div>
    );
};

export default ProjectCard;
