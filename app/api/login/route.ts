import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/lib/infra/rdb/users_sql';
import { pool } from '@/lib/infra/db';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const user = await getUserByEmail(pool, { email });

        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        // JWT トークンを発行する
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET || 'your_jwt_secret', // 環境変数で設定することを推奨
            { expiresIn: '1h' } // 1時間で有効期限が切れる
        );

        return NextResponse.json({ success: true, token }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}
