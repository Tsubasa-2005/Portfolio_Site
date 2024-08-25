import { NextResponse } from 'next/server';
import { getUsers } from '@/lib/infra/rdb/users_sql';
import { pool } from '@/lib/infra/db';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '8', 10);

    const offset = (page - 1) * limit;

    try {
        const users = await getUsers(pool, { limit: limit.toString(), offset: offset.toString() });

        return NextResponse.json({
            users,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}
