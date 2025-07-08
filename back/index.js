import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import userRoute from "./routes/userRoute.js";
import packageRoute from "./routes/packageRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import notificationRoute from "./routes/notificationRoute.js";


const app = express();
app.use(bodyParser.json());
dotenv.config()

const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL

mongoose 
    .connect(MONGOURL)
    .then(()=>{
        console.log("DB Connected Succesfully")
        app.listen(PORT, ()=>{
            console.log(`Server is up and running on port ${PORT}`)
        })
    })
    .catch((error) => {console.log(error)})

app.use("/api", userRoute);
app.use("/api", packageRoute);
app.use("/api", bookingRoute);
app.use("/api", paymentRoute);
app.use("/api", reviewRoute);
app.use("/api", categoryRoute);
app.use("/api", notificationRoute);