import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    _id:{type : stringify, required:true},
    name:{type : stringify, required:true},
    email:{type : stringify, required:true, unique:true},
    imageUrl:{type : stringify, required:true},
    cartItem:{type : object, default:{}},
},{minimize : false})

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User