import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createSkillDetailQuery = `-- name: CreateSkillDetail :one
insert into skill_details (skill_id, name, icon, url, level)
values ($1, $2, $3, $4, $5)
returning id, skill_id, name, icon, url, level, created_at, updated_at`;

export interface CreateSkillDetailArgs {
    skillId: string;
    name: string;
    icon: string;
    url: string;
    level: number;
}

export interface CreateSkillDetailRow {
    id: string;
    skillId: string;
    name: string;
    icon: string;
    url: string;
    level: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createSkillDetail(client: Client, args: CreateSkillDetailArgs): Promise<CreateSkillDetailRow | null> {
    const result = await client.query({
        text: createSkillDetailQuery,
        values: [args.skillId, args.name, args.icon, args.url, args.level],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        skillId: row[1],
        name: row[2],
        icon: row[3],
        url: row[4],
        level: row[5],
        createdAt: row[6],
        updatedAt: row[7]
    };
}

export const deleteSkillDetailQuery = `-- name: DeleteSkillDetail :exec
delete from skill_details
where id = $1`;

export interface DeleteSkillDetailArgs {
    id: string;
}

export async function deleteSkillDetail(client: Client, args: DeleteSkillDetailArgs): Promise<void> {
    await client.query({
        text: deleteSkillDetailQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteSkillDetailsBySkillIDQuery = `-- name: DeleteSkillDetailsBySkillID :exec
delete from skill_details
where skill_id = $1`;

export interface DeleteSkillDetailsBySkillIDArgs {
    skillId: string;
}

export async function deleteSkillDetailsBySkillID(client: Client, args: DeleteSkillDetailsBySkillIDArgs): Promise<void> {
    await client.query({
        text: deleteSkillDetailsBySkillIDQuery,
        values: [args.skillId],
        rowMode: "array"
    });
}

export const getSkillDetailsBySkillIDQuery = `-- name: GetSkillDetailsBySkillID :many
select id, skill_id, name, icon, url, level, created_at, updated_at
from skill_details
where skill_id = $1`;

export interface GetSkillDetailsBySkillIDArgs {
    skillId: string;
}

export interface GetSkillDetailsBySkillIDRow {
    id: string;
    skillId: string;
    name: string;
    icon: string;
    url: string;
    level: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getSkillDetailsBySkillID(client: Client, args: GetSkillDetailsBySkillIDArgs): Promise<GetSkillDetailsBySkillIDRow[]> {
    const result = await client.query({
        text: getSkillDetailsBySkillIDQuery,
        values: [args.skillId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            skillId: row[1],
            name: row[2],
            icon: row[3],
            url: row[4],
            level: row[5],
            createdAt: row[6],
            updatedAt: row[7]
        };
    });
}

export const updateSkillDetailQuery = `-- name: UpdateSkillDetail :one
update skill_details
set skill_id = $1, name = $2, icon = $3, url = $4, level = $5, updated_at = current_timestamp
where id = $6
returning id, skill_id, name, icon, url, level, created_at, updated_at`;

export interface UpdateSkillDetailArgs {
    skillId: string;
    name: string;
    icon: string;
    url: string;
    level: number;
    id: string;
}

export interface UpdateSkillDetailRow {
    id: string;
    skillId: string;
    name: string;
    icon: string;
    url: string;
    level: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateSkillDetail(client: Client, args: UpdateSkillDetailArgs): Promise<UpdateSkillDetailRow | null> {
    const result = await client.query({
        text: updateSkillDetailQuery,
        values: [args.skillId, args.name, args.icon, args.url, args.level, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        skillId: row[1],
        name: row[2],
        icon: row[3],
        url: row[4],
        level: row[5],
        createdAt: row[6],
        updatedAt: row[7]
    };
}

