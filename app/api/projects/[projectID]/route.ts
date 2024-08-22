// app/api/projects/[projectID]/route.ts
import { NextResponse } from 'next/server';
import {projects} from "@/SampleData/data";


export async function GET(req: Request, { params }: { params: { projectID: bigint } }) {
    const projectId = parseInt(String(params.projectID), 10);
    const project = projects.find((p: { id: number; }) => p.id === projectId);

    if (!project) {
        return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}