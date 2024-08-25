import React from "react";
import HeroSection from "@/app/components/home/HeroSection";
import ProjectsGrid from "@/app/components/home/ProjectsGrid";
import {getOngoingProjectByUserID} from "@/lib/infra/rdb/projects_sql";
import { pool } from "@/lib/infra/db";

interface ProjectsPageProps {
    params: { userID: string };
}

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
    const { userID } = params;

    const ongoingProjects = await getOngoingProjectByUserID(pool, { userId: userID });

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <HeroSection />
            <ProjectsGrid projects={ongoingProjects} />
        </main>
    );
};

export default ProjectsPage;
