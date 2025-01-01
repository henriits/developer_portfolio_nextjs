// src/components/Navbar.tsx

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            href="/"
                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#about"
                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
