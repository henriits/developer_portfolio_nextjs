// src/components/Navbar.tsx

import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
    return (
        <nav className="bg-gray-900 bg-opacity-10 backdrop-blur-md text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-4">
                    <li>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <Link
                                href="/"
                                className="border-2 border-neonGreen text-white py-2 px-4 rounded-full transition duration-300 relative overflow-hidden"
                            >
                                Home
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <Link
                                href="/projects"
                                className="border-2 border-neonGreen text-white py-2 px-4 rounded-full transition duration-300 relative overflow-hidden"
                            >
                                Projects
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <Link
                                href="/#about"
                                className="border-2 border-neonGreen text-white py-2 px-4 rounded-full transition duration-300 relative overflow-hidden"
                            >
                                About
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <Link
                                href="/#contact"
                                className="border-2 border-neonGreen text-white py-2 px-4 rounded-full transition duration-300 relative overflow-hidden"
                            >
                                Contact
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
