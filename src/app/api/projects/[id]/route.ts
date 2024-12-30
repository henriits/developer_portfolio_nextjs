// app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

// DELETE Handler
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params; // Extract the ID from params
        console.log(`Deleting project with ID: ${id}`); // Debugging line

        const projectId = parseInt(id, 10);
        if (isNaN(projectId)) {
            return NextResponse.json(
                { error: "Invalid project ID" },
                { status: 400 }
            );
        }

        await prisma.project.delete({
            where: { id: projectId }, // Ensure ID is an integer
        });

        return NextResponse.json(
            { message: "Project deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json(
            { error: "Failed to delete project" },
            { status: 500 }
        );
    }
}

// PUT Handler for updating project
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params; // Extract project ID from URL params
        const body = await req.json(); // Extract data from the request body

        console.log(`Updating project with ID: ${id}`); // Debugging line

        // Validate incoming data (make sure title and description exist)
        if (!body.title || !body.description) {
            return NextResponse.json(
                { error: "Missing required fields: title or description" },
                { status: 400 }
            );
        }

        // Ensure the ID is a valid integer
        const projectId = parseInt(id, 10);
        if (isNaN(projectId)) {
            return NextResponse.json(
                { error: "Invalid project ID" },
                { status: 400 }
            );
        }

        // Update the project in the database
        const updatedProject = await prisma.project.update({
            where: { id: projectId }, // Find the project by its ID
            data: {
                // Update fields
                title: body.title,
                description: body.description,
                githubLink: body.githubLink,
                liveLink: body.liveLink,
            },
        });

        return NextResponse.json(updatedProject, { status: 200 });
    } catch (error) {
        console.error("Error updating project:", error);
        return NextResponse.json(
            { error: "Failed to update project" },
            { status: 500 }
        );
    }
}
