"use server";
import { prisma } from "@/lib/db";
import ProjectListBase from "@/components/projects/ProjectListBase";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();

    return <ProjectListBase projects={projects} isAdmin={true} />;
}
