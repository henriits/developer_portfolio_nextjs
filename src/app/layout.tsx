// src/app/layout.tsx

import { Metadata } from "next";
import "../styles/globals.css";
import Head from "next/head";

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
                <link rel="icon" href="favicon.ico" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
