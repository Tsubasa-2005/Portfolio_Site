// app/projects/[projectID]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import {Project} from "@/app/types/db/core";

interface ProjectDetailPageProps {
    params: { projectID: string }; // projectID を string 型として受け取る
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
    const projectID = BigInt(params.projectID); // string を bigint に変換

    // サーバーサイドでプロジェクトデータを取得
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${projectID}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        return notFound();
    }

    const project: Project = await response.json();

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover mb-8 rounded-lg"
            />
            <p className="text-lg text-gray-700 mb-8">{project.description}</p>
            <div className="flex space-x-4">
                <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    View Project
                </a>
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline"
                >
                    GitHub Repo
                </a>
            </div>
        </div>
    );
};

export default ProjectDetailPage;