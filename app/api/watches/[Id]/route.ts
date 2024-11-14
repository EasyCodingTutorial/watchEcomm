// For Connection
import ConnectToDb from "@/utils/connectToDb";

// For Schema
import watchSchemaFinal from "@/Schema/watchSchema";

import { NextResponse } from "next/server";


//  API REQ TO GET SPECIFIC WATCH DATA

export async function GET(req: Request, { params }: { params: { Id: string } }) {
    try {

        await ConnectToDb()
        const WatchSpecificData = await watchSchemaFinal.findById(params.Id);

        return NextResponse.json({
            WatchSpecificData
        }, { status: 200 })


    } catch (error) {
        const errorASError = error as Error;
        console.log("An Error Occured on Server", errorASError)
        return NextResponse.json({
            message: "Something Went Wrong", error: errorASError.message
        }, { status: 501 })
    }
}



// For Deleting
export async function DELETE(req: Request,
    { params }: { params: { Id: string } }
) {
    try {
        await ConnectToDb();

        const watchId = params.Id
        if (!watchId) {
            return NextResponse.json({
                message: "Watch Id is Missing"
            }, { status: 400 })
        }

        const watchData = await watchSchemaFinal.findByIdAndDelete(watchId);
        if (!watchData) {
            return NextResponse.json({
                message: "Watch Not Found"
            }, { status: 404 })
        }
        return NextResponse.json({
            message: "Watch Deleted Successfully"
        }, { status: 200 })

    } catch (error) {
        const errorASError = error as Error;
        console.log("An Error Occured on Server", errorASError)
        return NextResponse.json({
            message: "Something Went Wrong", error: errorASError.message
        }, { status: 501 })
    }
}



// To Update Specific Rooms Data
export async function PUT(
    req: Request, { params }: { params: { Id: string } }
) {
    try {
        await ConnectToDb()
        const SpecificWatchData = await watchSchemaFinal.findByIdAndUpdate(params.Id, {
            ...await req.json()
        })

        if (SpecificWatchData) {
            return NextResponse.json({ message: "watch Data Updated", SpecificWatchData }, { status: 200 })
        } else {
            return NextResponse.json({
                message: "Not Able To Update Watch Data"
            }, {
                status: 501
            })
        }

    }
    catch (error) {
        const errorASError = error as Error;
        console.log("An Error Occured on Server", errorASError)
        return NextResponse.json({
            message: "Something Went Wrong", error: errorASError.message
        }, { status: 501 })
    }

}

