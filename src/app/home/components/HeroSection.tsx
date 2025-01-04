import Link from "next/link";

const HeroSection = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
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
);

export default HeroSection;
