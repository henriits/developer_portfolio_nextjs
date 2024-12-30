import prisma from "./prisma";

export async function addProject(data: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
}) {
    return await prisma.project.create({
        data,
    });
}
