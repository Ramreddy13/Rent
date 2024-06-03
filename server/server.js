const express=require('express');
const cors = require('cors');
const app=express();
const port=5000;
const mclient=require("mongodb").MongoClient
app.use(express.json());
app.use(cors());

mclient.connect('mongodb://127.0.0.1:27017/27017')
.then(dbref=>{
    //get database obj
    let dbobj=dbref.db('rent')
    let seller=dbobj.collection("seller")
    let buyer=dbobj.collection("buyer")
    app.set("seller",seller)
    app.set("buyer",buyer)
    console.log("succes")
})
.catch(err=>console.log("dberr",err))
// forwording routes
const buyer=require("./routes/buyerRoute")
app.use('/buyer',buyer)
const seller=require("./routes/sellerRoute")
app.use('/seller',seller)

app.listen(port);