"use client";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/NavBar";
import { SessionProvider } from "next-auth/react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-neutral-900 text-white">
            <SessionProvider>
                <Navbar />
                {children}
                <Footer />
            </SessionProvider>
        </div>
    );
};

export default ClientLayout;
