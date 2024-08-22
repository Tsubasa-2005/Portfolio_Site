// app/projects/page.tsx
import React from 'react';
import { Project } from '@/app/types/db/core';
import ProjectCard from '@/app/components/projects/ProjectCard';

export const revalidate = 60; // キャッシュの有効期限を設定 (60秒)

const ProjectsPage = async () => {
    // サーバーサイドでプロジェクトデータを取得
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
        cache: 'no-store', // キャッシュを無効にして常に最新のデータを取得
    });

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const { ongoingProjects, completedProjects }: { ongoingProjects: Project[], completedProjects: Project[] } = await response.json();

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

            {/* 進行中のプロジェクト */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Ongoing Projects</h2>
                <div className="grid gap-8 lg:grid-cols-3">
                    {ongoingProjects.map((project) => (
                        <ProjectCard key={project.id.toString()} project={project} />
                    ))}
                </div>
            </section>

            {/* 完成したプロジェクト */}
            <section>
                <h2 className="text-3xl font-semibold mb-6">Completed Projects</h2>
                <div className="grid gap-8 lg:grid-cols-3">
                    {completedProjects.map((project) => (
                        <ProjectCard key={project.id.toString()} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;