import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import route from "./routes/userRoute.js";


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
app.use("/user",route)