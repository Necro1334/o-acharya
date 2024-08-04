import { config } from 'dotenv';

config( { path: './src/envs/.env' } );

const Node_Dev:string  = process.env.NODE_DEV || 'development';

const Port:number = parseInt(process.env.PORT || '3050');
const Host:string = process.env.HOST || 'localhost';

const db_Name:string = process.env.DB_NAME || 'o-acharya';
const db_App_Name:string = process.env.DB_APP_NAME || 'o-acharya';
const db_Url:string = process.env.DB_URL  || 'mongodb+srv://localhost:27017';

export {
    Node_Dev,
    Port,
    Host,
    db_Name,
    db_App_Name,
    db_Url,
};