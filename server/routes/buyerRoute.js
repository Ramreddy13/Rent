const express=require('express');
const buyer=express();
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const verifyToken=require("../middlewares/verifyToken")
//register buyer
buyer.post('/register',async(req,res)=>{
    let userObj=req.body;
    const buyer=req.app.get("buyer");
    const user=await buyer.findOne({email:userObj.email})
    if(user===null){
        userObj.password=await bcrypt.hash(userObj.password,10);
        console.log(userObj);
       await buyer.insertOne(userObj);
       res.status(200).send({message:"User Registed Successfull!"});
    }
    else{
       res.status(201).send({message:"User Already Exist!"});
    }
})

//login buyer
buyer.post('/login',async(req,res)=>{
   let userObj=req.body;
   const buyer=req.app.get("buyer");
   const user=await buyer.findOne({email:userObj.email})
   if(user===null){
    res.status(201).send({message:"User is not Registered"})
   }else{
        let ispass=await bcrypt.compare(userObj.password,user.password)
       if(ispass){
        let token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"360000000"})
        res.status(200).send({message:"User Logined Successfully!",token:token,payload:user})
        }
        else{
            res.status(201).send({message:"Password is Incorrect"})
        }
   }
})

//profile
buyer.get('/profile',verifyToken,async(req,res)=>{
    const buyer=req.app.get("buyer")
    const email=req.res.locals.decode.email;
    const user=await buyer.findOne({email:email})
    res.status(200).send({message:"User Profile",payload:user})
})


module.exports=buyer;