"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { scrollTo } from "@/utils/scrollTo";
import { ReactNode } from "react";
import Logo from "../ui/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavItem = ({
    href,
    children,
    isActive,
}: {
    href: string;
    children: ReactNode;
    isActive: boolean;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [targetSection, setTargetSection] = useState<string | null>(null);

    useEffect(() => {
        if (pathname === "/" && targetSection) {
            scrollTo(targetSection);
            setTargetSection(null);
        }
    }, [pathname, targetSection]);

    const handleClick = () => {
        if (pathname === "/") {
            scrollTo(href);
        } else {
            setTargetSection(href);
            router.push("/");
        }
    };

    return (
        <motion.div whileHover={{ scale: 1.1 }}>
            <button
                onClick={handleClick}
                className="relative text-white py-2 px-4 group"
            >
                {children}
                <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-[#13DF14] transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
            </button>
        </motion.div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();

    const navigationItems = [
        { label: "Home", href: "home" },
        { label: "About", href: "about" },
        { label: "Experience", href: "experience" },
        { label: "Projects", href: "projects" },
        { label: "Contact", href: "contact" },
    ];

    return (
        <nav className="bg-opacity-10 backdrop-blur-md text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    {navigationItems.map((item) => (
                        <NavItem
                            key={item.href}
                            href={item.href}
                            isActive={activeSection === item.href}
                        >
                            {item.label}
                        </NavItem>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4 m-6 gap-2 py-12">
                        {navigationItems.map((item) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                isActive={activeSection === item.href}
                            >
                                {item.label}
                            </NavItem>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
