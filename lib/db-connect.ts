import mongoose from "mongoose";


type connectionObject = {
    isconnected?: number
}

const connection : connectionObject = {}

async function dbconnect(): Promise<void> {
    if (connection.isconnected) {
        console.log("Already connected")
        return
    }
    try {
        const db =await mongoose.connect( process.env.DB_URL|| "",{})
        connection.isconnected = db.connections[0].readyState
        console.log("Connected to DataBase");
        
    } catch (error) {
        console.log("Database connection Failed", error);
        process.exit(1)
    }
}   

export default dbconnect;