const ExperienceSection = () => (
    <section
        id="experience"
        className=" flex flex-col items-center justify-center bg-gradient-to-r from-black via-blue-800 to-blue-300 text-white px-6 py-12 relative"
    >
        <h2 className="text-3xl font-bold mb-6 text-center z-10">Experience</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
            <div>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p>ABC Corp (2021 - Present)</p>
                <p>
                    Developed scalable web applications and improved system
                    performance.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p>XYZ Inc. (2019 - 2021)</p>
                <p>
                    Designed intuitive UI/UX for customer-facing applications.
                </p>
            </div>
        </div>
    </section>
);

export default ExperienceSection;
