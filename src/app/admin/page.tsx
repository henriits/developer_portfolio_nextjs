import { getServerSession } from "next-auth";

import AdminProjectPage from "@/components/admin/projects/AdminProjectPage";
import AdminAboutPage from "@/components/admin/about/AdminAboutPage";
import AdminExperiencePage from "@/components/admin/experience/AdminExperiencePage";
import CustomButton from "@/components/ui/CustomButton";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/authOptions";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        // Redirect unauthorized users to the sign-in page
        redirect("/admin/login");
        return null; // Prevent further rendering
    }

    return (
        <div className="container mx-auto p-16">
            <AdminHeader />
            {session.user && (
                <h1 className="main-font text-2xl text-center">
                    Hello {session.user.name}
                </h1>
            )}
            <div className="mt-6 pb-6">
                {/* Flex container to hold buttons */}
                <div className="flex flex-col md:flex-row gap-7 justify-center md:justify-evenly space-y-4 md:space-y-0">
                    {/* Button 1: Update Projects */}
                    <CustomButton
                        text="Update Projects"
                        href="#update-projects"
                    />
                    {/* Button 2: Update About */}
                    <CustomButton text="Update About" href="#update-about" />
                    {/* Button 3: Update Experience */}
                    <CustomButton
                        text="Update Experience"
                        href="#update-experience"
                    />
                    <CustomButton
                        text="Sign Out"
                        href="/api/auth/signout"
                        className="hover:bg-red-500 text-white border-red-500"
                    />
                </div>
            </div>
            <div className="mt-24">
                <section id="update-about">
                    <AdminAboutPage />
                </section>
                <hr className="border-t border-white my-4" />
                <section id="update-experience">
                    <AdminExperiencePage />
                </section>
                <hr className="border-t border-white my-4" />
                <section id="update-projects">
                    <AdminProjectPage />
                </section>
            </div>
        </div>
    );
}
<hr className="border-t border-white my-4" />;
