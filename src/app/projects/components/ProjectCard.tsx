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
        <div className="relative w-full shadow-lg rounded-xl transition-all duration-300 group">
            {/* Neon Shadow Effect */}
            <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14] "></div>

            <Card className="relative z-10 bg-transparent border-neutral-900 bg-neutral-800 rounded-xl flex flex-col h-full">
                {/* Card Header */}
                <CardHeader className="p-6 flex flex-col items-start gap-2">
                    <h3 className="text-xl font-semibold text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-300">{description}</p>
                </CardHeader>

                {/* Card Body */}
                <CardBody className="p-6 flex flex-col gap-4 flex-grow">
                    {/* Image */}
                    <div className="relative flex justify-center items-center transition-all duration-300 ease-in-out">
                        <Image
                            alt={`Project ${title}`}
                            src={imageUrl}
                            className="rounded-lg shadow-md"
                            width={300}
                            height={200}
                        />
                    </div>

                    {/* Technologies */}

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className=" text-gray-300 px-3 py-1 rounded-lg border-white-600 bg-neutral-900 text-sm border-2  hover:text-[#13DF14]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </CardBody>

                {/* Links and Button Section */}
                <div className="p-6 flex flex-col gap-4 mt-auto">
                    {/* Links */}
                    <div className="flex justify-between items-center space-x-4">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} on GitHub`}
                            className="text-gray-400 hover:text-[#13DF14] transition-colors duration-200"
                        >
                            GitHub
                        </motion.a>
                        {liveLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${title} Live`}
                                className="text-gray-400 hover:text-[#13DF14] transition-colors duration-200"
                            >
                                Live
                            </motion.a>
                        )}
                    </div>

                    {/* See Details Button */}
                    <motion.div whileHover={{ scale: 1.09 }}>
                        <Link href={`/projects/${id}`} passHref>
                            <button className="w-full mt-4 border-2 bg-neutral-900 hover:text-[#13DF14] py-2 rounded-lg text-sm font-semibold text-white  transition-all duration-300">
                                See Details
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;
