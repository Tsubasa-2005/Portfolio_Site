import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createProjectDetailsQuery = `-- name: CreateProjectDetails :one
INSERT INTO project_details (project_id, section_name, content)
VALUES ($1, $2, $3)
RETURNING id, project_id, section_name, content, created_at, updated_at`;

export interface CreateProjectDetailsArgs {
    projectId: string;
    sectionName: string;
    content: string;
}

export interface CreateProjectDetailsRow {
    id: string;
    projectId: string;
    sectionName: string;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createProjectDetails(client: Client, args: CreateProjectDetailsArgs): Promise<CreateProjectDetailsRow | null> {
    const result = await client.query({
        text: createProjectDetailsQuery,
        values: [args.projectId, args.sectionName, args.content],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        projectId: row[1],
        sectionName: row[2],
        content: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

export const deleteProjectDetailsQuery = `-- name: DeleteProjectDetails :exec
DELETE FROM project_details
WHERE id = $1`;

export interface DeleteProjectDetailsArgs {
    id: string;
}

export async function deleteProjectDetails(client: Client, args: DeleteProjectDetailsArgs): Promise<void> {
    await client.query({
        text: deleteProjectDetailsQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteProjectDetailsByProjectIDQuery = `-- name: DeleteProjectDetailsByProjectID :exec
DELETE FROM project_details
WHERE project_id = $1`;

export interface DeleteProjectDetailsByProjectIDArgs {
    projectId: string;
}

export async function deleteProjectDetailsByProjectID(client: Client, args: DeleteProjectDetailsByProjectIDArgs): Promise<void> {
    await client.query({
        text: deleteProjectDetailsByProjectIDQuery,
        values: [args.projectId],
        rowMode: "array"
    });
}

export const getProjectDetailsByProjectIDQuery = `-- name: GetProjectDetailsByProjectID :many
SELECT id, project_id, section_name, content, created_at, updated_at
FROM project_details
WHERE project_id = $1`;

export interface GetProjectDetailsByProjectIDArgs {
    projectId: string;
}

export interface GetProjectDetailsByProjectIDRow {
    id: string;
    projectId: string;
    sectionName: string;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getProjectDetailsByProjectID(client: Client, args: GetProjectDetailsByProjectIDArgs): Promise<GetProjectDetailsByProjectIDRow[]> {
    const result = await client.query({
        text: getProjectDetailsByProjectIDQuery,
        values: [args.projectId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            projectId: row[1],
            sectionName: row[2],
            content: row[3],
            createdAt: row[4],
            updatedAt: row[5]
        };
    });
}

export const updateProjectDetailsQuery = `-- name: UpdateProjectDetails :one
UPDATE project_details
SET section_name = $1, content = $2, updated_at = current_timestamp
WHERE id = $3
RETURNING id, project_id, section_name, content, created_at, updated_at`;

export interface UpdateProjectDetailsArgs {
    sectionName: string;
    content: string;
    id: string;
}

export interface UpdateProjectDetailsRow {
    id: string;
    projectId: string;
    sectionName: string;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateProjectDetails(client: Client, args: UpdateProjectDetailsArgs): Promise<UpdateProjectDetailsRow | null> {
    const result = await client.query({
        text: updateProjectDetailsQuery,
        values: [args.sectionName, args.content, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        projectId: row[1],
        sectionName: row[2],
        content: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

