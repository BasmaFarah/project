const dns=require("dns")
dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);
const  mongoose  = require("mongoose");
require("dotenv").config()

const connectDB= async()=>{
try{
    await mongoose.connect(process.env.DBurl)
    console.log("connected")
}catch(err){
 console.log("fail", err)
}
}
module.exports = {connectDB};