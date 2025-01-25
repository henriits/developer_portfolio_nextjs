export type AboutProps = {
    id: string;
    content: string;
};

export type AboutListProps = {
    abouts: AboutProps[];
    isAdmin?: boolean;
};

export type ExperienceProps = {
    id: string;
    title: string;
    company: string;
    location: string | null;
    startDate: string | null;
    endDate: string | null;
    description: string;
};

export type ExperienceListProps = {
    experiences: ExperienceProps[];
    isAdmin?: boolean;
};

export type ProjectProps = {
    id: string;
    title: string;
    slug: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
};

export type ProjectListProps = {
    projects: ProjectProps[];
    isAdmin?: boolean;
    limit?: number;
};
