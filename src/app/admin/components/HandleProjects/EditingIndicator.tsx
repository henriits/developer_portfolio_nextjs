// src/components/EditingIndicator.tsx

import { Project } from "@/types/projectTypes";

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

export default EditingIndicator;
