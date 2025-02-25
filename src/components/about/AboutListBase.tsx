"use client";
import { deleteAbout } from "@/actions/aboutActions";
import DeleteButton from "../ui/DeleteButton";
import UpdateAboutButton from "../admin/about/UpdateAboutButton";
import Slide from "../animations/Slide";
import { AboutListProps, AboutProps } from "../../types/portfolioTypes";

function AboutItem({
    about,
    isAdmin,
}: {
    about: AboutProps;
    isAdmin: boolean;
}) {
    return (
        <li key={about.id}>
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="mx-10" data-testid="about-content-item">
                    {isAdmin ? (
                        about.content
                    ) : (
                        <Slide delay={0.5}>{about.content}</Slide>
                    )}
                </div>
                {isAdmin && (
                    <AdminControls id={about.id} content={about.content} />
                )}
            </div>
        </li>
    );
}

function AdminControls({ id, content }: { id: string; content: string }) {
    return (
        <div
            className="pt-4 flex gap-x-4 items-center justify-center"
            data-testid="about-admin-controls"
        >
            <DeleteButton id={id} deleteAction={deleteAbout} label="Delete" />
            <UpdateAboutButton id={id} content={content} />
        </div>
    );
}

function AboutList({
    abouts,
    isAdmin,
}: {
    abouts: AboutProps[];
    isAdmin: boolean;
}) {
    return (
        <ul data-testid="about-content-list">
            {abouts.map((about) => (
                <AboutItem key={about.id} about={about} isAdmin={isAdmin} />
            ))}
        </ul>
    );
}

export default function AboutListBase({
    abouts,
    isAdmin = false,
}: AboutListProps) {
    return (
        <div data-testid="about-section">
            {abouts && abouts.length > 0 ? (
                <AboutList abouts={abouts} isAdmin={isAdmin} />
            ) : (
                <p
                    className="text-center text-gray-400"
                    data-testid="about-empty-message"
                >
                    No about entries found.
                </p>
            )}
        </div>
    );
}
