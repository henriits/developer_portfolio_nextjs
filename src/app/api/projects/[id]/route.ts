import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        const project = await prisma.project.findUnique({
            where: { id: parseInt(id) },
        });

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(project, { status: 200 });
    } catch (error) {
        console.error("Error fetching project:", error);
        return NextResponse.json(
            { error: "Failed to fetch project" },
            { status: 500 }
        );
    }
}

// DELETE Handler
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params; // Await the params to get the id value
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
        const { id } = await params; // Await the params to get the id value
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
                technologies: body.technologies,
                imageUrl: body.imageUrl,
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
