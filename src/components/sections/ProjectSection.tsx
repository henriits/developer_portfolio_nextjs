import ProjectList from "@/components/projects/ProjectList";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <section
            id="projects"
            className=" w-full flex flex-col items-center justify-center px-6 py-12"
        >
            <h2 className="text-4xl font-bold mb-12 text-center p-12 z-10">
                <span className="text-[#13DF14]">My</span> Work
            </h2>
            <div>Project list goes here</div>
            <motion.button whileHover={{ scale: 1.3 }}>
                <Link
                    href="/projects"
                    className="border-2 hover:text-[#13DF14] text-white py-2 px-4 rounded-lg  transition duration-300 relative overflow-hidden"
                >
                    See more!
                </Link>
            </motion.button>
        </section>
    );
};
export default ProjectSection;
