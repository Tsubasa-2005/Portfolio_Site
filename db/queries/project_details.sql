-- name: CreateProjectDetails :one
INSERT INTO project_details (project_id, section_name, content)
VALUES ($1, $2, $3)
RETURNING *;

-- name: DeleteProjectDetails :exec
DELETE FROM project_details
WHERE id = $1;

-- name: DeleteProjectDetailsByProjectID :exec
DELETE FROM project_details
WHERE project_id = $1;

-- name: GetProjectDetailsByProjectID :many
SELECT *
FROM project_details
WHERE project_id = $1;

-- name: UpdateProjectDetails :one
UPDATE project_details
SET section_name = $1, content = $2, updated_at = current_timestamp
WHERE id = $3
RETURNING *;
