import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createProjectsQuery = `-- name: CreateProjects :one
INSERT INTO projects (title, description, project_url, repo_url, progress, user_id)
VALUES ($1, $2, $3, $4, $5, $6)
returning id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at`;

export interface CreateProjectsArgs {
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    userId: string;
}

export interface CreateProjectsRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createProjects(client: Client, args: CreateProjectsArgs): Promise<CreateProjectsRow | null> {
    const result = await client.query({
        text: createProjectsQuery,
        values: [args.title, args.description, args.projectUrl, args.repoUrl, args.progress, args.userId],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        title: row[2],
        description: row[3],
        projectUrl: row[4],
        repoUrl: row[5],
        progress: row[6],
        createdAt: row[7],
        updatedAt: row[8]
    };
}

export const deleteProjectQuery = `-- name: DeleteProject :exec
DELETE FROM projects
WHERE id = $1`;

export interface DeleteProjectArgs {
    id: string;
}

export async function deleteProject(client: Client, args: DeleteProjectArgs): Promise<void> {
    await client.query({
        text: deleteProjectQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const deleteProjectByUserIDQuery = `-- name: DeleteProjectByUserID :exec
DELETE FROM projects
WHERE user_id = $1`;

export interface DeleteProjectByUserIDArgs {
    userId: string;
}

export async function deleteProjectByUserID(client: Client, args: DeleteProjectByUserIDArgs): Promise<void> {
    await client.query({
        text: deleteProjectByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
}

export const getProjectQuery = `-- name: GetProject :one
select id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at
from projects
where id = $1`;

export interface GetProjectArgs {
    id: string;
}

export interface GetProjectRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getProject(client: Client, args: GetProjectArgs): Promise<GetProjectRow | null> {
    const result = await client.query({
        text: getProjectQuery,
        values: [args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        title: row[2],
        description: row[3],
        projectUrl: row[4],
        repoUrl: row[5],
        progress: row[6],
        createdAt: row[7],
        updatedAt: row[8]
    };
}

export const getProjectsByUserIDQuery = `-- name: GetProjectsByUserID :many
select id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at
from projects
where user_id = $1`;

export interface GetProjectsByUserIDArgs {
    userId: string;
}

export interface GetProjectsByUserIDRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getProjectsByUserID(client: Client, args: GetProjectsByUserIDArgs): Promise<GetProjectsByUserIDRow[]> {
    const result = await client.query({
        text: getProjectsByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            userId: row[1],
            title: row[2],
            description: row[3],
            projectUrl: row[4],
            repoUrl: row[5],
            progress: row[6],
            createdAt: row[7],
            updatedAt: row[8]
        };
    });
}

export const getCompletedProjectByUserIDQuery = `-- name: GetCompletedProjectByUserID :many
select id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at
from projects
where user_id = $1 and progress = 100`;

export interface GetCompletedProjectByUserIDArgs {
    userId: string;
}

export interface GetCompletedProjectByUserIDRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getCompletedProjectByUserID(client: Client, args: GetCompletedProjectByUserIDArgs): Promise<GetCompletedProjectByUserIDRow[]> {
    const result = await client.query({
        text: getCompletedProjectByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            userId: row[1],
            title: row[2],
            description: row[3],
            projectUrl: row[4],
            repoUrl: row[5],
            progress: row[6],
            createdAt: row[7],
            updatedAt: row[8]
        };
    });
}

export const getOngoingProjectByUserIDQuery = `-- name: GetOngoingProjectByUserID :many
select id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at
from projects
where user_id = $1 and progress < 100`;

export interface GetOngoingProjectByUserIDArgs {
    userId: string;
}

export interface GetOngoingProjectByUserIDRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getOngoingProjectByUserID(client: Client, args: GetOngoingProjectByUserIDArgs): Promise<GetOngoingProjectByUserIDRow[]> {
    const result = await client.query({
        text: getOngoingProjectByUserIDQuery,
        values: [args.userId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            userId: row[1],
            title: row[2],
            description: row[3],
            projectUrl: row[4],
            repoUrl: row[5],
            progress: row[6],
            createdAt: row[7],
            updatedAt: row[8]
        };
    });
}

export const updateProjectQuery = `-- name: UpdateProject :one
UPDATE projects
SET title = $1, description = $2, project_url = $3, repo_url = $4, progress = $5, updated_at = current_timestamp
WHERE id = $6
returning id, user_id, title, description, project_url, repo_url, progress, created_at, updated_at`;

export interface UpdateProjectArgs {
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    id: string;
}

export interface UpdateProjectRow {
    id: string;
    userId: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
    progress: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateProject(client: Client, args: UpdateProjectArgs): Promise<UpdateProjectRow | null> {
    const result = await client.query({
        text: updateProjectQuery,
        values: [args.title, args.description, args.projectUrl, args.repoUrl, args.progress, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        userId: row[1],
        title: row[2],
        description: row[3],
        projectUrl: row[4],
        repoUrl: row[5],
        progress: row[6],
        createdAt: row[7],
        updatedAt: row[8]
    };
}

