// For Connection
import ConnectToDb from "@/utils/connectToDb";

// For Schema
import userSchema from "@/Schema/userSchema";

// Next Auth
import { SessionStrategy, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


// For BcryptJS
import bcrypt from 'bcryptjs'



type CustomSessionStrategy = SessionStrategy | 'jwt';


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "crendentials",
            credentials: {},
            async authorize(crendentials) {
                const { email, password } = crendentials as { email: string, password: string }


                try {

                    await ConnectToDb()

                    // User Email Check
                    const userEmailCheck = await userSchema.findOne({ email });

                    if (!userEmailCheck) {
                        return null
                    }

                    // If The Email Found Then Check For The Password
                    const isPasswordCorrect = await bcrypt.compare(password, userEmailCheck.password);
                    if (!isPasswordCorrect) { return null }


                    // if Password and Email is Correct Then
                    return {
                        id: userEmailCheck._id,
                        email: userEmailCheck.email,
                        name: userEmailCheck.name,
                        isAdmin: userEmailCheck.isAdmin
                    }





                } catch (error) {
                    console.log("Auth Error", error)
                    return null
                }

            }

        })
    ],
    session: {
        strategy: 'jwt' as CustomSessionStrategy,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }) {
            session.user.isAdmin = token.isAdmin
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/Auth",
        signOut: '/',
        error: '/Auth/Error'
    }
}
