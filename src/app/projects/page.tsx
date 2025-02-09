import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { prisma } from "@/lib/db";
import ProjectListBase from "@/components/projects/ProjectListBase";

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany();

    return (
        <main className="min-h-screen flex flex-col items-center gap-y-5 pt-24 text-center pb-12">
            <ProjectListBase projects={projects} />
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 rounded-lg border-[#13DF14] hover:bg-[#13DF14] transition-colors"
            >
                <FaHome className="text-lg" />
                <span>Home</span>
            </Link>
        </main>
    );
}
