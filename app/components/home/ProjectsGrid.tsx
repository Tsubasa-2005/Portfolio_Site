// app/components/ProjectsGrid.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import {Project} from "@/app/types/db/core";

interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <section className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    progress={project.progress}
                    projectId={project.id}
                />
            ))}
        </section>
    );
};

export default ProjectsGrid;