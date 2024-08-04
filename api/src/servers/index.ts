import { Server } from "http";
import connectDB from "../configs/db.config";
import { Host, Port } from "../constants/env.const";
import app from "./app";

const server:Server = app.listen(Port,Host,async()=>await connectDB());

server.on('listening',()=>console.log(`Server connection successful`));
server.on('error',(err:any)=> {
    throw new Error(`Server connection failed ${err.name} with ${err.message}`)
});