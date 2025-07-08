import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        // unique:true
    }
}, {collection:"User"})

export default mongoose.model("User",userSchema)