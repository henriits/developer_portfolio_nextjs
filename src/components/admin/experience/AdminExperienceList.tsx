"use server";
import { prisma } from "@/lib/db";

import ExperienceListBase from "@/components/experience/ExperienceListBase";

export default async function AdminExperienceList() {
    const experiences = await prisma.experience.findMany();
    return (
        <div>
            <ExperienceListBase experiences={experiences} isAdmin={true} />
        </div>
    );
}
