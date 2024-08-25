-- name: CreateSkillDetail :one
insert into skill_details (skill_id, name, icon, url, level)
values ($1, $2, $3, $4, $5)
returning *;

-- name: DeleteSkillDetail :exec
delete from skill_details
where id = $1;

-- name: DeleteSkillDetailsBySkillID :exec
delete from skill_details
where skill_id = $1;

-- name: GetSkillDetailsBySkillID :many
select *
from skill_details
where skill_id = $1;

-- name: UpdateSkillDetail :one
update skill_details
set skill_id = $1, name = $2, icon = $3, url = $4, level = $5, updated_at = current_timestamp
where id = $6
returning *;