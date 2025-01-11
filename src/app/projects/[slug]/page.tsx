import { prisma } from "@/lib/db";

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
        where: {
            slug: slug,
        },
    });
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1>{project?.title}</h1>
            <p>{project?.description}</p>
            <img src={project?.imageUrl} alt={project?.title} />
        </main>
    );
}
