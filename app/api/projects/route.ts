// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { projects } from '@/SampleData/data';

export async function GET() {
    // 進行中プロジェクト（進捗が100%未満）
    const ongoingProjects = projects.filter(project => project.progress < 100);

    // 完成したプロジェクト（進捗が100%）
    const completedProjects = projects.filter(project => project.progress === 100);

    return NextResponse.json({
        ongoingProjects,
        completedProjects
    });
}