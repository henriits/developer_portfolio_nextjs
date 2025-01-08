import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the NextAuth configuration
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const username = process.env.ADMIN_USERNAME;
                const password = process.env.ADMIN_PASSWORD;

                // Check if the provided credentials match
                if (
                    credentials?.username === username &&
                    credentials?.password === password
                ) {
                    // Return the user object with 'id' as a string
                    return { id: "1", name: "Admin" }; // Ensure 'id' is a string
                }
                return null; // Return null if authentication fails
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin", // Custom sign-in page
    },
    session: {
        strategy: "jwt", // Use JWT for session management
    },
    secret: process.env.NEXTAUTH_SECRET, // Add a secret for encryption
};
