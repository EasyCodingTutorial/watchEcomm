// For Connection
import ConnectToDb from "@/utils/connectToDb";

// For Schema
import watchSchemaFinal from "@/Schema/watchSchema";

import { NextResponse } from "next/server";


// For Getting All The Watches Data
export async function GET(req: Request) {
    try {

        await ConnectToDb()
        const AllWatchesData = await watchSchemaFinal.find({})

        if (AllWatchesData) {
            return NextResponse.json({ AllWatchesData })
        } else {
            return NextResponse.json({
                message: "ERROR ON SERVER, While Fetching Data"
            }, { status: 501 })

        }


    } catch (error) {
        return NextResponse.json({
            message: "ERROR ON SERVER, While Fetching Data", error
        }, { status: 501 })
    }
}


//  For Addding/Saving New Watch
export async function POST(req: Request) {
    try {
        const {
            watchName,
            watchModelNumber,
            watchDesc,
            watchPrice,
            watchDiscount,
            watchSKU,
            watchImgUrl,
            genderValue,
            watchTypeValue,
            watchCaseMaterial,
            watchBrandMaterial,
            watchDialColor,
            watchCaseDiameter,
            watchWarrantyPeriod,
            watchSeoTitle,
            watchSeoDesc
        } = await req.json();
        await ConnectToDb();
        const newWatch = await watchSchemaFinal.create({
            watchName,
            watchModelNumber,
            watchDesc,
            watchPrice,
            watchDiscount,
            // watchStoke,
            watchSKU,
            watchImgUrl,
            genderValue,
            watchTypeValue,
            watchCaseMaterial,
            watchBrandMaterial,
            watchDialColor,
            watchCaseDiameter,
            watchWarrantyPeriod,
            watchSeoTitle,
            watchSeoDesc
        });

        if (newWatch) {
            return NextResponse.json({
                message: "New Watch Saved Successfully",
                watch: newWatch
            }, { status: 201 });
        } else {
            return NextResponse.json({
                message: "Failed to Save New Watch"
            }, { status: 500 });
        }


    } catch (error) {
        return NextResponse.json({
            message: "ERROR ON SERVER, While Saving Data", error
        }, { status: 501 })
    }
}

