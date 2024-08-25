import { NextResponse } from 'next/server';
import { getAboutMeByUserID } from '@/lib/infra/rdb/about_me_sql';
import { pool } from '@/lib/infra/db';

export async function GET(req: Request, { params }: { params: { userID: string } }) {
    const { userID: userId } = params;  // URL から userID を取得

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    try {
        const me = await getAboutMeByUserID(pool, { userId });

        return NextResponse.json(me);
    } catch (error) {
        console.error('Error fetching me:', error);
        return NextResponse.json({ error: 'Failed to fetch me' }, { status: 500 });
    }
}
