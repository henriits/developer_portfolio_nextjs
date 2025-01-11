// src/app/admin/components/LoginForm.tsx

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (res?.error) {
            alert("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                    required
                />
            </div>

            <button
                type="submit"
                className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
