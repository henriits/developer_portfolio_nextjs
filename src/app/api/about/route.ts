import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const abouts = await prisma.about.findMany();
        return NextResponse.json(abouts, { status: 200 });
    } catch (error) {
        console.error("Error fetching abouts", error);
        return NextResponse.json(
            {
                error: "Failed to fetch abouts",
            },
            { status: 500 }
        );
    }
}
