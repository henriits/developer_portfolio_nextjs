"use client";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "../../components/auth/LoginForm";
import { addProject } from "@/actions/projectActions";
import useFetch from "@/hooks/useFetch";

type Project = {
    id: string;
    title: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
};

const AdminPage = () => {
    const { data: session, status } = useSession(); // Check session status
    const {
        data: projects,
        loading,
        error,
    } = useFetch<Project[]>("/api/projects");

    // If no session exists, show login form
    if (!session) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6 p-12">
                    Please Sign In
                </h1>
                <LoginForm />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>
            <form
                action={addProject}
                className="flex flex-col gap-y-5 w-96 text-black"
            >
                <input type="text" name="title" placeholder="title" />
                <textarea name="description" rows={2} placeholder="content" />
                <input
                    type="text"
                    name="githubLink"
                    placeholder="github link"
                />
                <input type="text" name="liveLink" placeholder="live link" />
                <input type="text" name="imageUrl" placeholder="image url" />
                <input
                    type="text"
                    name="technologies"
                    placeholder="technologies"
                />
                <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                    Create
                </button>
            </form>

            <div>
                {/* Loading State */}
                {loading && <p>Loading projects...</p>}

                {/* Error State */}
                {error && <p className="text-red-500">{error}</p>}

                {/* Projects List */}
                {!loading && !error && projects && (
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} className="py-2">
                                <h2 className="font-semibold">
                                    {project.title}
                                </h2>
                                <p>{project.description}</p>
                                <p className="text-sm text-gray-600">
                                    Technologies:{" "}
                                    {project.technologies.join(", ")}
                                </p>
                                <p className="text-sm text-gray-600">
                                    GitHub Link:{" "}
                                    {project.githubLink || "Not available"}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Live Link:{" "}
                                    {project.liveLink || "Not available"}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Sign Out Button */}
            <div className="mt-6">
                <button
                    onClick={() => signOut()}
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
