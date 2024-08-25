import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createSkillQuery = `-- name: CreateSkill :one
INSERT INTO skills (user_id, category, description)
VALUES ($1, $2, $3)
	RETURNING id, user_id, category, description, created_at, updated_at`;

export interface CreateSkillArgs {
    userId: string;
    category: string;
    description: string;
}

export interface CreateSkillRow {
    id: string;
    userId: string;
    category: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createSkill(client: Client, args: CreateSkillArgs): Promise<CreateSkillRow | null> {
    const result = await client.query({
        text: createSkillQuery,
        values: [args.userId, args.category, args.description],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        category: row[2],
        description: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

export const deleteSkillQuery = `-- name: DeleteSkill :exec
DELETE FROM skills
WHERE id = $1`;

export interface DeleteSkillArgs {
    id: string;
}

export async function deleteSkill(client: Client, args: DeleteSkillArgs): Promise<void> {
    await client.query({
        text: deleteSkillQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteSkillsByUserIDQuery = `-- name: DeleteSkillsByUserID :exec
DELETE FROM skills
WHERE user_id = $1`;

export interface DeleteSkillsByUserIDArgs {
    userId: string;
}

export async function deleteSkillsByUserID(client: Client, args: DeleteSkillsByUserIDArgs): Promise<void> {
    await client.query({
        text: deleteSkillsByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
}

export const getSkillsByUserIDQuery = `-- name: GetSkillsByUserID :many
SELECT id, user_id, category, description, created_at, updated_at FROM skills
WHERE user_id = $1`;

export interface GetSkillsByUserIDArgs {
    userId: string;
}

export interface GetSkillsByUserIDRow {
    id: string;
    userId: string;
    category: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getSkillsByUserID(client: Client, args: GetSkillsByUserIDArgs): Promise<GetSkillsByUserIDRow[]> {
    const result = await client.query({
        text: getSkillsByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            userId: row[1],
            category: row[2],
            description: row[3],
            createdAt: row[4],
            updatedAt: row[5]
        };
    });
}

export const updateSkillQuery = `-- name: UpdateSkill :one
UPDATE skills
SET category = $1, description = $2, updated_at = current_timestamp
WHERE id = $3
	RETURNING id, user_id, category, description, created_at, updated_at`;

export interface UpdateSkillArgs {
    category: string;
    description: string;
    id: string;
}

export interface UpdateSkillRow {
    id: string;
    userId: string;
    category: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateSkill(client: Client, args: UpdateSkillArgs): Promise<UpdateSkillRow | null> {
    const result = await client.query({
        text: updateSkillQuery,
        values: [args.category, args.description, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        category: row[2],
        description: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

