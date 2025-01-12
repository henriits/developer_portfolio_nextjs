"use client";
import useFetch from "@/hooks/useFetch";
import { About } from "@prisma/client";

const AboutList = () => {
    const { data: about, loading, error } = useFetch<About[]>("/api/about");

    if (loading) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="border-s-orange-600">
            {error && (
                <p className="text-red-500">
                    "There was an error loading about data"
                </p>
            )}
            <section
                id="about"
                className=" w-full flex flex-col items-center justify-center  px-6 py-12"
            >
                <h2 className="text-3xl font-bold mb-6 text-center z-10">
                    About <span className="text-[#13DF14]">Me</span>
                </h2>
                <ul>
                    {about?.map((content) => (
                        <li key={content.id}>
                            <p className="text-center max-w-3xl mx-auto ">
                                {content.content}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};
export default AboutList;
