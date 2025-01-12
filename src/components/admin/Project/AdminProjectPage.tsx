import {
    addProject,
    updateProject,
    deleteProject,
} from "@/actions/projectActions";
import useFetch from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import ProjectForm from "./AdminProjectForm";
import ProjectList from "./AdminProjectList";
import { Project } from "@prisma/client";
const AdminProjectPage = () => {
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
        <div>
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
        </div>
    );
};
export default AdminProjectPage;
