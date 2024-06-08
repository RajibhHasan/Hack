const express = require('express')
const userRouter=express.Router();

const{userLogin,identify,getIdentify}=require("../controller/userLogin.js")





userRouter.post("/login",userLogin)
userRouter.get("/login/identify",getIdentify)
userRouter.post("/login/identify",identify)

module.exports=userRouter;