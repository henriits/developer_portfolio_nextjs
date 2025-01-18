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
            {session.user && <h1>Hello {session.user.name}</h1>}
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
                    <CustomButton text="Sign Out" href="/api/auth/signout" />
                </div>
            </div>
            <section id="update-about ">
                <h1 className="p-12 ">Update About Section</h1>
                <div className="border-b">
                    <AdminAboutPage />
                </div>
            </section>
            <section id="update-experience">
                <h1 className="p-12">Update Experience</h1>
                <div className="border-b">
                    <AdminExperiencePage />
                </div>
            </section>
            <section id="update-projects">
                <h1 className="p-12">Update Projects</h1>
                <AdminProjectPage />
            </section>
        </div>
    );
}
