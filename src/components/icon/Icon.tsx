import Image from "next/image";
import React from "react";
import { fontClasses } from "@/utils/fonts";

type IconProps = {
    icon: string;
    label: string;
};

const Icon = ({ icon, label }: IconProps) => (
    <span className="flex items-center">
        <Image
            src={icon}
            alt={label}
            width={40}
            height={40}
            className="w-10 h-10 md:w-16 md:h-16"
        />
        <p className={`ml-2 text-4xl ${fontClasses.logo}`}>{label}</p>
    </span>
);

export default Icon;
