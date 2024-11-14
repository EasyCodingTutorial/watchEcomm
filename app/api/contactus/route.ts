// For Schema
import contactFormSchema from "@/Schema/contactSchema";

// For Connection
import ConnectToDb from "@/utils/connectToDb";

import { NextResponse } from "next/server";



// To POST Data
export async function POST(req: Request) {
    try {

        const { name, email, message } = await req.json()
        await ConnectToDb()

        const contactDataSave = await contactFormSchema.create({ name, email, message })



        if (contactDataSave) {
            return NextResponse.json({
                message: "Contact Form Data Saved"
            }, { status: 200 })
        } else {
            return NextResponse.json({
                message: "Something Went Wrong"
            }, { status: 500 })
        }


    } catch (error) {
        const errorAsError = error as Error;
        console.error("An error occurred:", errorAsError);
        return NextResponse.json({ message: 'Something Went Wrong', error: errorAsError.message }, { status: 501 });
    }
}
