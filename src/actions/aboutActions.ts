"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addAbout(previousState: any, formData: FormData) {
    try {
        await prisma.about.create({
            data: {
                content: formData.get("content") as string,
            },
        });
    } catch (error) {
        return "An error occurred while creating About";
    }
    revalidatePath("/");
}

export async function updateAbout(id: string, formData: FormData) {
    try {
        await prisma.about.update({
            where: { id },
            data: {
                content: formData.get("content") as string,
            },
        });
    } catch (error) {
        return "An error occurred while updating About";
    }
    revalidatePath("/");
}

export async function deleteAbout(id: string) {
    try {
        await prisma.about.delete({ where: { id } });
    } catch (error) {
        return "Error occurred while deleting About";
    }
    revalidatePath("/");
}
