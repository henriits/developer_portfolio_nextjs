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
        <>
            <h2 className="main-font text-5xl font-bold m-6 text-center">
                About <span className="text-[#13DF14]">Me</span>
            </h2>
            <ul>
                {abouts.map((about) => (
                    <li key={about.id}>
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <div className="mx-10 m-4">{about.content}</div>
                            {isAdmin && (
                                <div className="pt-4 flex gap-x-4 items-center justify-center">
                                    <DeleteButton
                                        id={about.id}
                                        deleteAction={deleteAbout}
                                        label="Delete About"
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
        </>
    );
}
