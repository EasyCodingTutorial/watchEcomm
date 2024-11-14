// Connection 
import ConnectToDb from "@/utils/connectToDb";

// For Schema
import userSchema from "@/Schema/userSchema";

import { NextResponse } from "next/server";



// FOR GET REQ
export async function GET(req: Request) {
    try {

        // For Connection
        await ConnectToDb()
        const AllUsersData = await userSchema.find({})
        if (AllUsersData.length > 0) {
            return NextResponse.json({ AllUsersData }, { status: 200 })
        } else {
            return NextResponse.json({ message: "No Users Data Found" }, { status: 404 })
        }

    } catch (error) {
        return NextResponse.json({
            message: "Something Went Wrong", error
        }, { status: 500 })
    }
}