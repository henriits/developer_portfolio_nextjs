import { deleteAbout } from "@/actions/aboutActions";
import DeleteButton from "../ui/DeleteButton";
import UpdateAboutButton from "../admin/about/UpdateAboutButton";

type AboutItem = {
    id: string;
    content: string;
};

type AboutListBaseProps = {
    abouts: AboutItem[];
    isAdmin?: boolean;
};

export default function AboutListBase({
    abouts,
    isAdmin = false,
}: AboutListBaseProps) {
    return (
        <div data-testid="about-section">
            <h2
                className="main-font text-5xl font-bold m-6 text-center"
                data-testid="about-title"
            >
                About <span className="text-[#13DF14]">Me</span>
            </h2>
            {abouts && abouts.length > 0 ? (
                <ul data-testid="about-content-list">
                    {abouts.map((about) => (
                        <li key={about.id}>
                            <div className="text-center max-w-3xl mx-auto space-y-4">
                                <div
                                    className="mx-10"
                                    data-testid="about-content-item"
                                >
                                    {about.content}
                                </div>
                                {isAdmin && (
                                    <div
                                        className="pt-4 flex gap-x-4 items-center justify-center"
                                        data-testid="about-admin-controls"
                                    >
                                        <DeleteButton
                                            id={about.id}
                                            deleteAction={deleteAbout}
                                            label="Delete"
                                        />

                                        <UpdateAboutButton
                                            id={about.id}
                                            content={about.content}
                                        />
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
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
