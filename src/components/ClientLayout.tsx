"use client";

import Navbar from "@/app/home/components/NavBar";
import { SessionProvider } from "next-auth/react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <Navbar />
            {children}
        </SessionProvider>
    );
};

export default ClientLayout;
