export type Project = {
    id: string;
    title: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
};
