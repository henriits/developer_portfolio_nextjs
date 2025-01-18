"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    githubLink: z.string().optional(),
    liveLink: z.string().optional(),
    imageUrl: z.string().optional(),
    technologies: z
        .array(z.string())
        .nonempty("At least one technology is required"),
});

export async function addProject(previousState: any, formData: FormData) {
    try {
        const projectData = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            githubLink: formData.get("githubLink") as string,
            liveLink: formData.get("liveLink") as string,
            imageUrl: formData.get("imageUrl") as string,
            technologies: formData.getAll("technologies") as string[],
        };

        projectSchema.parse(projectData);

        await prisma.project.create({
            data: {
                ...projectData,
                slug: projectData.title.replace(/\s+/g, "-").toLowerCase(),
            },
        });
        revalidatePath("/"); // this will reload the page when its updated
    } catch (error) {
        if (error instanceof z.ZodError) {
            return error.errors.map((e) => e.message).join(", ");
        }
        return "There was an error adding a project.";
    }
}

export async function getProjects() {
    return await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
    });
}
export async function updateProject(id: string, formData: FormData) {
    try {
        const projectData = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            githubLink: formData.get("githubLink") as string,
            liveLink: formData.get("liveLink") as string,
            imageUrl: formData.get("imageUrl") as string,
            technologies: formData.getAll("technologies") as string[],
        };

        projectSchema.parse(projectData);

        await prisma.project.update({
            where: { id },
            data: {
                ...projectData,
                slug: projectData.title.replace(/\s+/g, "-").toLowerCase(),
            },
        });
        revalidatePath("/");
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error(error.errors.map((e) => e.message).join(", "));
        } else {
            console.error(error);
        }
    }
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({
            where: { id },
        });
        revalidatePath("/");
    } catch (error) {
        console.error(error);
    }
}
