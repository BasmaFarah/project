const express =require("express")
const {authentication}=require("../auth/authentication")
const{postNote,getNotes}=require("../controllers/noteController");
const { authentication } = require("../auth/authentication");
const router = express.Router()
router.post("/add",postNote);
router.get("/all",authentication,getNotes);
module.exports= {router};