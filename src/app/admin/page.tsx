"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/projectTypes";
import ProjectForm from "@/app/admin/components/HandleProjects/ProjectForm";
import ProjectList from "@/app/admin/components/HandleProjects/ProjectList";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "./components/LoginForm";
import {
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
} from "@/app/admin/services/projectService";

interface EditingIndicatorProps {
    project: Project;
}

const EditingIndicator = ({ project }: EditingIndicatorProps) => {
    return (
        <div className="mb-4 p-4 border rounded bg-yellow-100 text-yellow-800">
            Editing project: <strong>{project.title}</strong>
        </div>
    );
};

const AdminPage = () => {
    const { data: session, status } = useSession(); // Check session status

    const [projectsList, setProjectsList] = useState<Project[]>([]);
    const [editingProject, setEditingProject] = useState<Project | undefined>(
        undefined
    );

    // Fetch the list of projects
    const loadProjects = async () => {
        try {
            const projects = await fetchProjects();
            setProjectsList(projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        loadProjects(); // Fetch projects when the component mounts
    }, []);

    // If session is loading, show loading state
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // If no session exists, show login form
    if (!session) {
        return (
            <div className="container mx-auto p-6 ">
                <h1 className="text-3xl font-semibold text-center mb-6 p-12">
                    Please Sign In
                </h1>
                <LoginForm />
            </div>
        );
    }

    const handleAddProject = async (project: Project) => {
        try {
            await addProject(project);
            loadProjects(); // Refresh the list after adding a project
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };

    const handleUpdateProject = async (updatedProject: Project) => {
        try {
            await updateProject(updatedProject);
            loadProjects(); // Refresh the list after updating a project
            setEditingProject(undefined); // Clear editing state
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const handleDeleteProject = async (id: number) => {
        try {
            await deleteProject(id);
            loadProjects(); // Refresh the list after deleting a project
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const cancelEdit = () => {
        setEditingProject(undefined); // Clear editing state
    };

    return (
        <div className="container mx-auto p-6  ">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>

            {editingProject && <EditingIndicator project={editingProject} />}

            <ProjectForm
                key={editingProject?.id || "new"}
                project={editingProject}
                onSave={editingProject ? handleUpdateProject : handleAddProject}
            />
            {editingProject && (
                <button
                    onClick={cancelEdit}
                    className="mt-4 w-full p-2 bg-gray-500  rounded hover:bg-gray-600"
                >
                    Cancel Edit
                </button>
            )}

            <div>
                <ProjectList
                    projects={projectsList}
                    onEdit={setEditingProject}
                    onDelete={handleDeleteProject}
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
