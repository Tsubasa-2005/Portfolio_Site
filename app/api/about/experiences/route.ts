// app/api/experiences/route.ts
import { NextResponse } from 'next/server';
import {experiences} from "@/SampleData/data";

export async function GET() {
    return NextResponse.json(experiences);
}