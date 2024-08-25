import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import { getCompletedProjectByUserID } from '@/lib/infra/rdb/projects_sql';

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    try {
        const projects = await getCompletedProjectByUserID(pool, { userId });

        if (projects.length === 0) {
            return NextResponse.json({ message: 'No completed projects found' }, { status: 404 });
        }

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching completed projects:', error);
        return NextResponse.json({ error: 'Failed to fetch completed projects' }, { status: 500 });
    }
}