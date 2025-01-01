// src/app/layout.tsx

import "../styles/globals.css";
import Head from "next/head";
import Navbar from "@/app/home/NavBar";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio application with Next.js",
};

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
                <main>{children}</main>
            </body>
        </html>
    );
}
