import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import {getProjectSkillNamesByProjectID} from "@/lib/infra/rdb/fetch_project_skills_by_project_id_sql";

export async function GET(req: Request, { params }: { params: { projectID: string } }) {
    const { projectID } = params;

    if (!projectID) {
        return NextResponse.json({ error: 'projectID is required' }, { status: 400 });
    }

    try {
        const skillNames = await getProjectSkillNamesByProjectID(pool, { projectId: projectID });

        if (!skillNames || skillNames.length === 0) {
            return NextResponse.json({ message: 'No skills found for this project' }, { status: 404 });
        }

        return NextResponse.json(skillNames, { status: 200 });
    } catch (error) {
        console.error('Error fetching project skill names:', error);
        return NextResponse.json({ error: 'Failed to fetch skill names' }, { status: 500 });
    }
}