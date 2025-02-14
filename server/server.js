const express=require('express');
const cors = require('cors');
const app=express();
const mclient=require("mongodb").MongoClient
app.use(express.json());
app.use(cors(
    {
        origin:["http://localhost:3000","http://RentNest"],
        methods:["GET","POST","DELETE"],
        credentials:true
    }
));

mclient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(dbref=>{
    //get database obj
    let dbobj=dbref.db('rent')
    let seller=dbobj.collection("seller")
    let buyer=dbobj.collection("buyer")
    let houses = dbobj.collection('houses');

    app.set("seller",seller)
    app.set("buyer",buyer)
    app.set('houses', houses);

    console.log("succes")
})
.catch(err=>console.log("dberr",err))
// forwording routes
const buyer=require("./routes/buyerRoute")
app.use('/buyer',buyer)
const seller=require("./routes/sellerRoute")
app.use('/seller',seller)

app.listen(process.env.PORT,()=>{
    console.log("server started")
});