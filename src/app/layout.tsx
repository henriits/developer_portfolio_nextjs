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
            <body>
                {/* Only the client layout will use SessionProvider */}
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
