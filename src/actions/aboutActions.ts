"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addAbout(formData: FormData) {
    try {
        await prisma.about.create({
            data: {
                content: formData.get("content") as string,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin");
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
        console.error(error);
    }
    revalidatePath("/admin");
}
