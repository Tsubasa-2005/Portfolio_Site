import React from 'react';
import { notFound } from 'next/navigation';
import { GetProjectDetailsByProjectIDRow } from '@/lib/infra/rdb/project_details_sql';
import ProjectSection from '@/app/components/projects/ProjectSection';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectDetailPageProps {
    params: { projectID: string };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
    const { projectID } = params;

    const resProject = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${projectID}`, {
        cache: 'no-store',
    });
    if (!resProject.ok) {
        return notFound();
    }
    const project = await resProject.json();

    const resProjectDetails = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${projectID}/details`, {
        cache: 'no-store',
    });
    if (!resProjectDetails.ok) {
        return notFound();
    }
    const projectDetails: GetProjectDetailsByProjectIDRow[] = await resProjectDetails.json();
    if (projectDetails.length === 0) {
        return notFound();
    }

    const resSkills = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${projectID}/skills`, {
        cache: 'no-store',
    });
    if (!resSkills.ok) {
        return notFound();
    }
    const skills = await resSkills.json();

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-8 sm:p-10 lg:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">{project.title}</h1>
                    <p className="text-lg text-gray-700 mb-6">{project.description}</p>

                    <div className="flex space-x-4 mb-10">
                        <a
                            href={project.projectUrl}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiExternalLink className="mr-2" />
                            View Project
                        </a>
                        <a
                            href={project.repoUrl}
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiExternalLink className="mr-2" />
                            View Repository
                        </a>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">具体的な使用技術</h2>
                        <ul className="flex flex-wrap gap-4">
                            {skills.map((skill: { name: string }) => (
                                <li
                                    key={skill.name}
                                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {projectDetails.map((section) => (
                            <ProjectSection key={section.id} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;