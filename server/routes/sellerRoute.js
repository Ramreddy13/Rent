const express=require('express');
const seller=express();
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
//register seller
seller.post('/register',async(req,res)=>{
     let userObj=req.body;
     const seller=req.app.get("seller");
     const user=await seller.findOne({email:userObj.email})
     if(user===null){
        userObj.password=await bcrypt.hash(userObj.password,10)
        await seller.insertOne(userObj);
        res.status(200).send({message:"User Registed Successfull!"});
     }
     else{
        res.status(201).send({message:"User Already Exist!"});
     }
})

//login seller
seller.post('/login',async(req,res)=>{
    let userObj=req.body;
    const seller=req.app.get("seller");
    const user=await seller.findOne({email:userObj.email})
    if(user===null){
        res.status(201).send({message:"User is not Registered"})
    }
    else{
        let ispass=await bcrypt.compare(userObj.password,user.password);
        if(ispass){
            let token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"3600"})
            res.status(200).send({message:"User Logined Successfully!",token:token,payload:userObj})
        }
        else{
            res.status(201).send({message:"Password is Incorrect"})
        }
    }
})


module.exports=seller;