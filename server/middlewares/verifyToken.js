const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const bearerToken=req.headers.authorization;
    if(bearerToken===undefined){
        res.status(208).send({message:"Unauthorised req"});
    }else{
        const token=bearerToken.split(" ")[1]
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            res.locals.decode=decode
            next()
        }catch(err){
            res.send({message:err});
        }
    }
}
module.exports=verifyToken;