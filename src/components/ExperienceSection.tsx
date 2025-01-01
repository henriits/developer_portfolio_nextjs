const ExperienceSection = () => (
    <section id="experience" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
