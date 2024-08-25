import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createAboutMeSectionQuery = `-- name: CreateAboutMeSection :one
INSERT INTO about_me_sections (name, introduction, hobbies, user_id)
VALUES ($1, $2, $3, $4)
	RETURNING id, user_id, name, introduction, hobbies`;

export interface CreateAboutMeSectionArgs {
    name: string;
    introduction: string;
    hobbies: string;
    userId: string;
}

export interface CreateAboutMeSectionRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
}

export async function createAboutMeSection(client: Client, args: CreateAboutMeSectionArgs): Promise<CreateAboutMeSectionRow | null> {
    const result = await client.query({
        text: createAboutMeSectionQuery,
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
        hobbies: row[4]
    };
}

export const deleteAboutMeSectionByUserIDQuery = `-- name: DeleteAboutMeSectionByUserID :exec
DELETE FROM about_me_sections
WHERE user_id = $1`;

export interface DeleteAboutMeSectionByUserIDArgs {
    userId: string;
}

export async function deleteAboutMeSectionByUserID(client: Client, args: DeleteAboutMeSectionByUserIDArgs): Promise<void> {
    await client.query({
        text: deleteAboutMeSectionByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
}

export const getAboutMeSectionByUserIDQuery = `-- name: GetAboutMeSectionByUserID :one
SELECT id, user_id, name, introduction, hobbies
FROM about_me_sections
WHERE user_id = $1`;

export interface GetAboutMeSectionByUserIDArgs {
    userId: string;
}

export interface GetAboutMeSectionByUserIDRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
}

export async function getAboutMeSectionByUserID(client: Client, args: GetAboutMeSectionByUserIDArgs): Promise<GetAboutMeSectionByUserIDRow | null> {
    const result = await client.query({
        text: getAboutMeSectionByUserIDQuery,
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
        hobbies: row[4]
    };
}

export const updateAboutMeSectionByUserIDQuery = `-- name: UpdateAboutMeSectionByUserID :one
UPDATE about_me_sections
SET name = $1, introduction = $2, hobbies = $3
WHERE user_id = $4
	RETURNING id, user_id, name, introduction, hobbies`;

export interface UpdateAboutMeSectionByUserIDArgs {
    name: string;
    introduction: string;
    hobbies: string;
    userId: string;
}

export interface UpdateAboutMeSectionByUserIDRow {
    id: string;
    userId: string;
    name: string;
    introduction: string;
    hobbies: string;
}

export async function updateAboutMeSectionByUserID(client: Client, args: UpdateAboutMeSectionByUserIDArgs): Promise<UpdateAboutMeSectionByUserIDRow | null> {
    const result = await client.query({
        text: updateAboutMeSectionByUserIDQuery,
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
        hobbies: row[4]
    };
}

