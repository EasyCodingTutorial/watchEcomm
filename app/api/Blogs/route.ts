// Connection 
import ConnectToDb from "@/utils/connectToDb";

// For Schema
import BlogSchemaFinal from "@/Schema/blogsSchema";

import { NextResponse } from "next/server";





// FOR GET REQ
export async function GET(req: Request) {
    try {

        // For Connection
        await ConnectToDb()
        const AllBlogsData = await BlogSchemaFinal.find({})
        if (AllBlogsData.length > 0) {
            return NextResponse.json({ AllBlogsData }, { status: 200 })
        } else {
            return NextResponse.json({ message: "No Blogs Data Found" }, { status: 404 })
        }

    } catch (error) {
        return NextResponse.json({
            message: "Something Went Wrong", error
        }, { status: 500 })
    }
}

// For POST REQ
export async function POST(req: Request) {
    try {

        const { blogTitle, introduction, description, imageUpload } = await req.json()
        await ConnectToDb()
        const NewBlog = await BlogSchemaFinal.create({ blogTitle, introduction, description, imageUpload })

        if (NewBlog) {
            return NextResponse.json({ message: "Blog Added Successfully" }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
        }


    } catch (error) {
        return NextResponse.json({
            message: "Something Went Wrong", error
        }, { status: 500 })
    }
}


