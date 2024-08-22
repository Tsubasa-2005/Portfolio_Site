// app/api/skills/route.ts
import { NextResponse } from 'next/server';
import {skills} from "@/SampleData/data";

export async function GET() {
    return NextResponse.json(skills);
}