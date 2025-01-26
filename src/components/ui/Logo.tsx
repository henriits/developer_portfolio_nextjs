import { fontClasses } from "@/utils/fonts";

const Logo = () => {
    return (
        <span className={`text-4xl ${fontClasses.logo}`}>
            <span className="text-[#13DF14]">
                {process.env.NEXT_PUBLIC_LOGO_FIRSTNAME_LETTER}
            </span>
            {process.env.NEXT_PUBLIC_LOGO_LASTNAME}
        </span>
    );
};
export default Logo;
