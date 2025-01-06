"use client";

import Navbar from "@/app/home/components/NavBar";
import { SessionProvider } from "next-auth/react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-neutral-900 text-white">
            <SessionProvider>
                <Navbar />
                {children}
            </SessionProvider>
        </div>
    );
};

export default ClientLayout;
