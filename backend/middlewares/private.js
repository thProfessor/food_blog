const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
module.exports = (req,res,next) => {

    const {authorization} = req.headers;

    if(!authorization){
        return res.json({err:"only logged in people can access this page"});
    }

    const token = authorization.replace("Bearer ","");
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            return res.json({err:"token not valid login again"})
        }

        const {id} = payload;
        User.findById(id)
        .then((user)=>{
            req.user = user;
            next();
        })
    })
}