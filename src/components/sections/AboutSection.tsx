import { fontClasses } from "@/utils/fonts";
import AboutList from "../about/AboutList";

const AboutSection = () => (
    <section
        id="about"
        className=" min-h-screen w-full flex flex-col items-center justify-center px-6 py-12"
    >
        <h2
            className={`text-5xl m-6 text-center ${fontClasses.main}`}
            data-testid="about-title"
        >
            About <span className="text-[#13DF14]">Me</span>
        </h2>
        <AboutList />{" "}
    </section>
);

export default AboutSection;
