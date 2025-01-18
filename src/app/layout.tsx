import type { Metadata } from "next";
import "../styles/globals.css";

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Gasoek+One&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-neutral-900 text-white">
                {/* Only the client layout will use SessionProvider */}
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
