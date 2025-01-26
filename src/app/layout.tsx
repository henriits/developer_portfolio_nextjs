import type { Metadata } from "next";
import "../styles/globals.css";
import { fontClasses } from "@/utils/fonts";
import ClientLayout from "@/app/ClientLayout";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio application with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.8/src/app/ci.min.css"
                />
            </head>
            <body className={`bg-neutral-900 text-white ${fontClasses.body}`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
