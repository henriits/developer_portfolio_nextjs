// src/app/layout.tsx
"use client";

import "../styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Navbar />
                <main>
                    {" "}
                    <SessionProvider>{children}</SessionProvider>
                </main>
            </body>
        </html>
    );
}
