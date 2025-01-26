import { deleteProject } from "@/actions/projectActions";
import DeleteButton from "@/components/ui/DeleteButton";
import UpdateProjectsButton from "../admin/projects/UpdateProjectsButton";
import ProjectCard from "./ProjectCard";
import { ProjectListProps } from "../../types/portfolioTypes";
import { Img } from "@react-email/components";

export default function ProjectListBase({
    projects,
    isAdmin = false,
    limit,
}: ProjectListProps) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <>
            {isAdmin && (
                <h2 className="main-font text-5xl mb-12 text-center">
                    <span className="text-[#13DF14]">My </span>Work
                </h2>
            )}
            {projects && projects.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-5">
                    {displayedProjects.map((project) =>
                        isAdmin ? (
                            // Admin view

                            <div
                                key={project.id}
                                className="border-2 rounded-md p-3 w-full max-w-md"
                            >
                                <p className="text-sm text-gray-600">
                                    Title:
                                    <span className="text-white ml-2">
                                        {project.title}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Description:
                                    <span className="text-white ml-2">
                                        {project.description}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Technologies:
                                    <span className="text-white ml-2">
                                        {project.technologies ? (
                                            project.technologies.flatMap(
                                                (tech, index) =>
                                                    tech
                                                        .split(",")
                                                        .map(
                                                            (
                                                                singleTech,
                                                                subIndex
                                                            ) => (
                                                                <span
                                                                    key={`${index}-${subIndex}`}
                                                                    className="py-1 text-xs text-gray-400"
                                                                    title={singleTech.trim()} // Display the text on hover
                                                                >
                                                                    <i
                                                                        className={`ci ci-${singleTech.trim()} ci-2x rounded-md`}
                                                                    ></i>
                                                                </span>
                                                            )
                                                        )
                                            )
                                        ) : (
                                            <p className="text-gray-400 text-sm">
                                                No technologies specified
                                            </p>
                                        )}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    GitHub Link:
                                    <span className="text-white ml-2">
                                        {project.githubLink || "Not available"}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Live Link:
                                    <span className="text-white ml-2">
                                        {project.liveLink || "Not available"}
                                    </span>
                                </p>

                                <p className="text-sm text-gray-600 break-words">
                                    Image Url: {project.imageUrl}
                                </p>

                                {project.imageUrl && (
                                    <Img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="object-cover rounded-md mt-2"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                )}
                                <div className="flex gap-x-4 items-center justify-center mt-4">
                                    <DeleteButton
                                        id={project.id}
                                        deleteAction={deleteProject}
                                        label="Delete"
                                    />
                                    <UpdateProjectsButton
                                        id={project.id}
                                        title={project.title}
                                        description={project.description}
                                        technologies={project.technologies}
                                        githubLink={project.githubLink}
                                        liveLink={project.liveLink}
                                        imageUrl={project.imageUrl}
                                    />
                                </div>
                            </div>
                        ) : (
                            // Non-admin view (render as a card)
                            <ProjectCard key={project.id} project={project} />
                        )
                    )}
                </ul>
            ) : (
                <p className="text-center text-gray-400">
                    No project entries found.
                </p>
            )}
        </>
    );
}
