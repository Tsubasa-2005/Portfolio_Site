import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createAboutQuery = `-- name: CreateAbout :one
INSERT INTO about_me (name, introduction, hobbies, user_id)
VALUES ($1, $2, $3, $4)
	RETURNING id, user_id, name, introduction, hobbies, created_at, updated_at`;

export interface CreateAboutArgs {
    name: string;
    introduction: string;
    hobbies: string;
    userId: string;
}

export interface CreateAboutRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createAbout(client: Client, args: CreateAboutArgs): Promise<CreateAboutRow | null> {
    const result = await client.query({
        text: createAboutQuery,
        values: [args.name, args.introduction, args.hobbies, args.userId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        name: row[2],
        introduction: row[3],
        hobbies: row[4],
        createdAt: row[5],
        updatedAt: row[6]
    };
}

export const deleteAboutMeByUserIDQuery = `-- name: DeleteAboutMeByUserID :exec
DELETE FROM about_me
WHERE user_id = $1`;

export interface DeleteAboutMeByUserIDArgs {
    userId: string;
}

export async function deleteAboutMeByUserID(client: Client, args: DeleteAboutMeByUserIDArgs): Promise<void> {
    await client.query({
        text: deleteAboutMeByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
}

export const getAboutMeByUserIDQuery = `-- name: GetAboutMeByUserID :one
SELECT id, user_id, name, introduction, hobbies, created_at, updated_at
FROM about_me
WHERE user_id = $1`;

export interface GetAboutMeByUserIDArgs {
    userId: string;
}

export interface GetAboutMeByUserIDRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getAboutMeByUserID(client: Client, args: GetAboutMeByUserIDArgs): Promise<GetAboutMeByUserIDRow | null> {
    const result = await client.query({
        text: getAboutMeByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        name: row[2],
        introduction: row[3],
        hobbies: row[4],
        createdAt: row[5],
        updatedAt: row[6]
    };
}

export const updateAboutMeByUserIDQuery = `-- name: UpdateAboutMeByUserID :one
UPDATE about_me
SET name = $1, introduction = $2, hobbies = $3, updated_at = current_timestamp
WHERE user_id = $4
	RETURNING id, user_id, name, introduction, hobbies, created_at, updated_at`;

export interface UpdateAboutMeByUserIDArgs {
    name: string;
    introduction: string;
    hobbies: string;
    userId: string;
}

export interface UpdateAboutMeByUserIDRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateAboutMeByUserID(client: Client, args: UpdateAboutMeByUserIDArgs): Promise<UpdateAboutMeByUserIDRow | null> {
    const result = await client.query({
        text: updateAboutMeByUserIDQuery,
        values: [args.name, args.introduction, args.hobbies, args.userId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        name: row[2],
        introduction: row[3],
        hobbies: row[4],
        createdAt: row[5],
        updatedAt: row[6]
    };
}

