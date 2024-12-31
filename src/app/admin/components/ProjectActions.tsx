type ProjectActionsProps = {
    onEdit: () => void;
    onDelete: () => void;
};

const ProjectActions = ({ onEdit, onDelete }: ProjectActionsProps) => {
    return (
        <div className="mt-4 flex justify-between items-center">
            <button
                onClick={onEdit}
                className="text-blue-500 hover:text-blue-600"
            >
                Edit
            </button>
            <button
                onClick={onDelete}
                className="text-red-500 hover:text-red-600 ml-4"
            >
                Delete
            </button>
        </div>
    );
};

export default ProjectActions;
