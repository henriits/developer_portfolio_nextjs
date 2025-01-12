import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const experiences = await prisma.experience.findMany();
        return NextResponse.json(experiences, { status: 200 });
    } catch (error) {
        console.error("Error fetching experiences:", error);
        return NextResponse.json(
            { error: "Failed to fetch experiences" },
            { status: 500 }
        );
    }
}
