import { connect } from "mongoose";
import { db_App_Name, db_Name, db_Url } from "../constants/env.const";

const connectDB = async() => {
    try {
        await connect(db_Url,{
            appName: db_App_Name,
            dbName: db_Name,
        })
        console.log('Database connection successful');
    } catch (err:any) {
        throw new Error(`Database connection error ${err.name} with ${err.message}`);
    }
}

export default connectDB;