import React from "react";
import ProjectCard from "./ProjectCard";
import {CreateProjectsRow} from "@/lib/infra/rdb/projects_sql";

interface ProjectsGridProps {
    projects: CreateProjectsRow[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <section className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
            <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                progress={project.progress}
                createdAt={project.createdAt}
                updatedAt={project.updatedAt}
                projectUrl={project.projectUrl}
                repoUrl={project.repoUrl}
                userId={project.userId}
            />
            ))}
        </section>
    );
};

export default ProjectsGrid;