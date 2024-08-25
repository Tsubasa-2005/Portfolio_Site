import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createExperienceQuery = `-- name: CreateExperience :one
INSERT INTO experiences (company, role, duration, description, user_id)
VALUES ($1, $2, $3, $4, $5)
	RETURNING id, user_id, company, role, duration, description, created_at, updated_at`;

export interface CreateExperienceArgs {
    company: string;
    role: string;
    duration: string;
    description: string;
    userId: string;
}

export interface CreateExperienceRow {
    id: string;
    userId: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createExperience(client: Client, args: CreateExperienceArgs): Promise<CreateExperienceRow | null> {
    const result = await client.query({
        text: createExperienceQuery,
        values: [args.company, args.role, args.duration, args.description, args.userId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        company: row[2],
        role: row[3],
        duration: row[4],
        description: row[5],
        createdAt: row[6],
        updatedAt: row[7]
    };
}

export const deleteExperienceQuery = `-- name: DeleteExperience :exec
DELETE FROM experiences
WHERE id = $1`;

export interface DeleteExperienceArgs {
    id: string;
}

export async function deleteExperience(client: Client, args: DeleteExperienceArgs): Promise<void> {
    await client.query({
        text: deleteExperienceQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteExperienceByUserIDQuery = `-- name: DeleteExperienceByUserID :exec
DELETE FROM experiences
WHERE user_id = $1`;

export interface DeleteExperienceByUserIDArgs {
    userId: string;
}

export async function deleteExperienceByUserID(client: Client, args: DeleteExperienceByUserIDArgs): Promise<void> {
    await client.query({
        text: deleteExperienceByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
}

export const getExperiencesByUserIDQuery = `-- name: GetExperiencesByUserID :many
SELECT id, user_id, company, role, duration, description, created_at, updated_at FROM experiences
WHERE user_id = $1`;

export interface GetExperiencesByUserIDArgs {
    userId: string;
}

export interface GetExperiencesByUserIDRow {
    id: string;
    userId: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getExperiencesByUserID(client: Client, args: GetExperiencesByUserIDArgs): Promise<GetExperiencesByUserIDRow[]> {
    const result = await client.query({
        text: getExperiencesByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            userId: row[1],
            company: row[2],
            role: row[3],
            duration: row[4],
            description: row[5],
            createdAt: row[6],
            updatedAt: row[7]
        };
    });
}

export const updateExperienceQuery = `-- name: UpdateExperience :one
UPDATE experiences
SET company = $1, role = $2, duration = $3, description = $4, updated_at = current_timestamp
WHERE id = $5
	RETURNING id, user_id, company, role, duration, description, created_at, updated_at`;

export interface UpdateExperienceArgs {
    company: string;
    role: string;
    duration: string;
    description: string;
    id: string;
}

export interface UpdateExperienceRow {
    id: string;
    userId: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateExperience(client: Client, args: UpdateExperienceArgs): Promise<UpdateExperienceRow | null> {
    const result = await client.query({
        text: updateExperienceQuery,
        values: [args.company, args.role, args.duration, args.description, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        company: row[2],
        role: row[3],
        duration: row[4],
        description: row[5],
        createdAt: row[6],
        updatedAt: row[7]
    };
}

