// src/app/page.tsx

import Link from "next/link";

export default function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="mb-4">
                This is my portfolio site. Here you can view my projects and
                more.
            </p>
            <Link href="/projects">
                <button className="bg-blue-500 text-white p-2 rounded">
                    View Projects
                </button>
            </Link>
            <div className="mt-6">
                <Link href="/admin">
                    <button className="bg-green-500 text-white p-2 rounded">
                        Go to Admin Panel
                    </button>
                </Link>
            </div>
        </div>
    );
}
