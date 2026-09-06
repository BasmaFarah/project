const express =require("express")

const{login,singup}=require("../controllers/userController")
const router = express.Router()
router.post("/login",login)
router.post("/signup",singup)
module.exports= {router};