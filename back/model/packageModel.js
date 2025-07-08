import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String
    },
    destinations: {
        type: [String]
    },
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category"
    // },
    category:{
        type: String
    },
    images: {
        type: [String]
    }
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);