import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"


import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT||4000;
const URI="mongodb://localhost:27017/store";


//connect to mongDB
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    console.log("Connected to Mongo DB")
} catch(error){
    console.log("Error:",error)
}


//defining routes

app.use("/book",bookRoute);

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
});