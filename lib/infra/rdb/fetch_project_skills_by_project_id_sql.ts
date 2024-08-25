import { QueryArrayConfig, QueryArrayResult } from "pg";

interface Client {
    query: (config: QueryArrayConfig) => Promise<QueryArrayResult>;
}

export const getProjectSkillNamesByProjectIDQuery = `-- name: GetProjectSkillNamesByProjectID :many
SELECT sd.name
FROM project_skills ps
		 JOIN skill_details sd ON ps.skill_detail_id = sd.id
WHERE ps.project_id = $1`;

export interface GetProjectSkillNamesByProjectIDArgs {
    projectId: string;
}

export interface GetProjectSkillNamesByProjectIDRow {
    name: string;
}

export async function getProjectSkillNamesByProjectID(client: Client, args: GetProjectSkillNamesByProjectIDArgs): Promise<GetProjectSkillNamesByProjectIDRow[]> {
    const result = await client.query({
        text: getProjectSkillNamesByProjectIDQuery,
        values: [args.projectId],
        rowMode: "array"
    });
    return result.rows.map(row => {
        return {
            name: row[0]
        };
    });
}

