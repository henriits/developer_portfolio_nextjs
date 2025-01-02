// src/app/layout.tsx
"use client";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "@/app/home/NavBar";
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
                <SessionProvider>
                    <Navbar />
                    <main>{children}</main>
                </SessionProvider>
            </body>
        </html>
    );
}
