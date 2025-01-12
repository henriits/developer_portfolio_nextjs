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
import ProjectForm from "../../components/admin/AdminProjectForm";
import ProjectList from "../../components/admin/AdminProjectList";
import { Project } from "@/types";

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

    useEffect(() => {
        setHydrationComplete(true);
    }, []);

    const handleFormSubmit = async (formData: FormData) => {
        try {
            if (selectedProject) {
                await updateProject(selectedProject.id, formData);
            } else {
                await addProject(formData);
            }
            refetch();
            setSelectedProject(null);
        } catch (err) {
            console.error("Failed to save project", err);
        }
    };

    const handleDeleteProject = async (id: string) => {
        try {
            await deleteProject(id);
            refetch();
        } catch (err) {
            console.error("Failed to delete project", err);
        }
    };

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
            <ProjectForm
                selectedProject={selectedProject}
                onSubmit={handleFormSubmit}
                onCancel={() => setSelectedProject(null)}
            />
            {error && <p className="text-red-500">{error}</p>}
            {projects && (
                <ProjectList
                    projects={projects}
                    selectedProject={selectedProject}
                    onEdit={setSelectedProject}
                    onDelete={handleDeleteProject}
                />
            )}
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
