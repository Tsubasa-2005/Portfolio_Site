import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import { getProject } from '@/lib/infra/rdb/projects_sql';

export async function GET(req: Request, { params }: { params: { projectID: string } }) {
    const { projectID } = params;

    if (!projectID) {
        return NextResponse.json({ error: 'projectID is required' }, { status: 400 });
    }

    try {
        const project = await getProject(pool, { id: projectID });

        if (!project) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Error fetching project details:', error);
        return NextResponse.json({ error: 'Failed to fetch project details' }, { status: 500 });
    }
}