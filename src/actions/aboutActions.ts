"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const aboutSchema = z.object({
    content: z.string().min(1),
});

export async function addAbout(previousState: unknown, formData: FormData) {
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
        revalidatePath("/");
    } catch {
        return "An error occurred while creating About";
    }
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
        revalidatePath("/");
    } catch {
        return "An error occurred while updating About";
    }
}

export async function deleteAbout(id: string) {
    try {
        await prisma.about.delete({ where: { id } });
        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }
}
