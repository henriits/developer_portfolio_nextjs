import Slide from "@/components/Slide";

const ExperienceSection = () => (
    <section id="experience" className="w-full text-center  px-6 py-12">
        <Slide delay={0.3}>
            <h2 className="text-3xl font-bold mb-6 text-center z-10">
                E<span className="text-[#13DF14]">xp</span>erience
            </h2>
        </Slide>
        <Slide delay={0.3}>
            <h3 className="text-xl font-bold">
                Full Stack Development Bootcamp
            </h3>
            <p>ABC Bootcamp (2024)</p>
            <p>
                Completed an intensive program focused on front-end and back-end
                development, learning modern technologies like JavaScript,
                React, Node.js, and databases.
            </p>
        </Slide>
        <div>
            {" "}
            <span className="text-[#13DF14]">|</span>
        </div>

        <Slide delay={0.3}>
            <h3 className="text-xl font-bold">Frontend Development Bootcamp</h3>
            <p>XYZ Bootcamp (2023)</p>
            <p>
                Gained expertise in building responsive and user-friendly web
                interfaces using HTML, CSS, and JavaScript.
            </p>
        </Slide>
    </section>
);

export default ExperienceSection;
