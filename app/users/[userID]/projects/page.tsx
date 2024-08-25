import React from 'react';
import  {CreateProjectsRow} from "@/lib/infra/rdb/projects_sql";
import ProjectCard from '@/app/components/projects/ProjectCard';

const ProjectsPage = async ({ params }: { params: { userID: string } }) => {
    const { userID } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${userID}/projects`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const { ongoingProjects, completedProjects }: { ongoingProjects: CreateProjectsRow[], completedProjects: CreateProjectsRow[] } = await response.json();

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