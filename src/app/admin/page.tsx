"use client";

import { useState, useEffect } from "react";

import { signOut, useSession } from "next-auth/react";
import LoginForm from "../../components/auth/LoginForm";
import { addProject } from "@/actions/projectActions";

const AdminPage = () => {
    const { data: session, status } = useSession(); // Check session status

    // If no session exists, show login form
    if (!session) {
        return (
            <div className="container mx-auto p-6 ">
                <h1 className="text-3xl font-semibold text-center mb-6 p-12">
                    Please Sign In
                </h1>
                <LoginForm />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6  ">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Admin Panel
            </h1>
            <form
                action={addProject}
                className="flex flex-col gap-y-5 w-96 text-black"
            >
                <input type="text" name="title" placeholder="title" />
                <textarea name="description" rows={2} placeholder="content" />
                <input
                    type="text"
                    name="githubLink"
                    placeholder="github link"
                />
                <input type="text" name="liveLink" placeholder="live link" />
                <input type="text" name="imageUrl" placeholder="image url" />
                <input
                    type="text"
                    name="technologies"
                    placeholder="technologies"
                />
                <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                    Create
                </button>
            </form>

            <div>project list</div>

            {/* Sign Out Button */}
            <div className="mt-6">
                <button
                    onClick={() => signOut()}
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
