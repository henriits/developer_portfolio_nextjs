import { addProject, getProjects } from "@/actions/projectActions";
import Link from "next/link";

export default async function ProjectsPage() {
    const projects = await getProjects();
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
        </main>
    );
}
