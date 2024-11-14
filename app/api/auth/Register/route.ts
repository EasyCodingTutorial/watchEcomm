// For Connection
import ConnectToDb from "@/utils/connectToDb";

// For BcryptJS
import bcrypt from 'bcryptjs'

// For Schema
import userSchema from "@/Schema/userSchema";


import { NextResponse } from "next/server";


// 
export async function POST(req: Request) {

    try {
        await ConnectToDb()


        const { name, email, password, isAdmin } = await req.json()

        // Lets Encrypt The Password
        const hashedPass = await bcrypt.hash(password, 12)


        const NewUser = await userSchema.create({ name, email, password: hashedPass, isAdmin })

        if (NewUser) {
            return NextResponse.json({
                success: true,
            })
        } else {
            return NextResponse.json({
                success: false,
            })
        }

    }
    catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }

}

