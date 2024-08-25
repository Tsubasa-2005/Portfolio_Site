// db.ts
import { Pool } from 'pg';

// export const pool = new Pool({
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASS,
//     port: Number(process.env.DB_PORT) || 5432,
// });

export const pool = new Pool({
    user: "postgres",
    database: process.env.DB_NAME,
    password: "postgres",
    port: Number(process.env.DB_PORT) || 5432,
});

export async function testConnection(): Promise<boolean> {
    try {
        const client = await pool.connect();
        await client.query('SELECT NOW()');
        client.release();
        return true;
    } catch (err) {
        console.error('Database connection error:', err);
        return false;
    }
}