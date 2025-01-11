"use client";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "../../components/auth/LoginForm";
import {
    addProject,
    updateProject,
    deleteProject,
} from "@/actions/projectActions";
import useFetch from "@/hooks/useFetch";
import { useState, useEffect } from "react";

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
    const { data: session } = useSession();
    const {
        data: projects,
        loading,
        error,
        refetch,
    } = useFetch<Project[]>("/api/projects");
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [hydrationComplete, setHydrationComplete] = useState(false);

    // Wait until hydration is complete
    useEffect(() => {
        setHydrationComplete(true);
    }, []);

    // Add or Update Project
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        try {
            if (selectedProject) {
                // Update project
                await updateProject(selectedProject.id, formData);
            } else {
                // Add new project
                await addProject(formData);
            }
            refetch(); // Trigger the refetch
            // Refetch projects and reset form
            (e.target as HTMLFormElement).reset();
            setSelectedProject(null);
        } catch (err) {
            console.error("Failed to save project", err);
        }
    };

    // Delete Project
    const handleDeleteProject = async (id: string) => {
        try {
            await deleteProject(id);
            // Refetch projects after add/update
            refetch(); // Trigger the refetch
        } catch (err) {
            console.error("Failed to delete project", err);
        }
    };

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

    // Render loading state while waiting for data
    if (!hydrationComplete || loading) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>

            {/* Add/Update Project Form */}
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-y-5 w-96 text-black mb-6"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={selectedProject?.title || ""}
                    required
                />
                <textarea
                    name="description"
                    rows={2}
                    placeholder="Description"
                    defaultValue={selectedProject?.description || ""}
                    required
                />
                <input
                    type="text"
                    name="githubLink"
                    placeholder="GitHub Link"
                    defaultValue={selectedProject?.githubLink || ""}
                />
                <input
                    type="text"
                    name="liveLink"
                    placeholder="Live Link"
                    defaultValue={selectedProject?.liveLink || ""}
                />
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    defaultValue={selectedProject?.imageUrl || ""}
                />
                <input
                    type="text"
                    name="technologies"
                    placeholder="Technologies (comma-separated)"
                    defaultValue={
                        selectedProject?.technologies.join(", ") || ""
                    }
                />
                <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                    {selectedProject ? "Update Project" : "Create Project"}
                </button>
                {selectedProject && (
                    <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="bg-gray-400 py-2 rounded-sm"
                    >
                        Cancel Update
                    </button>
                )}
            </form>

            <div>
                {/* Error State */}
                {error && <p className="text-red-500">{error}</p>}

                {/* Projects List */}
                {!loading && !error && projects && projects.length > 0 && (
                    <ul>
                        {projects.map((project) => (
                            <li
                                key={project.id}
                                className={`py-4 border-b ${
                                    selectedProject?.id === project.id
                                        ? "bg-gray-100"
                                        : ""
                                }`}
                            >
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
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }
                                        className="text-blue-500 hover:underline"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteProject(project.id)
                                        }
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
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
