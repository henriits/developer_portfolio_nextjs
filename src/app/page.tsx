// src/app/page.tsx

import Link from "next/link"; // Import Link for navigation

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-indigo-600">
                    Welcome to My Portfolio
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Hi, I'm [Your Name], a passionate developer!
                </p>
            </header>

            <div className="mt-8">
                <Link
                    href="/projects"
                    className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                    View My Projects
                </Link>
            </div>
        </div>
    );
}
