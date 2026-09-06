const jwt= require("jsonwebtoken")
require("dotenv").config()
const authentication=(req,res,next)=>{
    const auth =req.headers.authorization;
    const token= auth.split(" ")[1];
    if (!token){
        res.status(401).json({
            message:"no token"
        });
    }
    const decoded=jwt.verify(token,process.env.prv);
    req.user=decoded
    next();
}
module.exports={authentication}