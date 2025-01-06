import ProjectList from "@/app/projects/components/ProjectList";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <section
            id="projects"
            className=" w-full flex flex-col items-center justify-center bg-neutral-800 text-white px-6 py-12"
        >
            <h2 className="text-4xl font-bold mb-12 text-center p-12 z-10">
                Projects
            </h2>
            <ProjectList limit={3} />
            <motion.button whileHover={{ scale: 1.3 }}>
                <Link
                    href="/projects"
                    className="border-2 border-neonGreen text-white py-2 px-4 rounded-full transition duration-300 relative overflow-hidden"
                >
                    See more!
                </Link>
            </motion.button>
        </section>
    );
};
export default ProjectSection;
