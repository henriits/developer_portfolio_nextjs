"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/projectTypes";
import ProjectForm from "@/components/ProjectForm";
import ProjectList from "@/components/ProjectList";
import EditingIndicator from "@/components/EditingIndicator";

const AdminPage = () => {
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    const [editingProject, setEditingProject] = useState<Project | undefined>(
        undefined
    );

    // Function to fetch projects from the API
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

    // Function to add a new project
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

    // Function to update an existing project
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

    // Function to delete a project
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

    // Function to cancel editing
    const cancelEdit = () => {
        setEditingProject(undefined); // Clear editing state
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>

            {/* Displaying which project is being edited */}
            {editingProject && <EditingIndicator project={editingProject} />}

            <div>
                <ProjectForm
                    project={editingProject}
                    onSave={editingProject ? updateProject : addProject}
                />
                {/* Show cancel button if we are editing a project */}
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
                    onDelete={deleteProject} // Pass delete function with id as number
                    editingProjectId={editingProject?.id ?? undefined} // Pass id as number
                />
            </div>
        </div>
    );
};

export default AdminPage;
