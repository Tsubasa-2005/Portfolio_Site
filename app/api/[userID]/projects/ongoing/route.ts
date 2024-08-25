import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import {getOngoingProjectByUserID} from "@/lib/infra/rdb/projects_sql";

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;

    try {
        const projects = await getOngoingProjectByUserID(pool, { userId });

        if (projects.length === 0) {
            return NextResponse.json({ message: 'No ongoing projects found' }, { status: 404 });
        }

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching ongoing projects:', error);
        return NextResponse.json({ error: 'Failed to fetch ongoing projects' }, { status: 500 });
    }
}
