"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addProject(formData: FormData) {
    try {
        await prisma.project.create({
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                description: formData.get("description") as string,
                githubLink: formData.get("githubLink") as string,
                liveLink: formData.get("liveLink") as string,
                imageUrl: formData.get("imageUrl") as string,
                technologies: formData.getAll("technologies") as string[],
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin"); // this will reload the page when its updated
}

export async function getProjects() {
    return await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function updateProject(id: string, formData: FormData) {
    try {
        await prisma.project.update({
            where: { id },
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                description: formData.get("description") as string,
                githubLink: formData.get("githubLink") as string,
                liveLink: formData.get("liveLink") as string,
                imageUrl: formData.get("imageUrl") as string,
                technologies: formData.getAll("technologies") as string[],
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin");
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin");
}
