import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const createUserQuery = `-- name: CreateUser :one
insert into users (username, email, password)
values ($1, $2, $3)
returning id, username, email, password, created_at, updated_at`;

export interface CreateUserArgs {
    username: string;
    email: string;
    password: string;
}

export interface CreateUserRow {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function createUser(client: Client, args: CreateUserArgs): Promise<CreateUserRow | null> {
    const result = await client.query({
        text: createUserQuery,
        values: [args.username, args.email, args.password],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        username: row[1],
        email: row[2],
        password: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

export const deleteUserQuery = `-- name: DeleteUser :exec
delete from users
where id = $1`;

export interface DeleteUserArgs {
    id: string;
}

export async function deleteUser(client: Client, args: DeleteUserArgs): Promise<void> {
    await client.query({
        text: deleteUserQuery,
        values: [args.id],
        rowMode: "array"
    });
}

export const getUsersQuery = `-- name: GetUsers :many
SELECT id, username, email, password, created_at, updated_at
FROM users
ORDER BY id
LIMIT $1 OFFSET $2`;

export interface GetUsersArgs {
    limit: string;
    offset: string;
}

export interface GetUsersRow {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getUsers(client: Client, args: GetUsersArgs): Promise<GetUsersRow[]> {
    const result = await client.query({
        text: getUsersQuery,
        values: [args.limit, args.offset],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            id: row[0],
            username: row[1],
            email: row[2],
            password: row[3],
            createdAt: row[4],
            updatedAt: row[5]
        };
    });
}

export const getUserQuery = `-- name: GetUser :one
select id, username, email, password, created_at, updated_at
from users
where id = $1`;

export interface GetUserArgs {
    id: string;
}

export interface GetUserRow {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getUser(client: Client, args: GetUserArgs): Promise<GetUserRow | null> {
    const result = await client.query({
        text: getUserQuery,
        values: [args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        username: row[1],
        email: row[2],
        password: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

export const getUserByEmailQuery = `-- name: GetUserByEmail :one
select id, username, email, password, created_at, updated_at
from users
where email = $1`;

export interface GetUserByEmailArgs {
    email: string;
}

export interface GetUserByEmailRow {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getUserByEmail(client: Client, args: GetUserByEmailArgs): Promise<GetUserByEmailRow | null> {
    const result = await client.query({
        text: getUserByEmailQuery,
        values: [args.email],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        username: row[1],
        email: row[2],
        password: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

export const getUserCountQuery = `-- name: GetUserCount :one
SELECT COUNT(*) FROM users`;

export interface GetUserCountRow {
    count: string;
}

export async function getUserCount(client: Client): Promise<GetUserCountRow | null> {
    const result = await client.query({
        text: getUserCountQuery,
        values: [],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        count: row[0]
    };
}

export const checkEmailExistsQuery = `-- name: CheckEmailExists :one
SELECT id
FROM users
WHERE email = $1`;

export interface CheckEmailExistsArgs {
    email: string;
}

export interface CheckEmailExistsRow {
    id: string;
}

export async function checkEmailExists(client: Client, args: CheckEmailExistsArgs): Promise<CheckEmailExistsRow | null> {
    const result = await client.query({
        text: checkEmailExistsQuery,
        values: [args.email],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0]
    };
}

export const updateUserQuery = `-- name: UpdateUser :one
update users
set username = $1, email = $2, password = $3, updated_at = current_timestamp
where id = $4
returning id, username, email, password, created_at, updated_at`;

export interface UpdateUserArgs {
    username: string;
    email: string;
    password: string;
    id: string;
}

export interface UpdateUserRow {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function updateUser(client: Client, args: UpdateUserArgs): Promise<UpdateUserRow | null> {
    const result = await client.query({
        text: updateUserQuery,
        values: [args.username, args.email, args.password, args.id],
        rowMode: "array"
    });
    if (result.rows.length !== 1) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row[0],
        username: row[1],
        email: row[2],
        password: row[3],
        createdAt: row[4],
        updatedAt: row[5]
    };
}

