import NextAuth from "next-auth";

// For Auth Options
import { authOptions } from "@/utils/authOptions";


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
