const express=require('express');
const seller=express();
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const verifyToken=require("../middlewares/verifyToken")
const { ObjectId } = require('mongodb');
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
            let token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"36000000"})
            res.status(200).send({message:"User Logined Successfully!",token:token,payload:userObj})
        }
        else{
            res.status(201).send({message:"Password is Incorrect"})
        }
    }
})
//post rent
seller.post('/postRent',verifyToken,async(req,res)=>{
    const housesCollection = req.app.get('houses');
    const sellerEmail = req.res.locals.decode.email;
    const sellerCollection = req.app.get('seller');
    const seller = await sellerCollection.findOne({ email: sellerEmail });
    if (!seller) {
        return res.status(404).send({ message: 'Seller not found' });
    }
    let houseObj = req.body;
    houseObj.email = seller.email; 
    houseObj.sellerId = seller._id;

    await housesCollection.insertOne(houseObj);
    res.status(200).send({ message:'House posted successfully!'});

})
//Posted houses
seller.get('/postedRent',verifyToken, async(req, res) => {
    const housesCollection = req.app.get('houses');
    const sellerEmail = req.res.locals.decode.email;
    const sellerCollection = req.app.get('seller');
    const seller = await sellerCollection.findOne({ email: sellerEmail });
    if (!seller) {
        return res.status(404).send({ message: 'Seller not found' });
    }
    const houses = await housesCollection.find({ email: seller.email }).toArray();
    res.status(200).send({message:"User Profile",payload:houses});
})

//delete rent
seller.delete('/deleteHouse/:id',verifyToken,async(req,res)=>{
    const housesCollection = req.app.get('houses');
    const sellerEmail = req.res.locals.decode.email;
    const sellerCollection = req.app.get('seller');
    const seller = await sellerCollection.findOne({ email: sellerEmail });
    if (!seller) {
        return res.status(404).send({ message: 'Seller not found' });
    }
    const houseId = req.params.id;
    await housesCollection.deleteOne({ _id:new ObjectId(houseId) });
    res.status(200).send({ message: 'House deleted successfully!' });
})

//profile
seller.get('/profile',verifyToken,async(req,res)=>{
    const seller=req.app.get("seller")
    const email=req.res.locals.decode.email;
    const user=await seller.findOne({email:email})
    res.status(200).send({message:"User Profile",payload:user})
})


module.exports=seller;