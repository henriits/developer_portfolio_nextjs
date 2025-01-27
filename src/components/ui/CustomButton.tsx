import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
    text: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: "button" | "submit" | "reset";
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
        "border-2  text-white border-[#13DF14] hover:bg-[#13DF14]  py-3 px-8 rounded-lg text-xl font-bold transition duration-300 ";

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
