import { addProject } from "@/actions/projectActions";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        where: {
            // we can use where to filter the data }
        },
        orderBy: { createdAt: "desc" },
    });
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">
                All projects ({projects.length})
            </h1>
            <ul className="border-t border-b border-black/10 py-5">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href={`/projects/${project.slug}`}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <form
                action={addProject}
                className="flex flex-col gap-y-5 w-96 text-black"
            >
                <input type="text" name="title" placeholder="title" />

                <textarea name="description" rows={2} placeholder="content" />
                <input
                    type="text"
                    name="githubLink"
                    placeholder="github link"
                />
                <input type="text" name="liveLink" placeholder="live link" />
                <input type="text" name="imageUrl" placeholder="image url" />
                <input
                    type="text"
                    name="technologies"
                    placeholder="technologies"
                />
                <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                    Create
                </button>
            </form>
        </main>
    );
}
