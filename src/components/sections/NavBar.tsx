"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <motion.div whileHover={{ scale: 1.3 }}>
        <Link
            href={href}
            className="border-2 hover:text-[#13DF14] text-white py-2 px-4 rounded-lg transition duration-300 relative overflow-hidden"
        >
            {children}
        </Link>
    </motion.div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-opacity-10 backdrop-blur-md text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-[#13DF14]">H</span>Tsarents
                </Link>
                <div className="hidden md:flex space-x-4">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/#about">About</NavLink>
                    <NavLink href="/#contact">Contact</NavLink>
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4 m-6 gap-2 py-12">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/#about">About</NavLink>
                        <NavLink href="/#contact">Contact</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
