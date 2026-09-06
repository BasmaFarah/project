const user=require("../models/user")
const jwt =require("jsonwebtoken")
const bcr = require("bcrypt")
require("dotenv").config()
const login =async(req,res)=>{
    const e= req.body.email
    const p = req.body.password


    const result= await user.findOne({
        email: e
    })
    if(result){
        isvalid= await bcr.compare(p,result.password)
        const prv=process.env.prv
        if(isvalid){
        const paylod={
result
        }
        const token =jwt.sign(
            paylod,
            prv,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:"login successfully",
            token
        })}else{
           res.status(404).json({
            message:"faild"
        })  
        }
    }else{
        res.status(404).json({
            message:"faild"
        })
    }


}
const singup = async(req,res)=>{
    const {name,email,password}=req.body;
    console.log({name,email,password})
if(!name||!email||!password){
    res.status(400).send("data is required")
}
const newpass= await bcr.hash(password,10)
await user.create({name,email,password:newpass})
res.status(201).json("user is created")
};


module.exports={
    login,singup
}
