import { prisma } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

// Handler for GET request to fetch all projects
export async function GET(req: NextRequest) {
    try {
        // Fetch all projects from the database
        const projects = await prisma.project.findMany();

        // Return the projects in the response
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
