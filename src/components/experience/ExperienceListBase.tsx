"use client";
import { deleteExperience } from "@/actions/experienceActions";
import DeleteButton from "../ui/DeleteButton";
import UpdateExperienceButton from "../admin/experience/UpdateExperienceButton";
import Slide from "../animations/Slide";
import {
    ExperienceListProps,
    ExperienceProps,
} from "../../types/portfolioTypes";

function ExperienceDetail({
    label,
    value,
}: {
    label: string;
    value: string | null | undefined;
}) {
    if (!value) return null;
    return (
        <div className="flex gap-x-2">
            <span className="text-gray-400 w-24">{label}:</span>
            <p>{value}</p>
        </div>
    );
}

function ExperiencePeriod({
    startDate,
    endDate,
}: {
    startDate?: string;
    endDate?: string;
}) {
    if (!startDate && !endDate) return null;
    return (
        <div className="flex gap-x-2">
            <span className="text-gray-400 w-24">Period:</span>
            <p>
                {startDate && <span>{startDate}</span>}
                {startDate && endDate && <span> - </span>}
                {endDate && <span>{endDate}</span>}
            </p>
        </div>
    );
}

function ExperienceContent({
    experience,
    isAdmin,
}: {
    experience: ExperienceProps;
    isAdmin: boolean;
}) {
    return (
        <div className="md:ml-44">
            <div className="flex flex-col text-left rounded-lg">
                <ExperienceDetail label="Title" value={experience.title} />
                <ExperienceDetail label="Company" value={experience.company} />
                <ExperienceDetail
                    label="Location"
                    value={experience.location}
                />
                <ExperiencePeriod
                    startDate={experience.startDate ?? undefined}
                    endDate={experience.endDate ?? undefined}
                />
                <ExperienceDetail
                    label="Description"
                    value={experience.description}
                />
            </div>
            {isAdmin && (
                <div className="flex gap-x-4 items-center justify-center mt-4">
                    <DeleteButton
                        id={experience.id}
                        deleteAction={deleteExperience}
                        label="Delete"
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
        </div>
    );
}

export default function ExperienceListBase({
    experiences,
    isAdmin = false,
}: ExperienceListProps) {
    return (
        <div className="flex justify-center w-full">
            <div className="max-w-3xl w-full px-4">
                {experiences && experiences.length > 0 ? (
                    <ul>
                        {experiences.map((experience) => (
                            <li key={experience.id}>
                                {isAdmin ? (
                                    <ExperienceContent
                                        experience={experience}
                                        isAdmin={isAdmin}
                                    />
                                ) : (
                                    <Slide delay={0.5}>
                                        <ExperienceContent
                                            experience={experience}
                                            isAdmin={isAdmin}
                                        />
                                        <span className="text-[#13DF14]">
                                            |
                                        </span>
                                    </Slide>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-400">
                        No experience entries found.
                    </p>
                )}
            </div>
        </div>
    );
}
