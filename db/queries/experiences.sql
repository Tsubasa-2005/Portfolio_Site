-- name: CreateExperience :one
INSERT INTO experiences (company, role, duration, description, user_id)
VALUES ($1, $2, $3, $4, $5)
	RETURNING *;

-- name: DeleteExperience :exec
DELETE FROM experiences
WHERE id = $1;

-- name: DeleteExperienceByUserID :exec
DELETE FROM experiences
WHERE user_id = $1;

-- name: GetExperiencesByUserID :many
SELECT * FROM experiences
WHERE user_id = $1;

-- name: UpdateExperience :one
UPDATE experiences
SET company = $1, role = $2, duration = $3, description = $4, updated_at = current_timestamp
WHERE id = $5
	RETURNING *;