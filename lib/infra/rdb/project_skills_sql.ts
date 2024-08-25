import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createProjectSkillQuery = `-- name: CreateProjectSkill :one
insert into project_skills (project_id, skill_detail_id)
values ($1, $2)
returning id, project_id, skill_detail_id, created_at, updated_at`;

export interface CreateProjectSkillArgs {
    projectId: string;
    skillDetailId: string;
}

export interface CreateProjectSkillRow {
    id: string;
    projectId: string;
    skillDetailId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createProjectSkill(client: Client, args: CreateProjectSkillArgs): Promise<CreateProjectSkillRow | null> {
    const result = await client.query({
        text: createProjectSkillQuery,
        values: [args.projectId, args.skillDetailId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        projectId: row[1],
        skillDetailId: row[2],
        createdAt: row[3],
        updatedAt: row[4]
    };
}

export const deleteProjectSkillQuery = `-- name: DeleteProjectSkill :exec
delete from project_skills
where id = $1`;

export interface DeleteProjectSkillArgs {
    id: string;
}

export async function deleteProjectSkill(client: Client, args: DeleteProjectSkillArgs): Promise<void> {
    await client.query({
        text: deleteProjectSkillQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteProjectSkillsByProjectIDQuery = `-- name: DeleteProjectSkillsByProjectID :exec
delete from project_skills
where project_id = $1`;

export interface DeleteProjectSkillsByProjectIDArgs {
    projectId: string;
}

export async function deleteProjectSkillsByProjectID(client: Client, args: DeleteProjectSkillsByProjectIDArgs): Promise<void> {
    await client.query({
        text: deleteProjectSkillsByProjectIDQuery,
        values: [args.projectId],
        rowMode: "array"
    });
}

export const getProjectSkillsByProjectIDQuery = `-- name: GetProjectSkillsByProjectID :many
select id, project_id, skill_detail_id, created_at, updated_at
from project_skills
where project_id = $1`;

export interface GetProjectSkillsByProjectIDArgs {
    projectId: string;
}

export interface GetProjectSkillsByProjectIDRow {
    id: string;
    projectId: string;
    skillDetailId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getProjectSkillsByProjectID(client: Client, args: GetProjectSkillsByProjectIDArgs): Promise<GetProjectSkillsByProjectIDRow[]> {
    const result = await client.query({
        text: getProjectSkillsByProjectIDQuery,
        values: [args.projectId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            projectId: row[1],
            skillDetailId: row[2],
            createdAt: row[3],
            updatedAt: row[4]
        };
    });
}

export const updateProjectSkillQuery = `-- name: UpdateProjectSkill :one
update project_skills
set project_id = $1, skill_detail_id = $2, updated_at = current_timestamp
where id = $3
returning id, project_id, skill_detail_id, created_at, updated_at`;

export interface UpdateProjectSkillArgs {
    projectId: string;
    skillDetailId: string;
    id: string;
}

export interface UpdateProjectSkillRow {
    id: string;
    projectId: string;
    skillDetailId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateProjectSkill(client: Client, args: UpdateProjectSkillArgs): Promise<UpdateProjectSkillRow | null> {
    const result = await client.query({
        text: updateProjectSkillQuery,
        values: [args.projectId, args.skillDetailId, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        projectId: row[1],
        skillDetailId: row[2],
        createdAt: row[3],
        updatedAt: row[4]
    };
}

