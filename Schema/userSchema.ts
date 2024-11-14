import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});


export default mongoose.models.User || mongoose.model<IUser>('User', userSchema)
