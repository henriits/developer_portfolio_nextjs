import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio application with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
