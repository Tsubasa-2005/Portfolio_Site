import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import { getSkillsByUserID } from '@/lib/infra/rdb/skills_sql';

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;  // URL から userID を取得

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    try {
        const skills = await getSkillsByUserID(pool, { userId });

        return NextResponse.json(skills);
    } catch (error) {
        console.error('Error fetching skills:', error);
        return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
    }
}
