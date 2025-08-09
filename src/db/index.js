import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => { //  async because db is in another continent
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! Db HOST : ${connectionInstance.connection.host}`);        
    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)  //  our app is running on a process and the 'process' is ref of that        
    }
}

export default connectDB