import { prisma } from "@/lib/db";
import DeleteButton from "./DeleteButton";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id} className="border-b p-3">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p>{project.description}</p>
                    <p className="text-sm text-gray-600">
                        Technologies: {project.technologies.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                        GitHub Link: {project.githubLink || "Not available"}
                    </p>
                    <p className="text-sm text-gray-600">
                        Live Link: {project.liveLink || "Not available"}
                    </p>
                    {project.imageUrl && (
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="object-cover rounded-md mt-2"
                            width={50}
                            height={50}
                            loading="lazy"
                        />
                    )}
                    <p className="text-sm text-gray-600">
                        Image URL: {project.imageUrl || "Not available"}
                    </p>
                    <DeleteButton id={project.id} />
                </li>
            ))}
        </ul>
    );
}
