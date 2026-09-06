const note=require("../models/note")
const postNote = async(req,res)=>{
    const {content,title}=req.body;
    console.log({content,title})
if(!content||!title){
    res.status(400).send("data is required")
}else{
    console.log(req.user)
    await note.create({content,title,user:req.user.result._id})
}

res.status(201).json("note posted!")
};
module.exports={postNote}
