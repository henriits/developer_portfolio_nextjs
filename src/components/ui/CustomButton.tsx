import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
    text: string;
    href?: string; // href is optional, if provided, it will render an <a> tag
    onClick?: MouseEventHandler<HTMLButtonElement>; // onClick is optional and only applies to <button> tags
    className?: string;
    type?: "button" | "submit" | "reset"; // specify the type for the button element
    disabled?: boolean;
}

const CustomButton = ({
    text,
    href,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: CustomButtonProps) => {
    const commonClasses =
        "border-2  text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 ";

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
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default CustomButton;
