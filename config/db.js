import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };  // fix typo "promice" => "promise"
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {  // fix typo here too
    const opts = {
      bufferCommands: false,
    };

    // Use backticks ` ` for template literal, not quotes ' '
    cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/QuickCart`, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
