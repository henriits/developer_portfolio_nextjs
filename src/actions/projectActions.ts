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
                content: formData.get("content") as string,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/posts"); // this will reload the page when its updated
}

export async function updateProject(formData: FormData, id: string) {
    await prisma.project.update({
        where: {
            id,
        },
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            content: formData.get("content") as string,
        },
    });
}

export async function deleteProject(id: string) {
    await prisma.project.delete({
        where: {
            id,
        },
    });
}
