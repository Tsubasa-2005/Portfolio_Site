-- name: GetProjectSkillNamesByProjectID :many
SELECT sd.name
FROM project_skills ps
		 JOIN skill_details sd ON ps.skill_detail_id = sd.id
WHERE ps.project_id = $1;