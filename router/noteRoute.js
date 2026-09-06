const express =require("express")

const{postNote,getNotes}=require("../controllers/noteController")
const router = express.Router()
router.post("/add",postNote);
router.get("/all",getNotes);
module.exports= {router};