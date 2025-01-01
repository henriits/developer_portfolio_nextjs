// src/app/page.tsx

import Link from "next/link";

export default function Home() {
    return (
        <div className="p-8">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.8/src/app/ci.min.css"
            />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-5xl font-bold mb-4">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg mb-6">
                    Discover my journey, skills, and projects below.
                </p>
                <div className="flex items-center space-x-4">
                    <Link href="#contact">
                        <button className="bg-gray-700 text-white p-4 rounded-lg">
                            Get in Touch
                        </button>
                    </Link>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ci ci-linkedin ci-2x"></i>
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ci ci-github ci-2x"></i>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ci ci-instagram ci-2x"></i>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    About Me
                </h2>
                <p className="text-center max-w-3xl mx-auto">
                    I am a passionate software developer with expertise in
                    building modern web applications. My journey started with
                    curiosity, leading to years of learning and creating
                    impactful solutions.
                </p>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 bg-gray-50">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Experience
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <p>ABC Corp (2021 - Present)</p>
                        <p>
                            Developed scalable web applications and improved
                            system performance.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">
                            Frontend Developer
                        </h3>
                        <p>XYZ Inc. (2019 - 2021)</p>
                        <p>
                            Designed intuitive UI/UX for customer-facing
                            applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section id="tech-stack" className="py-16 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Tech Stack
                </h2>
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div className="text-center">
                        <i className="ci ci-js ci-4x"></i>
                        <p className="mt-2">JavaScript</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-react ci-4x"></i>
                        <p className="mt-2">React</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-html5 ci-4x"></i>
                        <p className="mt-2">HTML5</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-css3 ci-4x"></i>
                        <p className="mt-2">CSS3</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-tailwindcss ci-4x"></i>
                        <p className="mt-2">Tailwind CSS</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-ts ci-4x"></i>
                        <p className="mt-2">TypeScript</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-nextjs ci-2x"></i>
                        <p className="mt-2">Next js</p>
                    </div>
                    <div className="text-center">
                        <i className="ci ci-nodejs ci-2x"></i>
                        <p className="mt-2">Node js</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-gray-50">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Projects
                </h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/images/project1.jpg"
                            alt="Project 1"
                            className="w-full"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Project 1</h3>
                            <p>
                                A brief description of this project and its
                                purpose.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/images/project2.jpg"
                            alt="Project 2"
                            className="w-full"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Project 2</h3>
                            <p>
                                A brief description of this project and its
                                purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-16 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Contact Me
                </h2>
                <form className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block font-bold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-2 border rounded"
                            placeholder="Your Message"
                            rows={5}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-700 text-white p-3 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-800 text-white text-center">
                <p>
                    &copy; {new Date().getFullYear()} My Portfolio. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
}
