import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
    text: string;
    href?: string; // href is optional, if provided, it will render an <a> tag
    onClick?: MouseEventHandler<HTMLButtonElement>; // onClick is optional and only applies to <button> tags
    className?: string;
    type?: "button" | "submit" | "reset"; // specify the type for the button element
}

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    href,
    onClick,
    className = "",
    type = "button",
}) => {
    const commonClasses =
        "border-2 border-neonGreen text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden";

    // Conditional rendering based on whether `href` is passed or not
    return href ? (
        <a href={href} className={`${commonClasses} ${className}`}>
            {text}
        </a>
    ) : (
        <button
            type={type}
            onClick={onClick}
            className={`${commonClasses} ${className}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
