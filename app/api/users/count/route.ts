import { NextResponse } from 'next/server';
import { getUserCount } from '@/lib/infra/rdb/users_sql'; // getUserCountをインポート
import { pool } from '@/lib/infra/db';

export async function GET() {
    try {
        const totalUsers = await getUserCount(pool);

        return NextResponse.json({
            totalUsers,
        });
    } catch (error) {
        console.error('Error fetching total user count:', error);
        return NextResponse.json({ error: 'Failed to fetch user count' }, { status: 500 });
    }
}
