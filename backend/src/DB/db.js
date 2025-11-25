import mongoose from 'mongoose'

export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/tasksdb')
        console.log("db got connected")
    } catch (err) {
        console.log("error connecting db:", err)
    }
}