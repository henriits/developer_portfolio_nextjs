export type Project = {
    id: string;
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
    onDelete: (id: string) => void;
    editingProjectId?: string;
};
