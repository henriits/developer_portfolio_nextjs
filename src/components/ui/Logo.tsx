const Logo = () => {
    return (
        <span className="font-logo text-4xl">
            <span className="text-[#13DF14]">
                {process.env.NEXT_PUBLIC_LOGO_FIRSTNAME_LETTER}
            </span>
            {process.env.NEXT_PUBLIC_LOGO_LASTNAME}
        </span>
    );
};
export default Logo;
