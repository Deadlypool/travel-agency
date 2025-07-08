import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);