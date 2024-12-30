// components/EditingIndicator.tsx
import { Project } from "@/types/projectTypes";

type EditingIndicatorProps = {
    project: Project;
};

const EditingIndicator = ({ project }: EditingIndicatorProps) => {
    return (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <h2 className="text-xl text-black font-semibold">
                Editing: {project.title}
            </h2>
            <p className="text-gray-700">
                You are currently editing the project.
            </p>
        </div>
    );
};

export default EditingIndicator;
