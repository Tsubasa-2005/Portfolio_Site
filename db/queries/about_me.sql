-- name: CreateAbout :one
INSERT INTO about_me (name, introduction, hobbies, user_id)
VALUES ($1, $2, $3, $4)
	RETURNING *;

-- name: DeleteAboutMeByUserID :exec
DELETE FROM about_me
WHERE user_id = $1;

-- name: GetAboutMeByUserID :one
SELECT *
FROM about_me
WHERE user_id = $1;

-- name: UpdateAboutMeByUserID :one
UPDATE about_me
SET name = $1, introduction = $2, hobbies = $3, updated_at = current_timestamp
WHERE user_id = $4
	RETURNING *;