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
            <h1>{project?.title ?? "No title available"}</h1>
            <p>{project?.description ?? "No description available"}</p>
            <img
                src={project?.imageUrl ?? "/default-image.png"}
                alt={project?.title ?? "Default title"}
                width={400}
                height={400}
            />
            <p>{project?.githubLink}</p>
            <p>{project?.liveLink}</p>
            <ul>
                {project?.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </main>
    );
}
