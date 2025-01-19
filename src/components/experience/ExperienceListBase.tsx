import { deleteExperience } from "@/actions/experienceActions";
import DeleteButton from "../ui/DeleteButton";
import UpdateExperienceButton from "../admin/experience/UpdateExperienceButton";

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    location: string | null;
    startDate: string | null;
    endDate: string | null;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
type ExperienceListBaseProps = {
    experiences: ExperienceItem[];
    isAdmin?: boolean;
};

export default function ExperienceListBase({
    experiences,
    isAdmin = false,
}: ExperienceListBaseProps) {
    return (
        <section id="experience" className="w-full text-center px-6 py-12">
            <h2 className="text-5xl main-font font-bold mb-6 text-center z-10">
                E<span className="text-[#13DF14]">xp</span>erience
            </h2>

            <div className="flex flex-col justify-center items-center p-2">
                <div className="overflow-hidden">
                    <ul>
                        {experiences.map((experience) => (
                            <li key={experience.id} className=" p-3">
                                <h3 className="text-xl font-bold">
                                    {experience.title}
                                </h3>
                                <p>{experience.company}</p>
                                <p>{experience.location}</p>
                                <p>
                                    <span>{experience.startDate}</span>
                                    <span> - </span>
                                    <span>{experience.endDate}</span>
                                </p>
                                <p>{experience.description}</p>
                                {isAdmin && (
                                    <div className="flex gap-x-4 items-center justify-center">
                                        <DeleteButton
                                            id={experience.id}
                                            deleteAction={deleteExperience}
                                            label="Delete Experience"
                                        />

                                        <UpdateExperienceButton
                                            id={experience.id}
                                            title={experience.title}
                                            company={experience.company}
                                            location={experience.location}
                                            startDate={experience.startDate}
                                            endDate={experience.endDate}
                                            description={experience.description}
                                        />
                                    </div>
                                )}
                                <br />
                                <span className="text-[#13DF14]">|</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
