// src/app/admin/components/SignOutButton.tsx

import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <div className="mt-6">
            <button
                onClick={() => signOut()}
                className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Sign Out
            </button>
        </div>
    );
};

export default SignOutButton;
