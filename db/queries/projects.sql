-- name: CreateProjects :one
INSERT INTO projects (title, description, project_url, repo_url, progress, user_id)
VALUES ($1, $2, $3, $4, $5, $6)
returning *;

-- name: DeleteProject :exec
DELETE FROM projects
WHERE id = $1;

-- name: DeleteProjectByUserID :exec
DELETE FROM projects
WHERE user_id = $1;

-- name: GetProject :one
select *
from projects
where id = $1;

-- name: GetProjectsByUserID :many
select *
from projects
where user_id = $1;

-- name: GetCompletedProjectByUserID :many
select *
from projects
where user_id = $1 and progress = 100;

-- name: GetOngoingProjectByUserID :many
select *
from projects
where user_id = $1 and progress < 100;

-- name: UpdateProject :one
UPDATE projects
SET title = $1, description = $2, project_url = $3, repo_url = $4, progress = $5, updated_at = current_timestamp
WHERE id = $6
returning *;