import { authOptions } from "@/app/utils/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
// The route handler for GET and POST
export { handler as GET, handler as POST };
