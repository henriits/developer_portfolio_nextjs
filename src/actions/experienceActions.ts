"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addExperience(previousState: any, formData: FormData) {
    try {
        await prisma.experience.create({
            data: {
                title: formData.get("title") as string,
                company: formData.get("company") as string,
                location: formData.get("location") as string,
                startDate: formData.get("startDate") as string, // Convert string to number
                endDate: formData.get("endDate") as string, // Convert string to number
                description: formData.get("description") as string,
            },
        });
        revalidatePath("/");
    } catch (error) {
        return "There was an error adding experience";
    }
}

export async function updateExperience(id: string, formData: FormData) {
    try {
        await prisma.experience.update({
            where: { id },
            data: {
                title: formData.get("title") as string,
                company: formData.get("company") as string,
                location: formData.get("location") as string,
                startDate: formData.get("startDate") as string, // Convert string to number
                endDate: formData.get("endDate") as string, // Convert string to number
                description: formData.get("description") as string,
            },
        });
        revalidatePath("/");
    } catch (error) {
        return "Error occurred while updating Experience";
    }
}

export async function deleteExperience(id: string) {
    try {
        await prisma.experience.delete({ where: { id } });
        revalidatePath("/");
    } catch (error) {
        console.error(error);
    }
}
