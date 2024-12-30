export type Project = {
    id: number;
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
};

export type ProjectFormProps = {
    project?: Project;
    onSave: (project: Project) => void;
};

export type ProjectListProps = {
    projects: Project[];
    onEdit: (project: Project) => void;
    onDelete: (id: number) => void; // Change to number
    editingProjectId?: number; // Change to number
};
