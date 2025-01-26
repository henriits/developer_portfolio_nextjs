"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define the schema for validation using Zod
const experienceSchema = z.object({
    title: z.string().min(1, "Title is required"),
    company: z.string().min(1, "Company is required"),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().min(1, "Description is required"),
});

export async function addExperience(
    previousState: unknown,
    formData: FormData
) {
    try {
        // Convert FormData to an object
        const data = {
            title: formData.get("title") as string,
            company: formData.get("company") as string,
            location: formData.get("location") as string,
            startDate: formData.get("startDate") as string,
            endDate: formData.get("endDate") as string,
            description: formData.get("description") as string,
        };

        // Validate data using Zod
        const validatedData = experienceSchema.parse(data);

        await prisma.experience.create({
            data: validatedData,
        });

        revalidatePath("/");
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Return validation errors
            return error.errors.map((e) => e.message).join(", ");
        }
        console.error(error);
        return "There was an error adding experience";
    }
}

export async function updateExperience(id: string, formData: FormData) {
    try {
        // Convert FormData to an object
        const data = {
            title: formData.get("title") as string,
            company: formData.get("company") as string,
            location: formData.get("location") as string,
            startDate: formData.get("startDate") as string,
            endDate: formData.get("endDate") as string,
            description: formData.get("description") as string,
        };

        // Validate data using Zod
        const validatedData = experienceSchema.parse(data);

        await prisma.experience.update({
            where: { id },
            data: validatedData,
        });

        revalidatePath("/");
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Return validation errors
            return error.errors.map((e) => e.message).join(", ");
        }
        console.error(error);
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
