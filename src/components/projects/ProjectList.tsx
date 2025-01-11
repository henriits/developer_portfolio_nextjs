import { getProjects } from "@/actions/projectActions";
import Link from "next/link";

export default async function ProjectsList() {
    const projects = await getProjects();
    return (
        <div>
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
        </div>
    );
}
