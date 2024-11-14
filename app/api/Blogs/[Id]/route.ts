// For Connection
import ConnectToDb from "@/utils/connectToDb";

// For Model/Schema
import BlogSchemaFinal from "@/Schema/blogsSchema";

import { NextResponse } from "next/server";





// to Get Specific Rooms Data
export async function GET(
    req: Request, { params }: { params: { Id: string } }
) {
    try {

        await ConnectToDb()
        const SpecificBlog = await BlogSchemaFinal.findById(params.Id)

        if (!SpecificBlog) {
            return NextResponse.json({ message: "Blog Not Found" }, { status: 404 })
        } else {
            return NextResponse.json({ SpecificBlog }, { status: 200 })
        }


    } catch (error) {
        return NextResponse.json({
            message: "Something Went Wrong", error
        }, {
            status: 501
        })
    }
}


// To Update Specific Rooms Data
export async function PUT(
    req: Request, { params }: { params: { Id: string } }
) {
    try {
        await ConnectToDb()
        const SpecificBlogData = await BlogSchemaFinal.findByIdAndUpdate(params.Id, {
            ...await req.json()
        })

        if (SpecificBlogData) {
            return NextResponse.json({ message: "Blog Updated", SpecificBlogData }, { status: 200 })
        } else {
            return NextResponse.json({
                message: "Not Able To Update Blog"
            }, {
                status: 501
            })
        }

    }
    catch (error) {
        return NextResponse.json({
            message: "Something Went Wrong", error
        }, {
            status: 501
        })

    }

}


// to Delete Specific Room
export async function DELETE(request: Request, { params }: { params: { Id: string } }) {
    try {
        await ConnectToDb();

        const blogId = params.Id;
        if (!blogId) {
            return NextResponse.json({ message: 'Blog Id is missing' }, { status: 400 });
        }

        const SpecificBlog = await BlogSchemaFinal.findByIdAndDelete(blogId);
        if (!SpecificBlog) {
            return NextResponse.json({ message: 'Blog Not Found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Blog Deleted' }, { status: 200 });
    }
    catch (error) {
        const errorAsError = error as Error;
        console.error("An error occurred:", errorAsError);
        return NextResponse.json({ message: 'Something Went Wrong', error: errorAsError.message }, { status: 501 });
    }
}