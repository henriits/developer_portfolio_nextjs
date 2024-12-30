// app/admin/page.tsx
"use client";

import { useState } from "react";
import { Project } from "@/types/projectTypes";
import ProjectForm from "@/components/ProjectForm";
import ProjectList from "@/components/ProjectList";
import EditingIndicator from "@/components/EditingIndicator";
import { projects as initialProjects } from "@/data/projects"; // Simulated project data

const AdminPage = () => {
    const [projectsList, setProjectsList] =
        useState<Project[]>(initialProjects);
    const [editingProject, setEditingProject] = useState<Project | undefined>(
        undefined
    );

    // Function to add a new project
    const addProject = (project: Project) => {
        const nextId = (projectsList.length + 1).toString();
        const newProject = { ...project, id: nextId };
        setProjectsList((prevProjects) => [...prevProjects, newProject]);
    };

    // Function to edit an existing project
    const editProject = (updatedProject: Project) => {
        setProjectsList((prevProjects) =>
            prevProjects.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )
        );
        setEditingProject(undefined); // Reset editing state
    };

    // Function to cancel editing and reset the form
    const cancelEdit = () => {
        setEditingProject(undefined); // Clear the editing state
    };

    // Function to delete a project
    const deleteProject = (id: string) => {
        setProjectsList((prevProjects) =>
            prevProjects.filter((project) => project.id !== id)
        );
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>

            {/* Displaying which project is being edited */}
            {editingProject && <EditingIndicator project={editingProject} />}

            <div>
                <div>
                    <ProjectForm
                        project={editingProject}
                        onSave={editingProject ? editProject : addProject}
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
                        onDelete={deleteProject}
                        editingProjectId={editingProject?.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
