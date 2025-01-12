"use client";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "../../components/auth/LoginForm";
import AdminProjectPage from "@/components/admin/AdminProjectPage";
import CustomButton from "@/components/ui/CustomButton";

const AdminPage = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6 p-12">
                    Please Sign In
                </h1>
                <LoginForm />
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto p-16">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Admin Panel
                </h1>
                <div className="mt-6 pb-6">
                    {/* Flex container to hold buttons */}
                    <div className="flex flex-col md:flex-row gap-7 justify-center md:justify-evenly space-y-4 md:space-y-0">
                        {/* Button 1: Update Projects */}
                        <CustomButton
                            text="Update Projects"
                            href="#admin-project-page"
                            onClick={undefined}
                        />
                        {/* Button 2: Update About */}
                        <CustomButton
                            text="Update About"
                            onClick={() => alert("Update About")}
                            href="#update-about"
                        />
                        {/* Button 3: Update Experience */}
                        <CustomButton
                            text="Update Experience"
                            onClick={undefined}
                            href="#update-experience"
                        />
                        <CustomButton
                            text="Sign Out"
                            onClick={undefined}
                            href={undefined}
                        />
                    </div>
                </div>
                <section id="update-projects">
                    <h1 className="p-12">Update Projects</h1>
                    <AdminProjectPage />
                </section>
                <section id="update-about">
                    <h1 className="p-12">Update About Section</h1>
                    <div>About component goes here</div>
                </section>
                <section id="update-experience">
                    <h1 className="p-12">Update Experience</h1>
                    <div>Experience component goes here</div>
                </section>
            </div>
        </>
    );
};

export default AdminPage;
