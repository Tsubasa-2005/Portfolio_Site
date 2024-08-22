// app/api/about/route.ts
import { NextResponse } from 'next/server';
import {aboutMeData} from "@/SampleData/data";

export async function GET() {
    return NextResponse.json(aboutMeData);
}