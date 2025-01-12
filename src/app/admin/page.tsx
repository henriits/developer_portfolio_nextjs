"use client";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "../../components/auth/LoginForm";
import AdminProjectPage from "@/components/admin/Project/AdminProjectPage";
import CustomButton from "@/components/ui/CustomButton";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const { data: session, status } = useSession();
    const [isSessionLoaded, setIsSessionLoaded] = useState(false);

    // Use useEffect to wait until session data is available
    useEffect(() => {
        if (status !== "loading") {
            setIsSessionLoaded(true);
        }
    }, [status]);

    // If session data is still loading or not available, render loading state
    if (!isSessionLoaded) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6 p-12">
                    Loading...
                </h1>
            </div>
        );
    }

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
                            href="#update-projects"
                            onClick={undefined}
                        />
                        {/* Button 2: Update About */}
                        <CustomButton
                            text="Update About"
                            onClick={undefined}
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
                            onClick={() => signOut()}
                            href={undefined}
                        />
                    </div>
                </div>
                <section id="update-about ">
                    <h1 className="p-12 ">Update About Section</h1>
                    <div className="border-b">About component goes here</div>
                </section>
                <section id="update-experience">
                    <h1 className="p-12">Update Experience</h1>
                    <div className="border-b">
                        Experience component goes here
                    </div>
                </section>
                <section id="update-projects " className="border-b">
                    <h1 className="p-12">Update Projects</h1>
                    <AdminProjectPage />
                </section>
            </div>
        </>
    );
};

export default AdminPage;
