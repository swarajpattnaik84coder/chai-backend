import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


const connectDB = async ()=>{
    try{
        const connectionINSTANCE = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`)
        console.log(` MONGO db connected !!! DB hOST: ${connectionINSTANCE.connection.host}`)
    }
    catch(error){
        console.log("MONGODB connection ERROR",error);
        process.exit(1)
    }
}

export default connectDB;