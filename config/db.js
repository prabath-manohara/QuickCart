import mongoose from "mongoose";

let cached = global.mongoose 

if(!cached) {
    cached = global.mongoose = {conn : null, promice :null}
}

async function connectDB() {
    if (cached.conn){
        return cached.conn
    }

    if(!cached.promice){
        const opts = {
            bufferCommands:false
        }

        cached.promice = mongoose.connect('${process.env.MONGODB_URI}/QuickCart',opts).then( mongoose =>{
        return mongoose
        })

    }

    cached.conn = await cached.promice
    return cached.conn
    
}

export default connectDB