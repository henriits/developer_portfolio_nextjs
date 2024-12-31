// src/app/admin/services/projectService.ts

import { Project } from "@/types/projectTypes";

// Fetch the list of projects
export const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
            throw new Error("Error fetching projects");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// Add a new project
export const addProject = async (project: Project): Promise<void> => {
    try {
        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        });

        if (!response.ok) {
            throw new Error("Error adding project");
        }
    } catch (error) {
        console.error("Error adding project:", error);
        throw error;
    }
};

// Update an existing project
export const updateProject = async (updatedProject: Project): Promise<void> => {
    try {
        const response = await fetch(`/api/projects/${updatedProject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProject),
        });

        if (!response.ok) {
            throw new Error("Error updating project");
        }
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
};

// Delete a project
export const deleteProject = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error deleting project");
        }
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
};
