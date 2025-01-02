//src/app/api/projects/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// Handler for POST request to add a new project
export async function POST(req: NextRequest) {
    try {
        // Parse the request body
        const body = await req.json();

        // Validate payload
        if (!body || !body.title || !body.description) {
            return NextResponse.json(
                { error: "Missing required fields: title or description" },
                { status: 400 }
            );
        }

        // Create the new project in the database using Prisma
        const newProject = await prisma.project.create({
            data: {
                title: body.title,
                description: body.description,
                githubLink: body.githubLink, // Use camelCase here
                liveLink: body.liveLink, // Use camelCase here
                imageUrl: body.imageUrl,
                technologies: body.technologies || [],
            },
        });

        // Return the new project in the response
        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        console.error("Error adding project:", error);
        return NextResponse.json(
            { error: "Failed to add project" },
            { status: 500 }
        );
    }
}

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
