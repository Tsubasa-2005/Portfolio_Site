-- name: CreateSkill :one
INSERT INTO skills (user_id, category, description)
VALUES ($1, $2, $3)
	RETURNING *;

-- name: DeleteSkill :exec
DELETE FROM skills
WHERE id = $1;

-- name: DeleteSkillsByUserID :exec
DELETE FROM skills
WHERE user_id = $1;

-- name: GetSkillsByUserID :many
SELECT * FROM skills
WHERE user_id = $1;

-- name: UpdateSkill :one
UPDATE skills
SET category = $1, description = $2, updated_at = current_timestamp
WHERE id = $3
	RETURNING *;