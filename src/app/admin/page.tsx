"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/projectTypes";
import ProjectForm from "@/app/projects/components/ProjectForm";
import ProjectList from "@/app/projects/components/ProjectList";
import EditingIndicator from "@/components/EditingIndicator";
import { signIn, signOut, useSession } from "next-auth/react";

// Separate the login logic into a component to avoid conditionally calling hooks in the main component
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Use next-auth's `signIn` to authenticate
        const res = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        // Check if login is successful
        if (res?.error) {
            alert("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded"
                    required
                />
            </div>

            <button
                type="submit"
                className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign In
            </button>
        </form>
    );
};

const AdminPage = () => {
    const { data: session, status } = useSession(); // Check session status

    const [projectsList, setProjectsList] = useState<Project[]>([]);
    const [editingProject, setEditingProject] = useState<Project | undefined>(
        undefined
    );

    // Fetch the list of projects
    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/projects");
            const data = await response.json();
            setProjectsList(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        fetchProjects(); // Fetch projects when the component mounts
    }, []);

    // If session is loading, show loading state
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // If no session exists, show login form
    if (!session) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Please Sign In
                </h1>
                <LoginForm />
            </div>
        );
    }

    const addProject = async (project: Project) => {
        try {
            const response = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if (response.ok) {
                fetchProjects(); // Refresh the list after adding a project
            } else {
                console.error("Error adding project:", await response.json());
            }
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };

    const updateProject = async (updatedProject: Project) => {
        try {
            const response = await fetch(`/api/projects/${updatedProject.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProject),
            });

            if (response.ok) {
                fetchProjects(); // Refresh the list after updating a project
                setEditingProject(undefined); // Clear editing state
            } else {
                console.error("Error updating project:", await response.json());
            }
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const deleteProject = async (id: number) => {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchProjects(); // Refresh the list after deleting a project
            } else {
                console.error("Error deleting project:", await response.json());
            }
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const cancelEdit = () => {
        setEditingProject(undefined); // Clear editing state
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>

            {editingProject && <EditingIndicator project={editingProject} />}

            <div>
                <ProjectForm
                    project={editingProject}
                    onSave={editingProject ? updateProject : addProject}
                />
                {editingProject && (
                    <button
                        onClick={cancelEdit}
                        className="mt-4 w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Cancel Edit
                    </button>
                )}
            </div>

            <div>
                <ProjectList
                    projects={projectsList}
                    onEdit={setEditingProject}
                    onDelete={deleteProject}
                    editingProjectId={editingProject?.id ?? undefined}
                />
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
