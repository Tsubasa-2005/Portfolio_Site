import { NextResponse } from 'next/server';
import { pool } from '@/lib/infra/db';
import bcrypt from 'bcrypt';
import { checkEmailExists, createUser } from '@/lib/infra/rdb/users_sql';

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const existingUser = await checkEmailExists(pool, { email });
        if (existingUser) {
            return NextResponse.json({ error: 'Email is already registered' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await createUser(pool, { username, email, password: hashedPassword });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
    }
}
