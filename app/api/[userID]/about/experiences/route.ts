import { NextResponse } from 'next/server';
import { getExperiencesByUserID } from '@/lib/infra/rdb/experiences_sql';
import { pool } from '@/lib/infra/db';

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    try {
        const experiences = await getExperiencesByUserID(pool, { userId });

        return NextResponse.json(experiences);
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
    }
}
