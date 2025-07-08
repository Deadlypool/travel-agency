import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    method: {
        type: String,
        enum: ["credit card", "UPI", "paypal"],
        required: true
    },
    status: {
        type: String,
        enum: ["paid", "failed", "refunded"],
        default: "paid"
    }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);