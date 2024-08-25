import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import { getSkillDetailsBySkillID } from '@/lib/infra/rdb/skill_details_sql';

export async function GET(req: Request, { params }: { params: { skillID: string } }) {
    const { skillID } = params;  // URL から skillID を取得

    if (!skillID) {
        return NextResponse.json({ error: 'skillID is required' }, { status: 400 });
    }

    try {
        const skillDetails = await getSkillDetailsBySkillID(pool, { skillId: skillID });

        if (!skillDetails || skillDetails.length === 0) {
            return NextResponse.json({ error: 'No skill details found' }, { status: 404 });
        }

        return NextResponse.json(skillDetails);
    } catch (error) {
        console.error('Error fetching skill details:', error);
        return NextResponse.json({ error: 'Failed to fetch skill details' }, { status: 500 });
    }
}
