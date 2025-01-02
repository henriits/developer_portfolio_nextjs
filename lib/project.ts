import prisma from "./prisma";

export async function addProject(data: {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    imageUrl?: string;
    technologies?: string[];
}) {
    const { technologies, ...projectData } = data;

    return await prisma.project.create({
        data: {
            ...projectData,
            technologies: technologies || [],
        },
    });
}

export async function updateProject(
    id: number,
    data: {
        title?: string;
        description?: string;
        githubLink?: string;
        liveLink?: string;
        imageUrl?: string;
        technologies?: string[];
    }
) {
    const { technologies, ...projectData } = data;

    return await prisma.project.update({
        where: { id },
        data: {
            ...projectData,
            technologies: technologies || [],
        },
    });
}
