const express =require("express")

const{postNote}=require("../controllers/noteController")
const router = express.Router()
router.post("/add",postNote);
module.exports= {router};