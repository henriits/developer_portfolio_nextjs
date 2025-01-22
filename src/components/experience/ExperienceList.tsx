import { prisma } from "@/lib/db";
import ExperienceListBase from "./ExperienceListBase";

export default async function ExperienceList() {
    const experiences = await prisma.experience.findMany();
    return <ExperienceListBase experiences={experiences} />;
}
