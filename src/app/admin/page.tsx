// app/admin/page.tsx
"use client";

import { useState } from "react";

import ProjectForm from "@/components/ProjectForm";
import ProjectList from "@/components/ProjectList";

import { projects as initialProjects } from "@/data/projects"; // Simulated project data
import { Project } from "@/types/projectTypes";
import EditingIndicator from "@/components/EditingIndicator";

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

            <div className="flex gap-12">
                <div className="w-2/3">
                    <ProjectForm
                        project={editingProject}
                        onSave={editingProject ? editProject : addProject}
                    />
                </div>

                <div className="w-1/3">
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
