import mongoose, { Schema } from 'mongoose'


const contactForm = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    }, {
    timestamps: true,
}
)

const contactFormSchema = mongoose.models.contactFormData || mongoose.model("contactFormData", contactForm)
export default contactFormSchema
