import mongoose, { Schema } from 'mongoose'

const WatchSchema = new Schema(
    {
        watchName: {
            type: String,
            required: true,
        },
        watchModelNumber: {
            type: String,
            required: true,
        },
        watchDesc: {
            type: String,
            required: true, // Optional, change as per requirement
        },
        watchPrice: {
            type: Number,
            required: true,
        },
        watchDiscount: {
            type: Number,
            required: true, // Optional, change as per requirement
        },
        // watchStoke: {
        //     type: String,
        //     required: true,
        // },
        watchSKU: {
            type: String,
            required: true,
        },
        watchImgUrl: {
            type: String,
            required: true, // Optional, change as per requirement
        },
        genderValue: {
            type: String,

            required: true,
        },
        watchTypeValue: {
            type: String,

            required: true,
        },
        watchCaseMaterial: {
            type: String,
            required: true,
        },
        watchBrandMaterial: {
            type: String,
            required: true,
        },
        watchDialColor: {
            type: String,
            required: true,
        },
        watchCaseDiameter: {
            type: Number,
            required: true,
        },
        watchWarrantyPeriod: {
            type: String, // You can change this to Number if you want it in months/years
            required: true,
        },
        watchSeoTitle: {
            type: String,
            required: false, // Optional, change as per requirement
        },
        watchSeoDesc: {
            type: String,
            required: false, // Optional, change as per requirement
        },
    }, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
}
)



const watchSchemaFinal = mongoose.models.Watch || mongoose.model("Watch", WatchSchema)

export default watchSchemaFinal

