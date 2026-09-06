const express = require("express");
const cors = require("cors"); // in order to use the frontend
const { connectDB } = require("./connect");
const userRouter= require("./router/userRoute")
const noteRouter= require("./router/noteRoute")
const app = express();
const auth = require("./auth/authentication")
require("dotenv").config()
app.use(cors());
app.use(express.json());
connectDB();
app.use("/user",userRouter.router)
app.use(auth.authentication)
app.use("/note",noteRouter.router)

app.use((req,res)=>{
    res.status(404).send("the request is not found!")
});
app.listen(process.env.port,async ()=>{
    console.log("server created successfully")
})