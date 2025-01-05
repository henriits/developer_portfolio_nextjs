import Slide from "@/components/Slide";

const ExperienceSection = () => (
    <section
        id="experience"
        className=" w-full  text-center   bg-neutral-800 text-white px-6 py-12"
    >
        <Slide delay={0.3}>
            <h2 className="text-3xl font-bold mb-6 text-center z-10">
                Experience
            </h2>
        </Slide>
        <Slide delay={0.3}>
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p>ABC Corp (2021 - Present)</p>
            <p>
                Developed scalable web applications and improved system
                performance.
            </p>
        </Slide>
        <div> |</div>

        <Slide delay={0.3}>
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p>XYZ Inc. (2019 - 2021)</p>
            <p>Designed intuitive UI/UX for customer-facing applications.</p>
        </Slide>
    </section>
);

export default ExperienceSection;
