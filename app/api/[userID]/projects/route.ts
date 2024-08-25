import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import {getProjectsByUserID} from "@/lib/infra/rdb/projects_sql";

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    try {
        const projects = await getProjectsByUserID(pool, { userId });

        if (projects.length === 0) {
            return NextResponse.json({ message: 'No projects found' }, { status: 404 });
        }

        const ongoingProjects = projects.filter(project => project.progress < 100);
        const completedProjects = projects.filter(project => project.progress === 100);

        return NextResponse.json({
            ongoingProjects,
            completedProjects
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
