"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const aboutSchema = z.object({
    content: z.string().min(1),
});

export async function addAbout(previousState: any, formData: FormData) {
    if (!(formData instanceof FormData)) {
        return "Invalid form Data";
    }
    const aboutDataObject = Object.fromEntries(formData.entries());
    const result = aboutSchema.safeParse(aboutDataObject);
    if (!result.success) {
        return "Invalid about data";
    }

    try {
        await prisma.about.create({
            data: {
                content: result.data.content,
            },
        });
    } catch (error) {
        return "An error occurred while creating About";
    }
    revalidatePath("/");
}

export async function updateAbout(id: string, formData: FormData) {
    if (!(formData instanceof FormData)) {
        return "Invalid form Data";
    }
    const aboutDataObject = Object.fromEntries(formData.entries());
    const result = aboutSchema.safeParse(aboutDataObject);
    if (!result.success) {
        return "Invalid about data";
    }
    try {
        await prisma.about.update({
            where: { id },
            data: {
                content: result.data.content,
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
