import { Project } from "@/types/projectTypes";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ProjectCard = ({
    id,
    title,
    description,
    githubLink,
    liveLink,
    imageUrl,
    technologies,
}: Project) => {
    return (
        <div className="shadow-lg bg-neutral-800 border border-gray-700 rounded-xl transition-transform duration-300 text-white w-full">
            <Card>
                {/* Card Header */}
                <CardHeader className="p-4 flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold ">{title}</h3>
                    <p className="text-sm text-gray-300">{description}</p>
                </CardHeader>
                {/* Card Body */}
                <CardBody className="p-4 flex flex-col gap-4 w-full">
                    {/* Image */}
                    <div className="relative ">
                        <Image
                            alt={`Project ${title}`}
                            src={imageUrl}
                            className=" rounded-xl"
                            width={300}
                            height={200}
                        />
                    </div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* Links */}
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${title} on GitHub`}
                                className=" hover:text-green-400 transition-colors duration-200"
                            >
                                GitHub
                            </motion.a>
                            {liveLink && (
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${title} Live`}
                                    className=" hover:text-green-400 transition-colors duration-200"
                                >
                                    Live
                                </motion.a>
                            )}
                        </div>
                    </div>
                    {/* See Details Button */}
                    <motion.div whileHover={{ scale: 1.02 }}>
                        <Link href={`/projects/${id}`} passHref>
                            <button className="w-full mt-4 border-2 border-neonGreen  py-2 rounded-lg text-sm font-semibold transition-all duration-200  hover:text-green-400">
                                See Details
                            </button>
                        </Link>
                    </motion.div>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProjectCard;
