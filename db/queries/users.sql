-- name: CreateUser :one
insert into users (username, email, password)
values ($1, $2, $3)
returning *;

-- name: DeleteUser :exec
delete from users
where id = $1;

-- name: GetUsers :many
SELECT *
FROM users
ORDER BY id
LIMIT $1 OFFSET $2;

-- name: GetUser :one
select *
from users
where id = $1;

-- name: GetUserByEmail :one
select *
from users
where email = $1;

-- name: GetUserCount :one
SELECT COUNT(*) FROM users;

-- name: CheckEmailExists :one
SELECT id
FROM users
WHERE email = $1;

-- name: UpdateUser :one
update users
set username = $1, email = $2, password = $3, updated_at = current_timestamp
where id = $4
returning *;