"use client";
import Logo from "../ui/Logo";

const Footer = () => (
    <footer className="text-center flex-col items-center justify-center  text-white px-6 py-12 relative">
        <p>
            &copy; {new Date().getFullYear()}{" "}
            <span>
                <Logo />
            </span>
            . All rights reserved.
        </p>
    </footer>
);

export default Footer;
