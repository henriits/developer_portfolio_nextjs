"use server";

import { prisma } from "@/lib/db";
import AboutListBase from "@/components/about/AboutListBase";

export default async function AdminAboutList() {
    const abouts = await prisma.about.findMany();

    return <AboutListBase abouts={abouts} isAdmin={true} />;
}
