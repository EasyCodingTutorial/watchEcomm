import mongoose from 'mongoose'

const ConnectToDb = async () => {

    try {

        // checking if the Database is Already Connected or Not
        if (mongoose.connection.readyState === 1) {
            console.log("Already Connected")
            return
        }

        // 
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("Connected")
            return
        } else {
            throw new Error("MONGODB_URI is not Defined")
        }


    }
    catch (error) {
        console.log(error)
    }

}
export default ConnectToDb