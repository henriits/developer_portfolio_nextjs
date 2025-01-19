import { prisma } from "@/lib/db";
import AboutListBase from "./AboutListBase";

export default async function AboutList() {
    const abouts = await prisma.about.findMany();

    return <AboutListBase abouts={abouts} />;
}
