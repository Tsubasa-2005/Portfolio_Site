-- name: CreateProjectSkill :one
insert into project_skills (project_id, skill_detail_id)
values ($1, $2)
returning *;

-- name: DeleteProjectSkill :exec
delete from project_skills
where id = $1;

-- name: DeleteProjectSkillsByProjectID :exec
delete from project_skills
where project_id = $1;

-- name: GetProjectSkillsByProjectID :many
select *
from project_skills
where project_id = $1;

-- name: UpdateProjectSkill :one
update project_skills
set project_id = $1, skill_detail_id = $2, updated_at = current_timestamp
where id = $3
returning *;